import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../model/product";

const ProductList: React.FC<{ productsList: Product[] }> = ({
  productsList,
}) => {
  const [products, setProducts] = useState(productsList.slice(0, 10)); // Initial 10 products
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    // Load more products when scrolling down
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        const startIndex = currentPage * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const newProducts = productsList.slice(startIndex, endIndex);

        if (newProducts.length > 0) {
          setProducts([...products, ...newProducts]);
          setCurrentPage(currentPage + 1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, productsList]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

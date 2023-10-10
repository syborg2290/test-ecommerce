import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import productsData from "./data/products.json";
import { Product } from "./model/product";

function App() {
  const [products] = useState<Product[]>(productsData);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleFilterChange = (filter: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(filtered);
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category: string) => {
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="App">
      <Header
        onFilterChange={handleFilterChange}
        onCategoryChange={handleCategoryChange}
      />
      <main className="container mx-auto mt-4">
        <ProductList productsList={filteredProducts} />
      </main>
    </div>
  );
}

export default App;

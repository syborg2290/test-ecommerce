import React, { useState } from "react";
import ProductDetailsModal from "./ProductDetailsModal";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, image } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {};

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        onClick={openModal}
      >
        <img
          src={`${process.env.PUBLIC_URL}${image}`}
          alt={name}
          className="w-full h-40 object-cover"
        />
        <div className="px-4 py-2">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">${price.toFixed(2)}</p>

          <button
            onClick={handleAddToCart}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ProductDetailsModal product={product} onClose={closeModal} />
      )}
    </>
  );
};

export default ProductCard;

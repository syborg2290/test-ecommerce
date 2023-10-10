import React from "react";

interface ProductDetailsModalProps {
  product: {
    name: string;
    image: string;
    price: number;
  };
  onClose: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
}) => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg p-6 max-w-md">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-lg"
        />
        <p className="text-gray-700 mt-4">Description</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-800 font-semibold">${product.price}</span>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
            onClick={onClose}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;

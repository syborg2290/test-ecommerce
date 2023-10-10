import React, { useState } from "react";

interface HeaderProps {
  onFilterChange: (filter: string) => void;
  onCategoryChange: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  onFilterChange,
  onCategoryChange,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onFilterChange(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    onCategoryChange(event.target.value);
  };

  return (
    <header className="bg-blue-500 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Shyama Styles</h1>
        <div className="space-x-4 flex items-center">
          <input
            type="text"
            placeholder="Search by Name"
            className="px-3 py-2 text-black rounded-full border border-gray-300 focus:outline-none focus:border-blue-700"
            value={searchTerm}
            onChange={handleFilterChange}
          />
          <select
            className="px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-700 text-black"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="Gents">Gents</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Toys">Toys</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

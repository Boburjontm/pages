import React, { useState, useEffect } from 'react';
import productData from '../db/Blog.json'; // Adjust the path if necessary

const PRODUCTS_PER_PAGE = 8;

const Aksii = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setProducts(productData);
  }, []);

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Акции</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <img src={product.image} alt={product.name} className="mb-4"/>
            <div className="text-lg font-semibold">{product.name}</div>
            <div className="text-xl font-bold text-green-500">{product.price}</div>
            <div className="text-sm text-gray-500">{product.text}</div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Добавить в корзину</button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <nav>
          <ul className="flex space-x-1">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  className={`px-3 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border'}`}
                  onClick={() => handleClick(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Aksii;

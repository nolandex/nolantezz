import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);

  return (
    <article className="relative bg-gray-50 rounded-2xl p-4 shadow-[0_10px_15px_rgba(0,0,0,0.1)]">
      <button 
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite ? <FaHeart className="text-lg text-red-600" /> : <FaRegHeart className="text-lg" />}
      </button>
      <img 
        alt={product.name} 
        className="w-full h-20 object-contain mb-3 drop-shadow-[0_10px_6px_rgba(0,0,0,0.1)]" 
        src={product.image} 
      />
      <h3 className="font-semibold text-gray-900 text-sm mb-1">
        {product.name}
      </h3>
      <div className="flex items-center justify-between text-xs font-semibold text-gray-900">
        <span>${product.price}</span>
        <span className="flex items-center space-x-1 text-yellow-400">
          <FaStar className="text-xs" />
          <span>{product.rating}</span>
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
import React from 'react';
import TopBar from '../components/TopBar';
import DiscountBanner from '../components/DiscountBanner';
import ProductCard from '../components/ProductCard';
import { FaShoePrints } from 'react-icons/fa';

const Home = ({ showMenu, setShowMenu }) => {
  const products = [
    {
      id: 1,
      name: 'Nike Shoe',
      price: 85,
      rating: 4.8,
      image: 'https://storage.googleapis.com/a1aa/image/00fce090-cd5e-48dc-aadc-ba945fd41746.jpg',
      isFavorite: false
    },
    {
      id: 2,
      name: 'Sneakers ft',
      price: 85,
      rating: 4.8,
      image: 'https://storage.googleapis.com/a1aa/image/421bb962-fad0-4470-9e9d-daa5954c0283.jpg',
      isFavorite: true
    },
    {
      id: 3,
      name: 'Black Heels',
      price: 85,
      rating: 4.8,
      image: 'https://storage.googleapis.com/a1aa/image/c8915ecf-5349-4aa4-f7fc-e3d4e9d0bf6f.jpg',
      isFavorite: false
    },
    {
      id: 4,
      name: 'Casual Shoes',
      price: 85,
      rating: 4.8,
      image: 'https://storage.googleapis.com/a1aa/image/90911605-c05c-4eb9-9ba3-6f10ceee7652.jpg',
      isFavorite: false
    }
  ];

  const categories = [
    { name: 'Shoes', icon: <FaShoePrints className="text-sm" />, active: true },
    { name: 'High heel', icon: '👠', active: false },
    { name: 'Running', icon: '👟', active: false },
    { name: 'Loafers', icon: '🥿', active: false },
    { name: 'Boots', icon: '👢', active: false }
  ];

  return (
    <div className="pb-16">
      <TopBar showMenu={showMenu} setShowMenu={setShowMenu} />
      
      <div className="p-4">
        {showMenu ? (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul className="space-y-3">
              <li className="p-2 hover:bg-gray-100 rounded-lg">Home</li>
              <li className="p-2 hover:bg-gray-100 rounded-lg">Products</li>
              <li className="p-2 hover:bg-gray-100 rounded-lg">Categories</li>
              <li className="p-2 hover:bg-gray-100 rounded-lg">Settings</li>
            </ul>
          </div>
        ) : (
          <>
            <DiscountBanner />
            
            <div className="flex justify-center space-x-2 mb-4">
              {[1, 2, 3, 4].map((dot) => (
                <span key={dot} className="w-2 h-2 rounded-full border border-gray-300"></span>
              ))}
            </div>
            
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-gray-900 text-base">Categories</h2>
              <button className="text-xs text-gray-500 font-semibold">View all</button>
            </div>
            
            <nav className="flex space-x-3 mb-6 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`flex items-center space-x-2 ${category.active ? 'bg-[#3B82F6] text-white' : 'bg-gray-100 text-gray-900'} rounded-lg px-3 py-1.5 font-semibold text-xs whitespace-nowrap`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </nav>
            
            <section className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
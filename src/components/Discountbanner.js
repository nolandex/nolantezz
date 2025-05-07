import React from 'react';

const DiscountBanner = () => {
  return (
    <section className="relative bg-[#0F172A] rounded-2xl p-4 flex items-center justify-between mb-4" style={{ minHeight: '96px' }}>
      <div className="max-w-[60%]">
        <p className="text-white text-sm font-semibold leading-tight">
          Flat 50% discount on
          <br />
          your first order.
        </p>
        <button className="mt-2 bg-[#FF5C2F] text-white text-xs font-semibold px-4 py-1 rounded-full">
          Buy Now
        </button>
      </div>
      <img 
        alt="White sneakers" 
        className="absolute right-4 top-1/2 -translate-y-1/2 w-24 h-24 object-contain" 
        src="https://storage.googleapis.com/a1aa/image/6a136e6e-401d-4b41-d9fc-a4b309a8d1e9.jpg" 
        style={{ filter: 'drop-shadow(0 10px 6px rgba(0,0,0,0.1))' }} 
      />
    </section>
  );
};

export default DiscountBanner;
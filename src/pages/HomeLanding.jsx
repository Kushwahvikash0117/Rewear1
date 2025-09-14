import React from "react";
import { Link } from "react-router-dom";

const featuredItems = [ { id: 1, title: "Jacket", image: "https://www.vintagedrip.in/cdn/shop/files/faiz4.jpg?v=1720866902" }, { id: 3, title: "Boho Dress", image: "https://www.labelreyya.com/cdn/shop/files/CopyofRVP_1701.jpg?v=1714481234" }, { id: 4, title: "Ethnic Top", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/5/7508ef72903-SS-1246-03_1.jpg?tr=w-512" }, { id: 5, title: "Patchwork Shirt", image: "https://refash.in/cdn/shop/files/pwn8FJVcy0.jpg?v=1723466415&width=720" }, { id: 6, title: "Summer Kurti", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUWV9JtpZPhNaF06JTr4P__x6MogOo9qsOA&s" }, ];

const HomeLanding = () => { return ( 
<div className="bg-[#FDF4F2] min-h-screen font-sans text-[#2E2E2E]"> 
  {/* Header */} 
  <header className="flex justify-between items-center px-8 py-4 shadow bg-white"> 
    <h1 className="text-2xl font-bold text-[#D94F4F]">ReWear</h1> <nav className="space-x-6 text-sm font-medium"> 
      <Link to="/"  className="hover:underline">Home</Link> 
      <a href="#" className="hover:underline">Browse</a> 
      <Link to="/login" className="hover:underline">Login</Link> 
      <Link to="signup" className="hover:underline">Sign Up</Link> </nav> 
      </header>

{/* Hero Section */}
  <section className="text-center py-16 bg-[#FFEFEF]">
    <h2 className="text-3xl font-bold mb-4">Swap Your Style, Sustainably 🌿</h2>
    <p className="mb-6 text-gray-600">Join a community-driven marketplace for pre-loved fashion.</p>
    <div className="space-x-4">
      <button className="bg-[#D94F4F] text-white px-6 py-2 rounded-full hover:bg-[#bf3f3f]">Start Swapping</button>
      <button className="border border-[#D94F4F] text-[#D94F4F] px-6 py-2 rounded-full hover:bg-[#fce7e7]">Browse Items</button>
    </div>
  </section>

  {/* Carousel */}
  <section className="px-8 py-12">
    <h3 className="text-2xl font-semibold mb-6">Featured Items</h3>
    <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
      {featuredItems.map(item => (
        <div key={item.id} className="min-w-[200px] bg-white rounded-lg shadow p-4">
          <img src={item.image} alt={item.title} className="w-full h-60 object-cover rounded mb-2" />
          <p className="text-sm text-center font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Browse Section */}
  <section className="bg-[#FFF9F0] px-8 py-12">
    <h3 className="text-2xl font-semibold mb-6 text-center">Browse by Category</h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div className="bg-white p-4 rounded shadow hover:shadow-md">Kurta Sets</div>
      <div className="bg-white p-4 rounded shadow hover:shadow-md">Tops</div>
      <div className="bg-white p-4 rounded shadow hover:shadow-md">Dresses</div>
      <div className="bg-white p-4 rounded shadow hover:shadow-md">Ethnic Wear</div>
    </div>
  </section>

  {/* Testimonials / Metrics */}
  <section className="bg-white px-8 py-12 text-center">
    <h3 className="text-xl font-semibold mb-4">Why ReWear?</h3>
    <p className="text-gray-600 max-w-xl mx-auto mb-6">Over <strong>2,000+</strong> successful swaps, <strong>15kg</strong> of fabric saved, and a growing community of eco-conscious fashion lovers.</p>
  </section>

  {/* Footer */}
  <footer className="bg-[#2E2E2E] text-white text-sm py-6 text-center">
    &copy; 2025 ReWear. Fashion that goes further ♻️
  </footer>
</div>

); };

export default HomeLanding;


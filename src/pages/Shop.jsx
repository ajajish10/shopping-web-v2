// src/pages/Shop.jsx
import React, { useEffect, useState } from 'react';

// Mock data — replace with API/Firebase call in real app
const mockProducts = [
  {
    id: 1,
    name: 'Acoustic Guitar',
    description: 'A high-quality acoustic guitar perfect for beginners and pros.',
    price: 149.99,
    image: 'https://i.postimg.cc/nhBrhHGg/Acoustic-Guitar.jpg',
  },
  {
    id: 2,
    name: 'Digital Piano',
    description: '88-key digital piano with touch-sensitive keys and built-in speakers.',
    price: 499.99,
    image: 'https://i.postimg.cc/qRRpy02k/Digital-Piano.jpg',
  },
  {
    id: 3,
    name: 'Drum Kit',
    description: '5-piece drum set including cymbals, hardware, and a throne.',
    price: 699.99,
    image: 'https://i.postimg.cc/dtBvHLnq/Drum-Kit.jpg',
  },
];

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate product loading
    setProducts(mockProducts);
  }, []);

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart 🛒`);
    // You can push to Redux or Firebase here
  };

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-700">Shop Instruments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <p className="text-lg font-bold text-gray-700 mt-3">₹{product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
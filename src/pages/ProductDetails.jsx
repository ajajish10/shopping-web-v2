// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Simulated product database
const mockProducts = [
  {
    id: '1',
    name: 'Acoustic Guitar',
    description: 'A premium acoustic guitar with a rich, full sound.',
    price: 149.99,
    image: '/images/shop-guitar.jpg',
    features: ['Full-size dreadnought body', 'Steel strings', 'Natural wood finish'],
  },
  {
    id: '2',
    name: 'Digital Piano',
    description: 'An 88-key digital piano perfect for learning and composing.',
    price: 499.99,
    image: '/images/shop-piano.jpg',
    features: ['Weighted keys', 'Built-in speakers', 'USB MIDI connection'],
  },
  {
    id: '3',
    name: 'Drum Kit',
    description: 'Complete 5-piece drum set including cymbals and stool.',
    price: 699.99,
    image: '/images/shop-drums.jpg',
    features: ['5-piece shell pack', 'Zildjian cymbals', 'Adjustable drum throne'],
  },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-gray-600">Product not found</h2>
        <button
          onClick={() => navigate('/shop')}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${product.name} to cart 🛒`);
    // Hook this into Redux/Firebase in full version
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      <img src={product.image} alt={product.name} className="w-full rounded-lg shadow" />
      <div>
        <h1 className="text-3xl font-bold text-indigo-700">{product.name}</h1>
        <p className="text-gray-700 mt-4">{product.description}</p>
        <p className="text-xl font-bold text-gray-800 mt-4">${product.price.toFixed(2)}</p>

        <ul className="list-disc ml-5 mt-4 text-gray-600 space-y-1">
          {product.features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>

        <button
          onClick={handleAddToCart}
          className="mt-6 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;

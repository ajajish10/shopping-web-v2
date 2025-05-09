// src/pages/Cart.jsx
import React, { useState } from 'react';

const initialCart = [
  {
    id: 1,
    name: 'Acoustic Guitar',
    price: 149.99,
    image: '/images/shop-guitar.jpg',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Digital Piano',
    price: 499.99,
    image: '/images/shop-piano.jpg',
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-700">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Your cart is empty 🛒
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg shadow-md"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  −
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:text-red-600 hover:underline ml-4 transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-8">
            <h3 className="text-2xl font-bold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </h3>
            <button className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;

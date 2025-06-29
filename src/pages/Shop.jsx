import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading products:', error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart 🛒`);
  };

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-700">Shop Instruments</h1>

      {loading ? (
        <p className="text-center text-lg">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length === 0 ? (
            <p className="text-center col-span-full">No products available</p>
          ) : (
            products.map((product) => (
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
            ))
          )}
        </div>
      )}
    </section>
  );
};

export default Shop;

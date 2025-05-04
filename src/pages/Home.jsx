// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  const images = [
    "https://i.postimg.cc/gcHFkchc/hero1.jpg",
    "https://i.postimg.cc/vH0JfPXp/hero2.jpg",
    "https://i.postimg.cc/505G0p6K/hero3.jpg",
    "https://i.postimg.cc/8cPyCG8s/hero4.jpg",
    "https://i.postimg.cc/y6vQbD9R/hero5.jpg",
  ];

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative w-full h-screen overflow-hidden">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-screen object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Overlayed CTA */}
        {/* Overlayed CTA */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Welcome to CoolDaddy 🎸
          </h1>
          <p className="text-lg sm:text-xl mb-4 sm:mb-6 max-w-md sm:max-w-2xl">
            Your one-stop destination for music learning and premium instruments.
          </p>
          <div className="space-y-3 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <Link
              to="/courses"
              className="bg-white text-indigo-700 px-4 sm:px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
            >
              Explore Courses
            </Link>
            <Link
              to="/shop"
              className="bg-white text-purple-700 px-4 sm:px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
            >
              Shop Instruments
            </Link>
          </div>
        </div>

      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid gap-8 md:grid-cols-3 text-center">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <img
            src="https://i.postimg.cc/XJ9GmBp0/learn-music.jpg"
            alt="Learn Music"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Offline Music Courses</h3>
          <p className="text-gray-600">
            Learn from top instructors with curated offline content tailored just for you.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <img
            src="https://i.postimg.cc/vm3S9DQb/shop.jpg"
            alt="Shop"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Instruments Shop</h3>
          <p className="text-gray-600">
            High-quality guitars, keyboards, drums, and more available to order instantly.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <img
            src="https://i.postimg.cc/Qds3J9rT/istockphoto-1320185152-612x612.jpg"
            alt="Community"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Music Community</h3>
          <p className="text-gray-600">
            Join a vibrant community of learners and musicians. Share, connect, grow.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

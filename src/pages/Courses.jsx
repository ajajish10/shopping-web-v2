// src/pages/Courses.jsx
import React, { useState, useEffect } from 'react';

const mockCourses = [
  {
    id: 1,
    title: 'Beginner Guitar Mastery',
    description: 'Learn the basics of guitar including chords, strumming, and melodies.',
    image: '/images/course-guitar.jpg',
    duration: '8 weeks',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Keyboard Fundamentals',
    description: 'Master keyboard skills from scales to classical tunes in no time.',
    image: '/images/course-keyboard.jpg',
    duration: '10 weeks',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'Vocal Training Pro',
    description: 'Improve pitch, range, and performance techniques with expert guidance.',
    image: '/images/course-vocal.jpg',
    duration: '12 weeks',
    level: 'Advanced',
  },
];

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulate fetching from database
    setCourses(mockCourses);
  }, []);

  const handleEnroll = (title,description,duration,level) => {
    const phoneNumber = "91123456789";
    const message = `I am intersted to Entroll the course ${title} fot ${description} in ${duration} at ${level} 🎶`;
    // Encode the message for URL
    const encodeMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;

    // To open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl"
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{course.description}</p>
              <div className="mt-3 flex justify-between items-center text-sm text-gray-500">
                <span>{course.duration}</span>
                <span>{course.level}</span>
              </div>
              <button
                onClick={() => handleEnroll(course.title,course.description,course.duration,course.level)}
                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;

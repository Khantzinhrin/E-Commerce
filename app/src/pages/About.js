import React from 'react';

export default function About() {
  return (
    // Added padding-top to ensure content is visible below the fixed NavBar
    <div className="pt-24 min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-2xl">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-6 border-b-4 border-blue-100 pb-4">
          Our Story: Horizon E-Commerce
        </h2>
        
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Founded in 2023, Horizon was born from a simple idea: that quality fashion and sustainable practices should go hand-in-hand. We curate a selection of timeless clothing and accessories, focusing on durability, ethical sourcing, and a minimalist aesthetic that transcends fast trends.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-center mt-10">
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-3xl font-bold text-blue-600 mb-2">100%</p>
            <p className="text-gray-600">Ethically Sourced Materials</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-3xl font-bold text-blue-600 mb-2">24/7</p>
            <p className="text-gray-600">Customer Support</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <p className="text-3xl font-bold text-blue-600 mb-2">30 Day</p>
            <p className="text-gray-600">Hassle-Free Returns</p>
          </div>
        </div>

        <h3 className="text-3xl font-semibold text-gray-800 mt-12 mb-4">Our Commitment</h3>
        <p className="text-gray-700 leading-relaxed">
          We believe in transparency. Every product on our site includes details about its origin, the people who made it, and the environmental impact of its production. We are constantly striving to reduce our carbon footprint and ensure our supply chain is fair and responsible.
        </p>
      </div>
    </div>
  );
}
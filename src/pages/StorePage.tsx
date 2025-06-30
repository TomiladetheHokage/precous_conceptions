// import React, { useState } from 'react';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';
import {useState} from "react";

const StorePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'books', name: 'Books' },
    { id: 'supplements', name: 'Supplements' },
    { id: 'trackers', name: 'Fertility Trackers' },
    { id: 'kits', name: 'Testing Kits' }
  ];

  const products = [
    {
      id: 1,
      name: 'Fertility Journey Guidebook',
      category: 'books',
      price: 15000,
      originalPrice: 20000,
      rating: 4.8,
      reviews: 127,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comprehensive guide to understanding and optimizing your fertility naturally.',
      author: 'Dr. Adaora Nnamdi',
      bestseller: true
    },
    {
      id: 2,
      name: 'Premium Fertility Vitamins',
      category: 'supplements',
      price: 25000,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specially formulated prenatal vitamins with folic acid, CoQ10, and essential nutrients.',
      benefits: ['Supports egg quality', 'Boosts fertility', '3-month supply']
    },
    {
      id: 3,
      name: 'Digital Ovulation Tracker',
      category: 'trackers',
      price: 35000,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced digital tracker that monitors temperature and hormone levels.',
      features: ['Bluetooth connectivity', 'App integration', '99% accuracy']
    },
    {
      id: 4,
      name: 'Home Fertility Test Kit',
      category: 'kits',
      price: 18000,
      rating: 4.5,
      reviews: 203,
      image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete at-home fertility testing kit for both partners.',
      includes: ['Hormone level tests', 'Sperm analysis kit', 'Result interpretation guide']
    },
    {
      id: 5,
      name: 'Conception Support Tea Blend',
      category: 'supplements',
      price: 8000,
      rating: 4.4,
      reviews: 67,
      image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Herbal tea blend with red raspberry leaf, nettle, and fertility-supporting herbs.',
      organic: true
    },
    {
      id: 6,
      name: 'IVF Success Workbook',
      category: 'books',
      price: 12000,
      rating: 4.9,
      reviews: 91,
      image: 'https://images.pexels.com/photos/1082982/pexels-photo-1082982.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Step-by-step workbook for navigating IVF treatment with confidence.',
      pages: 150,
      exercises: '25+ practical exercises'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    if (!cartItems.includes(productId)) {
      setCartItems([...cartItems, productId]);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fertility Store
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Carefully curated products to support your fertility journey. 
            From educational resources to fertility-enhancing supplements.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter by category:</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">{cartItems.length} items in cart</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.bestseller && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Bestseller
                    </span>
                  )}
                  {product.organic && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Organic
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  
                  {/* Product specific details */}
                  {product.author && (
                    <p className="text-sm text-gray-500 mb-2">by {product.author}</p>
                  )}
                  
                  {product.benefits && (
                    <ul className="text-sm text-gray-600 mb-4">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-emerald-600">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={cartItems.includes(product.id)}
                    className={`w-full py-3 rounded-md font-medium transition-colors duration-200 ${
                      cartItems.includes(product.id)
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700'
                    }`}
                  >
                    {cartItems.includes(product.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free delivery within Lagos for orders over ₦20,000</p>
            </div>
            <div>
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">All products are carefully selected and quality tested</p>
            </div>
            <div>
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Curated</h3>
              <p className="text-gray-600">Products recommended by fertility specialists</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorePage;
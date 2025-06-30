// import React, { useState } from 'react';
import { BookOpen, Headphones, Users, FileText, Search, Clock, ArrowRight } from 'lucide-react';
import {useState} from "react";

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('blog');

  const blogPosts = [
    {
      title: 'Understanding Your Menstrual Cycle for Better Fertility',
      excerpt: 'Learn how to track your cycle and identify your fertile window for optimal conception timing.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Fertility Basics',
      image: 'https://images.pexels.com/photos/3996959/pexels-photo-3996959.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Nutrition for Fertility: Foods That Support Conception',
      excerpt: 'Discover the best foods and supplements to optimize your fertility naturally.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Nutrition',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'IVF in Nigeria: What You Need to Know',
      excerpt: 'A comprehensive guide to IVF treatment options, costs, and success rates in Nigeria.',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'IVF',
      image: 'https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Managing Stress During Your Fertility Journey',
      excerpt: 'Practical strategies for dealing with the emotional challenges of trying to conceive.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Mental Health',
      image: 'https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const podcasts = [
    {
      title: 'The Fertility Journey Podcast',
      episode: 'Episode 15: Navigating Secondary Infertility',
      duration: '45 min',
      description: 'Understanding the unique challenges of secondary infertility and finding support.',
      date: '2024-01-12'
    },
    {
      title: 'The Fertility Journey Podcast',
      episode: 'Episode 14: Male Factor Infertility',
      duration: '38 min',
      description: 'Breaking the stigma and addressing male fertility challenges in African culture.',
      date: '2024-01-05'
    },
    {
      title: 'The Fertility Journey Podcast',
      episode: 'Episode 13: PCOS and Fertility',
      duration: '42 min',
      description: 'Managing PCOS while trying to conceive - diet, lifestyle, and treatment options.',
      date: '2023-12-28'
    }
  ];

  const bookClub = [
    {
      title: 'It Starts with the Egg',
      author: 'Rebecca Fett',
      description: 'Science-based guide to improving egg quality and fertility.',
      status: 'Currently Reading',
      meetingDate: '2024-02-15'
    },
    {
      title: 'The Impatient Woman\'s Guide to Getting Pregnant',
      author: 'Jean Twenge',
      description: 'Evidence-based advice for conception and fertility treatment.',
      status: 'Next Month',
      meetingDate: '2024-03-15'
    },
    {
      title: 'Fertility and Faith',
      author: 'Dr. Angela Best-Boss',
      description: 'Navigating fertility challenges while maintaining spiritual faith.',
      status: 'Past Reading',
      meetingDate: '2024-01-15'
    }
  ];

  const resources = [
    {
      title: 'Fertility Testing Checklist',
      type: 'PDF Guide',
      description: 'Complete list of fertility tests for both partners with explanations.',
      downloadLink: '#'
    },
    {
      title: 'IVF Clinic Comparison Template',
      type: 'Spreadsheet',
      description: 'Compare IVF clinics in Nigeria by success rates, costs, and services.',
      downloadLink: '#'
    },
    {
      title: 'Fertility Diet Meal Plans',
      type: 'PDF Guide',
      description: 'Weekly meal plans designed to support fertility and reproductive health.',
      downloadLink: '#'
    },
    {
      title: 'Ovulation Tracking Templates',
      type: 'PDF Templates',
      description: 'Charts and templates to track your cycle and fertile window.',
      downloadLink: '#'
    }
  ];

  const tabs = [
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'podcasts', label: 'Podcasts', icon: Headphones },
    { id: 'bookclub', label: 'Book Club', icon: BookOpen },
    { id: 'resources', label: 'Downloads', icon: Users }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resource Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive fertility education, expert insights, and community support 
            to empower you on your journey to parenthood.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors duration-200 border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-emerald-600 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Posts */}
          {activeTab === 'blog' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  View All Posts
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">{post.date}</span>
                        <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Podcasts */}
          {activeTab === 'podcasts' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Fertility Podcasts</h2>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Subscribe
                </button>
              </div>
              
              <div className="space-y-6">
                {podcasts.map((podcast, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{podcast.episode}</h3>
                        <p className="text-gray-600 mb-3">{podcast.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{podcast.duration}</span>
                          <span>{podcast.date}</span>
                        </div>
                      </div>
                      <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-200 flex items-center">
                        <Headphones className="h-4 w-4 mr-2" />
                        Listen
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Book Club */}
          {activeTab === 'bookclub' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Fertility Book Club</h2>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Join Club
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bookClub.map((book, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                      book.status === 'Currently Reading' ? 'bg-emerald-100 text-emerald-700' :
                      book.status === 'Next Month' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {book.status}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{book.title}</h3>
                    <p className="text-gray-600 mb-2">by {book.author}</p>
                    <p className="text-gray-600 mb-4">{book.description}</p>
                    <div className="text-sm text-gray-500">
                      Meeting: {book.meetingDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resources */}
          {activeTab === 'resources' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Download Resources</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                        <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-medium mb-3">
                          {resource.type}
                        </span>
                        <p className="text-gray-600 mb-4">{resource.description}</p>
                      </div>
                    </div>
                    <button className="w-full bg-emerald-600 text-white py-3 rounded-md hover:bg-emerald-700 transition-colors duration-200 font-medium">
                      Download Free
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
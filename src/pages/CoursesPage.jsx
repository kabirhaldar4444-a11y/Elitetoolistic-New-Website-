import React, { useState, useMemo } from 'react';
import { Search, Filter, Layers, BookOpen } from 'lucide-react';
import { newCatalogCategories } from '../../api/new100CoursesData.js';
import CourseCard from '../components/common/CourseCard';
import './CoursesPage.css';

export default function CoursesPage({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Flatten all courses with category tags attached
  const allCourses = useMemo(() => {
    const list = [];
    newCatalogCategories.forEach((catObj) => {
      catObj.courses.forEach((c) => {
        list.push({
          ...c,
          category: catObj.category
        });
      });
    });
    return list;
  }, []);

  const categoriesList = ['All', ...newCatalogCategories.map((c) => c.category)];

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesCat = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'price-low') {
        const numA = parseInt(a.price.replace(/[^0-9]/g, ''), 10) || 0;
        const numB = parseInt(b.price.replace(/[^0-9]/g, ''), 10) || 0;
        return numA - numB;
      }
      if (sortBy === 'price-high') {
        const numA = parseInt(a.price.replace(/[^0-9]/g, ''), 10) || 0;
        const numB = parseInt(b.price.replace(/[^0-9]/g, ''), 10) || 0;
        return numB - numA;
      }
      return 0;
    });
  }, [allCourses, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="courses-page">
      {/* HEADER */}
      <section className="courses-hero">
        <div className="container">
          <div className="courses-hero-content">
            <span className="section-tag">Vocational Masterclasses</span>
            <h1 className="section-title">
              Explore Our <span className="gradient-text">100+ Recognized Courses</span>
            </h1>
            <p className="section-subtitle">
              Short-term vocational programs designed for self-directed learning across AI, Construction, Engineering, and Corporate Operations.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="catalog-section">
        <div className="container">
          <div className="catalog-toolbar glass-card">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search by course title or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <span className="search-count-badge">
                {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'}
              </span>
            </div>

            <div className="toolbar-actions">
              <div className="sort-box">
                <Filter size={16} className="icon-cyan" />
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                  <option value="default">Sort by: Default</option>
                  <option value="title">Sort by: Title A-Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* CATEGORY TABS */}
          <div className="category-tabs-row">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                className={`cat-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* RESULTS SUMMARY */}
          <div className="results-header">
            <p className="results-count">
              Showing <strong>{filteredCourses.length}</strong> available courses
            </p>
          </div>

          {/* COURSE GRID */}
          {filteredCourses.length === 0 ? (
            <div className="no-results glass-card">
              <BookOpen size={48} className="icon-cyan" />
              <h3>No courses found matching your criteria</h3>
              <p>Try adjusting your search terms or selecting another category.</p>
              <button onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} className="btn-secondary">
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} onAddToCart={onAddToCart} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

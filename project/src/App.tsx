import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ProductDetail from './components/ProductDetail';
import AboutProduct from './components/AboutProduct';
import { Product, CategoryType } from './types';
import { products } from './data/products';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryType | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const relatedProducts = useMemo(() => {
    if (!selectedProduct) return [];
    return products.filter(product => 
      product.category === selectedProduct.category && product.id !== selectedProduct.id
    );
  }, [selectedProduct]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('home');
    setSelectedProduct(null);
  };

  const handleCategorySelect = (category: CategoryType) => {
    setActiveCategory(activeCategory === category ? null : category);
    setCurrentPage('home');
    setSelectedProduct(null);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handleBack = () => {
    setSelectedProduct(null);
    setCurrentPage('home');
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category as CategoryType);
    setCurrentPage('home');
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        onNavigate={handleNavigate}
        onSearch={handleSearch}
        currentPage={currentPage}
      />

      {currentPage === 'home' && (
        <LandingPage
          products={products}
          filteredProducts={filteredProducts}
          activeCategory={activeCategory}
          onProductClick={handleProductClick}
          onCategorySelect={handleCategorySelect}
        />
      )}

      {currentPage === 'about' && <AboutProduct />}

      {currentPage === 'product' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          relatedProducts={relatedProducts}
          onBack={handleBack}
          onProductClick={handleProductClick}
          onCategoryClick={handleCategoryClick}
        />
      )}
    </div>
  );
}

export default App;
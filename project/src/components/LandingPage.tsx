import React from 'react';
import { Product, CategoryType } from '../types';
import ProductCard from './ProductCard';
import { categories } from '../data/products';

interface LandingPageProps {
  products: Product[];
  filteredProducts: Product[];
  activeCategory: CategoryType | null;
  onProductClick: (product: Product) => void;
  onCategorySelect: (category: CategoryType) => void;
}

export default function LandingPage({ 
  products, 
  filteredProducts, 
  activeCategory, 
  onProductClick,
  onCategorySelect 
}: LandingPageProps) {
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden min-h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/WhatsApp Image 2025-09-30 at 11.41.43_e1ef3478.jpg")',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to <span className="text-yellow-300">Dewi Prabu</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-semibold drop-shadow-lg">
            Desa Wirausaha Pisang Raja Bulu - Discover premium products made from sustainable banana-based materials
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg ${
                  activeCategory === category.id
                    ? 'bg-white text-gray-900 shadow-xl scale-105'
                    : 'bg-white/30 text-white hover:bg-white/40 backdrop-blur-sm border border-white/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {activeCategory 
              ? `${categories.find(c => c.id === activeCategory)?.name} Products`
              : 'All Products'
            }
          </h2>
          <p className="text-gray-600">
            {displayProducts.length} product{displayProducts.length !== 1 ? 's' : ''} available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && activeCategory && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
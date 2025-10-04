import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
  onBack: () => void;
  onProductClick: (product: Product) => void;
  onCategoryClick: (category: string) => void;
}

export default function ProductDetail({ 
  product, 
  relatedProducts, 
  onBack, 
  onProductClick,
  onCategoryClick 
}: ProductDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`${product.brandColor.gradient} text-white`}>
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 mb-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div>
              <span className="text-white/80 text-sm uppercase tracking-wide font-medium">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              More in {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </h2>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {relatedProducts.map((relatedProduct) => (
                <button
                  key={relatedProduct.id}
                  onClick={() => onProductClick(relatedProduct)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    relatedProduct.id === product.id
                      ? `${relatedProduct.brandColor.gradient} text-white shadow-lg`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{relatedProduct.name}</span>
                  {relatedProduct.id !== product.id && <ChevronRight size={16} />}
                </button>
              ))}
            </div>

            <button
              onClick={() => onCategoryClick(product.category)}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1 transition-colors"
            >
              <span>View all {product.category} products</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Additional Product Information */}
      <div className="container mx-auto px-4 pb-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Details</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg leading-relaxed">
              {product.description} Our commitment to sustainability and quality ensures that every 
              {product.name.toLowerCase()} meets the highest standards while supporting eco-friendly practices.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Eco-Friendly</h3>
                <p className="text-sm text-gray-600">Made from sustainable materials</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-sm text-gray-600">Carefully crafted with attention to detail</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">Natural</h3>
                <p className="text-sm text-gray-600">No harmful chemicals or additives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
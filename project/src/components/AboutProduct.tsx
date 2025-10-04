import React from 'react';
import { Leaf, Recycle, Heart, Award, MessageCircle, Instagram, ShoppingBag } from 'lucide-react';

export default function AboutProduct() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/WhatsApp Image 2025-09-30 at 11.41.43_e1ef3478.jpg")',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            About <span className="text-yellow-300">Dewi Prabu</span> Products
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow-lg">
            Discover the story behind Dewi Prabu's innovative banana-based products and our commitment to sustainability
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dewi Prabu (Desa Wirausaha Pisang Raja Bulu) believes in transforming agricultural waste into valuable products that benefit both people and the planet. 
              Every banana leaf, peel, and fiber that would otherwise be discarded becomes the foundation for our innovative product line, supporting local farmers and sustainable agriculture.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable</h3>
              <p className="text-gray-600">Using renewable banana-based materials for all our products</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Zero Waste</h3>
              <p className="text-gray-600">Converting agricultural waste into valuable products</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">Supporting local farmers and sustainable agriculture</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">Premium products that meet the highest standards</p>
            </div>
          </div>

          {/* Product Categories */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Product Categories</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Food Products</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Sendookies & GoldenBana:</strong> Our food line transforms banana waste into delicious, 
                  healthy snacks that preserve the natural flavor and nutritional benefits of bananas.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Agricultural Products</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Econana:</strong> Our organic fertilizer turns banana waste into nutrient-rich soil enhancer, 
                  completing the agricultural cycle sustainably.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Personal Care</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Bananique:</strong> Natural soap infused with banana extracts provides gentle skincare 
                  with moisturizing properties and pleasant natural fragrance.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cooking Essentials</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Grenana Flour:</strong> High-quality, gluten-free banana flour perfect for health-conscious 
                  consumers seeking nutritious baking alternatives.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Fashion & Lifestyle</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Sunbana Leaf & Banaleaf Craft:</strong> Sustainable fashion accessories made from banana 
                  fiber and leaves, combining traditional craftsmanship with modern design.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl shadow-xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us</h2>
              <p className="text-lg md:text-xl opacity-90">
                Follow our journey and shop our sustainable products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-sm opacity-90">Chat with us directly</p>
              </a>

              <a
                href="https://instagram.com/ppko_bismaumk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="text-pink-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <p className="text-sm opacity-90">Follow our updates</p>
              </a>

              <a
                href="https://shopee.co.id/dewiprabu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Shopee</h3>
                <p className="text-sm opacity-90">Shop our products</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
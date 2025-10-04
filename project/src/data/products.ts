import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'food', name: 'Food', icon: 'UtensilsCrossed', color: 'bg-orange-500' },
  {
    id: 'fertilizer',
    name: 'Fertilizer',
    icon: 'Sprout',
    color: 'bg-green-500',
  },
  { id: 'soap', name: 'Soap', icon: 'Droplets', color: 'bg-blue-500' },
  { id: 'flour', name: 'Flour', icon: 'Wheat', color: 'bg-yellow-500' },
  { id: 'fashion', name: 'Fashion', icon: 'Shirt', color: 'bg-purple-500' },
];

export const products: Product[] = [
  {
    id: 'sendookies',
    name: 'Sendookies',
    category: 'food',
    description:
      'Delicious banana-based cookies with a perfect blend of sweetness and crunch. Made from premium banana flour.',
    image: '/WhatsApp Image 2025-09-29 at 22.00.53_1f8df654.jpg',
    brandColor: {
      primary: 'from-amber-400 to-orange-500',
      secondary: 'bg-amber-50',
      gradient: 'bg-gradient-to-br from-amber-400 to-orange-500',
    },
  },
  {
    id: 'goldenbana',
    name: 'GoldenBana',
    category: 'food',
    description:
      'Premium dried banana chips with natural golden color. Crispy, healthy, and naturally sweet snack.',
    image:
      '/Gemini_Generated_Image_oazdgcoazdgcoazd.png',
    brandColor: {
      primary: 'from-yellow-400 to-orange-400',
      secondary: 'bg-yellow-50',
      gradient: 'bg-gradient-to-br from-yellow-400 to-orange-400',
    },
  },
  {
    id: 'econana',
    name: 'Econana',
    category: 'fertilizer',
    description:
      'Organic fertilizer made from banana waste. Environmentally friendly and nutrient-rich for your plants.',
    image: '/econana.png',
    brandColor: {
      primary: 'from-green-500 to-emerald-600',
      secondary: 'bg-green-50',
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-600',
    },
  },
  {
    id: 'bananique',
    name: 'Bananique',
    category: 'soap',
    description:
      'Natural soap infused with banana extract. Gentle on skin with moisturizing properties and pleasant aroma.',
    image:
      '/sabun.png',
    brandColor: {
      primary: 'from-blue-400 to-cyan-500',
      secondary: 'bg-blue-50',
      gradient: 'bg-gradient-to-br from-blue-400 to-cyan-500',
    },
  },
  {
    id: 'grenana-flour',
    name: 'Grenana Flour',
    category: 'flour',
    description:
      'High-quality banana flour perfect for baking and cooking. Gluten-free alternative with rich nutritional value.',
    image:
      '/tepung.png',
    brandColor: {
      primary: 'from-yellow-500 to-amber-600',
      secondary: 'bg-yellow-50',
      gradient: 'bg-gradient-to-br from-yellow-500 to-amber-600',
    },
  },
  {
    id: 'sunbana-leaf',
    name: 'Sunbana Leaf',
    category: 'fashion',
    description:
      'Eco-friendly fashion accessories made from banana leaves. Stylish, sustainable, and unique designs.',
    image:
      '/topi.png',
    brandColor: {
      primary: 'from-purple-500 to-pink-500',
      secondary: 'bg-purple-50',
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
  },
  {
    id: 'banaleaf-craft',
    name: 'Banaleaf Craft',
    category: 'fashion',
    description:
      'Handcrafted fashion items from banana fiber. Traditional techniques meet modern design aesthetics.',
    image:
      '/tas.png',
    brandColor: {
      primary: 'from-indigo-500 to-purple-600',
      secondary: 'bg-indigo-50',
      gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    },
  },
];

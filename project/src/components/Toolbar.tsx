import React from 'react';
import { UtensilsCrossed, Sprout, Droplets, Wheat, Shirt } from 'lucide-react';
import { CategoryType } from '../types';
import { categories } from '../data/products';

interface ToolbarProps {
  activeCategory: CategoryType | null;
  onCategorySelect: (category: CategoryType) => void;
}

const iconMap = {
  UtensilsCrossed,
  Sprout,
  Droplets,
  Wheat,
  Shirt,
};

export default function Toolbar({ activeCategory, onCategorySelect }: ToolbarProps) {
  return (
    <div className="fixed left-4 bottom-4 z-40">
      <div className="bg-white rounded-2xl shadow-xl p-2 border border-gray-200">
        <div className="flex flex-col space-y-2">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`relative group p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? `${category.color} text-white shadow-lg scale-110`
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
                title={category.name}
              >
                <IconComponent size={20} />
                
                {/* Tooltip */}
                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {category.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
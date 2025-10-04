export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  description: string;
  image: string;
  brandColor: {
    primary: string;
    secondary: string;
    gradient: string;
  };
}

export type CategoryType = 'food' | 'fertilizer' | 'soap' | 'flour' | 'fashion';

export interface Category {
  id: CategoryType;
  name: string;
  icon: string;
  color: string;
}
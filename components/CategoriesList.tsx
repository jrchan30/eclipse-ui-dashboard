import { Colors } from '@/tailwind.config';
import React from 'react';

export interface ICategory {
  id: string | number;
  label: string;
  icon: React.ReactNode;
  color: keyof typeof Colors;
}

export interface IProps {
  list: ICategory[];
}

export const CategoryItem = ({ label, icon, color }: ICategory) => {
  return (
    <div className="flex gap-x-6">
      <div className="flex gap-x-1.5">
        <div className="bg-alizarin-red shadow-2xl shadow-alizarin-red w-8 h-8 rounded-lg"></div>
      </div>
    </div>
  );
};

const CategoriesList = ({ list }: IProps) => {
  return list.map((item) => {
    return <CategoryItem key={item.id} {...item} />;
  });
};

export default CategoriesList;

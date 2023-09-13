'use client';
import React from 'react';
import InputSearch from './Input/InputSearch';
import NavigationList from './NavigationList';
import {
  FaChalkboard,
  FaChartColumn,
  FaLayerGroup,
  FaRegMessage,
  FaShirt,
  FaTableColumns,
  FaUserGroup,
} from 'react-icons/fa6';
import CategoriesList, { ICategory } from './CategoriesList';

const LeftPanel = () => {
  const navList = [
    {
      id: 1,
      icon: <FaChalkboard />,
      label: 'Dashboard',
      to: '/',
    },
    {
      id: 2,
      icon: <FaLayerGroup />,
      label: 'Catalogue',
      to: '/',
    },
    {
      id: 3,
      icon: <FaChartColumn />,
      label: 'Analytics',
      to: '/',
    },
    {
      id: 4,
      icon: <FaTableColumns />,
      label: 'Documents',
      to: '/',
    },
    {
      id: 5,
      icon: <FaRegMessage />,
      label: 'Messages',
      to: '/',
    },
    {
      id: 6,
      icon: <FaUserGroup />,
      label: 'Accounts',
      to: '/',
    },
  ];

  const categoryList: ICategory[] = [
    {
      id: 1,
      label: 'Clothes & Fashion',
      icon: <FaShirt />,
      color: 'alizarin-red',
    },
  ];

  return (
    <aside className="px-6 py-8 h-[calc(100vh-4rem)] fixed top-16 w-72 bg-g0 dark:bg-dg11">
      <div className="flex flex-col gap-y-12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submit');
          }}
        >
          <InputSearch />
        </form>
        <NavigationList list={navList} />
        <CategoriesList list={categoryList} />
      </div>
    </aside>
  );
};

export default LeftPanel;

'use client';
import React from 'react';
import InputSearch from './Input/InputSearch';
import NavigationList from './NavigationList';
import { FaChalkboard } from 'react-icons/fa6';

const LeftPanel = () => {
  const navList = [
    {
      id: 1,
      icon: <FaChalkboard className="text-d4" />,
      label: 'Dashboard',
      to: '/',
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
      </div>
    </aside>
  );
};

export default LeftPanel;

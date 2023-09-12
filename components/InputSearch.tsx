import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const InputSearch = () => {
  return (
    <label className="relative bg-g1 dark:bg-dg10 w-full h-9 block rounded-sm overflow-hidden">
      <input
        type="search"
        className="bg-g1 dark:bg-dg10 dark:text-dg6  w-full h-full pl-10 py-2 pr-2"
        placeholder="Search"
      />
      <div className="absolute -translate-y-1/2 top-1/2 left-3">
        <FaMagnifyingGlass className="text-g4" />
      </div>
    </label>
  );
};

export default InputSearch;

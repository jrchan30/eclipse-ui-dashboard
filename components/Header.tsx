'use client';

import React, { useEffect, useState } from 'react';
// import { SlGrid } from 'react-icons/sl';
// import { Label } from '@/components/ui/label';
// import { Switch } from '@/components/ui/switch';
import { Switch } from '@/components/ui/switch';
import { FaChartSimple, FaTableCellsLarge, FaRegBell } from 'react-icons/fa6';
import {
  Theme,
  getCurrentTheme,
  setThemeLocalStorageAndDocument,
} from '../utils/darkLightMode';
// import darkLightMode from '../utils/darkLightMode';
import { Label } from '@/components/ui/label';

const Header = () => {
  const [theme, setTheme] = useState<Theme>(getCurrentTheme());
  const [isDark, setIsDark] = useState<boolean>(theme === Theme.dark);

  const onThemeChange = (checked: boolean) => {
    const currentTheme = checked ? Theme.dark : Theme.light;
    setTheme(currentTheme);
    setThemeLocalStorageAndDocument(currentTheme);
  };

  useEffect(() => {
    setIsDark(theme === Theme.dark);
  }, [theme]);

  return (
    <div className="h-16 flex justify-between items-center px-6 bg-g0 dark:bg-dg11">
      <div className="text-xl">ECLIPSE</div>
      <div className="flex gap-x-6 items-center">
        <div className="flex items-center space-x-2">
          <Switch
            id="theme-toggler"
            checked={isDark}
            onCheckedChange={onThemeChange}
          />
          <Label htmlFor="theme-toggler" className="capitalize">
            {theme}
          </Label>
        </div>
        <FaTableCellsLarge className="icon w-6 h-auto" />
        <FaChartSimple className="icon w-6 h-auto" />
        <FaRegBell className="icon w-6 h-auto" />
        <div className="flex gap-x-2.5">
          <div className="w-8 h-8 rounded-full bg-black dark:bg-white"></div>
          <div className="flex flex-col ">
            <div className="text-g8 text-sm font-semibold">Russell Chan</div>
            <div className="text-g5 text-xs">Frontend Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

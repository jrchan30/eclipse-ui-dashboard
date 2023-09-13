import Link from 'next/link';
import React from 'react';

interface ListItem {
  id: string | number;
  icon: React.ReactElement;
  label: string;
  children?: ListItem[];
  to?: string;
}

interface IProps {
  list: ListItem[];
}

const ListItem = ({ icon, label, children, to }: ListItem) => {
  const styledIcon = React.cloneElement(icon, {
    className: `${icon?.props?.className} w-6 h-auto icon`,
  });
  return (
    <Link href={to ?? '/'} className="flex gap-x-4 items-center py-1.5">
      <div>{styledIcon}</div>
      <div className="text-g8 font-medium">{label}</div>
    </Link>
  );
};

const NavigationList = ({ list }: IProps) => {
  const renderList = () => {
    return list.map((item) => {
      return <ListItem key={item.id} {...item} />;
    });
  };
  return <div className="flex flex-col gap-y-5">{renderList()}</div>;
};

export default NavigationList;

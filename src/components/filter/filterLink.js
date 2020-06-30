import React from 'react';

const FilterLink = ({ action, activeFilter, children, onClick }) => {
  const span = { tag: 'span' };
  const a = { tag: 'a', href: '#', onClick };

  const Component = action === activeFilter ? span : a

  return (
    <Component.tag
      href={ Component.href }
      onClick={ Component.onClick }
    >
      { children }
    </Component.tag>
  );
};

export default FilterLink;

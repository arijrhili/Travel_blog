// ui/Tag.js
import React from 'react';

interface TagProps {
  text:  string[];
}

const Tag = ({ text }: TagProps) => {
  const tagText = Array.isArray(text) ? text.join(', ') : text;

  return (
    <span className="uppercase bg-blue-900 py-1 px-3 text-white inline-block rounded-md text-sm self-center my-2">
      {tagText}
    </span>
  );
};

export default Tag;

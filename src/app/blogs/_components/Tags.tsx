import { TagsIcon } from 'lucide-react';
import React from 'react';

type TagsProps = {
  tags: string[];
};

const Tags: React.FC<TagsProps> = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center gap-[0.67px] sm:gap-1">
        <TagsIcon className="text-gray-300 text-[18px] md:text-[22px]" />
        <h3 className="text-gray-300 text-sm sm:text-lg font-semibold">Tags</h3>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-600 text-xs sm:text-sm bg-white/5 shadow-indigo-700 shadow-sm backdrop-filter backdrop-blur-md text-white border-0 px-2 py-1 sm:px-3 sm:py-2 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;

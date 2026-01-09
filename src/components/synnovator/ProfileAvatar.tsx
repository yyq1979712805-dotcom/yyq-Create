import React from 'react';
import { X } from 'lucide-react';

export const ProfileAvatar: React.FC = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="flex justify-center mt-[21px]">
      <button
        onClick={handleClose}
        className="aspect-[1] w-[92px] h-[92px] rounded-[50%] bg-[#DCDCDC] flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
        aria-label="关闭页面"
      >
        <X className="w-12 h-12 text-[#00000E]" />
      </button>
    </div>
  );
};

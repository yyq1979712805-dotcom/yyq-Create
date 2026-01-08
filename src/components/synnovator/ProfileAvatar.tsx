import React from 'react';

export const ProfileAvatar: React.FC = () => {
  return (
    <div className="flex justify-center mt-[21px]">
      <div className="aspect-[1] w-[92px] h-[92px] rounded-full overflow-hidden cursor-pointer hover:ring-4 hover:ring-blue-200 transition-all">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e847f604c815dedd3b4ba715b7034ba5b2d5ec8f?placeholderIfAbsent=true"
          alt="用户头像"
          className="aspect-[1] object-contain w-full h-full bg-[#DCDCDC]"
        />
      </div>
    </div>
  );
};

import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex w-full flex-col items-stretch">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/c2e9894eba2c84c95ff5e48db96c17506da413e9?placeholderIfAbsent=true"
        alt="Synnovator Logo"
        className="aspect-[4.74] object-contain w-[180px] max-w-full"
      />
      <div className="relative w-[264px] h-[20px] mt-1.5 px-[7px]">
        <div 
          className="absolute inset-0 rounded"
          style={{
            background: 'linear-gradient(90deg, rgba(178, 254, 225, 0.50) 0%, rgba(178, 254, 225, 0.00) 85.6%)'
          }}
        />
        <h1 className="relative text-[#00000E] text-xs leading-[22px] font-normal z-10">
          大家都在Synnovator寻找机会
        </h1>
      </div>
    </header>
  );
};

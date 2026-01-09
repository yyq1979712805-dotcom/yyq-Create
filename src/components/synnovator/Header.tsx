import React from 'react';
import logoImage from '../../assets/来协创，创个业.png';
import rectangleBg from '../../assets/Rectangle 4319.svg';

export const Header: React.FC = () => {
  return (
    <header className="flex w-full flex-col items-stretch">
      <img
        src={logoImage}
        alt="Synnovator Logo"
        className="aspect-[4.74] object-contain w-[180px] max-w-full"
      />
      <div className="relative w-[264px] h-[20px] mt-1.5 px-[7px]">
        <img
          src={rectangleBg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded"
        />
        <h1 
          className="relative text-[#00000E] text-xs leading-[22px] font-normal z-10"
          style={{
            height: '20px',
            verticalAlign: 'top',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'flex-start'
          }}
        >
          大家都在Synnovator寻找机会
        </h1>
      </div>
    </header>
  );
};

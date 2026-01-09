import React from 'react';
import { useNavigate } from 'react-router-dom';
import ufoBackground from '../../assets/ufo-background.svg';

export const FindTeammatesCard: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // 页面跳转接口：找队友页面
    // 可以修改为实际的路由路径，例如：navigate('/find-teammates')
    navigate('/find-teammates');
  };

  return (
    <article 
      onClick={handleNavigate}
      className="flex-1 rounded-xl px-[18px] py-[11px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center overflow-visible relative" 
      style={{ width: '150px', height: '72px' }}
      role="button"
      tabIndex={0}
      aria-label="找队友"
    >
      <img
        src={ufoBackground}
        alt="UFO background"
        className="absolute object-contain rounded-xl"
        style={{ width: '150px', height: '89px', boxSizing: 'content-box', top: '-16px', left: '0px' }}
      />
      <div className="relative flex items-center justify-between z-10">
        <div className="flex flex-col items-start" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', verticalAlign: 'middle' }}>
          <div className="text-[#00000E] text-base leading-none font-medium" style={{ fontWeight: 700, fontFamily: 'OPPOSans', height: '23px' }}>找队友</div>
          <div className="text-[#00000E] text-xs leading-[22px] font-normal text-right" style={{ width: '96px', height: '23px' }}>
            找呀找呀找朋友～
          </div>
        </div>
      </div>
    </article>
  );
};


import React from 'react';
import { useNavigate } from 'react-router-dom';
import ideaBackground from '../../assets/idea-background.svg';

export const FindIdeasCard: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // 页面跳转接口：找点子页面
    // 可以修改为实际的路由路径，例如：navigate('/find-ideas')
    navigate('/find-ideas');
  };

  return (
    <article 
      onClick={handleNavigate}
      className="flex-1 rounded-xl px-[18px] py-[11px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center overflow-visible relative" 
      style={{ width: '150px', height: '72px' }}
      role="button"
      tabIndex={0}
      aria-label="找点子"
    >
      <img
        src={ideaBackground}
        alt="Idea background"
        className="absolute object-contain rounded-xl"
        style={{ width: '150px', height: '89px', boxSizing: 'content-box', top: '-15px', left: '0px' }}
      />
      <div className="relative flex items-center justify-between z-10">
        <div className="flex flex-col items-start" style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <div className="text-[#00000E] text-base leading-none font-medium" style={{ fontWeight: 900, fontFamily: 'OPPOSans', height: '23px' }}>找点子</div>
          <div className="text-[#00000E] text-xs leading-[22px] font-normal text-right" style={{ width: '72px' }}>
            找个好点子～
          </div>
        </div>
      </div>
    </article>
  );
};


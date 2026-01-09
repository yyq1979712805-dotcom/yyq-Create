import React from 'react';
import { useNavigate } from 'react-router-dom';
import shejiaoBackground from '../../assets/shejiao.svg';

export const SocialMediaCard: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // 页面跳转接口：社交媒体页面
    // 可以修改为实际的路由路径，例如：navigate('/social-media')
    navigate('/social-media');
  };

  return (
    <article 
      onClick={handleNavigate}
      className="w-[188px] h-[72px] rounded-xl px-[18px] py-[11px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center overflow-visible relative"
      role="button"
      tabIndex={0}
      aria-label="社交媒体"
    >
      <img
        src={shejiaoBackground}
        alt="Social media background"
        className="absolute object-contain rounded-xl"
        style={{ width: '188px', height: '72px', boxSizing: 'content-box', top: '0px', left: '0px' }}
      />
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex flex-col items-start justify-start flex-1">
          <div className="text-[#00000E] text-sm leading-loose font-medium h-[23px]" style={{ fontWeight: 700, fontFamily: 'OPPOSans' }}>社交媒体</div>
          <div className="text-[#00000E] text-xs leading-[22px] font-normal text-right w-[156px]">
            发布一个小媒体啦啦啦啦啦～
          </div>
        </div>
      </div>
    </article>
  );
};


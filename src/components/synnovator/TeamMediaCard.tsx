import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TeamMediaCard: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // 页面跳转接口：团队媒体页面
    // 可以修改为实际的路由路径，例如：navigate('/team-media')
    navigate('/team-media');
  };

  return (
    <article 
      onClick={handleNavigate}
      className="w-[112px] h-[72px] bg-[#74FFBB] rounded-xl px-[17px] py-[13px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center"
      role="button"
      tabIndex={0}
      aria-label="团队媒体"
    >
      <div className="text-[#00000E] text-sm leading-loose font-medium text-left h-[23px]" style={{ fontWeight: 700, fontFamily: 'OPPOSans' }}>
        团队媒体
      </div>
      <div className="text-[#00000E] text-xs leading-[22px] font-normal text-left">
        团队相关哦
      </div>
    </article>
  );
};


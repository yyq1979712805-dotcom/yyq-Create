import React from 'react';
import { useNavigate } from 'react-router-dom';
import tianBackground from '../../assets/Tian-background.svg';

export const PublishProposalCard: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // 页面跳转接口：发布提案页面
    // 可以修改为实际的路由路径，例如：navigate('/publish-proposal')
    navigate('/publish-proposal');
  };

  return (
    <article 
      onClick={handleNavigate}
      className="mt-3 rounded-xl px-[18px] py-[13px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center overflow-visible relative h-[72px]"
      role="button"
      tabIndex={0}
      aria-label="发布提案"
    >
      <img
        src={tianBackground}
        alt="Tian background"
        className="absolute object-contain rounded-xl"
        style={{ width: '326px', height: '72px', boxSizing: 'content-box', top: '0px', left: '0px' }}
      />
      <div className="relative z-10">
        <div className="text-[#00000E] text-sm leading-loose font-medium text-left" style={{ fontWeight: 700, fontFamily: 'OPPOSans' }}>
          发布提案
        </div>
        <div className="text-[#00000E] text-xs leading-[22px] font-normal text-left">
          发布一个小提案啦啦啦啦啦～
        </div>
      </div>
    </article>
  );
};


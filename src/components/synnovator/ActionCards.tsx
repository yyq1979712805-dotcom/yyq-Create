import React from 'react';

export const FindTeammatesCard: React.FC = () => {
  return (
    <article className="w-[188px] h-[72px] bg-[#74FFBB] rounded-xl px-[18px] py-[11px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-start items-start">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-end">
          <div className="text-[#00000E] text-base leading-none font-medium">找队友</div>
          <div className="text-[#00000E] text-xs leading-[22px] font-normal text-left flex flex-wrap w-[53px] max-w-[53px] max-h-[66px] h-[23px]">
            找呀找呀找朋友～
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1bc0ad056d149fb989f7e72600cc951d8faa4cf6?placeholderIfAbsent=true"
          alt="找队友图标"
          className="aspect-[1.05] object-contain w-[62px] shrink-0 px-[1px] relative"
          style={{ top: '-40px', left: '18px' }}
        />
      </div>
    </article>
  );
};

export const FindIdeasCard: React.FC = () => {
  return (
    <article className="w-[188px] h-[72px] bg-[#BBFD3B] rounded-xl px-[18px] py-[11px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-start items-start">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-end">
          <div className="text-[#00000E] text-base leading-none font-medium text-left">找点子</div>
          <div className="text-[#00000E] text-xs leading-[22px] font-normal text-left flex flex-wrap w-[53px] max-w-[53px] max-h-[66px] h-[23px]">
            找个好点子～
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c7f50feba90297a5662a82ad859ec6852efc3246?placeholderIfAbsent=true"
          alt="找点子图标"
          className="aspect-[1] object-contain w-[52px] shrink-0"
        />
      </div>
    </article>
  );
};

export const PublishProposalCard: React.FC = () => {
  return (
    <article className="mt-3 bg-[#41FAF4] rounded-xl px-[18px] py-[13px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center">
      <div className="text-[#00000E] text-sm leading-loose font-medium text-left">
        发布提案
      </div>
      <div className="text-[#00000E] text-xs leading-[22px] font-normal text-left flex flex-wrap w-[53px] max-w-[53px] max-h-[66px] h-[23px]">
        发布一个小提案啦啦啦啦啦～
      </div>
    </article>
  );
};

export const SocialMediaCard: React.FC = () => {
  return (
    <article className="w-[188px] h-[72px] bg-[#8AFF80] rounded-xl px-[18px] py-[11px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-end flex-1">
          <div className="text-[#00000E] text-sm leading-loose font-medium">社交媒体</div>
          <div className="text-[#00000E] text-xs leading-[22px] font-normal text-left flex flex-wrap w-[53px] max-w-[53px] max-h-[66px] h-[23px]">
            发布一个小媒体啦啦啦啦啦～
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/720731aab5f5b3b84e6915def17799088ec1bc1b?placeholderIfAbsent=true"
          alt="社交媒体图标"
          className="aspect-[1] object-contain w-9 shrink-0 ml-2"
        />
      </div>
    </article>
  );
};

export const TeamMediaCard: React.FC = () => {
  return (
    <article className="flex-1 bg-[#74FFBB] rounded-xl px-[17px] py-[13px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center">
      <div className="text-[#00000E] text-sm leading-loose font-medium text-right">
        团队媒体
      </div>
      <div className="text-[#00000E] text-xs leading-[22px] font-normal text-right">
        团队相关哦
      </div>
    </article>
  );
};

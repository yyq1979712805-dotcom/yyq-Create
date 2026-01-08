import React from 'react';

export const CreateTeamCard: React.FC = () => {
  return (
    <article className="flex flex-col overflow-hidden relative aspect-[4.306] w-full items-stretch mt-3 pl-[18px] pr-[18px] py-[9px] justify-center">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a7e2210d0256dbe24330672b0d7811cd1e82f4be?placeholderIfAbsent=true"
        alt="Team creation background"
        className="absolute h-full w-full object-cover inset-0 rounded-xl"
      />
      <div className="relative flex w-full gap-5 justify-between items-center">
        <div className="flex flex-col items-end">
          <div className="text-[#00000E] text-sm leading-loose font-medium">
            创建团队
          </div>
          <p className="text-[#00000E] text-xs leading-[22px] font-normal text-right">
            我要找志同道合的朋友们
          </p>
        </div>
        <button className="justify-center items-center bg-[#00000E] flex h-[24px] gap-1.5 text-xs text-white px-3 rounded-[15.75px] hover:bg-gray-800 transition-colors">
          <span className="font-normal">加入队伍</span>
        </button>
      </div>
    </article>
  );
};

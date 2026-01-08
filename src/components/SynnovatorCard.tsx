import React from 'react';

// Header Component
const Header: React.FC = () => {
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

// Find Teammates Card
const FindTeammatesCard: React.FC = () => {
  return (
    <article className="flex-1 bg-[#74FFBB] rounded-xl px-[18px] py-[11px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-end">
          <div className="text-[#00000E] text-base leading-none font-medium">找队友</div>
          <div className="text-[#00000E] text-xs leading-[22px] font-normal text-right">
            找呀找呀找朋友～
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/1bc0ad056d149fb989f7e72600cc951d8faa4cf6?placeholderIfAbsent=true"
          alt="找队友图标"
          className="aspect-[1.05] object-contain w-[62px] shrink-0"
        />
      </div>
    </article>
  );
};

// Find Ideas Card
const FindIdeasCard: React.FC = () => {
  return (
    <article className="flex-1 bg-[#BBFD3B] rounded-xl px-[18px] py-[11px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-end">
          <div className="text-[#00000E] text-base leading-none font-medium">找点子</div>
          <div className="text-[#00000E] text-xs leading-[22px] font-normal text-right">
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

// Publish Proposal Card
const PublishProposalCard: React.FC = () => {
  return (
    <article className="mt-3 bg-[#41FAF4] rounded-xl px-[18px] py-[13px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center">
      <div className="text-[#00000E] text-sm leading-loose font-medium text-right">
        发布提案
      </div>
      <div className="text-[#00000E] text-xs leading-[22px] font-normal text-right">
        发布一个小提案啦啦啦啦啦～
      </div>
    </article>
  );
};

// Social Media Card
const SocialMediaCard: React.FC = () => {
  return (
    <article className="flex-1 bg-[#8AFF80] rounded-xl px-[18px] py-[11px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-end flex-1">
          <div className="text-[#00000E] text-sm leading-loose font-medium">社交媒体</div>
          <div className="text-[#00000E] text-xs leading-[22px] font-normal text-right">
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

// Team Media Card
const TeamMediaCard: React.FC = () => {
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

// Create Team Card
const CreateTeamCard: React.FC = () => {
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

// Profile Avatar
const ProfileAvatar: React.FC = () => {
  return (
    <div className="flex justify-center mt-[21px]">
      <div className="aspect-[1] w-[92px] h-[92px] rounded-[50%] overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e847f604c815dedd3b4ba715b7034ba5b2d5ec8f?placeholderIfAbsent=true"
          alt="用户头像"
          className="aspect-[1] object-contain w-full h-full bg-[#DCDCDC]"
        />
      </div>
    </div>
  );
};

// Main Synnovator Card Component
export const SynnovatorCard: React.FC = () => {
  return (
    <main 
      className="w-[328px] h-[720px] font-normal mx-auto rounded-[20px]"
      style={{
        background: 'linear-gradient(359deg, #FFF 12.31%, #F7FEFF 79.66%, #47FFB2 112.32%)'
      }}
    >
      <div className="flex w-full flex-col items-stretch pt-4 pb-2.5 px-[9px]">
        <Header />
        
        {/* Main action cards */}
        <section className="flex w-full items-stretch gap-2 mt-[193px]">
          <FindTeammatesCard />
          <FindIdeasCard />
        </section>

        {/* Publish proposal */}
        <PublishProposalCard />

        {/* Media cards */}
        <section className="flex items-stretch gap-2 mt-3">
          <SocialMediaCard />
          <TeamMediaCard />
        </section>

        {/* Create team */}
        <CreateTeamCard />

        {/* Profile avatar */}
        <ProfileAvatar />
      </div>
    </main>
  );
};

export default SynnovatorCard;

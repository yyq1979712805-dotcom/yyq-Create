import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateTeamCard: React.FC = () => {
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);
  const navigate = useNavigate();

  const handleCreateTeam = () => {
    // 页面跳转接口：创建团队页面
    // 可以修改为实际的路由路径，例如：navigate('/create-team')
    navigate('/create-team');
  };

  const handleJoinTeam = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 阻止事件冒泡
    // 页面跳转接口：加入队伍页面
    // 可以修改为实际的路由路径，例如：navigate('/join-team')
    navigate('/join-team');
  };

  return (
    <article className="flex flex-col overflow-visible relative aspect-[4.306] w-full items-stretch mt-3 pl-[18px] pr-[18px] py-[9px] justify-center group h-[72px]">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 310 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        onClick={handleCreateTeam}
        className={`absolute inset-0 h-full w-full rounded-xl cursor-pointer transition-transform origin-center ${!isButtonHovered ? 'group-hover:scale-[1.02]' : ''}`}
        style={{ pointerEvents: 'auto', height: '72px' }}
        role="button"
        tabIndex={0}
        aria-label="创建团队"
      >
        <path
          d="M232.821 17.1445C234.696 24.1378 241.034 29 248.274 29H298C304.627 29 310 34.3726 310 41V60C310 66.6274 304.627 72 298 72H12C5.37259 72 0 66.6274 0 60V12C0 5.37258 5.37258 0 12 0H219.017C224.447 0 229.201 3.64668 230.607 8.89163L232.821 17.1445Z"
          fill="#FF74A7"
          style={{ pointerEvents: 'auto', verticalAlign: 'top' }}
        />
        <path
          d="M280.418 57.3552C280.639 52.9819 282.76 48.8389 287.366 48.8389C291.972 48.8389 294.093 52.9819 294.314 57.3552C294.336 57.7823 293.987 58.1292 293.56 58.1292H281.173C280.745 58.1292 280.396 57.7823 280.418 57.3552Z"
          fill="white"
          stroke="#00000E"
          strokeWidth="1.74194"
          style={{ pointerEvents: 'none' }}
        />
        <circle
          cx="287.367"
          cy="43.4193"
          r="3"
          fill="white"
          stroke="#00000E"
          strokeWidth="1.74194"
          style={{ pointerEvents: 'none' }}
        />
        <path
          d="M270.356 59.6776C270.602 55.3042 272.958 51.1611 278.076 51.1611C283.194 51.1611 285.55 55.3042 285.796 59.6776C285.82 60.1045 285.471 60.4515 285.044 60.4515H271.108C270.681 60.4515 270.332 60.1045 270.356 59.6776Z"
          fill="#BBFD3B"
          stroke="#00000E"
          strokeWidth="2"
          style={{ pointerEvents: 'none' }}
        />
        <circle
          cx="278.077"
          cy="44.9679"
          r="3.64516"
          fill="white"
          stroke="#00000E"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pointerEvents: 'none' }}
        />
      </svg>
      <div className="relative flex w-full h-[72px] gap-[88px] justify-between items-start pointer-events-none">
        <div className={`flex flex-col items-start justify-center h-[72px] pointer-events-none transition-transform origin-center ${!isButtonHovered ? 'group-hover:scale-[1.02]' : ''}`}>
          <div className="text-[#00000E] text-sm leading-loose font-medium h-[23px]" style={{ display: 'flex', flexWrap: 'wrap', fontWeight: 900, fontFamily: 'OPPOSans' }}>
            创建团队
          </div>
          <p className="text-[#00000E] text-xs leading-[22px] font-normal text-left h-[23px] w-[132px]">
            我要找志同道合的朋友们
          </p>
        </div>
        <button
          onClick={handleJoinTeam}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          className="justify-center items-center bg-[#00000E] flex h-[24px] gap-1.5 text-xs text-white px-3 rounded-[15.75px] hover:bg-gray-800 hover:scale-105 transition-all cursor-pointer pointer-events-auto relative z-10"
          aria-label="加入队伍"
        >
          <span className="font-normal inline-block w-[48px]">加入队伍</span>
        </button>
      </div>
    </article>
  );
};

import React from 'react';
import { Header } from './synnovator/Header';
import { FindTeammatesCard } from './synnovator/FindTeammatesCard';
import { FindIdeasCard } from './synnovator/FindIdeasCard';
import { PublishProposalCard } from './synnovator/PublishProposalCard';
import { SocialMediaCard } from './synnovator/SocialMediaCard';
import { TeamMediaCard } from './synnovator/TeamMediaCard';
import { CreateTeamCard } from './synnovator/CreateTeamCard';
import { ProfileAvatar } from './synnovator/ProfileAvatar';

// Main Synnovator Card Component
export const SynnovatorCard: React.FC = () => {
  return (
    <main 
      className="w-[328px] h-[720px] font-normal mx-auto rounded-[20px]"
      style={{
        background: 'linear-gradient(359deg, #FFF 12.31%, #F7FEFF 79.66%, #47FFB2 112.32%)'
      }}
    >
      <div className="flex w-full flex-col items-stretch pt-4 pb-2.5 px-[9px]" style={{ height: '720px' }}>
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

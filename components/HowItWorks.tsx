import React from 'react';

const StepIcon: React.FC<{ number: string; icon: React.ReactNode }> = ({ number, icon }) => (
    <div className="relative flex items-center justify-center">
        <div className="absolute w-20 h-20 bg-cyan-500/10 rounded-full blur-lg"></div>
        <div className="relative w-16 h-16 bg-gray-800 border border-white/10 rounded-full flex items-center justify-center text-cyan-400">
            {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-700 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-[#0D1117]">
            {number}
        </div>
    </div>
);

const RocketLaunchIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.18a14.98 14.98 0 00-2.58 5.84m2.58 6.16a14.98 14.98 0 01-7.38-5.84m12.12 6.16a14.98 14.98 0 01-6.16 2.58m6.16-2.58a14.98 14.98 0 01-2.58-6.16m-5.84 7.38a14.98 14.98 0 01-5.84-2.58" />
    </svg>
);

const ArrowTrendingUpIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.328 4.329 8.16-8.16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6H21v6.75" />
    </svg>
);

const UsersIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663c.422.51.713 1.06.786 1.653v.003z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
    </svg>
);


const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-black/20">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Get Started in 3 Simple Steps
        </h2>
        <p className="text-gray-400 mt-4">
            Launch your on-chain cooperative and begin your journey towards decentralized financial autonomy.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
            <StepIcon number="1" icon={<RocketLaunchIcon />} />
            <h3 className="mt-6 font-bold text-lg text-white">Launch your DAO</h3>
            <p className="mt-2 text-sm text-gray-400">
                Define your cooperative's rules, contribution amounts, and governance parameters in a simple interface. Deploy your unique smart contract to the blockchain with a single click.
            </p>
        </div>
        
        {/* Connector */}
        <div className="hidden md:flex items-center justify-center">
            <div className="w-full border-t-2 border-dashed border-white/10"></div>
        </div>

        {/* Step 2 */}
         <div className="flex flex-col items-center text-center">
            <StepIcon number="2" icon={<ArrowTrendingUpIcon />} />
            <h3 className="mt-6 font-bold text-lg text-white">Contribute & Earn</h3>
            <p className="mt-2 text-sm text-gray-400">
                Members contribute funds directly to the secure DAO treasury. Capital is automatically put to work in DeFi protocols, generating yield for the entire cooperative.
            </p>
        </div>

        {/* Connector - Mobile */}
        <div className="flex md:hidden items-center justify-center my-4">
            <div className="h-12 w-px bg-white/10"></div>
        </div>

        {/* This is a bit of a hack for the connector on desktop grid */}
        <div className="hidden md:flex items-center justify-center">
            <div className="w-full border-t-2 border-dashed border-white/10"></div>
        </div>
        <div className="col-start-1 col-end-2 hidden md:block"></div> {/* Spacer */}
        
        {/* Step 3 */}
         <div className="flex flex-col items-center text-center md:col-start-3">
            <StepIcon number="3" icon={<UsersIcon />} />
            <h3 className="mt-6 font-bold text-lg text-white">Govern & Grow</h3>
            <p className="mt-2 text-sm text-gray-400">
                Propose and vote on changes to the cooperative's rules. Approve loans and manage the treasury collectively. Your on-chain reputation grows with your participation.
            </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import React from 'react';

const CodeBracketIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const LockClosedIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const GlobeAltIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 00-9-9" />
    </svg>
);

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient }) => (
    <div className="bg-gray-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1">
        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${gradient}`}>
            {icon}
        </div>
        <h3 className="font-bold text-white text-lg">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
    </div>
);

const Features: React.FC = () => {
    const featuresData = [
        {
            icon: <CodeBracketIcon />,
            title: "Rules as Code",
            description: "Cooperative rules are deployed as immutable smart contracts, ensuring automated and tamper-proof execution.",
            gradient: 'from-cyan-500 to-blue-600 text-white'
        },
        {
            icon: <LockClosedIcon />,
            title: "Yield-Bearing Vaults",
            description: "Locked savings are automatically staked in audited DeFi protocols, generating passive income for members.",
            gradient: 'from-green-500 to-emerald-600 text-white'
        },
        {
            icon: <GlobeAltIcon />,
            title: "On-Chain Reputation",
            description: "Build a transferable Trust Score with a Soul-Bound Token (SBT) based on your financial activity and governance.",
            gradient: 'from-purple-500 to-indigo-600 text-white'
        }
    ];

  return (
    <section id="features" className="py-16 md:py-24 px-6 md:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
                An Advanced Financial Operating System
            </h2>
            <p className="text-gray-400 mt-4">
                Zamuka combines the trust of blockchain with the power of DeFi to create a new paradigm for cooperative finance.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuresData.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </div>
    </section>
  );
};

export default Features;
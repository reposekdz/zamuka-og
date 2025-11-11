import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative hero-bg text-center px-6 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                Autonomous Cooperative Finance.
                <br />
                Built on Trust, Powered by Code.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
                Deploy financial DAOs where rules are enforced by smart contracts.
                <br />
                Total transparency, security, and member governance.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-green-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-green-400 transition-all transform hover:scale-105 glow-effect">
                    Launch Your DAO
                </button>
                <button className="w-full sm:w-auto bg-white/5 text-white font-bold px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/10 transition-all">
                    Explore Cooperatives
                </button>
            </div>
        </div>
    </div>
  );
};

export default Hero;
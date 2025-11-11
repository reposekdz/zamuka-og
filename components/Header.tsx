import React, { useState } from 'react';

const ZamukaLogo: React.FC = () => (
    <div className="flex items-center space-x-3">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3V21L18 12L8 3Z" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 3V21L4 12L14 3Z" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee"/>
                    <stop offset="100%" stopColor="#4ade80"/>
                </linearGradient>
            </defs>
        </svg>
        <span className="text-white text-2xl font-bold">Zamuka</span>
    </div>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
    {children}
  </a>
);

const WalletIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);


const Header: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => setIsConnected(!isConnected);

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-x-0 top-0 h-20 bg-black/30 backdrop-blur-lg"></div>
      <nav className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <ZamukaLogo />
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#">Dashboard</NavLink>
          <NavLink href="#">Governance</NavLink>
          <NavLink href="#">Docs</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleConnect}
            className="flex items-center bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-semibold text-sm px-4 py-2 rounded-lg border border-cyan-500/30 transition-all transform hover:scale-105"
          >
            {isConnected ? (
              <>
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                0x1A2...b3C4
              </>
            ) : (
              <>
                <WalletIcon />
                Connect Wallet
              </>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
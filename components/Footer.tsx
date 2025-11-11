import React from 'react';

const ZamukaLogo: React.FC = () => (
    <div className="flex items-center space-x-3">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M8 3V21L18 12L8 3Z" stroke="url(#logo-gradient-footer)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 3V21L4 12L14 3Z" stroke="url(#logo-gradient-footer)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            <defs>
                <linearGradient id="logo-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee"/>
                    <stop offset="100%" stopColor="#4ade80"/>
                </linearGradient>
            </defs>
        </svg>
        <span className="text-white text-2xl font-bold">Zamuka</span>
    </div>
);


const SocialIcon: React.FC<{ href: string, 'aria-label': string, children: React.ReactNode }> = ({ href, 'aria-label': ariaLabel, children }) => (
    <a href={href} aria-label={ariaLabel} className="text-gray-400 hover:text-white transition-colors">
        {children}
    </a>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 border-t border-white/10 text-white py-12 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="col-span-2 md:col-span-2">
                    <ZamukaLogo />
                    <p className="mt-4 text-sm text-gray-400 max-w-xs">
                        The decentralized platform for autonomous cooperative finance.
                    </p>
                </div>

                <div className="text-sm">
                    <h4 className="font-bold mb-4 text-gray-200">Platform</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#features" className="hover:text-white">Features</a></li>
                        <li><a href="#" className="hover:text-white">Dashboard</a></li>
                        <li><a href="#" className="hover:text-white">Governance</a></li>
                    </ul>
                </div>

                <div className="text-sm">
                    <h4 className="font-bold mb-4 text-gray-200">Resources</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-white">Documentation</a></li>
                        <li><a href="#" className="hover:text-white">Help Center</a></li>
                        <li><a href="#" className="hover:text-white">FAQ</a></li>
                    </ul>
                </div>

                <div className="text-sm col-span-2 md:col-span-1">
                    <h4 className="font-bold mb-4 text-gray-200">Socials</h4>
                    <div className="flex space-x-4">
                        <SocialIcon href="#" aria-label="X (formerly Twitter)">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H4.68l4.717 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </SocialIcon>
                        <SocialIcon href="#" aria-label="Discord">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v19.056c0 1.368-1.104 2.472-2.46 2.472h-15.08c-1.356 0-2.46-1.104-2.46-2.472v-19.056c0-1.368 1.104-2.472 2.46-2.472h15.08zm-4.72 14.64c-.432 1.224-1.344 2.208-2.616 2.76-1.2.48-2.52.48-3.72 0-1.272-.552-2.184-1.536-2.616-2.76h8.952zm-3.84-6.48c.816 0 1.488.672 1.488 1.488s-.672 1.488-1.488 1.488-1.488-.672-1.488-1.488.672-1.488 1.488-1.488zm-4.08 0c.816 0 1.488.672 1.488 1.488s-.672 1.488-1.488 1.488-1.488-.672-1.488-1.488.672-1.488 1.488-1.488z" /></svg>
                        </SocialIcon>
                        <SocialIcon href="#" aria-label="GitHub">
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Zamuka Protocol. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
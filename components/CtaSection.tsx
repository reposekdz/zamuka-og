import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative text-white py-16 md:py-24 px-6 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-[#0D1117] to-[#0D1117]"></div>
      <div className="relative text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
          Ready to Revolutionize Your
          <br/>
          Cooperative's Finances?
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Join the future of finance. Deploy your DAO in minutes and unlock the full potential of your community's capital.
        </p>
        <button className="mt-8 bg-green-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-green-400 transition-all transform hover:scale-105 glow-effect">
          Start Building Today
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
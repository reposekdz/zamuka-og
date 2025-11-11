import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-cyan-400">
            {value}
        </p>
        <p className="mt-1 text-sm text-gray-400 uppercase tracking-wider">{label}</p>
    </div>
);


const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-black/20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard value="$12.8M+" label="Total Value Locked" />
                <StatCard value="1,204" label="Active Cooperatives" />
                <StatCard value="2.1M+" label="Transactions Processed" />
            </div>
        </div>
    </section>
  );
};

export default Stats;

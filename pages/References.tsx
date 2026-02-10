
import React from 'react';
import PageCard from '../components/PageCard';

const References: React.FC = () => {
  const refs = [
    { title: "McKinsey & Company", year: "2023", desc: "The future of logistics and supply chain automation" },
    { title: "DHL Logistics Trend Radar", year: "2024", desc: "Key technologies shaping the industry" },
    { title: "Amazon Robotics", year: "Official Tech Blog", desc: "Fulfillment center innovation documentation" },
    { title: "IBM AI in Supply Chain", year: "Whitepaper", desc: "Predictive analytics for inventory management" },
    { title: "World Economic Forum", year: "2023", desc: "Digital transformation of global trade" }
  ];

  return (
    <PageCard>
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
        📚 References
      </h1>

      <div className="overflow-hidden border border-slate-200 rounded-2xl">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Source</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Year/Type</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider hidden md:table-cell">Details</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {refs.map((ref, idx) => (
              <tr key={idx} className="hover:bg-sky-50/30 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">{ref.title}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{ref.year}</td>
                <td className="px-6 py-4 text-sm text-slate-500 hidden md:table-cell">{ref.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageCard>
  );
};

export default References;

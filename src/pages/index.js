import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-nexusCyan">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-white/10">
        <div className="text-2xl font-black tracking-tighter">NEXUS<span className="text-nexusCyan italic">PRO</span></div>
        <div className="space-x-8 text-xs uppercase tracking-widest hidden md:flex">
          <a href="#" className="hover:text-nexusCyan">Tournaments</a>
          <a href="#" className="hover:text-nexusCyan">Pro Shop</a>
          <a href="#" className="hover:text-nexusCyan">Live Hub</a>
        </div>
        <button className="px-5 py-2 border border-nexusCyan text-nexusCyan text-xs font-bold uppercase hover:bg-nexusCyan hover:text-black transition-all">
          Connect Wallet
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center pt-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            UNLEASH<br/>THE BEAST
          </h1>
          <p className="text-nexusCyan font-mono tracking-[0.3em] uppercase text-sm mb-10">
            // Low Latency Infrastructure V99
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-black uppercase skew-x-[-12deg] hover:bg-nexusCyan transition-colors">
              Enter Arena
            </button>
            <button className="px-8 py-4 border border-white/20 font-black uppercase skew-x-[-12deg] hover:bg-white/10 transition-colors">
              View Gear
            </button>
          </div>
        </motion.div>

        {/* Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-6xl">
          {[
            { title: 'Global Ranks', val: '#124' },
            { title: 'Active Nodes', val: '89' },
            { title: 'Nexus XP', val: '12.4k' }
          ].map((item, i) => (
            <div key={i} className="neon-border p-8 bg-white/5 backdrop-blur-sm rounded-sm">
              <p className="text-xs uppercase text-gray-500 mb-2">{item.title}</p>
              <h2 className="text-3xl font-black text-white italic">{item.val}</h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

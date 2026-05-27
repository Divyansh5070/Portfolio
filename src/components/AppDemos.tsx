import React from 'react';
import { PhoneMockup } from './PhoneMockup';
import { motion } from 'motion/react';
import { Play, TrendingUp, Bell, Home, Search, User, CreditCard, ShoppingBag, Heart, Star, Target, Flame, Code } from 'lucide-react';
import { ProjectDemoData } from '../types';

export function FitnessAppDemo() {
  return (
    <PhoneMockup>
      <div className="h-full flex flex-col bg-[#0d160b]">
        <div className="px-5 pt-12 pb-4">
          <p className="text-[#a5d898] text-sm">Good morning,</p>
          <h2 className="text-2xl font-bold mt-1 text-white">Let's move!</h2>
        </div>
        
        <div className="px-5 space-y-4 flex-1">
          {/* Main Stats Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-[#1a2d18] rounded-3xl p-5 relative overflow-hidden"
          >
            <div className="relative z-10">
              <p className="text-white/70 text-sm">Daily Goal</p>
              <h3 className="text-3xl font-bold text-[#b4ed9d] mt-1">8,240</h3>
              <p className="text-white/50 text-xs">/ 10,000 steps</p>
            </div>
            
            {/* Fake Chart / Graphic */}
            <div className="mt-6 flex items-end gap-2 h-16">
              {[40, 60, 30, 80, 50, 90, 45].map((h, i) => (
                <div key={i} className="w-full bg-[#32522e] rounded-t-sm relative">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="absolute bottom-0 w-full bg-[#b4ed9d] rounded-t-sm"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex gap-4">
            <div className="bg-[#1a2d18] rounded-2xl p-4 flex-1">
               <TrendingUp className="text-[#b4ed9d] w-6 h-6 mb-2" />
               <p className="text-white font-medium text-lg">1.2m</p>
               <p className="text-white/50 text-xs">Distance</p>
            </div>
            <div className="bg-[#1a2d18] rounded-2xl p-4 flex-1">
               <Heart className="text-red-400 w-6 h-6 mb-2" />
               <p className="text-white font-medium text-lg">112</p>
               <p className="text-white/50 text-xs">Avg BPM</p>
            </div>
          </div>
          
          {/* Activity List */}
          <div className="space-y-3 mt-4">
            <h4 className="font-semibold text-white">Recent Workouts</h4>
            {[
              { icon: Play, title: "Morning Run", time: "25 min", cal: "320 kcal", bg: "bg-blue-500/20", c: "text-blue-400" },
              { icon: Play, title: "HIIT Session", time: "45 min", cal: "550 kcal", bg: "bg-orange-500/20", c: "text-orange-400" }
            ].map((w, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-[#1a2d18]/50 rounded-xl">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${w.bg} ${w.c}`}>
                  <w.icon className="w-5 h-5 ml-0.5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{w.title}</p>
                  <p className="text-xs text-white/50">{w.time}</p>
                </div>
                <p className="text-xs font-semibold text-[#b4ed9d]">{w.cal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="h-16 bg-[#1a2d18]/80 backdrop-blur-md flex items-center justify-around px-4 rounded-t-3xl pb-2">
          <Home className="w-6 h-6 text-[#b4ed9d]" />
          <Search className="w-6 h-6 text-white/40" />
          <Bell className="w-6 h-6 text-white/40" />
          <User className="w-6 h-6 text-white/40" />
        </div>
      </div>
    </PhoneMockup>
  );
}

export function CommerceAppDemo() {
  return (
    <PhoneMockup>
      <div className="h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <div className="px-5 pt-12 pb-2 flex justify-between items-center">
          <h2 className="text-xl font-bold font-display">Discover</h2>
          <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center relative">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-zinc-50 dark:border-zinc-950"></span>
          </div>
        </div>

        {/* Categories */}
        <div className="flex px-5 gap-3 overflow-x-auto scrollbar-hide py-3">
           {['All', 'Sneakers', 'Apparel', 'Accessories'].map((cat, i) => (
             <div key={i} className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'}`}>
               {cat}
             </div>
           ))}
        </div>

        <div className="px-5 mt-4 flex-1">
          {/* Featured Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-5 relative overflow-hidden flex flex-col justify-end shadow-lg shadow-indigo-500/20"
          >
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-2 py-1 flex items-center gap-1">
               <Heart className="w-3 h-3 text-white fill-white" />
            </div>
            {/* Sneaker Graphic placeholder */}
            <motion.div 
              initial={{ x: 50, scale: 0.8 }}
              whileInView={{ x: 0, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-4 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            />
            
            <p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">New Drop</p>
            <h3 className="text-white text-xl font-bold leading-tight">Air Max<br/>Pulse XR</h3>
            <p className="text-white font-medium mt-2">$189.00</p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="space-y-2">
              <div className="bg-zinc-200 dark:bg-zinc-800 rounded-2xl h-32 w-full p-3 flex flex-col justify-between">
                <Heart className="w-4 h-4 text-zinc-400 self-end" />
                <div className="w-16 h-16 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-auto self-center opacity-50"></div>
              </div>
              <div>
                <p className="text-xs font-semibold">Urban Explorer</p>
                <p className="text-[10px] text-zinc-500">$120.00</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-zinc-200 dark:bg-zinc-800 rounded-2xl h-32 w-full p-3 flex flex-col justify-between">
                <Heart className="w-4 h-4 text-zinc-400 self-end" />
                <div className="w-16 h-16 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-auto self-center opacity-50"></div>
              </div>
              <div>
                <p className="text-xs font-semibold">Neon Runner</p>
                <p className="text-[10px] text-zinc-500">$145.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="h-16 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-around px-4 rounded-t-3xl pb-2">
          <Home className="w-5 h-5 text-indigo-600" />
          <Search className="w-5 h-5 text-zinc-400" />
          <CreditCard className="w-5 h-5 text-zinc-400" />
          <User className="w-5 h-5 text-zinc-400" />
        </div>
      </div>
    </PhoneMockup>
  );
}

const IconMap = {
  Play,
  TrendingUp,
  ShoppingBag,
  Heart,
  Star,
  Target,
  Flame,
  Code
};

interface GenericAppDemoProps {
  demoData?: ProjectDemoData;
}

export function GenericAppDemo({ demoData }: GenericAppDemoProps) {
  const accentColor = demoData?.accentColor || '#06b6d4'; // default cyan
  const backgroundColor = demoData?.backgroundColor || '#09090b'; // default zinc-950
  const subtitle = demoData?.subtitle || 'Welcome back,';
  const headerTitle = demoData?.headerTitle || 'My App';
  
  return (
    <PhoneMockup>
      <div className="h-full flex flex-col" style={{ backgroundColor }}>
        {/* Header */}
        <div className="px-5 pt-12 pb-4">
          <p className="text-sm opacity-70 font-semibold" style={{ color: accentColor }}>{subtitle}</p>
          <h2 className="text-2xl font-bold mt-1 text-white">{headerTitle}</h2>
        </div>
        
        {/* Scrollable Content */}
        <div className="px-5 space-y-4 flex-1 overflow-y-auto pb-4 scrollbar-hide">
          {/* Stats / Cards Grid */}
          {demoData?.stats && demoData.stats.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {demoData.stats.map((stat, i) => {
                const IconComponent = stat.icon ? IconMap[stat.icon] : null;
                return (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between"
                  >
                    {IconComponent && <IconComponent className="w-5 h-5 mb-2" style={{ color: accentColor }} />}
                    <div>
                      <p className="text-white font-semibold text-lg">{stat.value}</p>
                      <p className="text-white/50 text-xs">{stat.label}</p>
                      {stat.subValue && <p className="text-[10px] opacity-40 mt-0.5">{stat.subValue}</p>}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* List Items */}
          {demoData?.listItems && demoData.listItems.length > 0 && (
            <div className="space-y-2 mt-4">
              {demoData.listItems.map((item, i) => {
                const IconComponent = item.icon ? IconMap[item.icon] : Play;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.bg || 'bg-white/10'} ${item.c || 'text-white'}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">{item.title}</p>
                      <p className="text-[10px] text-white/50 truncate">{item.subtitle}</p>
                    </div>
                    {item.rightText && (
                      <p className="text-[10px] font-semibold" style={{ color: accentColor }}>{item.rightText}</p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom Nav */}
        <div className="h-16 bg-white/5 border-t border-white/10 backdrop-blur-md flex items-center justify-around px-4 rounded-t-3xl pb-2">
          <Home className="w-5 h-5" style={{ color: accentColor }} />
          <Search className="w-5 h-5 text-white/40" />
          <Bell className="w-5 h-5 text-white/40" />
          <User className="w-5 h-5 text-white/40" />
        </div>
      </div>
    </PhoneMockup>
  );
}

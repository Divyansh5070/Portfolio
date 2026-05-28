import React from 'react';

export function PhoneMockup({ children, className = '' }) {
  return (
    <div className={`relative mx-auto border-zinc-800 bg-zinc-950 border-[8px] rounded-[2.5rem] h-[550px] w-[270px] shadow-2xl shadow-cyan-900/10 overflow-hidden flex-shrink-0 ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-5 bg-zinc-800 rounded-b-2xl w-28 mx-auto z-30">
        {/* Camera / Sensor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-zinc-950 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-zinc-800/80"></div>
        </div>
      </div>
      
      {/* Status Bar Fake */}
      <div className="absolute top-1 left-4 z-20 text-[10px] font-medium text-white/90">9:41</div>
      <div className="absolute top-1 right-4 z-20 flex items-center gap-1">
        <div className="w-3 h-2.5 bg-white/90 rounded-[2px]"></div>
        <div className="w-3 h-2.5 bg-white/90 rounded-full"></div>
      </div>

      {/* Screen Area */}
      <div className="relative h-full w-full overflow-y-auto overflow-x-hidden scrollbar-hide rounded-[1.8rem] z-10 bg-zinc-900 text-white">
        {children}
      </div>
    </div>
  );
}

"use client";
import { GitBranch, XCircle, Bell, CheckCheck, AlertTriangle } from 'lucide-react';

const StatusBar = () => {
  return (
    <div className="bg-[#007acc] h-6 flex items-center justify-between text-white text-[11px] px-2 select-none z-50 font-sans">
      <div className="flex items-center gap-3 h-full">
        <a 
          href="https://github.com/zoo-hair/zoo-hair.github.io" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors"
        >
          <GitBranch size={12} />
          <span className="font-medium">main*</span>
        </a>
        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors">
          <XCircle size={12} />
          <span>0</span>
          <AlertTriangle size={12} className="ml-0.5" />
          <span>0</span>
        </div>
      </div>
      
      <div className="flex items-center gap-3 h-full">
         <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors hidden sm:flex">
          <span>Ln 20, Col 4</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors hidden sm:flex">
           <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors">
          <span>JavaScript React</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors">
          <CheckCheck size={12} />
          <span className="hidden sm:inline">Prettier</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors">
          <Bell size={12} />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

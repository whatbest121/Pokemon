import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search, X } from 'lucide-react';

interface SearchPokemonProps {
  setName: (name: string) => void;
  handleOnClickSearch: () => void;
  handleClearSearch?: () => void;
  name: string;
}

export const SearchPokemon = ({ 
  setName, 
  handleOnClickSearch, 
  handleClearSearch,
  name 
}: SearchPokemonProps) => {
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnClickSearch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="relative">
      {/* Pokeball icon */}
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"/>
          <line x1="1" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      <div className="flex shadow-lg rounded-full overflow-hidden">
        <Input
          value={name}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="ค้นหาโปเกมอนจากชื่อหรือไอดี..."
          className="bg-slate-800/80 text-white rounded-l-full border-0 pl-10 py-6 focus-visible:ring-blue-500 focus-visible:ring-2"
        />
        
        {name && (
          <Button 
            onClick={handleClearSearch} 
            variant="ghost" 
            className="bg-slate-800/80 border-0 hover:bg-slate-700 text-gray-400 hover:text-white"
          >
            <X size={18} />
          </Button>
        )}

        <Button 
          onClick={handleOnClickSearch}
          className="rounded-r-full bg-blue-600 hover:bg-blue-700 px-6 text-white"
        >
          <Search size={18} />
        </Button>
      </div>

      {/* Search Tips */}
      <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-400">
        <span className="bg-slate-800/60 rounded-full px-2 py-1">เคล็ดลับ: ค้นหาด้วยชื่อ</span>
        <span className="bg-slate-800/60 rounded-full px-2 py-1">หรือไอดี เช่น "025"</span>
      </div>
    </div>
  );
};
import { Link } from 'react-router-dom';
import ClickDisplay from '../components/ClickDisplay';
import ClickButton from '../components/ClickButton';
import useCpsTracker from '../hooks/useCpsTracker';

import { useEffect, useState } from 'react';


function usePersistentClicks(key = 'clicks') {
  const [clicks, setClicks] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? parseInt(stored, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(key, clicks);
  }, [clicks, key]);

  return [clicks, setClicks];
}


export default function Clicker() {
  const { cps, registerClick: registerClickForCps } = useCpsTracker();
  const [clicks, setClicks] = usePersistentClicks();
  const increment = () => { 
    setClicks(c => c + 1);
    registerClickForCps();
  }

  return (
    <div className="h-screen bg-slate-800 text-white bg-center bg-cover flex flex-col justify-between items-center text-center py-80">
      {/* Top */}
      <h1 className="text-4xl font-bold mb-4">Clicker Page</h1>

      {/* Middle: Display + Button */}
      <div className="flex flex-col items-center gap-2">
        <ClickDisplay count={clicks} cps={cps} />
        <ClickButton onClick={increment} />
      </div>

      {/* Bottom */}
      <Link to="/" className="text-blue-400 underline text-lg mb-4">
        Back to Home
      </Link>
    </div>
  );
}

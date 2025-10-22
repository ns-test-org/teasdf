'use client';

import { useState } from 'react';

export default function FartApp() {
  const [fartEmojis, setFartEmojis] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [clickCount, setClickCount] = useState(0);

  const handleFartClick = () => {
    const newId = Date.now();
    const randomX = Math.random() * 80 + 10; // 10% to 90% of screen width
    const randomY = Math.random() * 60 + 20; // 20% to 80% of screen height
    
    setFartEmojis(prev => [...prev, { id: newId, x: randomX, y: randomY }]);
    setClickCount(prev => prev + 1);
    
    // Remove the emoji after 3 seconds
    setTimeout(() => {
      setFartEmojis(prev => prev.filter(emoji => emoji.id !== newId));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">💨</div>
        <div className="absolute top-20 right-20 text-4xl animate-pulse">💨</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-1000">💨</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-pulse delay-500">💨</div>
      </div>

      {/* Main content */}
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg animate-pulse">
          Fart Machine
        </h1>
        <p className="text-xl text-white mb-8 drop-shadow-md">
          Click the button to release the gas!
        </p>
        
        <button
          onClick={handleFartClick}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 px-12 rounded-full text-2xl shadow-2xl transform hover:scale-110 transition-all duration-200 active:scale-95 border-4 border-yellow-600 hover:border-yellow-700"
        >
          FART
        </button>
        
        <div className="mt-6 text-white text-lg drop-shadow-md">
          Farts Released: <span className="font-bold text-yellow-300">{clickCount}</span>
        </div>
      </div>

      {/* Floating fart emojis */}
      {fartEmojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute text-8xl animate-bounce pointer-events-none"
          style={{
            left: `${emoji.x}%`,
            top: `${emoji.y}%`,
            animation: 'fartFloat 3s ease-out forwards'
          }}
        >
          💨
        </div>
      ))}

      {/* Footer */}
      <div className="absolute bottom-4 text-white text-sm opacity-75">
        Made with 💨 and ❤️
      </div>

      <style jsx>{`
        @keyframes fartFloat {
          0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) rotate(360deg) translateY(-100px);
          }
        }
      `}</style>
    </div>
  );
}





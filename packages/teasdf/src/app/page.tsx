'use client';

import { useState } from 'react';

export default function FartApp() {
  const [fartEmojis, setFartEmojis] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [clickCount, setClickCount] = useState(0);
  const [isCounterAnimating, setIsCounterAnimating] = useState(false);

  const handleFartClick = () => {
    const newId = Date.now();
    const randomX = Math.random() * 80 + 10; // 10% to 90% of screen width
    const randomY = Math.random() * 60 + 20; // 20% to 80% of screen height
    
    setFartEmojis(prev => [...prev, { id: newId, x: randomX, y: randomY }]);
    setClickCount(prev => prev + 1);
    
    // Start counter animation
    setIsCounterAnimating(true);
    
    // Stop counter animation after 2 seconds
    setTimeout(() => {
      setIsCounterAnimating(false);
    }, 2000);
    
    // Remove the emoji after 3 seconds
    setTimeout(() => {
      setFartEmojis(prev => prev.filter(emoji => emoji.id !== newId));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-yellow-600 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">💨</div>
        <div className="absolute top-20 right-20 text-4xl animate-pulse">💨</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-1000">💨</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-pulse delay-500">💨</div>
      </div>

      {/* Main content */}
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Fart Machine
        </h1>
        <p className="text-xl text-white mb-8 drop-shadow-md">
          CLICK THE BUTTON TO RELEASE THE GAS!
        </p>
        
        <button
          onClick={handleFartClick}
          className="bg-green-400 hover:bg-green-500 text-black font-bold py-6 px-12 text-2xl shadow-2xl transform hover:scale-110 transition-all duration-200 active:scale-95 border-4 border-green-600 hover:border-green-700"
        >
          FART
        </button>
        
        <div className={`mt-6 text-white text-lg drop-shadow-md transition-transform duration-100 ${isCounterAnimating ? 'animate-bounce' : ''}`}>
          Total Farts: <span className="font-bold text-yellow-300">{clickCount}</span>
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

      {/* Health Benefits Section */}
      <div className="absolute top-full w-full bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-yellow-300">
            💨 The Science of Farts 💨
          </h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="text-center text-xl mb-8 text-blue-200">
              Did you know that farting is not only natural but actually healthy for you?
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-green-300">🌱 Natural Detox</h3>
                <p>Farting helps your body release excess gas and toxins, keeping your digestive system healthy and balanced.</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">💪 Digestive Health</h3>
                <p>Regular gas release indicates a healthy gut microbiome working hard to break down your food properly.</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">🧠 Stress Relief</h3>
                <p>Holding in gas can cause discomfort and bloating. Letting it out naturally reduces physical stress on your body.</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-pink-300">😊 Mental Wellness</h3>
                <p>Embracing natural bodily functions without shame promotes a healthier relationship with your body and self-acceptance.</p>
              </div>
            </div>
            
            <div className="text-center mt-8 p-6 bg-yellow-500/20 rounded-lg">
              <p className="text-xl font-semibold text-yellow-200">
                Remember: The average person farts 14-23 times per day!
              </p>
              <p className="mt-2 text-lg">
                So go ahead, embrace the gas, and celebrate your body's natural processes! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-white text-sm opacity-75">
        Made with ❤️ and 💨
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



















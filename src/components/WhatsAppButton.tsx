import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip for first-time visitors
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClick = () => {
    window.open('https://wa.me/5561999999999?text=Olá! Gostaria de saber mais sobre os passeios.', '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-6 bg-white rounded-lg shadow-xl p-4 z-50 max-w-xs animate-in slide-in-from-bottom-5">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="pr-4">
            <p className="text-gray-800 mb-2">
              Tem alguma dúvida?
            </p>
            <p className="text-gray-600 text-sm">
              Fale conosco pelo WhatsApp!
            </p>
          </div>
          
          {/* Arrow pointing to button */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      )}
    </>
  );
}


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showButton = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', showButton);
    
    return () => {
      window.removeEventListener('scroll', showButton);
    };
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden z-20 transition-transform duration-300 ${visible ? 'translate-y-0 animate-slide-in-bottom' : 'translate-y-full'}`}>
      <div className="container-custom py-3">
        <Link to="/checkout" className="w-full bg-yebatech-green hover:bg-yebatech-green/90 text-white py-3 px-6 rounded-full font-medium transition-all flex items-center justify-center">
          <span>QUERO ME INSCREVER AGORA</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
        <p className="text-xs text-center mt-2 text-yebatech-lightText">Apenas R$ 97,00 - Vagas limitadas!</p>
      </div>
    </div>
  );
};

export default FloatingCTA;

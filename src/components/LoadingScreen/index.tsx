/* eslint-disable react/jsx-curly-spacing */
import { useEffect, useState } from 'react';
import loadingImage from './loading.gif';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        flex items-center justify-center h-screen bg-black text-white
        transition-all duration-500
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      ` }
    >
      <div className="text-center">
        <img
          src={loadingImage}
          alt="Carregando..."
          className="w-16 mx-auto mb-2"
        />

        <p className="animate-pulse">Carregando página...</p>
      </div>
    </div>
  );
}

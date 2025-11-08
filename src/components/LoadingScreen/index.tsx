import loadingImage from './loading.gif';

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <img
          src={loadingImage}
          alt="Carregando..."
          className="w-16"
        />
        <p>Carregando página...</p>
      </div>
    </div>
  );
}

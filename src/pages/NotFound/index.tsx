import { Link } from 'react-router-dom';
import fundo from '../../assets/capa.jpg';

function NotFound() {
  return (
    <div
      style={ { backgroundImage: `url(${fundo})` } }
      className="bg-cover h-screen flex flex-col justify-center gap-5 items-center text-white"
    >
      <h1 className="text-3xl font-extrabold">Pagina não encontrada</h1>
      <Link to="/" className="hover:cursor-pointer hover:bg-blue-600 hover:rounded-md hover:px-5 hover:text-white">Voltar</Link>
    </div>
  );
}

export default NotFound;

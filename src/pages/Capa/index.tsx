/* eslint-disable max-len */
import NextPageButton from '../../components/NextPageButton';
import fundo from '../../assets/foto.jpeg';

function Capa() {
  return (
    <div
      style={ { backgroundImage: `url(${fundo})` } }
      className="bg-cover h-screen flex flex-col justify-center gap-5 items-center"
    >
      <div className="w-full h-full flex flex-col items-center p-6 justify-center gap-6 font-bold text-center">
        <h1 className="text-yellow-400 text-5xl">Harry Potter e a Pedra Filosofal</h1>
        <NextPageButton nextPage="/autora" name="Próximo" />
      </div>
    </div>
  );
}

export default Capa;

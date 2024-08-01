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
        <h1 className="text-yellow-300 text-5xl leading-normal">
          Harry Potter
          <br />
          e a
          {' '}
          <br />
          Pedra Filosofal
        </h1>
        <div className="bg-blue-600 px-2 text-white rounded-md">
          <NextPageButton nextPage="/autora" name="Próximo" />
        </div>
      </div>
    </div>
  );
}

export default Capa;

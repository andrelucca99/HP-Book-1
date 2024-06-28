import Sheet from '../../components/Sheet';
import FotoAutora from '../../assets/autora.svg';
import Sumario from '../../components/Sumario';
import Button from '../../components/Button';
import BackgroundPage from '../../components/BackgroundPage';

function Autora() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <div className="h-full flex flex-col items-center justify-center">
            <img className="w-1/3" src={ FotoAutora } alt="foto da autora" />
            <h1 className="text-lg font-semibold">Autora</h1>
            <p className="w-4/5">
              Joanne "Jo" Rowling, mais conhecida como
              {' '}
              <strong>J.K. ROWLING</strong>
              , é uma escritora, roteirista e produtora cinematográfica britânica, notória por escrever a série de livros Harry Potter. Os livros ganharam uma popularidade mundial, recebendo múltiplos prêmios e vendendo mais de 500 milhões de cópias.
            </p>
            <h2 className="text-lg font-semibold">Dedicatória</h2>
            <p className="w-4/5">
              Para Jessica, que gosta de histórias, para Anne, que gostava também, e para Di, que foi quem ouviu esta primeiro.
            </p>
          </div>
        }
        right={
          <div className="h-full flex flex-col items-center justify-center">
            <Sumario />
          </div>
}
      />
      <Button rota="/cap1" />
    </BackgroundPage>
  );
}

export default Autora;

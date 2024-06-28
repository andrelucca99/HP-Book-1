import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page12() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              aceno da cabeça. A Profa. Minerva assoou o nariz em resposta.
            </p>
            <p>
              Dumbledore se virou e desceu a rua. Na esquina parou e puxou o “apagueiro”. Deu um
              clique e doze esferas de luz voltaram aos lampiões de modo que a rua dos Alfeneiros de
              repente iluminou-se com uma claridade laranja e ele divisou o gato listrado se esquivando
              pela outra ponta da rua. Mal dava para enxergar o embrulhinho de cobertores no batente do
              número quatro.
            </p>
            <p>
              – Boa sorte, Harry – murmurou ele. Girou nos calcanhares e, com um movimento da capa, desapareceu.
            </p>
            <p>
              Uma brisa arrepiou as cercas bem cuidadas da rua dos Alfeneiros, silenciosas e quietas sob
              o negror do céu, o último lugar do mundo em que alguém esperaria que acontecessem coisas
              espantosas. Harry Potter virou-se dentro dos cobertores sem acordar. Sua mãozinha agarrou a
              carta ao lado, mas ele continuou a dormir, sem saber que era especial, sem saber que era
              famoso, sem saber que iria acordar dentro de poucas horas com o grito da Sra. Dursley ao
              abrir a porta da frente para pôr as garrafas de leite do lado de fora, nem que passaria as
              próximas semanas levando cutucadas e beliscões do primo Duda... ele não podia saber que,
              neste mesmo instante, havia pessoas se reunindo em segredo em todo o país que erguiam os
              copos e diziam com vozes abafadas:
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              – A Harry Potter: o menino que sobreviveu!
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap2" />
    </BackgroundPage>
  );
}

export default Page12;

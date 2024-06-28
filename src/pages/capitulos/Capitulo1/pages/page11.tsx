import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page11() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              Dumbledore e a Profa. Minerva curvaram-se para o embrulho de cobertores. Dentro, apenas
              visível, havia um menino, que dormia a sono solto. Sob uma mecha de cabelos muito negros
              caída sobre a testa eles viram um corte curioso, tinha a forma de um raio.
            </p>
            <p>
              – Foi aí que...? – sussurrou a professora.
              <br />
              – Foi – confirmou Dumbledore. – Ficará com a cicatriz para sempre.
              <br />
              – Será que você não poderia dar um jeito, Dumbledore?
              <br />
              – Mesmo que pudesse, eu não o faria. As cicatrizes podem vir a ser úteis. Tenho uma acima
              do joelho esquerdo que é um mapa perfeito do metrô de Londres. Bem, me dê ele aqui,
              Hagrid, é melhor acabarmos logo com isso.
              <br />
              Dumbledore recebeu Harry nos braços e virou-se para a casa dos Dursley.
              <br />
              – Será que eu podia... podia me despedir dele, professor? – perguntou Hagrid.
              Ele curvou a enorme cabeça descabelada para Harry e lhe deu o que deve ter sido um beijo
              muito áspero e peludo. Depois, sem aviso, Hagrid soltou um uivo como o de um cachorro
              ferido.
            </p>
            <p>
              – Psiu! – sibilou a Profa. Minerva. – Você vai acordar os trouxas!
              <br />
              – Des-des-desculpe – soluçou Hagrid, puxando um enorme lenço sujo e escondendo a cara
              nele. – Mas nã-nã-não consigo suportar, Lílian e Tiago
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              mortos, e o coitadinho do Harry ter de viver com os trouxas...
            </p>
            <p>
              – É, é, é muito triste, mas controle-se, Hagrid, ou vão nos descobrir – sussurrou a
              professora, dando uma palmadinha desajeitada no braço de Hagrid enquanto Dumbledore
              saltava a mureta de pedra e se dirigia à porta da frente. Depositou Harry devagarinho no
              batente, tirou uma carta da capa, meteu-a entre os cobertores do menino e, em seguida, voltou
              para a companhia dos dois. Durante um minuto inteiro os três ficaram parados olhando para o
              embrulhinho; os ombros de Hagrid sacudiram, os olhos da Profa. Minerva piscaram
              loucamente e a luz cintilante que sempre brilhava nos olhos de Dumbledore parecia ter-se
              extinguido.
            </p>
            <p>
              – Bem – disse Dumbledore finalmente –, acabou-se. Não temos mais nada a fazer aqui. Já
              podemos nos reunir aos outros para comemorar.
              <br />
              – É – disse Hagrid com a voz muito abafada. – Vou devolver a moto de Sirius. Boa-noite,
              Profa. Minerva, Professor Dumbledore...
              <br />
              Enxugando os olhos na manga da jaqueta, Hagrid montou na moto e acionou o motor com um
              pontapé; com um rugido ela levantou voo e desapareceu na noite.
              <br />
              – Nos veremos em breve, espero, Profa. Minerva – falou Dumbledore, com um
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap1/page12" />
    </BackgroundPage>
  );
}

export default Page11;

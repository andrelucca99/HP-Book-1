import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page17() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              – Não diga bobagem, Válter, ela detesta o menino.
              <br />
              Com frequência, os Dursley falavam de Harry assim, como se ele não estivesse presente –
              ou melhor, como se ele fosse alguma coisa muito desprezível que não conseguisse entendê-los,
              como uma lesma.
              <br />
              – E aquela sua amiga, como é mesmo o nome dela, Ivone?
              <br />
              – Está passando férias em Majorca – respondeu Petúnia, com rispidez.
              <br />
              – Vocês podiam me deixar aqui – arriscou Harry esperançoso (ele poderia assistir ao que
              quisesse na televisão para variar e, quem sabe, até dar uma voltinha no computador de Duda).
              Tia Petúnia parecia que tinha engolido um limão.
              <br />
              – E quando voltarmos, encontrar a casa destruída? – rosnou.
              <br />
              – Não vou explodir a casa – prometeu Harry, mas os tios não estavam mais escutando.
              <br />
              – Talvez pudéssemos levá-lo ao zoológico – disse tia Petúnia lentamente – e deixá-lo no
              carro...
              <br />
              – O carro é novo. Não vou deixá-lo sentado no carro sozinho...
              <br />
              Duda começou a chorar alto. Na realidade não estava chorando, fazia anos que não chorava
              de verdade, mas sabia que se fizesse cara de choro e gritasse a
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              mãe lhe daria o que quisesse.
              <br />
              – Dudinha, querido, não chore, mamãe não vai deixar ele estragar o seu dia! – exclamou, abraçando-o.
              <br />
              – Não... quero... que... ele... vá! – Duda berrou entre grandes soluços fingidos. – Ele sempre
              estraga tudo! – E lançou um riso maldoso por entre os braços da mãe.
              <br />
              Naquele instante a campainha tocou.
            </p>
            <p>
              – Ah, meu Deus, são eles chegando! – disse tia Petúnia nervosa, e um minuto depois, o
              melhor amigo de Duda, Pedro Polkiss, entrou acompanhado da mãe. Pedro era um menino
              magricela, com cara de rato. Em geral era quem segurava para trás os braços dos garotos
              enquanto Duda batia neles. Na mesma hora Duda parou de fingir que estava chorando.
            </p>
            <p>
              Meia hora depois, Harry, que não conseguia acreditar em sua sorte, estava sentado no banco
              traseiro do carro dos Dursley, com Pedro e Duda, a caminho do jardim zoológico, pela
              primeira vez na vida. O tio e a tia não tinham conseguido pensar no que fazer com ele, masantes de saírem, tio Válter puxara Harry para o lado.
              <br />
              – Estou-lhe avisando – disse, aproximando a cara grande e vermelha de Harry.
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap2/page18" />
    </BackgroundPage>
  );
}

export default Page17;

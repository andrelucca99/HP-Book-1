import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page9() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              Dumbledore concordou com a cabeça, sério.
              <br />
              – É... é verdade? – gaguejou a professora. – Depois de tudo o que ele fez... todas as pessoas
              que matou... não conseguiu matar um garotinho? É simplesmente espantoso... de tudo que
              poderia detê-lo... mas, por Deus, como foi que Harry sobreviveu?
              <br />
              – Só podemos imaginar – disse Dumbledore. – Talvez nunca cheguemos a saber.
              <br />
              A Profa. Minerva pegou um lenço de renda e secou com delicadeza os olhos por baixo das
              lentes dos óculos. Dumbledore deu uma grande fungada ao mesmo tempo que tirava o relógio
              de ouro do bolso e o examinava. Era um relógio muito estranho. Tinha doze ponteiros masnenhum número; em vez deles, pequenos planetas giravam à volta. Mas devia fazer sentido
              para Dumbledore, porque ele o repôs no bolso e disse:
            </p>
            <p>
              – Hagrid está atrasado. A propósito, foi ele que lhe disse que eu estaria aqui, suponho.
              <br />
              – Foi. E suponho que você não vá me dizer por que está aqui e não em outro lugar.
              <br />
              – Vim trazer Harry para o tio e a tia. Eles são a única família que lhe resta.
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              – Você não quer dizer, você não pode estar se referindo às pessoas que moram aqui?! –
              exclamou a Profa. Minerva, pulando de pé e apontando para o número quatro. – Dumbledore,
              você não pode. Estive observando a família o dia todo. Você não poderia encontrar duas
              pessoas menos parecidas conosco. E têm um filho, vi-o dando chutes na mãe até a rua,
              berrando porque queria balas. Harry Potter vir morar aqui!
              <br />
              – É o melhor lugar para ele – disse Dumbledore com firmeza. – Os tios poderão lhe
              explicar tudo quando ele for mais velho, escrevi-lhes uma carta.
              <br />
              – Uma carta? – repetiu a professora com a voz fraca, sentando-se novamente no muro. –
              Francamente, Dumbledore, você acha que pode explicar tudo isso em uma carta? Essas
              pessoas jamais vão entendê-lo! Ele vai ser famoso, uma lenda. Eu não me surpreenderia se o
              dia de hoje ficasse conhecido no futuro como o dia de Harry Potter. Vão escrever livros sobre
              Harry. Todas as crianças no nosso mundo vão conhecer o nome dele!
              <br />
              – Exatamente – disse Dumbledore, olhando muito sério por cima dos óculos de meia-lua. –
              Isto seria o bastante para virar a cabeça de qualquer menino. Famoso antes mesmo de saber
              andar e falar! Famoso por alguma coisa que ele nem vai se lembrar! Você não vê que ele
              estará muito melhor se crescer longe
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap1/page10" />
    </BackgroundPage>
  );
}

export default Page9;

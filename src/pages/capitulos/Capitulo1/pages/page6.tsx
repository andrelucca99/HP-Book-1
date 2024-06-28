import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page6() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              no muro lá fora não mostrava sinais de sono. Continuava sentado imóvel como uma estátua, os olhos fixos
              na esquina mais distante da rua dos Alfeneiros. E nem sequer estremeceu quando uma porta de
              carro bateu na rua seguinte, nem mesmo quando duas corujas mergulharam do alto. Na
              verdade, era quase meia-noite quando o gato se mexeu.
            </p>
            <p>
              Um homem apareceu na esquina que o gato estivera vigiando. Apareceu tão súbita e
              silenciosamente que se poderia pensar que tivesse saído do chão. O rabo do gato mexeu
              ligeiramente e seus olhos se estreitaram.
            </p>
            <p>
              Ninguém jamais vislumbrara nada parecido com este homem na rua dos Alfeneiros. Era
              alto, magro e muito velho, a julgar pelo prateado dos seus cabelos e de sua barba,
              suficientemente longos para prender no cinto. Usava vestes longas, uma capa púrpura que
              arrastava pelo chão e botas com saltos altos e fivelas. Seus olhos azuis eram claros, luminosos
              e cintilantes por trás dos óculos em meia-lua e o nariz muito comprido e torto, como se o
              tivesse quebrado pelo menos duas vezes. O nome dele era Alvo Dumbledore.
            </p>
            <p>
              Alvo Dumbledore não parecia ter consciência de que acabara de pisar numa rua onde tudo,
              desde o seu nome às suas botas era malvisto. Estava ocupado apalpando a capa, procurando
              alguma coisa. Mas parecia ter consciência de
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              que estava sendo vigiado, porque ergueu a cabeça de repente para o gato, que continuava a fixá-lo da outra ponta da rua. Por algum motivo, a visão do gato pareceu diverti-lo. Deu uma risadinha e murmurou: “Eu devia ter
              imaginado.”
            </p>
            <p>
              Encontrou o que procurava no bolso interior da capa. Parecia um isqueiro de prata. Abriu-
              o, ergueu-o no ar e o acendeu. O lampião de rua mais próximo apagou-se com um estalido
              seco. Ele o acendeu de novo – o lampião seguinte piscou e apagou, doze vezes ele acionou o
              “apagueiro”, até que as únicas luzes acesas na rua toda eram dois pontinhos minúsculos ao
              longe – os olhos do gato que o vigiava. Se alguém espiasse pela janela agora, até a Sra.
              Dursley, de olhos de contas, não conseguiria ver nada que estava acontecendo na calçada.
              Dumbledore tornou a guardar o “apagueiro” na capa e saiu caminhando pela rua em direção ao
              número quatro, onde se sentou no muro ao lado do gato. Não olhou para o bicho, mas, passado
              algum tempo, dirigiu-se a ele.
            </p>
            <p>
              – Imaginei encontrar a senhora aqui, Profa. Minerva McGonagall.
              <br />
              E virou-se para sorrir para o gato, mas este desaparecera. Em vez dele, viu-se sorrindo
              para uma mulher de aspecto severo que usava óculos de lestes quadradas exatamente do
              formato das marcas que o gato tinha em volta dos olhos. Ela, também, usava uma capa
              esmeralda. Trazia os cabelos negros
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap1/page7" />
    </BackgroundPage>
  );
}

export default Page6;

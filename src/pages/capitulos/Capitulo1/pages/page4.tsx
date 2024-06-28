import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page4() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              E o velho abraçou o Sr. Dursley pela cintura e se afastou.
              <br />
              O Sr. Dursley ficou pregado no chão. Fora abraçado por um completo estranho. E também
              achava que fora chamado de trouxa, o que quer que isso quisesse dizer. Estava abalado.
              Correu para o carro e partiu para casa, esperando que estivesse imaginando coisas, o que
              nunca esperara que fizesse, porque não aprovava a imaginação.
            </p>
            <p>
              Quando entrou no estacionamento do número quatro, a primeira coisa que viu – e isso não
              melhorou o seu estado de espírito – foi o gato listrado que notara aquela manhã. Agora ele
              estava sentado no muro do jardim. Tinha certeza de que era o mesmo; as marcas em volta dos
              olhos eram as mesmas.
              <br />
              {' '}
              – Chispa! – disse o Sr. Dursley em voz alta.
            </p>
            <p>
              O gato não se mexeu. Apenas lançou-lhe um olhar severo. Será que isto era um
              comportamento normal para um gato?, pensou o Sr. Dursley. Continuava decidido a não
              comentar nada com a esposa.
            </p>
            <p>
              A Sra. Dursley tivera um dia normal e agradável. Contou-lhe durante o jantar os problemas
              da senhora do lado com a filha e ainda que Duda aprendera uma palavra nova (“Nunca”). O
              Sr. Dursley tentou agir normalmente. Depois que Duda foi se deitar, ele chegou à sala em
              tempo de ouvir o último noticiário
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              noturno.
              <br />
              “E, por último, os observadores de pássaros em toda parte registraram que as corujas do
              país se comportaram de forma muito estranha hoje. Embora elas normalmente cacem à noite e
              raramente apareçam à luz do dia, centenas desses pássaros foram vistos hoje voando em todas
              as direções desde o alvorecer. Os especialistas não sabem explicar por que as corujas de
              repente mudaram o seu padrão de sono.” O locutor se permitiu um sorriso. “Muito misterioso.
              E agora, com Jorge Mendes, o nosso boletim meteorológico. Vai haver mais tempestades de
              corujas hoje à noite, Jorge?”
            </p>
            <p>
              “Bom, Eduardo”, disse o meteorologista, “não sei lhe dizer, mas não foram só as corujas
              que se comportaram de modo estranho hoje. Ouvintes de todo o país têm telefonado para
              reclamar que em vez do aguaceiro que prometi para ontem, eles têm tido chuvas de estrelas!
              Talvez alguém ande festejando a noite das fogueiras uma semana mais cedo este ano! Mas
              posso prometer para hoje uma noite chuvosa.”
            </p>
            <p>
              O Sr. Dursley ficou paralisado na poltrona. Estrelas cadentes em todo o país? Corujas
              voando durante o dia? Gente misteriosa usando capas por todo lado? E um cochicho, um
              cochicho a respeito dos Potter...
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap1/page5" />
    </BackgroundPage>
  );
}

export default Page4;

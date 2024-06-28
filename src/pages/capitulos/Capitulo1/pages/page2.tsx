import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page2() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              – Pestinha – disse rindo contrafeito o Sr. Dursley ao sair de casa. Entrou no carro e deu
              marcha à ré para sair do estacionamento do número quatro.
              <br />
              Foi na esquina da rua que ele notou o primeiro indício de que algo estranho ocorria – um
              gato lia um mapa. Por um instante o Sr. Dursley não percebeu o que vira – em seguida virou
              rapidamente a cabeça para dar uma segunda olhada. Havia um gato de listras amarelas sentado
              na esquina da rua dos Alfeneiros, mas não havia nenhum mapa à vista. Em que estaria
              pensando naquela hora? Devia ter sido um efeito da luz. Ele piscou e arregalou os olhos para
              o gato. O gato o encarou. Enquanto virava a esquina e subia a rua, espiou o gato pelo espelho
              retrovisor. Ele agora estava lendo a placa que dizia rua dos Alfeneiros – não, estava olhandoa placa: gatos não podiam ler mapas nem placas. O Sr. Dursley sacudiu a cabeça e tirou o gato
              do pensamento. Durante o caminho para a cidade ele não pensou em mais nada exceto no
              grande pedido de brocas que tinha esperanças de receber naquele dia.
            </p>
            <p>
              Mas ao sair da cidade, as brocas foram varridas de sua cabeça por outra coisa. Ao parar no
              costumeiro engarrafamento matinal, não pôde deixar de notar que havia uma quantidade de
              gente estranhamente vestida andando pelas ruas. Gente com capas largas. O Sr. Dursley não
              tolerava gente que andava com
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              roupas ridículas – os trapos que se viam nos jovens! Imaginou que aquilo fosse uma nova moda idiota. Tamborilou os dedos no volante e seu olhar recaiu em
              um grupinho de excêntricos parados bem perto dele. Cochichavam excitados. O Sr. Dursley se
              irritou ao ver que alguns deles nem eram jovens; ora, aquele homem devia ser mais velho do
              que ele, e usava uma capa verde-esmeralda! Que petulância! Mas então ocorreu ao Sr. Dursley
              que se tratava provavelmente de alguma promoção boba – essas pessoas estavam obviamente
              arrecadando alguma coisa... é, devia ser isto! O tráfego avançou e alguns minutos depois o Sr.
              Dursley chegou ao estacionamento da Grunnings, o pensamento de volta às brocas.
            </p>
            <p>
              O Sr. Dursley sempre sentava de costas para a janela em seu escritório no nono andar. Se
              não o fizesse, talvez tivesse achado mais difícil se concentrar em brocas aquela manhã. Ele
              não viu as corujas que voavam velozes em plena luz do dia, embora as pessoas na rua as
              vissem; elas apontavam e se espantavam enquanto coruja atrás de coruja passava no alto. A
              maioria jamais vira uma coruja mesmo à noite. O Sr. Dursley, porém, teve uma manhã
              perfeitamente normal sem corujas. Gritou com cinco pessoas diferentes. Deu vários
              telefonemas importantes e gritou mais um pouco. Estava de excelente humor
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap1/page3" />

    </BackgroundPage>
  );
}

export default Page2;

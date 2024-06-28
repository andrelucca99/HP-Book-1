/* eslint-disable max-len */
import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page1() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              O Sr. e a Sra. Dursley, da rua dos Alfeneiros, no 4, se orgulhavam de dizer que eram
              perfeitamente normais, muito bem, obrigado. Eram as últimas pessoas no mundo que se
              esperaria que se metessem em alguma coisa estranha ou misteriosa, porque simplesmente não
              compactuavam com esse tipo de bobagem.
            </p>
            <p>
              O Sr. Dursley era diretor de uma firma chamada Grunnings, que fazia perfurações. Era um
              homem alto e corpulento quase sem pescoço, embora tivesse enormes bigodes. A Sra. Dursley
              era magra e loura e tinha um pescoço quase duas vezes mais comprido que o normal, o que era
              muito útil porque ela passava grande parte do tempo espichando-o por cima da cerca do
              jardim para espiar os vizinhos. Os Dursley tinham um filhinho chamado Dudley, o Duda, e em
              sua opinião não havia garoto melhor em nenhum lugar do mundo.
            </p>
            <p>
              Os Dursley tinham tudo que queriam, mas tinham também um segredo, e seu maior receio
              era que alguém o descobrisse. Achavam que não iriam aguentar se alguém descobrisse a
              existência dos Potter. A Sra. Potter era irmã da Sra. Dursley, mas não se viam havia muitos
              anos; na realidade a Sra. Dursley fingia que não tinha irmã, porque esta e o marido
              imprestável eram o que havia de menos parecido possível com os Dursley.
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              Eles estremeciam só de pensar o que os vizinhos iriam dizer se os Potter aparecessem na rua. Os Dursley sabiam
              que os Potter tinham um filhinho, também, mas nunca o tinham visto. O garoto era mais uma
              razão para manter os Potter a distância; eles não queriam que Duda se misturasse com uma
              criança daquelas.
            </p>
            <p>
              Quando o Sr. e a Sra. Dursley acordaram na terça-feira monótona e cinzenta em que a nossa
              história começa, não havia nada no céu nublado lá fora sugerindo as coisas estranhas e
              misteriosas que não tardariam a acontecer por todo o país. O Sr. Dursley cantarolava ao
              escolher a gravata mais sem graça do mundo para ir trabalhar e a Sra. Dursley fofocava
              alegremente enquanto lutava para encaixar um Duda aos berros na cadeirinha alta.
            </p>
            <p>
              Nenhum deles reparou em uma coruja parda que passou, batendo as asas, pela janela.
              <br />
              Às oito e meia, o Sr. Dursley apanhou a pasta, deu um beijinho no rosto da Sra. Dursley e
              tentou dar um beijo de despedida em Duda mas não conseguiu, porque na hora Duda estava
              tendo um acesso de raiva e atirava o cereal nas paredes.
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap1/page2" />
    </BackgroundPage>
  );
}

export default Page1;

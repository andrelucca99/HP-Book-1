import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page8() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              anos venho tentando convencer as pessoas a chamá-lo pelo nome que recebeu: Voldemort. – A professora franziu o rosto, mas
              Dumbledore, que estava separando dois sorvetes de limão, pareceu não reparar. – Tudo fica
              tão confuso quando todos não param de dizer “Você-Sabe-Quem”. Nunca vi nenhuma razão
              para ter medo de dizer o nome de Voldemort.
            </p>
            <p>
              – Sei que não vê – disse a professora parecendo meio exasperada, meio admirada. – Mas
              você é diferente. Todo o mundo sabe que é o único de quem Você-Sabe... ah, está bem, de
              quem Voldemort tem medo.
              <br />
              – Isto é um elogio – disse Dumbledore calmamente. – Voldemort tinha poderes que nunca
              tive.
              <br />
              – Só porque você é muito... bem... nobre para usá-los.
              <br />
              – É uma sorte estar escuro. Nunca mais corei assim desde que Madame Pomfrey me disse
              que gostava dos meus abafadores de orelhas novos.
              <br />
              A Profa. Minerva lançou um olhar severo a Dumbledore e disse:
              <br />
              – As corujas não são nada comparadas aos boatos que correm. Sabe o que todos estão
              dizendo? Por que ele foi embora? Que foi que finalmente o deteve?
            </p>
            <p>
              Aparentemente a Profa. Minerva chegara ao ponto que estava ansiosa para discutir, a
              verdadeira razão pela qual estivera esperando o dia todo em cima de
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              um muro frio e duro, porque nem como gato nem como mulher ela fixara antes um olhar tão penetrante em Dumbledore como agora. Era óbvio que seja o que fosse que “todos” estavam dizendo, ela
              não iria acreditar até que Dumbledore confirmasse ser verdade. Dumbledore, porém, estava
              escolhendo mais um sorvete de limão e não respondeu.
            </p>
            <p>
              – O que estão dizendo – continuou ela – é que a noite passada Voldemort apareceu em
              Godric’s Hollow. Foi procurar os Potter. O boato é que Lílian e Tiago Potter estão... estão...
              que estão... mortos.
              <br />
              Dumbledore fez que sim com a cabeça. A Profa. Minerva perdeu o fôlego.
              <br />
              – Lílian e Tiago... Não posso acreditar... Não quero acreditar... Ah, Alvo.
              <br />
              Dumbledore estendeu a mão e deu-lhe um tapinha no ombro.
              <br />
              – Eu sei... eu sei... – disse deprimido.
              <br />
              A voz da Profa. Minerva tremeu ao prosseguir:
              <br />
              – E não é só isso. Estão dizendo que ele tentou matar o filho dos Potter, Harry. Mas... não
              conseguiu. Não conseguiu matar o garotinho. Ninguém sabe o porquê nem como, mas estão
              dizendo que na hora que não pôde matar Harry Potter, por alguma razão, o poder de
              Voldemort desapareceu, e é por isso que ele foi embora.
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap1/page9" />
    </BackgroundPage>
  );
}

export default Page8;

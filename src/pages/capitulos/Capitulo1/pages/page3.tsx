import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page3() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              até a hora do almoço, quando pensou em esticar as pernas e atravessar a rua para comprar um pãozinho
              doce na padaria defronte.
            </p>
            <p>
              Esquecera completamente as pessoas de capas até passar por um grupo delas próximo à
              padaria. Olhou-as com raiva ao passar. Não sabia o porquê, mas elas o deixavam nervoso.
              Essas cochichavam agitadas, também, mas ele não viu nenhuma latinha de coleta. Foi ao
              passar por elas, na volta, levando uma grande rosca açucarada em um saco, que entreouviu
              algumas palavras do que diziam.
            </p>
            <p>
              – ... Os Potter, é verdade, foi o que ouvi...
              <br />
              – ... é, o filho deles, Harry...
            </p>
            <p>
              O Sr. Dursley parou de repente. O medo invadiu-o. Virou a cabeça para olhar as pessoas
              que cochichavam como se quisesse dizer alguma coisa, mas pensou melhor.
              <br />
              Atravessou a rua depressa, correu para o escritório, disse rispidamente à secretária que não
              o incomodasse, agarrou o telefone e quase terminara de discar o número de casa quando
              mudou de ideia. Pôs o fone no gancho e alisou os bigodes, pensando... não, estava agindo
              como um idiota. Potter não era um nome tão fora do comum assim. Tinha certeza de que havia
              muita
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              gente chamada Potter com um filho chamado Harry. Pensando bem, nem sequer tinha
              certeza de que o sobrinho tivesse o nome de Harry. Jamais vira o menino. Talvez fosse
              Ernesto. Ou Eduardo. Não tinha sentido preocupar a Sra. Dursley, ela sempre ficava tão
              perturbada à simples menção da irmã. Não a culpava – se ele tivesse uma irmã como aquela...
              mas, mesmo assim, aquelas pessoas de capas...
            </p>
            <p>
              Achou bem mais difícil se concentrar nas brocas aquela tarde e, quando deixou o edifício às
              cinco horas, continuava tão preocupado que deu um encontrão em alguém parado ali à porta.
              <br />
              – Desculpe – murmurou, quando o velhinho cambaleou e quase caiu. Levou alguns segundosaté o Sr. Dursley perceber que o homem estava usando uma capa roxa. Não parecia nada
              aborrecido por ter sido quase jogado ao chão. Ao contrário, seu rosto se abriu em um largo
              sorriso e ele disse numa voz esganiçada que fez os passantes olharem:
            </p>
            <p>
              – Não precisa pedir desculpas, caro senhor, porque nada poderia me aborrecer hoje!
              <br />
              Alegre-se, porque Você-Sabe-Quem finalmente foi-se embora! Até trouxas como o senhor
              deviam estar comemorando um dia tão feliz!
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap1/page4" />
    </BackgroundPage>
  );
}

export default Page3;

import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page13() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              Quase dez anos haviam se passado desde o dia em que os Dursley acordaram e encontraram o
              sobrinho no batente da porta, mas a rua dos Alfeneiros não mudara praticamente nada. O sol
              nascia para os mesmos jardins cuidados e iluminava o número quatro de bronze à porta de
              entrada dos Dursley; e penetrava sorrateiro a sala de estar, que continuava quase igual ao que
              fora na noite em que o Sr. Dursley ouvira a funesta notícia sobre as corujas. Somente as
              fotografias sobre o console da lareira mostravam o tempo que já passara. Dez anos antes havia
              uma porção de fotografias de uma coisa que parecia uma grande bola de brincar na praia,
              usando diferentes chapéus coloridos – mas Duda Dursley não era mais bebê; e agora as
              fotografias mostravam um menino grande e louro na primeira bicicleta, no carrossel de uma
              feira, brincando com o computador do pai, recebendo um beijo e um abraço da mãe. A sala
              não continha nenhuma indicação de que havia outro menino na casa.
            </p>
            <p>
              No entanto Harry Potter continuava lá, no momento adormecido, mas não por muito tempo.
              Sua tia Petúnia acordara e foi sua voz aguda que produziu o primeiro ruído do dia.
              <br />
              – Acorde! Levante-se! Agora!
              <br />
              Harry acordou assustado. A tia bateu à porta outra vez.
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              – Acorde! – gritou. Harry ouviu-a caminhar em direção à cozinha e em seguida uma
              frigideira bater no fogão. Virou-se de costas e tentou se lembrar do sonho em que estava. Era
              um sonho gostoso. Havia uma motocicleta. Tinha a estranha sensação que já vira esse sonho
              antes.
            </p>
            <p>
              A tia voltara à porta.
              <br />
              – Você já se levantou? – perguntou.
              <br />
              – Quase – respondeu Harry.
              <br />
              – Bem, ande depressa, quero que você tome conta do bacon. E não se atreva a deixá-lo
              queimar. Quero tudo perfeito no aniversário de Duda.
              <br />
              Harry gemeu.
              <br />
              – Que foi que você disse? – perguntou a tia com rispidez.
              <br />
              – Nada, nada...
            </p>
            <p>
              O aniversário de Duda – como podia ter esquecido? Harry levantou-se devagar e começou
              a procurar as meias. Encontrou-as debaixo da cama e depois de retirar uma aranha de um pé,
              calçou-as. Harry estava acostumado com aranhas, porque o armário sob a escada vivia cheio
              delas e era ali que ele dormia.
            </p>
            <p>
              Já vestido saiu para o corredor que levava à cozinha. A mesa quase desaparecera tantos
              eram os presentes de aniversário de Duda. Pelo que via,
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap2/page14" />
    </BackgroundPage>
  );
}

export default Page13;

import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page7() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              presos num coque apertado. E parecia decididamente irritada.
            </p>
            <p>
              – Como soube que era eu? – perguntou.
              <br />
              – Minha cara professora, nunca vi um gato se sentar tão duro.
              <br />
              – O senhor estaria duro se tivesse passado o dia todo sentado em um muro de pedra –
              respondeu a Profa. Minerva.
              <br />
              – O dia todo? Quando podia estar comemorando? Devo ter passado por mais de dez festas e
              banquetes a caminho daqui.
              <br />
              A professora fungou aborrecida.
              <br />
              – Ah, sim, vi que todos estão comemorando – disse impaciente. – Era de esperar que
              fossem um pouco mais cautelosos, mas não, até os trouxas notaram que alguma coisa estava
              acontecendo. Deu no telejornal. – Ela indicou com a cabeça a sala às escuras dos Dursley. –
              Eu ouvi... bandos de corujas... estrelas cadentes... Ora, eles não são completamente idiotas.
              Não podiam deixar de notar alguma coisa. Estrelas cadentes em Kent, aposto que foi coisa do
              Dédalo Diggle. Ele nunca teve muito juízo.
              <br />
              – Você não pode culpá-los – ponderou Dumbledore educadamente. – Temos tido muito
              pouco o que comemorar nos últimos onze anos.
              <br />
              – Sei disso – retrucou a professora mal-humorada. – Mas não é razão
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              para perdermos a cabeça. As pessoas estão sendo completamente descuidadas, saem às ruas em plena luz do
              dia, sem nem ao menos vestir roupa de trouxa, e espalham boatos.
              <br />
              De esguelha, lançou um olhar atento a Dumbledore, como se esperasse que ele dissesse
              alguma coisa, mas ele continuou calado, por isso ela recomeçou:
              <br />
              – Ia ser uma graça se, no próprio dia em que Você-Sabe-Quem parece ter finalmente ido
              embora, os trouxas descobrissem a nossa existência. Suponho que ele realmente tenha ido
              embora, não é, Dumbledore?
            </p>
            <p>
              – Parece que não há dúvida. Temos muito o que agradecer. Aceita um sorvete de limão?
              <br />
              – Um o quê?
              <br />
              – Um sorvete de limão. É uma espécie de doce dos trouxas de que sempre gostei muito.
              <br />
              – Não, obrigada – disse a Profa. Minerva com frieza, como se não achasse que o momentopedia sorvetes de limão. – Mesmo que Você-Sabe-Quem tenha ido embora.
              <br />
              – Minha cara professora, com certeza uma pessoa sensata como a senhora pode chamá-lo
              pelo nome. Toda essa bobagem de Você-Sabe-Quem, há onze
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap1/page8" />
    </BackgroundPage>
  );
}

export default Page7;

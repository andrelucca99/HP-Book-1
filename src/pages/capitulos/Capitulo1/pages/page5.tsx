import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page5() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              A Sra. Dursley entrou na sala trazendo duas xícaras de chá. Não adiantava. Teria que lhe
              dizer alguma coisa. Pigarreou nervoso.
            </p>
            <p>
              – Hum, hum, Petúnia, querida, você não tem tido notícias de sua irmã, ultimamente?
              <br />
              Conforme esperava, a Sra. Dursley pareceu chocada e aborrecida. Afinal, normalmente
              fingiam que ela não tinha irmã...
              <br />
              – Não – respondeu ela, seca. – Por quê?
              <br />
              – Uma notícia engraçada – murmurou o Sr. Dursley. – Corujas... estrelas cadentes... e vi
              uma porção de gente de aparência estranha na cidade hoje...
              <br />
              – E daí? – cortou a Sra. Dursley.
              <br />
              – Bem, pensei... talvez... tivesse alguma ligação com... sabe... o pessoal dela.
              <br />
              A Sra. Dursley bebericou o chá com os lábios contraídos. O Sr. Dursley ficou em dúvida se
              teria coragem de lhe contar que ouvira o nome “Potter”. Decidiu que não. Em vez disso, falou
              com a voz mais displicente que pôde:
              <br />
              – O filho deles... teria mais ou menos a idade do Duda agora, não?
              <br />
              – Suponho que sim – respondeu a Sra. Dursley, ainda seca.
              <br />
              – Como é mesmo o nome dele? Ernesto, não é?
              <br />
              – Harry. Um nome feio e vulgar, se quer saber minha opinião.
              <br />
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              – Ah, é – disse o Sr. Dursley, sentindo um aperto horrível no coração. – É, concordo com você.
            </p>
            <p>
              Não disse mais nenhuma palavra sobre o assunto a caminho do quarto onde foram se deitar.
              Enquanto a Sra. Dursley estava no banheiro, o Sr. Dursley foi devagarinho até a janela e
              espiou o jardim da casa. O gato continuava lá. Observava o começo da rua dos Alfeneiros
              como se esperasse alguma coisa.
            </p>
            <p>
              Estaria imaginando coisas? Será que tudo isso teria ligação com os Potter? Se tinha... se
              transpirasse que eram aparentados com um casal de... bem ele achava que não aguentaria.
            </p>
            <p>
              Os Dursley se deitaram. A Sra. Dursley adormeceu logo, mas o Sr. Dursley continuou
              acordado, pensando no que acontecera. Seu último consolo antes de adormecer foi pensar que
              mesmo que os Potter estivessem envolvidos, não havia razão para se aproximarem dele e da
              Sra. Dursley. Os Potter sabiam muito bem o que pensavam deles e de gente de sua laia... Não
              via como ele e Petúnia poderiam se envolver com nada que estivesse acontecendo. O Sr.
              Dursley bocejou e se virou. Isso não poderia afetá-los...
              <br />
              Como estava enganado.
              <br />
              O Sr. Dursley talvez estivesse mergulhando em um sono inquieto, mas o gato
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap1/page6" />
    </BackgroundPage>
  );
}

export default Page5;

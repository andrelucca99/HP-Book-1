import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page14() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              Duda ganhara o novo computador que
              queria, para não falar na segunda televisão e na bicicleta de corrida. Para o quê, exatamente,
              Duda queria uma bicicleta de corrida era um mistério para Harry, porque Duda era muito
              gordo e detestava fazer exercícios – a não ser, é claro, que envolvessem bater em alguém. O
              saco de pancadas preferido de Duda era Harry, mas nem sempre Duda conseguia pegá-lo.Harry não parecia, mas era muito rápido.
            </p>
            <p>
              Talvez fosse porque vivia num armário escuro, mas Harry sempre fora pequeno e muito
              magro para a idade. Parecia ainda menor e mais magro do que realmente era porque só lhe
              davam para vestir as roupas velhas de Duda e Duda era quatro vezes maior do que ele. Harry
              tinha um rosto magro, joelhos ossudos, cabelos negros e olhos muito verdes. Usava óculos
              redondos, remendados com fita adesiva, por causa das muitas vezes que Duda o socara no
              nariz. A única coisa que Harry gostava em sua aparência era uma cicatriz fininha na testa que
              tinha a forma de um raio. Existia desde que se entendia por gente e a primeira pergunta que se
              lembrava de ter feito à tia Petúnia era como a arranjara.
              <br />
              – No desastre de carro em que seus pais morreram – respondera ela. – E não faça
              perguntas.
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              Não faça perguntas – esta era a primeira regra para levar uma vida tranquila com os
              Dursley.
              <br />
              Tio Válter entrou na cozinha quando Harry estava virando o bacon.
              <br />
              – Penteie o cabelo! – mandou, à guisa de bom-dia.
            </p>
            <p>
              Mais ou menos uma vez por semana, tio Válter espiava por cima do jornal e gritava que
              Harry precisava cortar os cabelos. Harry deve ter feito mais cortes que o resto dos meninos de
              sua classe somados, mas não fazia diferença, seus cabelos simplesmente cresciam daquele
              jeito – para todo lado.
            </p>
            <p>
              Harry estava fritando os ovos na altura em que Duda chegou à cozinha com a mãe. Duda se
              parecia muito com o tio Válter. Tinha um rosto grande e rosado, pescoço curto, olhos azuis
              pequenos e aguados e cabelos louros muito espessos e assentados na cabeça enorme e densa.
              Tia Petúnia dizia com frequência que Duda parecia um anjinho – Harry dizia com frequência
              que Duda parecia um porco de peruca.
            </p>
            <p>
              Harry pôs os pratos de ovos com bacon na mesa, o que foi difícil porque não havia muito
              espaço. Entrementes, Duda contava os presentes. Ficou desapontado.
              <br />
              – Trinta e seis – disse, erguendo os olhos para o pai e a mãe. – Dois a menos do
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap2/page15" />
    </BackgroundPage>
  );
}

export default Page14;

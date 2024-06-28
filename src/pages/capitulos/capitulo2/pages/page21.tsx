import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page21() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              verde e uma queimadura na testa. Isto, supunha ele, era o acidente embora não
              conseguisse lembrar de onde vinha toda aquela luz verde. Não conseguia lembrar nada dos
              pais. A tia e o tio nunca falavam neles e naturalmente tinham-no proibido de fazer perguntas. E
              não havia fotografias deles na casa.
            </p>
            <p>
              Quando era mais novo, Harry sonhara muitas vezes com um parente desconhecido que vinha
              levá-lo embora, mas isto nunca acontecera; os Dursley eram sua única família. Ainda assim,
              ele achava (ou talvez fosse só uma esperança) que estranhos na rua o conheciam. E eram
              estranhos muito estranhos. Um homenzinho de cartola roxa se curvara para ele uma vez quando
              estava fazendo compras com tia Petúnia e Duda. Depois de perguntar a Harry, furiosa, se ele
              conhecia o homem, tia Petúnia tinha empurrado os meninos depressa para fora da loja sem
              comprar nada. Uma velha amaluca da toda vestida de verde uma vez acenara alegremente para
              ele no ônibus. Um careca com um longo casaco púrpura chegara a apertar sua mão na rua um
              dia desses e em seguida se afastara sem dizer nada. A coisa mais estranha nessas pessoas era
              a maneira com que pareciam desaparecer no instante em que Harry tentava vê-los melhor.
            </p>
            <p>
              Na escola Harry não tinha ninguém. Todos sabiam que a turma de Duda odiava
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              aquele
              estranho Harry Potter com suas roupas velhas e folgadas e os óculos remendados, e ninguém
              gostava de contrariar a turma do Duda.
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap3/page23" />
    </BackgroundPage>
  );
}

export default Page21;

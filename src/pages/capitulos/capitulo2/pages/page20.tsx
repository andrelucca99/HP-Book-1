import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page20() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>
              marrons e reluzentes.
              <br />
              – Faz ela se mexer – choramingou para o pai. Tio Válter bateu no vidro, mas a cobra não se
              mexeu.
              <br />
              – Faz outra vez – mandou Duda. Tio Válter bateu no vidro com os nós dos dedos, mas a
              cobra continuou dormindo.
              <br />
              – Que chato – queixou-se Duda. E saiu arrastando os pés.
            </p>
            <p>
              Harry veio se postar na frente do tanque e estudou a cobra com atenção. Não se admiraria
              se a própria cobra morresse de tédio – não tinha companhia a não ser aquela gente idiota que
              batucava no vidro, tentando incomodá-la o dia inteiro. Era pior do que ter um armário por
              quarto, onde a única visita era a tia Petúnia esmurrando a porta para acordá-lo, mas ao menos
              ele podia visitar o resto da casa.
            </p>
            <p>
              A cobra inesperadamente abriu os olhos, que pareciam contas. Devagarinho, muito
              devagarinho, levantou a cabeça até seus olhos chegarem ao nível dos de Harry.
              <br />
              E piscou.
            </p>
            <p>
              Harry arregalou os olhos. E olhou depressa a toda volta para ver se havia alguém olhando.
              Não havia. E retribuiu o olhar da cobra, piscando também.
            </p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>
              A cobra acenou com a cabeça na direção de tio Válter e de Duda, depois levantou os olhos
              para o teto. Lançou um olhar a Harry que dizia com todas as letras:
              <br />
              – Isso é o que me acontece o tempo todo.
              <br />
              – Eu sei – murmurou Harry pelo vidro, embora não tivesse muita certeza se a cobra poderia
              ouvi-lo –, deve ser bem chato.
              <br />
              A cobra concordou com um aceno de cabeça enfático.
              <br />
              – Mas de onde é que você veio? – perguntou Harry.
              <br />
              A cobra apontou com o rabo uma placa próxima ao vidro. Harry espiou.
              <br />
              Boa Constrictor, Brasil.
              <br />
              – Era bom lá?
              <br />
              A jiboia apontou novamente a placa com o rabo e Harry leu: Este espécime nasceu em
              cativeiro.
              <br />
              – Ah, entendo, então você nunca esteve no Brasil?
              <br />
              A cobra sacudiu a cabeça, mas um grito ensurdecedor atrás de Harry fez os dois pularem:
              <br />
              – DUDA! SR. DURSLEY! VENHAM VER ESSA COBRA! VOCÊS NÃO VÃO ACREDITAR NO QUE ESTÁ
              FAZENDO!
            </p>
          </Paragraph>
        }
      />
      <Button rota="/cap2/page21" />
    </BackgroundPage>
  );
}

export default Page20;

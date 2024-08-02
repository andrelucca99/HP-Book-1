import Capa from '../../../assets/fundo.svg';
import Capitulo from '../../../components/Capitulo';

function Capitulo1() {
  return (
    <Capitulo
      capa={ Capa }
      title="- Capítulo 1 -"
      subTitle="O menino que sobreviveu"
      rota="/cap1/page1"
    />
  );
}

export default Capitulo1;

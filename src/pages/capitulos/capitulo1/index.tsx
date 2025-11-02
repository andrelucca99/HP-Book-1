import Capa from './assets/capa_1.png';
import Capitulo from '../../../components/Capitulo';

function Capitulo1() {
  return (
    <Capitulo
      capa={Capa}
      title="- Capítulo 1 -"
      subTitle="O menino que sobreviveu"
      rota="/capitulo/1/pagina/1"
    />
  );
}

export default Capitulo1;

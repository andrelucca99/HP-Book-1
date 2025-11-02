import Capa from './assets/capa_2.png';
import Capitulo from '../../../components/Capitulo';

function Capitulo2() {
  return (
    <Capitulo
      capa={Capa}
      title="- Capítulo 2 -"
      subTitle="O vidro que sumiu"
      rota="/capitulo/2/pagina/14"
    />
  );
}

export default Capitulo2;

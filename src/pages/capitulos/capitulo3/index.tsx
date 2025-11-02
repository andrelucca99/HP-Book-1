import Capa from './assets/capa_3.png';
import Capitulo from '../../../components/Capitulo';

function Capitulo3() {
  return (
    <Capitulo
      capa={Capa}
      title="- Capítulo 3 -"
      subTitle="As cartas de ninguém"
      rota="/capitulo/3/pagina/24"
    />
  );
}

export default Capitulo3;

import { Outlet } from 'react-router-dom';

import Capa from '../../../assets/fundo.svg';

import Title from '../../../components/Title';
import Sheet from '../../../components/Sheet';
import Button from '../../../components/Button';
import CapaCapitulo from '../../../components/CapaCapitulo';
import BackgroundPage from '../../../components/BackgroundPage';

function Capitulo1() {
  return (
    <BackgroundPage>

      <Outlet />
      <Sheet
        left={
          <CapaCapitulo capa={ Capa } />
        }
        right={
          <Title title="- Capítulo 1 -" subTitle="O menino que sobreviveu" />
        }
      />
      <Button rota="/cap1/page1" />
    </BackgroundPage>
  );
}

export default Capitulo1;

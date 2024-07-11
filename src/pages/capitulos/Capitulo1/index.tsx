/* eslint-disable max-len */
import { Outlet } from 'react-router-dom';

import Capa from '../../../assets/fundo.svg';

import Title from '../../../components/Title';
import Sheet from '../../../components/Sheet';
import Button from '../../../components/Button';
import CapaCapitulo from '../../../components/CapaCapitulo';

function Capitulo1() {
  return (
    <div className="w-full h-screen bg-blue-300 flex flex-col items-center justify-center mobile:py-3">
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
    </div>
  );
}

export default Capitulo1;

import { Outlet } from 'react-router-dom';
import Sheet from '../../../components/Sheet';
import CapaCapitulo from '../../../components/CapaCapitulo';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import Capa from '../../../assets/fundo.svg';

function Capitulo2() {
  return (
    <div className="w-full h-screen bg-blue-300 flex flex-col items-center justify-center mobile:py-3">
      <Outlet />
      <Sheet
        left={
          <CapaCapitulo capa={ Capa } />
          }
        right={
          <Title title="- Capítulo 2 -" subTitle="O vidro que sumiu" />
          }
      />
      <Button rota="/cap2/page13" />
    </div>
  );
}

export default Capitulo2;

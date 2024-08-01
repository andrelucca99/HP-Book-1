import { Outlet } from 'react-router-dom';
import Sheet from '../../../components/Sheet';
import CapaCapitulo from '../../../components/CapaCapitulo';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import Capa from '../../../assets/fundo.svg';

function Capitulo3() {
  return (
    <div className="w-full h-screen bg-blue-300 flex flex-col items-center justify-center mobile:py-3">
      <Outlet />
      <Sheet
        left={
          <CapaCapitulo capa={ Capa } />
          }
        right={
          <Title title="- Capítulo 3 -" subTitle="As cartas de ninguém" />
          }
      />
      <Button rota="/cap3/page24" />
    </div>
  );
}

export default Capitulo3;

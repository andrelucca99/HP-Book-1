/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */

import { Outlet } from 'react-router-dom';
import Sheet from '../Sheet';
import Title from '../Title';
import Button from '../Button';
import CapaCapitulo from '../CapaCapitulo';

type Props = {
  capa: string;
  title: string;
  subTitle: string;
  rota: string;
};

const Capitulo: React.FC<Props> = ({ capa, title, subTitle, rota }) => {
  return (
    <div className="w-full h-screen bg-indigo-300 flex flex-col items-center justify-center mobile:py-3">
      <Outlet />
      <Sheet
        left={
          <CapaCapitulo capa={ capa } />
        }
        right={
          <Title title={ title } subTitle={ subTitle } />
        }
      />
      <Button rota={ rota } />
    </div>
  );
};

export default Capitulo;

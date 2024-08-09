import { useContext } from 'react';
import BackgroundPage from '../../../../components/BackgroundPage';
import Sheet from '../../../../components/Sheet';
import Paragraph from '../../../../components/Paragraph';
import Button from '../../../../components/Button';
import PagesContext from '../../../../context/PagesContext';

import foto from '../../../../assets/h3.jpg';

function Page26() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page25;

  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            {
              left.map((page, index) => (
                <p key={ index }>{page}</p>
              ))
            }
            <img className="w-full h-64" src={ foto } alt="teste" />
            <p>Colocar uma imagem da carta</p>
          </Paragraph>
        }
        right={
          <Paragraph>
            {
              right.map((page, index) => (
                <p key={ index }>{page}</p>
              ))
            }
          </Paragraph>
        }
      />
      <Button rota="/capitulo/3/pagina/27" />
    </BackgroundPage>
  );
}

export default Page26;

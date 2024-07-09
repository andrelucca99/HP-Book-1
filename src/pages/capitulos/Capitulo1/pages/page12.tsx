import { useContext } from 'react';

import PagesContext from '../../../../context/PagesContext';

import Sheet from '../../../../components/Sheet';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import BackgroundPage from '../../../../components/BackgroundPage';

function Page12() {
  const { paginas } = useContext(PagesContext);
  const { left, right, imagem } = paginas.page12;

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
          </Paragraph>
        }
        right={
          <Paragraph>
            {
              right.map((page, index) => (
                <p key={ index }>{page}</p>
              ))
            }
            <img className="w-full h-4/5" src={ imagem } alt="teste" />
          </Paragraph>
        }
      />
      <Button rota="/cap2" />
    </BackgroundPage>
  );
}

export default Page12;

import { useContext } from 'react';

import PagesContext from '../../../../context/PagesContext';

import Sheet from '../../../../components/Sheet';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import BackgroundPage from '../../../../components/BackgroundPage';
import foto from '../assets/capa1.svg';

function Page13() {
  const { paginas } = useContext(PagesContext);
  const { left } = paginas.page13;

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
            <img className="w-full h-full" src={ foto } alt="teste" />
          </Paragraph>
        }
      />
      <Button rota="/cap2" />
    </BackgroundPage>
  );
}

export default Page13;

import { useContext } from 'react';

import PagesContext from '../../../../context/PagesContext';

import Sheet from '../../../../components/Sheet';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import BackgroundPage from '../../../../components/BackgroundPage';
import fotoDumbledore from '../../../../assets/h3.jpg';

function Page6() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page6;

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
            <img className="w-full max-h-96 mt-5" src={ fotoDumbledore } alt="colocar ilustração do Dumbledore" />
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
      <Button rota="/capitulo/1/pagina/7" />
    </BackgroundPage>
  );
}

export default Page6;

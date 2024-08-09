import { useContext } from 'react';

import PagesContext from '../../../../context/PagesContext';

import Sheet from '../../../../components/Sheet';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import BackgroundPage from '../../../../components/BackgroundPage';
import foto from '../../../../assets/image 1.png';

function Page14() {
  const { paginas } = useContext(PagesContext);
  const { left } = paginas.page14;

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
      <Button rota="/capitulo/2/pagina/15" />
    </BackgroundPage>
  );
}

export default Page14;

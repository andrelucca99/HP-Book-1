import { useContext } from 'react';

import PagesContext from '../../../../context/PagesContext';

import Sheet from '../../../../components/Sheet';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import BackgroundPage from '../../../../components/BackgroundPage';
import FotoHagrid from '../../../../assets/h4.jpg';

function Page11() {
  const { paginas } = useContext(PagesContext);
  const { left } = paginas.page11;

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
            <img className="w-full h-full" src={ FotoHagrid } alt="foto do Hagrid" />
          </Paragraph>
        }
      />
      <Button rota="/capitulo/1/pagina/12" />
    </BackgroundPage>
  );
}

export default Page11;

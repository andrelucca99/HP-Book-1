import { useContext } from 'react';

import PagesContext from '../../../../context/PagesContext';

import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page21() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page21;

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
          </Paragraph>
        }
      />
      <Button rota="/capitulo/2/pagina/22" />
    </BackgroundPage>
  );
}

export default Page21;

import { useContext } from 'react';

import PagesContext from '../../../../context/PagesContext';

import Sheet from '../../../../components/Sheet';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import BackgroundPage from '../../../../components/BackgroundPage';

function Page2() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page2;

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
      <Button rota="/cap1/page3" />

    </BackgroundPage>
  );
}

export default Page2;

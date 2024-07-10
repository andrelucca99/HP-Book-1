import { useContext } from 'react';

import PagesContext from '../../../../context/PagesContext';

import Sheet from '../../../../components/Sheet';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import BackgroundPage from '../../../../components/BackgroundPage';

function Page17() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page17;

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
      <Button rota="/cap2/page18" />
    </BackgroundPage>
  );
}

export default Page17;

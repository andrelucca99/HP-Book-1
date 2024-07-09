import { useContext } from 'react';

import PagesContext from '../../../../context/PagesContext';

import Sheet from '../../../../components/Sheet';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import BackgroundPage from '../../../../components/BackgroundPage';
import relogio from '../../../../assets/h3.jpg';

function Page9() {
  const { paginas } = useContext(PagesContext);
  const { left } = paginas.page9;

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
            <img className="w-full h-full" src={ relogio } alt="foto do relogio" />
          </Paragraph>
        }
      />
      <Button rota="/cap1/page10" />
    </BackgroundPage>
  );
}

export default Page9;

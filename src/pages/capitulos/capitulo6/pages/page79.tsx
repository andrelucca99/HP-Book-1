import { useContext } from 'react';
import BackgroundPage from '../../../../components/BackgroundPage';
import Sheet from '../../../../components/Sheet';
import Paragraph from '../../../../components/Paragraph';
import Button from '../../../../components/Button';
import PagesContext from '../../../../context/PagesContext';

import CasteloImage from '../assets/Castelo_de_Hogwarts.png';

function Page79() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page77;

  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            {
              left.map((page, index) => (
                <p key={index}>{page}</p>
              ))
            }
          </Paragraph>
        }
        right={
          <Paragraph>
            {
              right.map((page, index) => (
                <p key={index}>{page}</p>
              ))
            }
            <img src={CasteloImage} alt="Imagem do castelo" />
          </Paragraph>
        }
      />
      <Button rota="/capitulo/7" />
    </BackgroundPage>
  );
}

export default Page79;

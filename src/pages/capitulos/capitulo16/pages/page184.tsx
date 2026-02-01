import { useContext } from 'react';
import BackgroundPage from '../../../../components/BackgroundPage';
import Sheet from '../../../../components/Sheet';
import Paragraph from '../../../../components/Paragraph';
import Button from '../../../../components/Button';
import PagesContext from '../../../../context/PagesContext';

function Page184() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page182;

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
          </Paragraph>
        }
      />
      <Button rota="/capitulo/16/pagina/185" />
    </BackgroundPage>
  );
}

export default Page184;

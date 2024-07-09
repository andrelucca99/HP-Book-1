import BackgroundPage from '../../../../components/BackgroundPage';
import Button from '../../../../components/Button';
import Paragraph from '../../../../components/Paragraph';
import Sheet from '../../../../components/Sheet';

function Page14() {
  return (
    <BackgroundPage>
      <Sheet
        left={
          <Paragraph>
            <p>texto</p>
          </Paragraph>
        }
        right={
          <Paragraph>
            <p>imagem do harry</p>
          </Paragraph>
        }
      />
      <Button rota="/cap2/page15" />
    </BackgroundPage>
  );
}

export default Page14;

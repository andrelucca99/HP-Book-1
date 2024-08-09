import { useContext, useState } from 'react';
import BackgroundPage from '../../../../components/BackgroundPage';
import Sheet from '../../../../components/Sheet';
import Paragraph from '../../../../components/Paragraph';
import Button from '../../../../components/Button';
import PagesContext from '../../../../context/PagesContext';
import Modal from '../../../../components/Modal';

function Page89() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page87;

  const [open, setOpen] = useState<boolean>(false);

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
            <div className="p-10 flex justify-center w-full">
              <button
                className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-blue-500 hover:bg-blue-600 text-white"
                onClick={ () => setOpen(true) }
              >
                Cantar música
              </button>
              <Modal open={ open } onClose={ () => setOpen(false) }>
                <div className="flex flex-col gap-4">
                  <ul>
                    <li>Hogwarts, Hogwarts, Hoggy Warty Hogwarts,</li>
                    <li>Nos ensine algo por favor,</li>
                    <li>Quer sejamos velhos e calvos</li>
                    <li>Quer moços de pernas raladas,</li>
                    <li>Temos as cabeças precisadas</li>
                    <li>De ideias interessantes</li>
                    <li>Pois estão ocas e cheias de ar,</li>
                    <li>Moscas mortas e fios de cotão.</li>
                    <li>Nos ensine o que vale a pena</li>
                    <li>Faça lembrar o que já esquecemos</li>
                    <li>Faça o melhor, faremos o resto,</li>
                    <li>Estudaremos até o cérebro se desmanchar.</li>
                  </ul>
                </div>
              </Modal>
            </div>
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
      <Button rota="/capitulo/7/pagina/90" />
    </BackgroundPage>
  );
}

export default Page89;

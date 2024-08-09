import { useContext, useState } from 'react';
import BackgroundPage from '../../../../components/BackgroundPage';
import Sheet from '../../../../components/Sheet';
import Paragraph from '../../../../components/Paragraph';
import Button from '../../../../components/Button';
import PagesContext from '../../../../context/PagesContext';
import Modal from '../../../../components/Modal';

function Page38() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page36;

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
                Ler Carta
              </button>
              <Modal open={ open } onClose={ () => setOpen(false) }>
                <div className="flex flex-col gap-4">
                  <h1>ESCOLA DE MAGIA E BRUXARIA DE HOGWARTS</h1>
                  <p className="text-center text-sm">
                    Diretor: Alvo Dumbledore
                    <br />
                    (Ordem de Merlim, Primeira Classe, Grande Feiticeiro, Bruxo Chefe, Cacique Supremo,
                    Confederação Internacional de Bruxos)
                  </p>
                  <p>
                    <strong>Prezado Sr. Potter</strong>
                    ,
                    <br />
                    Temos o prazer de informar que V. Sa. tem uma vaga na Escola de Magia e Bruxaria de
                    Hogwarts. Estamos anexando uma lista dos livros e equipamentos necessários.
                    O ano letivo começa em 1ode setembro. Aguardamos sua coruja até 31 de julho, no mais
                    tardar.
                    <br />
                    <br />
                    Atenciosamente,
                  </p>
                  <p>
                    Minerva McGonagall
                    <br />
                    Diretora Substituta
                  </p>
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
      <Button rota="/capitulo/4/pagina/39" />
    </BackgroundPage>
  );
}

export default Page38;

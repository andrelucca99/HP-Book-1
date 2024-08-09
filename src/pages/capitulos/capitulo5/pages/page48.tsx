import { useContext, useState } from 'react';
import BackgroundPage from '../../../../components/BackgroundPage';
import Sheet from '../../../../components/Sheet';
import Paragraph from '../../../../components/Paragraph';
import Button from '../../../../components/Button';
import PagesContext from '../../../../context/PagesContext';
import Modal from '../../../../components/Modal';

function Page48() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page46;

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
                Ver lista
              </button>
              <Modal open={ open } onClose={ () => setOpen(false) }>
                <div className="flex flex-col gap-4">
                  <h1>ESCOLA DE MAGIA E BRUXARIA DE HOGWARTS</h1>

                  <h2>Uniforme</h2>
                  <ol>
                    <li>Os estudantes do primeiro ano precisam de:</li>
                    <li>1 .Três conjuntos de vestes comuns de trabalho (pretas)</li>
                    <li>2. Um chapéu pontudo simples (preto) para uso diário</li>
                    <li>3. Um par de luvas protetoras (couro de dragão ou similar)</li>
                    <li>4. Uma capa de inverno (preta com fechos prateados)</li>
                    <li>As roupas do aluno devem ter etiquetas com seu nome.</li>
                  </ol>

                  <hr />

                  <h2>Livros</h2>
                  <ul>
                    <li>Os alunos devem comprar um exemplar de cada um dos seguintes:</li>
                    <li>Livro padrão de feitiços (1a série) de Miranda Goshawk</li>
                    <li>História da magia de Batilda Bagshot</li>
                    <li>Teoria da magia de Adalberto Waffling</li>
                    <li>Guia de transfiguração para iniciantes de Emerico Switch</li>
                    <li>Mil ervas e fungos mágicos de Fílida Spore</li>
                    <li>Bebidas e poções mágicas de Arsênio Jigger</li>
                    <li>Animais fantásticos & onde habitam de Newton Scamander</li>
                    <li>As forças das trevas: Um guia de autoproteção de Quintino Trimble.</li>
                  </ul>

                  <hr />

                  <h2>Outros Equipamentos</h2>
                  <ul>
                    <li>1 varinha mágica</li>
                    <li>1 caldeirão (estanho, tamanho padrão 2)</li>
                    <li>1 conjunto de frascos</li>
                    <li>1 telescópio</li>
                    <li>1 balança de latão</li>
                  </ul>

                  <h2>Os alunos podem ainda trazer uma coruja OU um gato OU um sapo.</h2>

                  <strong>
                    LEMBRAMOS AOS PAIS QUE OS ALUNOS DO PRIMEIRO ANO NÃO PODEM USAR VASSOURAS PESSOAIS.
                  </strong>
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
      <Button rota="/capitulo/5/pagina/49" />
    </BackgroundPage>
  );
}

export default Page48;

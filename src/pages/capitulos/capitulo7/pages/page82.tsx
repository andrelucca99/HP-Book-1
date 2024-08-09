/* eslint-disable react/jsx-max-depth */
import { useContext, useState } from 'react';
import BackgroundPage from '../../../../components/BackgroundPage';
import Sheet from '../../../../components/Sheet';
import Paragraph from '../../../../components/Paragraph';
import Button from '../../../../components/Button';
import PagesContext from '../../../../context/PagesContext';
import Modal from '../../../../components/Modal';

function Page82() {
  const { paginas } = useContext(PagesContext);
  const { left, right } = paginas.page80;

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
          </Paragraph>
        }
        right={
          <Paragraph>
            {
              right.map((page, index) => (
                <p key={ index }>{page}</p>
              ))
            }
            <div className="p-10 flex justify-center w-full">
              <button
                className="border border-neutral-300 rounded-lg py-1.5 px-10 bg-blue-500 hover:bg-blue-600 text-white"
                onClick={ () => setOpen(true) }
              >
                Ler Hino
              </button>
              <Modal open={ open } onClose={ () => setOpen(false) }>
                <div className="flex flex-col gap-4">
                  <ul>
                    <li>Ah, vocês podem me achar pouco atraente,</li>
                    <li>Mas não me julguem só pela aparência</li>
                    <li>Engulo a mim mesmo se puderem encontrar</li>
                    <li>Um chapéu mais inteligente do que o papai aqui.</li>
                    <li>Podem guardar seus chapéus-coco bem pretos,</li>
                    <li>Suas cartolas altas de cetim brilhoso</li>
                    <li>Porque sou o Chapéu Seletor de Hogwarts</li>
                    <li>E dou de dez a zero em qualquer outro chapéu.</li>
                    <li>Não há nada escondido em sua cabeça</li>
                    <li>Que o Chapéu Seletor não consiga ver,</li>
                    <li>Por isso é só me porem na cabeça que vou dizer</li>
                    <li>Em que casa de Hogwarts deverão ficar.</li>
                    <li>Quem sabe sua morada é a Grifinória,</li>
                    <li>Casa onde habitam os corações indômitos.</li>
                    <li>Ousadia e sangue-frio e nobreza</li>
                    <li>Destacam os alunos da Grifinória dos demais;</li>
                    <li>Quem sabe é na Lufa-Lufa que você vai morar,</li>
                    <li>Onde seus moradores são justos e leais</li>
                    <li>Pacientes, sinceros, sem medo da dor;</li>
                    <li>Ou será a velha e sábia Corvinal,</li>
                    <li>A casa dos que têm a mente sempre alerta,</li>
                    <li>Onde os homens de grande espírito e saber</li>
                    <li>Sempre encontrarão companheiros seus iguais;</li>
                    <li>Ou quem sabe a Sonserina será a sua casa</li>
                    <li>E ali fará seus verdadeiros amigos,</li>
                    <li>Homens de astúcia que usam quaisquer meios</li>
                    <li>Para atingir os fins que antes colimaram.</li>
                    <li>Vamos, me experimentem! Não devem temer!</li>
                    <li>Nem se atrapalhar! Estarão em boas mãos!</li>
                    <li>(Mesmo que os chapéus não tenham pés nem mãos)</li>
                    <li>Porque sou único, sou um Chapéu Pensador!</li>
                  </ul>
                </div>
              </Modal>
            </div>
          </Paragraph>
        }
      />
      <Button rota="/capitulo/7/pagina/83" />
    </BackgroundPage>
  );
}

export default Page82;

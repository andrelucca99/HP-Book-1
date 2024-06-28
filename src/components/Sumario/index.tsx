/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { capitulos } from '../../utils/capitulos.json';

function Sumario() {
  return (
    <div className="w-full flex flex-col items-center justify-center font-serif font text-base text-gray-800 leading-5">
      <h2 className="text-lg font-semibold">Sumario</h2>
      <ul className="w-full text-center py-2 flex flex-col items-center">
        {
        capitulos.map(({ cap, title }) => (
          <li className="w-4/5 hover:cursor-pointer hover:bg-blue-600 hover:rounded-md hover:px-5 hover:text-white" key={ cap }>
            <Link to={ cap }>{ title }</Link>
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default Sumario;

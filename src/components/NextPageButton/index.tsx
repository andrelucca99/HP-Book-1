/* eslint-disable react/function-component-definition */
import { useNavigate } from 'react-router-dom';
import IconArrowForward from '../../assets/arrow_forward.svg';

type Props = {
  nextPage: string;
  name?: string;
};

const NextPageButton: React.FC<Props> = ({ nextPage, name }) => {
  const navigate = useNavigate();
  const handleGoNext = () => {
    navigate(nextPage);
  };
  return (
    <button
      className={ `${name ? 'hover:bg-blue-600 hover:px-2 hover:text-white hover:rounded-md' : 'bg-transparent'}` }
      onClick={ handleGoNext }
    >
      {
        name
        || <img
          className="mobile:h-6 tablet:h-8 laptop:h-10"
          src={ IconArrowForward }
          alt="Ícone de seta para frente"
        />
      }
    </button>
  );
};

export default NextPageButton;

import { useNavigate } from 'react-router-dom';
import IconArrowBack from '../../assets/arrow_back.svg';

function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={ handleGoBack }
    >
      <img
        className="mobile:h-6 tablet:h-8 laptop:h-10"
        src={ IconArrowBack }
        alt="Ícone de seta para trás"
      />
    </button>
  );
}

export default GoBackButton;

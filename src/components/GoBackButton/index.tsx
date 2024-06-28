import { useNavigate } from 'react-router-dom';

function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="hover:bg-blue-600 hover:px-2 hover:text-white hover:rounded-md" onClick={ handleGoBack }>Voltar</button>
  );
}

export default GoBackButton;

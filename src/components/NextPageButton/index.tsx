/* eslint-disable react/function-component-definition */
import { useNavigate } from 'react-router-dom';

type Props = {
  nextPage: string;
  name: string;
};

const NextPageButton: React.FC<Props> = ({ nextPage, name }) => {
  const navigate = useNavigate();
  const handleGoNext = () => {
    navigate(nextPage);
  };
  return (
    <button
      className="hover:bg-blue-600 hover:px-2 hover:text-white hover:rounded-md"
      onClick={ handleGoNext }
    >
      { name }
    </button>
  );
};

export default NextPageButton;

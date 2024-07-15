import GoBackButton from '../GoBackButton';
import NextPageButton from '../NextPageButton';

type Props = {
  rota: string,
};

// eslint-disable-next-line react/function-component-definition
const Button: React.FC<Props> = ({ rota }) => {
  return (
    <div className="w-4/5 flex justify-between mt-5">
      <GoBackButton />
      <NextPageButton nextPage={ rota } name="Next" />
    </div>
  );
};

export default Button;

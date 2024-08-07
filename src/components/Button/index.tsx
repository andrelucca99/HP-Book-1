/* eslint-disable react/function-component-definition */
import GoBackButton from '../GoBackButton';
import NextPageButton from '../NextPageButton';

type Props = {
  rota: string,
};

const Button: React.FC<Props> = ({ rota }) => {
  return (
    <div className="w-full px-20 flex mobile:justify-around laptop:justify-between mt-5 mobile:static laptop:absolute">
      <GoBackButton />
      <NextPageButton nextPage={ rota } />
    </div>
  );
};

export default Button;

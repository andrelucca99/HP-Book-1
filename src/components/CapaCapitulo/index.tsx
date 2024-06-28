/* eslint-disable react/function-component-definition */
type Props = {
  capa: string;
};

const CapaCapitulo: React.FC<Props> = ({ capa }) => {
  return (
    <div
      style={ { backgroundImage: `url(${capa})` } }
      className="bg-cover mobile:h-96 mobile:my-10 tablet:h-full tablet:my-0 w-full"
    />
  );
};

export default CapaCapitulo;

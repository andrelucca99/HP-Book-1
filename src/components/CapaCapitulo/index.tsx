/* eslint-disable react/function-component-definition */
type Props = {
  capa: string;
};

const CapaCapitulo: React.FC<Props> = ({ capa }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${capa})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full h-full mobile:h-96 mobile:my-10 tablet:h-full tablet:my-0"
    />
  );
};

export default CapaCapitulo;

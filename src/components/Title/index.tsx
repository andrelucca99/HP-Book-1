type Props = {
  title: string,
  subTitle: string,
};

const Title: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3">
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="text-xl font-normal">{subTitle}</h2>
    </div>
  );
};

export default Title;

/* eslint-disable max-len */
type Props = {
  children: React.ReactNode,
};

// eslint-disable-next-line react/function-component-definition
const BackgroundPage: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full mobile:h-full mobile:pt-10 tablet:pt-0 tablet:h-screen bg-blue-300 flex flex-col items-center justify-center mobile:py-3">
      { children }
    </div>
  );
};

export default BackgroundPage;

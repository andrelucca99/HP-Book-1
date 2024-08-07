/* eslint-disable max-len */
type Props = {
  children: React.ReactNode,
};

// eslint-disable-next-line react/function-component-definition
const BackgroundPage: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full mobile:h-full desktop:h-screen bg-indigo-300 flex flex-col items-center justify-center mobile:py-3">
      { children }
    </div>
  );
};

export default BackgroundPage;

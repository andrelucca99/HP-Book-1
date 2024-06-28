/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
type Props = {
  children: React.ReactNode;
};

const Paragraph: React.FC<Props> = ({ children }) => {
  return (
    <div
      // className="p-2 text-base h-full mobile:text-xs mobile:leading-normal laptop:text-lg laptop:pt-0 laptop:leading-3 desktop:text-1xl desktop:pt-14 desktop:leading-loose"
      className="p-2 text-base h-full mobile:text-red-400 tablet:text-yellow-400 laptop:text-blue-400 desktop:text-green-400"
    >
      { children }
    </div>
  );
};

export default Paragraph;

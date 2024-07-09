/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
type Props = {
  children: React.ReactNode;
};

const Paragraph: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="p-2 text-base h-full text-gray-700 mobile:leading-7 mobile:text-base desktop:text-lg desktop:leading-10 desktop:pt-6"
    >
      { children }
    </div>
  );
};

export default Paragraph;

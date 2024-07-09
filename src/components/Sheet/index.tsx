/* eslint-disable max-len */
/* eslint-disable react/function-component-definition */
type Props = {
  left: React.ReactNode,
  right: React.ReactNode,
};

const Sheet: React.FC<Props> = ({ left, right }) => {
  return (
    <div
      className="mobile:w-11/12 mobile:h-full tablet:w-4/5 laptop:h-screen desktop:h-4/5 bg-gray-300 border-2 rounded-md flex items-center justify-center mobile:flex-col laptop:flex-row laptop:mt-5"
    >
      <div
        className="w-full h-full laptop:border-r-4 bg-gray-100 laptop:border-gray-300 font-serif text-base text-gray-800 leading-5 p-2 rounded-md flex"
      >
        {left}
      </div>
      <div className="w-full h-full bg-gray-100 font-serif text-base text-gray-800 leading-5 p-2 ">{right}</div>
    </div>
  );
};

export default Sheet;

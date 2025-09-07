import { useBioContext } from "./Context";
const Example2 = () => {
  const data = useBioContext();
  return (
    <div className=" bg-gray-500 rounded-lg w-auto m-4">
      <h1 className="font-semibold text-white text-center block">
        Name : {data[1].name}
      </h1>
      <h1 className="font-semibold text-white text-center">
        Age : {data[1].age}
      </h1>
    </div>
  );
};

export default Example2;

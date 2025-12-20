import { useState } from "react";

let data = [];
const App = () => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  let addTodo = () => {
    data.push(task);
    console.log(data);
  };

  return (
    <div className="bg-gray-700 h-screen">
      <h1 className="text-3xl text-gray-50 text-center font-bold p-4">
        Todo App
      </h1>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="text-white border rounded-lg px-4 py-2"
          onChange={handleChange}
        />
        <button
          onClick={addTodo}
          className="bg-gray-600 font-bold hover:bg-gray-800 border-black text-white rounded-lg px-4 py-2 m-4"
        >
          Add Todo
        </button>
      </div>
      <div className="flex justify-center items-center mt-2">
        {data.map((e) => {
          return <ul className="text-3xl text-white">{e}</ul>;
        })}
        <button
          type="submit"
          className="bg-gray-600 font-bold hover:bg-gray-800 border-black text-white rounded-lg px-4 py-2 m-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default App;

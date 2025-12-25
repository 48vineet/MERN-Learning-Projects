import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  const [tasks, setTasks] = useState([
    "Going Gym",
    "Eating Tiffin On Time",
    "Comback Home Before 8",
    "Whole Day Summery",
    "Works For Next Day",
  ]);

  const onSubmit = (data) => {
    setTasks((prev) => [...prev, data.todo]);
    reset();
  };

  return (
    <div>
      <div className="flex justify-around items-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 flex gap-3">
            <input
              type="text"
              className="input input-md rounded-lg"
              placeholder="Enter Todo"
              {...register("todo", { required: true })}
            />
            <button type="submit" className="btn btn-neutral">
              Add Todo
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center m-5 gap-5">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className="flex gap-4 items-center">
              <p className="text-2xl">{task}</p>
              <input type="checkbox" className="checkbox checkbox-primary" />
              <button className="btn btn-sm btn-error">Delete</button>
            </div>
          ))
        ) : (
          <p className="text-xl text-gray-500">
            No tasks to show. Add a new task!
          </p>
        )}
      </div>
    </div>
  );
};

export default Form;

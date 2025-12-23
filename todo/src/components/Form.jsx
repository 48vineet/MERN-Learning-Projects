import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();

  let tasks = [
    "Going Gym",
    "Eating Tiffin On Time",
    "Comback Home Before 8 ",
    "Whole Day Summery",
    "Works For Next Day",
  ];

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div className="flex justify-around items-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 flex gap-3 ">
            <input
              type="text"
              className="input input-md rounded-lg "
              placeholder="Enter Todo"
              {...register("todo", { required: true })}
            />
            <button type="submit" className="btn btn-neutral">
              Add Todo
            </button>
          </div>
        </form>
      </div>
      <div className="">
        {tasks.map((task, idx) => (
          <div key={idx} className="task-item">
            <p>{idx}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;

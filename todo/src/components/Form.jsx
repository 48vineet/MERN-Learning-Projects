import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchTodos() {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/todos");
      if (response.data.success) {
        setTasks(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/add", {
        name: data.todo,
      });
      if (response.data.success) {
        fetchTodos();
        reset();
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:8080/update/${id}`);
      if (response.data.success) {
        fetchTodos();
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/delete/${id}`);
      if (response.data.success) {
        fetchTodos();
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
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
        {loading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : tasks.length > 0 ? (
          tasks.map((task) => (
            <div key={task._id} className="flex gap-4 items-center">
              <p
                className={`text-2xl ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.name}
              </p>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={task.completed}
                onChange={() => toggleComplete(task._id)}
              />
              <button
                className="btn btn-sm btn-error"
                onClick={() => deleteTodo(task._id)}
              >
                Delete
              </button>
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

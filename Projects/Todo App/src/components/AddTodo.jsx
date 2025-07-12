import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({onNewItem}) {

  const [todoName,setTodoName] = useState("");
  const [dueDate,setDueDate] = useState("");

  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  }

  const handelDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handelAddButtonClick = () => {
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  }

    return (
      <div classNameName="container text-center">
        <div classNameName="row kg-row">
          <div classNameName="col-6">
            <input type="text" placeholder="Enter Todo Here" onChange={handelNameChange} value={todoName} />
          </div>
          <div classNameName="col-4">
            <input type="date" onChange={handelDateChange} value={dueDate} />
          </div>
          <div classNameName="col-2">
          
            <button type="button" classNameName="btn btn-success kg-button" onClick={handelAddButtonClick} 
            >
              <IoIosAddCircleOutline size="1.8rem" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;
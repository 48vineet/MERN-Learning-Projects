import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState, useReducer, act } from "react";
import WelcomeMEssage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {

  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    const newTodoItems = [...currTodoItems, {
      name: action.payload.itemName,
      dueDate: action.payload.itemDeuDate,
    }];
    setTodoItems(newTodoItems);
  } else if (action.type === "DELETE_ITEM") {
    const newTodoItem = currTodoItems.filter((item) => item.name != action.payload.itemName)
  }
  return newTodoItems;
}

function App() {

  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispachTodoItems] = useReducer(todoItemsReducer, []);

  const handelNewItem = (itemName, itemDeuDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDeuDate
      }
    };
    dispachTodoItems(newItemAction);

  }

  const deletehandelButton = (todoItemName) => {


    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName : todoItemName
       
      }
    };
    dispachTodoItems(deleteItemAction);
  } 


  return (
    <TodoItemsContext.Provider value={[]}>
      <center classNameName="todo-container">
        <AppName />
        <AddTodo onNewItem={handelNewItem} />
        {todoItems.length === 0 && <WelcomeMEssage ></WelcomeMEssage>}
        <TodoItems todoItems={todoItems} onDeleteClick={deletehandelButton} ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
import { useContext } from "react"
import TodoItem from "./TodoItem"
import styles from './TodoItems.module.css'
import { TodoItemsContext } from "../store/todo-items-store"



const TodoItems = ({ todoItems, onDeleteClick }) => {

   const todoItemsFromContext = useContext(TodoItemsContext);

    return (
        <>
            <div classNameName={styles.itemsContainer}>
                {todoItems.map((item) => (
                    <TodoItem
                        key={item.name}
                        todoName={item.name}
                        todoDate={item.dueDate}
                        onDeleteClick={onDeleteClick}
                    />
                ))}
            </div>
        </>
    )
}

export default TodoItems;
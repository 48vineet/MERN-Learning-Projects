import TodoModel from "../modals/Todo.js";

export async function getTodos(req, res) {
  try {
    const todos = await TodoModel.find({});
    res.status(200).json({ success: true, data: todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error fetching todos" });
  }
}

export async function addTodo(req, res) {
  try {
    const { name } = req.body;
    if (!name || name.trim() === "") {
      return res
        .status(400)
        .json({ success: false, message: "Todo name is required" });
    }
    const newTodo = new TodoModel({ name });
    await newTodo.save();
    res.status(201).json({
      success: true,
      message: "Todo added successfully",
      data: newTodo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding todo" });
  }
}

export async function toggleTodo(req, res) {
  try {
    const { id } = req.params;
    const todo = await TodoModel.findById(id);
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    todo.completed = !todo.completed;
    await todo.save();
    res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: todo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error updating todo" });
  }
}

export async function deleteTodo(req, res) {
  try {
    const { id } = req.params;
    const deletedTodo = await TodoModel.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error deleting todo" });
  }
}

import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  toggleTodo,
} from "../controllers/todoController.js";

const router = Router();

router.get("/todos", getTodos);
router.post("/add", addTodo);
router.patch("/update/:id", toggleTodo);
router.delete("/delete/:id", deleteTodo);

export default router;

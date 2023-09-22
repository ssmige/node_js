import { todos } from "./models/Todo.js";
export function getTodos(req, res) {
  res.json(todos);
}

export async function getTodos(req, res) {
  try {
    const todos = await Todo.find({}, { _v: 0 });
    res.json(todos);
  } catch (error) {
    res.json(500).json({ error: error.message });
  }
}

export async function addTodo(req, res) {
  const { title, description } = req.body;

  try {
    const newTodo = new Todo({
      title,
      description,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteTodoById(req, res) {
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (todo) {
      await Todo.remove();
      res.json({ message: `todo with id ${id} deleted` });
    } else {
      res.status(404).json({ message: `todo with id ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

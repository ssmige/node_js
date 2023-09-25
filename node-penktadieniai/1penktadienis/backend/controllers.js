import { todos } from "./models/Todo.js";
import User from "./models.User.js";

export async function getTodos(req, res) {
  try {
    const todos = await Todo.find({}, { _v: 0 });
    const result = todos.map((todo) => ({
      title: todo.title,
      description: todo.description,
      id: todo._id,
    }));
    res.json(todos);
  } catch (error) {}
}

export function updateTodoById(req, res) {
  export async function updateTodoById(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;

    const index = todos.findIndex((todo) => todo.id === id);

    todo[index] = {
      ...todos[index],
      title,
      description,
    };
    res.json({ message: "todo updated" });
    try {
      const todo = await Todo.findById(id);
      if (!todo) {
        res.status(400).json({ message: `todo with id ${id} not found ` });
      } else {
        if (title) {
          todo.title = title;
        }
        await todo.save();
        res.json(todo);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
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

export async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (!user) {
      res.status(400).json({ message: "User not found" });
    } else {
      if (user.password === password) {
        res.json(user);
      } else {
        res.status(401).json({ message: "Wrong password" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

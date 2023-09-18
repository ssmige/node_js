const HOST = "http://localhost:3000/todo";

async function getTodos() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const todos = await response.json();

      console.log(todos);
    }
  } catch (error) {}
}
getTodos();

const HOST = "http://localhost:3000/todo";

const submitForm = document.querySelector("form");
const titleInput = document.querySelector("#titleInput");
const descriptionInput = document.querySelector("#descriptionInput");

const container = document.querySelector("#todoContainer");
let todos = [];

submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  
  const title = titleInput.value;
  const description = descriptionInput.value;
  
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

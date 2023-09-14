const button = document.querySelector("button");

button.addEventListener("click", async () => {
  const response = await fetch("http://localhost:3000");
  const data = await response.json();

  console.log(data);
});

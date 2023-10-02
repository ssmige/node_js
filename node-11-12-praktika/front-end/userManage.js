const HOST = "http://localhost:3000/users/order";

const usersCards = document.querySelector("#usersCards");
const userCard = document.querySelector("#userCard");
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const membership = document.querySelector("#membership");
const userId = document.querySelector("#userId");

// select.addEventListener("click",

let users = [];
async function getUsers() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const users = await response.json();
      users = data;

      users.forEach((user) => {
        generateUserCard(user);
      });
    } else {
      alert("Faild to fetch");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}

function generateUserCard(user) {
  const usersCards = document.createElement("div");
  const userCard = document.createElement("div");

  const name = document.createElement("h4");
  name.textContent = user.name;

  const email = document.createElement("p");
  email.textContent = user.email;

  const membership = document.createElement("p");
  membership.textContent = user.membership;

  const userId = document.createElement("p");
  userId.textContent = user.userId;

  userCard.append(name, email, membership, userId);
  usersCards.append(userCard);
}

getUsers();

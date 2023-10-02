const HOST = "http://localhost:3000/memberships";

const outputMembership = document.querySelector("#outputMembership");
const btnNewMembership = document.querySelector("#newMembership");
const membershipCard = document.querySelector("#membershipCard");
const priceH = document.querySelector("#price");
const membershipName = document.querySelector("#membershipName");
const membershipDescript = document.querySelector("#membershipDescript");
const btnDeleteMembership = document.querySelector("#deleteMembership");

let memberships = [];
async function getMemberships() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const data = await response.json();
      memberships = data;

      memberships.forEach((membership) => {
        generateMembershipCard(membership);
      });
    } else {
      alert("Failed to fetch");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}

function generateMembershipCard(membership) {
  const card = document.createElement("div");

  const price = document.createElement("h3");
  price.textContent = membership.price;

  const name = document.createElement("h3");
  name.textContent = membership.name;

  const description = document.createElement("div");
  description.textContent = membership.description;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  card.append(price, name, description, deleteButton);
  outputMembership.append(card);
}
getMemberships();

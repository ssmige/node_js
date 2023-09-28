const form = document.querySelector("form");
const inputName = document.querySelector("#name");
const button = document.querySelector("button");
const peopleList = document.querySelector("#peopleList");
console.log(peopleList);
async function updatePeopleList() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const data = await response.json();
      people = data;
    } else {
      alert("Something wrong");
    }
  } catch (error) {
    alert("Something wrong");
  }
  peopleList.innerHTML = " ";

  people.forEach((person) => {
    const namesList = document.createElement("li");
    namesList.textContent = person;
    peopleList.append(nameList);
  });
}
updatePeopleList();

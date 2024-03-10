import { formEl, contactEl } from "./refs";
import { saveData, getData } from "./api";
import { createCard } from "./markup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", postData);

async function postData(event) {
  try {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    data.createdAt = Date.now();

    const resonse = await saveData(data);
    const markup = createCard([resonse]);
    addMarkup(markup);
  } catch (error) {
    console.log(error.message);
  }

  //   const { name, number, email } = event.currentTarget.elements;
  //   const nameValue = name.value.trim();
  //   const numberValue = number.value.trim();
  //   const emailValue = email.value.trim();
  //   console.log(nameValue, numberValue, emailValue);
}

// const arr = Object.entries({ name: "Poly", number: 0 });
// console.log(arr);
// console.log(Object.fromEntries(arr));

async function init() {
  try {
    const newData = await getData();
    const markup = createCard(newData);
    addMarkup(markup);
  } catch (error) {
    console.log(error.massage);
  }
}

function addMarkup(murkup) {
  contactEl.insertAdjacentHTML("beforeend", murkup);
}

init();

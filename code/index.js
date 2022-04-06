const adviceID = document.querySelector("#advice_id");
const adviceText = document.querySelector("p");
const button = document.querySelector("button");

window.onload = () => {
  getAdvice();
};
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      adviceText.innerText = data.slip.advice;
      adviceID.innerHTML = "#" + data.slip.id;
    })
    .catch((error) => {
      console.log(error);
    });
}

button.addEventListener("click", () => {
  getAdvice();
});

getAdvice();

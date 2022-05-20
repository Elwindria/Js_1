const form = document.getElementById("form")
const button = document.getElementById("button")
const inputs = document.querySelectorAll("case")
const input = document.getElementById("name");
button.addEventListener("click", validate)

function validate() {

  

  if (input.validity.valueMissing) {
    console.log('You gotta fill this out, yo!');
  } else {
    console.log('cest ok');
  }

  console.log(document.getElementById("name").validity)

}

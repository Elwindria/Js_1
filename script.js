const form = document.getElementById("form")
const button = document.getElementById("button")
const all_input = document.querySelectorAll(".case")
const input = document.getElementById("name");
// const validityState = inputs.validity;
button.addEventListener("click", validate)

console.log(all_input)

function validate() {

  all_input.forEach(element => {
    console.log(element.id)

  if (element.validity.valueMissing) {
    console.log('You gotta fill this out, yo!');
  } else {
    console.log('cest ok');
  }

  console.log(document.getElementById("name").validity)
});
  
}

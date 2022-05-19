// function validateForm()                                 
// { 
//     var name = document.forms["form"]["name"];         
//     if (name.value == ""){ 
//         document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";  
//         name.focus(); 
//         return false; 
//     }else{
//         document.getElementById('errorname').innerHTML="";  
//     }
// }

function validate(form) {
    const input = document.getElementById(input);
    const validityState = input.validity;
  
    if (validityState.valueMissing) {
      input.setCustomValidity('First Name cannot be empty');
    }
}
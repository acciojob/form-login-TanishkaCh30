let submitBtn = document.getElementById("btn");


function getFormvalue() {
let firstName = document.querySelector('input[name="fname"]');
let fName = firstName.value.trim();
let lastName = document.querySelector('input[name="lname"]');
let lName = lastName.value.trim();

   alert(`${fName} ${lName}`); 

}


submitBtn.addEventListener("click",getFormvalue)

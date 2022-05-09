let characters = "abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()?";
const charList = characters.split("");
let passLength = document.querySelector("#pass-length");
//Get HTML elements to update
pw1 = document.getElementById("password1-element");
pw2 = document.getElementById("password2-element");
pw3 = document.getElementById("password3-element");
pw4 = document.getElementById("password4-element");

//generate password function
function generatePassword() { 
    // make a string based on random selection 
    let randomIndex = 0;
    let password = "";
    //get current password length
    let passLength = document.querySelector("#pass-length").value;
    for (let i=0;i<passLength;i++){
        randomIndex = Math.floor(Math.random()*charList.length) 
        password += characters[randomIndex];
    }
   return password;
}

passLength.addEventListener('input', function () {
    passLength = this.value;
    console.log(passLength);
    renderPasswords();
})


function renderPasswords() {
    
    pw1.textContent= generatePassword();
    pw2.textContent= generatePassword();
    pw3.textContent= generatePassword();
    pw4.textContent= generatePassword();
}
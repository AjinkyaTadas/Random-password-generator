

let inputId = document.getElementById("input");
let buttonId = document.getElementById("button");

function createPassword() {

    let characters = "0123456789abcdefghijklmnopqrstuvwxyz@#$%ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 10;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);

        password = password + characters.substring(randomNumber,randomNumber+1);
        console.log(randomNumber);
    
    }
    inputId.value = password;
    navigator.clipboard.writeText(password);
} 


    
    buttonId.addEventListener("click", () =>{
        createPassword();
    });
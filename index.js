const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
    "Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let containerOne = document.getElementById("password1")
let containerTwo = document.getElementById("password2")
const length = 15

function generate(){
    let password = ""
    let passwordTwo = ""
    password += characters[Math.floor(Math.random() * characters.length )]
    passwordTwo += characters[Math.floor(Math.random() * characters.length )]
    
    while ( password.length < length ){
        password += characters[Math.floor(Math.random() * characters.length )]
        passwordTwo += characters[Math.floor(Math.random() * characters.length )]
    }
    containerOne.textContent = password
    containerTwo. textContent = passwordTwo
}
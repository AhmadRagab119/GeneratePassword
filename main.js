let showPassWord =document.querySelector(".showPassword")
let generate = document.querySelector(".generate")
let copy = document.querySelector(".copy")
let passwordLength = document.querySelector("input.length")
let lower = document.querySelector(".lower")
let upper = document.querySelector(".upper")
let numbers = document.querySelector(".numbers")
let symbol = document.querySelector(".symbols")
let span = document.querySelector(".progress span")

generate.addEventListener("click",GeneratePassword)
copy.addEventListener("click",copyPassword)

const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "!@#$%^&*()";

// Generate Password

function GeneratePassword () {
	let password = "";
	let length = passwordLength.value - 1;
	let chars = "";

	chars += upper.checked ? uppercase_chars : "";
	chars += lower.checked ? lowercase_chars : "";
	chars += numbers.checked ? numbers_chars : "";
	chars += symbol.checked ? symbols_chars : "";

	for (let i = 0; i <= length; i++) {
		let rand = Math.floor(Math.random() * chars.length);
		password += chars.substring(rand, rand + 1);
	}

	showPassWord.value = password;
}

// Test passwordLength

setInterval(() => {
  let root = document.querySelector(":root")
 if(showPassWord.value != ""){
  if(showPassWord.value.length <= 5){
    root.style.setProperty('--progColor', `#f10202`);
    span.style.width="30%"
   }
   if(  showPassWord.value.length > 5 &&  showPassWord.value.length <= 10 ){
    root.style.setProperty('--progColor', `#ff5722`);
    span.style.width="50%"
   }

   if( showPassWord.value.length > 10 &&  showPassWord.value.length < 16 ){
    root.style.setProperty('--progColor', `#76bf21`);
    span.style.width="75%"
   }

   if(showPassWord.value.length >= 16){
    root.style.setProperty('--progColor', `#1aa01f`);
    span.style.width="100%"
   }
 }
 });


 // copy Password

 async function copyPassword() {
	if (navigator.clipboard) {
		await navigator.clipboard.writeText(showPassWord.value);
		alert("Password copied to clipboard");
	}
}

// function copyPassword(){
//   showPassWord.select()
//   document.execCommand("copy")
//   alert("Password is copied ");
// }







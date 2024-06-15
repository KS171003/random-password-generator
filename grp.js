const password = document.getElementById("passwordInput");
const length = 10;

const ALPHA = "QWERTYUIOPASDFGHJLMZNBXVCK";
const alpha = "qwertyuiopasdfghjklzxcvbnm";
const num = "1234567890";
const special = "!@#$%^&*[{:";
const all = ALPHA + alpha + num + special;

function generatePassword(){
  let pass = "";
  pass += ALPHA[Math.floor(Math.random()*ALPHA.length)];
  pass += alpha[Math.floor(Math.random()*alpha.length)];
  pass += num[Math.floor(Math.random()*num.length)];
  pass += special[Math.floor(Math.random()*special.length)];
 
  while(length>pass.length){
  pass += all[Math.floor(Math.random()*all.length)];
  }
  console.log(pass);
  password.value = pass;

}


function getColor(){
let randomColor = Math.floor(Math.random()*16777215);
//to get random color u must multyply 16777215
let randomHash = "#"+randomColor.toString(16);
//toSTring = 16 to genarate the hsh code
document.body.style.backgroundColor = randomHash;
document.getElementById("colorCode").innerText = randomHash
}


let button= document.querySelector("button");
button.addEventListener("click",()=>{
    getColor();
});
getColor();
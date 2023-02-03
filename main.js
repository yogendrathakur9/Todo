

let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul")




form.addEventListener("submit", saveTodo);

function saveTodo(e){
    e.preventDefault();
let newLi = document.createElement("li");
newLi.innerText = input.value;
newLi.className = "li";
ul.appendChild(newLi);

// CREATE DELETE BUTTON 

let dlbtn = document.createElement("button");
dlbtn.innerText = "X";
dlbtn.className = "dlbtn";
console.log(dlbtn.className);
newLi.appendChild(dlbtn);

form.reset();
}


// CLICK EVENT IN DELETE BUTTON

ul.addEventListener("click",deletetodo);

// DELETE TODO

function deletetodo(e){
if(e.target.className.includes("dlbtn")){

    const todo = e.target.parentElement
    ul.removeChild(todo)

}
}
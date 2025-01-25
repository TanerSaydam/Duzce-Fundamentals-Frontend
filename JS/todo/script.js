const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");
let todos = ["Work 1","Work 2", "Work 3"];

showList();

function save(){
    const val = inputEl.value;
    todos.push(val);
    console.log(todos);
    
    inputEl.value = "";    
    showList();    
}

function showList(){
    let text = "";
    todos.forEach((val,i) => {
        //text += "<li>" + val + "</li>"
        text += `<li>${val} <button onclick="deleteByIndex(${i})">Delete</button></li>`
    });

    ulEl.innerHTML = text;
}

function deleteByIndex(i){
    const res = confirm("Are you sure?");
    if(res){
        todos.splice(i, 1);
        showList();
    }
}
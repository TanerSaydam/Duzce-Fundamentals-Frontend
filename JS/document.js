//DOM => Document Object Model
const h1El = document.getElementById("head");
//debugger //eğer kodu durdurup olan bitene browser üzerinden bakmak istersek bunu yerleştiriyoruz

function changeH1Element(){
    h1El.innerHTML = "<span style='color:red;'>Hello Taner</span>";
    //h1El.innerText = "<span style='color:red;'>Hello Taner</span>";
}

function changeInputValue(){    
    //const inputEl = document.querySelector("input"); //element adını yazabilirsiniz
    //const inputEl = document.querySelector("#input1"); //id sini "#" işareti sonrasına yzabilirsiniz
    const inputEl = document.querySelector(".input1Class"); //class ile ulaşmak için 
    // "." işareti sonrasına yazabilirsiniz
    if(inputEl !== null){
        inputEl.value="Hello world";
    }
}

function changeAllInputs(){
    const inputEl = document.querySelectorAll("input");
    for(const val of inputEl){
        val.value = "Hello World"
    }

    for(const i in inputEl){
        inputEl[i].value = "Hello World"
    }

    inputEl.forEach(val => {
        val.value = "Hello World"
    });
    
}
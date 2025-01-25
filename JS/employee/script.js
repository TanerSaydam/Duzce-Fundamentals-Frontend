// const employees = [];
const firstNameEl = document.getElementsByName("firstName")[0];
const lastNameEl = document.getElementsByName("lastName")[0];
const dateOfBirthEl = document.getElementsByName("dateOfBirth")[0];
const salaryEl = document.getElementsByName("salary")[0];
const tbodyEl = document.querySelector("tbody");

// function save(){

// }

showList();

const save = async (event) => { //arrow function    
    event.preventDefault();
    const data = {
        fistName: firstNameEl.value,
        lastName: lastNameEl.value,
        dateOfBirth: dateOfBirthEl.value,
        salary: salaryEl.value,
    }

    await fetch("http://localhost:3000/employees",{
        method: "POST",
        body: JSON.stringify(data)
    });

    firstNameEl.value = "";
    lastNameEl.value = "";
    dateOfBirthEl.value = "2000-01-01";
    salaryEl.value = "22104";

    await showList();
    
}

async function showList(){
    const res = await fetch("http://localhost:3000/employees").then(c => c.json());

    let text = "";
    for(const i in res){
        const val = res[i];
        text += `
        <tr>
            <td>${+i + 1}</td>
            <td>${val.fistName}</td>
            <td>${val.lastName}</td>
            <td>${val.dateOfBirth}</td>
            <td>${val.salary}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>`
    }


    tbodyEl.innerHTML = text;
}
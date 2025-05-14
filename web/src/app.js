

const cards = document.querySelector("#cards")
const saveButton = document.querySelector("#saveButton")
const addButton = document.querySelector("#addButton")

const idInput = document.querySelector("#id")
const nameInput = document.querySelector("#name")
const cityInput = document.querySelector("#city")
const salaryInput = document.querySelector("#salary")

const empModalLabel = document.querySelector("#empModalLabel")
//Read
const url = 'http://localhost:8000/api/employees'

var addMode= true;
//create művelet

saveButton.addEventListener("click", () =>{
    console.log("mükszik")
    // console.log(nameInput.value)

    //javascript objektum


    if(addMode){
        const emp = {
            name : nameInput.value,
            city : cityInput.value,
            salary : salaryInput.value
        }
        addEmployee(emp)
        // console.log(emp)
    }else{
        const emp = {
            id : idInput.value,
            name : nameInput.value,
            city : cityInput.value,
            salary : salaryInput.value
        }
        updateEmployee(emp)
    }

    // console.log(emp)

    clearFields()
    
})

addButton.addEventListener("click",()=>{
    clearFields()
    addMode = true
    empModalLabel.innerHTML = "Hozzáadás"
})
//Promise
function getEmployees(){
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((result)=>{
        console.log(result)
        empList = result
        renderTbody(result.data)

    })
}


function renderTbody(empList){
    var tboyContent = ''
    empList.forEach((emp)=>{
        //ez a fura idézőjel:altgr+7
        var row = `    
            <div class="card m-3" style="width: 280px;">
              <div class="card-header">
                <h2>Név: ${emp.name}</h2>
            </div>
            
            <div class="card-body">
                <h5 class="card-title">Település: ${emp.city}</h5>
                <p class="card-text">Fizetés: ${emp.salary}</p>
                <button class = "btn btn-warning me-3" onClick="deleteEmployee(${emp.id})">Törlés</button>
                <button class = "btn btn-secondary"
                onClick = "editEmployee()"
                data-id="${emp.id}"
                data-name="${emp.name}"
                data-city="${emp.city}"
                data-salary="${emp.salary}"
                data-bs-toggle="modal" 
                data-bs-target="#empModal"
                >Szerkesztés</button>
            </div>
            </div>
        `;
        tboyContent += row;

    })
    cards.innerHTML = tboyContent
}



function clearFields(){
    idInput.value = ""
    nameInput.value = ""
    cityInput.value = ""
    salaryInput.value = ""
}

function addEmployee(emp){
    console.log(emp)
    fetch(url, 
        {method : "post",
            body : JSON.stringify(emp),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(result => {
            getEmployees()
            console.log(result)
        })
        .catch(err => console.log(err))

}

//itt ugye a / után kell az id az url-be
function deleteEmployee(id){
    // console.log("ID: ", id)
    const delUrl = url + "/" + id
    fetch(delUrl,{method:"delete"})
    .then(response => response.json())
    .then(result =>{
        console.log(result)
        getEmployees() 
        
    })

    

}



function editEmployee(){
    
    addMode = false;
    empModalLabel.innerHTML = "Szerkesztés"
    console.log(name)
    const emp = {
        id : this.event.target.getAttribute('data-id'),
        name : this.event.target.getAttribute('data-name'),
        city : this.event.target.getAttribute('data-city'),
        salary : this.event.target.getAttribute('data-salary')
    }

    idInput.value = emp.id
    nameInput.value = emp.name
    cityInput.value = emp.city
    salaryInput.value = emp.salary

    // console.log(emp)
    
    
    
}

function updateEmployee(emp){
    console.log("ide  jön az update...")
    console.log(emp)

    const extUrl = url + '/' + emp.id
    console.log(extUrl)

    fetch(extUrl, 
        {method : "put",
            body : JSON.stringify(emp),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
        .then(result => {
            getEmployees()
            console.log(result)
        })
        .catch(err => console.log(err))

    addMode = true
    empModalLabel.innerHTML = "Hozzáadás"
}

getEmployees()
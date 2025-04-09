

const tbody = document.querySelector("#tbody")
//Read
const url = 'http://localhost:8000/api/employees'


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

getEmployees()

const saveButton = document.querySelector("#saveButton")

const idInput = document.querySelector("#id")
const nameInput = document.querySelector("#name")
const cityInput = document.querySelector("#city")
const salaryInput = document.querySelector("#salary")










function renderTbody(empList){
    var tboyContent = ''
    empList.forEach((emp)=>{
        //ez a fura idézőjel:altgr+7
        var row = `    
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.city}</td>
            <td>${emp.salary}</td>
        </tr>
        `;
        tboyContent += row;

    })
    tbody.innerHTML = tboyContent
}

//create művelet

saveButton.addEventListener("click", () =>{
    // console.log("mükszik")
    // console.log(nameInput.value)

    //javascript objektum
    const emp = {
        name : nameInput.value,
        city : cityInput.value,
        salary : salaryInput.value
    }

    // console.log(emp)

    addEmployee(emp)


    clearFields()
    


    

})

function clearFields(){
    idInput.value = ""
    nameInput.value = ""
    cityInput.value = ""
    salaryInput.value = ""
}

function addEmployee(emp){
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
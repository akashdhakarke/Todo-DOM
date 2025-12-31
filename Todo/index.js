let form =document.querySelector("form")
let tbody = document.querySelector("tbody")
let name = document.getElementById("name")
let doctor = document.getElementById("doctor")
let Specialization = document.getElementById("specialization")
let Experience =document.getElementById("experience")
let email = document.getElementById("email")
let mobile = document.getElementById("number")

form.addEventListener("submit",getData)

let doctor_arr = []

function getData(){
    event.preventDefault()

    let doctor_obj = {
        name:name.value,
        doctor:doctor.value,
        Specialization:specialization.value,
        Experience:experience.value,
        email:email.value,
        mobile:number.value
    }
    doctor_arr.push(doctor_obj)
    // console.log(doctor_arr);
    display(doctor_arr)    
}

function display(data){
 tbody.innerHTML = " "
    data.map(function(el){
    let row = document.createElement("tr")
    let col1 = document.createElement("td")
    col1.innerText = el.name;
    let col2 = document.createElement("td")
    col2.innerText = el.doctor;
    let col3 = document.createElement("td")
    col3.innerText = el.Specialization;
    let col4 = document.createElement("td")
    col4.innerText = el.Experience
    let col5 = document.createElement("td")
    col5.innerText = el.email;
    let col6 = document.createElement("td")
    col6.innerText = el.mobile;
    let col7 = document.createElement("td")
    if(el.Experience > 5){
        el.Experience = "junior"
    }else if(el.Experience >=2 && el.Experience <=5){
        el.Experience = "sinior"
    }else{
        el.Experience = "trenee"
    }
    col7.innerText = el.Experience
    let col8 = document.createElement("td")
    col8.innerText = "Delete"
    col8.style.color = "white"
    col8.style.backgroundColor = "red"
col8.addEventListener("click",deletfun)

    row.append(col1,col2,col3,col4,col5,col6,col7,col8)
    tbody.append(row)
 
    })
    
}

function deletfun(){
    console.log(event.target.parentNode.remove());
    
}
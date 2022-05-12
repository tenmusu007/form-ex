// const params = new FormData(form);
// console.log(params);
//Add event listener for submitting the form
//Create validations 
//Loop through params object
        
//Use switch for different types of input to get values
//Append form results in results div
//Bonus: add styling to the page

const email = document.getElementById("email")
const name1 = document.getElementById("name1")
const pasw = document.getElementById("password")
const submit = document.getElementById("submit")
let user = {
    name:"",
    email:"",
    pasw:""
}
submit.addEventListener("click" ,function(e){
    e.preventDefault()
    user.name = name1.value;
    // console.log(email.value)
    if(!email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        console.log("wrong")
    }else{
        console.log("corrct")
        user.email = email.value;
    }

    if(!pasw.value.match(/^([a-zA-Z0-9]{5,})$/)){
        console.log("no")
    }else{
        console.log("yes")
        user.pasw = pasw.value;
    }
    console.log(user)
})
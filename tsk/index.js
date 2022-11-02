let form = document.getElementById("form");
let firstname = document.getElementById("firstName"); //input
let lastname = document.getElementById("lastName"); //input
let address = document.getElementById("address"); //input
let date = document.getElementById("date"); //input
let gender = document.getElementById("gender"); //input
let notes = document.getElementById("notes"); //input

let error_firstName = document.getElementById("error_firstName");//msg
let table = document.getElementById("table"); //posts

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () =>{
  if(firstname.value === ""){
    error_firstName.innerHTML = "Can not be blank";
    console.log("failure");
  }else{
    console.log("success");
    error_firstName.innerHTML = "";
    acceptData();
  }
}

let data = [{}];

let acceptData = () => {
  data.push({
    firstname:firstname.value,
    lastname:lastname.value,
    address:address.value,
    date:date.value,
    gender:gender.value,
    notes:notes.value,
  });

  localStorage.setItem("data", JSON.stringify(data));
  createPost();
};

let createPost = () => {
  table.innerHTML = "";
  data.map((x,y)=>{
    return (table.innerHTML += `
    <div id=${y}>
      <span>${data.firstname}</span>
      <span>${data.lastname}</span>
      <span>${data.address}</span>
      <span>${data.date}</span>
      <span>${data.gender}</span>
      <span>${data.notes}</span>
      <button onClick="deletePost(this)">DLT</button>
    </div>
  `);
  });
  resetForm();
};

let resetForm = () => {
  firstname.value = "";
  lastname.value = "";
  address.value = "";
  date.value = "";
  gender.value = "";
  notes.value = "";
};

let deletePost = (e) => {
  e.parentElement.remove();
  data.splice(e.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
};

(()=>{
  data = JSON.parse(localStorage.getItem("data"));
  createPost();
})();
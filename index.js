let form = document.getElementById("form");
let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName"); 
let address = document.getElementById("address"); 
let date = document.getElementById("date"); 
let gender = document.getElementById("gender"); 
let textarea = document.getElementById("notes"); 
let error_fName = document.getElementById("error_firstName");
let error_lName = document.getElementById("error_lastName");
let error_address = document.getElementById("error_address");
let table = document.getElementById("table");
const textOnly = /^[a-zA-Z]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () =>{
  if(fName.value === "" || fName.value === null || !fName.value.match(textOnly)){
    error_fName.innerHTML = "First Name is required,Digits and special characters are not allowed!";
  }else if(lName.value === "" || lName.value === null || !lName.value.match(textOnly)){
    error_fName.innerHTML = "";
    error_lName.innerHTML = "Last Name is required,Digits and special characters are not allowed!";
  }else if(address.value === "" || address.value === null){
    error_lName.innerHTML = "";
    error_address.innerHTML = "Address must be less than 35 characters!";
  }
  else{
    error_fName.innerHTML = "";
    error_lName.innerHTML = "";
    error_address.innerHTML = "";
    acceptData();
  }
};

let data = [{}];

let acceptData = () => {
  data.push({
    fName: fName.value,
    lName: lName.value,
    address: address.value,
    date: date.value,
    gender: gender.value,
    textarea: textarea.value,
  });
  localStorage.setItem("data", JSON.stringify(data));
  createPost();
};

let createPost = () => {
  table.innerHTML = "";
  data.map((x,y) =>{
    return (table.innerHTML += `
    <tbody id=${y}>
      <tr class="grid">
        <td scope="col">${y+1}</td>
        <td scope="col">${x.fName}</td>
        <td scope="col">${x.lName}</td>
        <td scope="col">${x.address}</td>
        <td scope="col">${x.date}</td>
        <td scope="col">${x.gender}</td>
        <td scope="col">${x.textarea}</td>
        <td id="btnsize" type="button" class="btn btn-danger active" onClick="deletePost(this);createPost()">Delete</td>
      </tr>
    </tbody>
  `);
  });
  resetForm();
};

let resetForm = () => {
  fName.value = "";
  lName.value = "";
  address.value = "";
  date.value = "";
  gender.value = "";
  textarea.value = "";
};

let deletePost = (e) => {
  e.parentElement.remove();
  data.splice(e.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
};

(()=>{
  data = JSON.parse(localStorage.getItem("data")) || [];
  createPost();
})();
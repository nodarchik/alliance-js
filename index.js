const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const date = document.getElementById("date");
const gender = document.getElementById("gender");
const notes = document.getElementById("notes");
const error_firstName = document.getElementById("error_firstName");
const regex_firstName = document.getElementById("regex_firstName");
const error_lastName = document.getElementById("error_lastName");
const regex_lastName = document.getElementById("regex_lastName");
const error_address = document.getElementById("error_address");
const regex_address = document.getElementById("regex_address");
const textOnly = /^[a-zA-Z]+$/;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validation for First Name  
    if (firstName.value === null || firstName.value === ''){
        error_firstName.style.visibility="visible";
        firstName.style.background= "rgba(255, 0, 50, 0.3)";
        firstName.style.color= "rgba(255, 0, 50, 1)";
    }
    if (!firstName.value.match(textOnly)){
        regex_firstName.style.visibility="visible";
        firstName.style.background= "rgba(255, 0, 50, 0.3)";
        firstName.style.color= "rgba(255, 0, 50, 1)";
    } 

    // Validation for Last Name 
    if (lastName.value === null || lastName.value === ''){
        error_lastName.style.visibility="visible";
        lastName.style.background= "rgba(255, 0, 50, 0.3)";
        lastName.style.color= "rgba(255, 0, 50, 1)";
    }
    if (!lastName.value.match(textOnly)){
        regex_lastName.style.visibility="visible";
        lastName.style.background= "rgba(255, 0, 50, 0.3)";
        lastName.style.color= "rgba(255, 0, 50, 1)";
    } 

    // Validation for Address
      if (address.value === null || address.value === ''){
        error_address.style.visibility="visible";
        address.style.background= "rgba(255, 0, 50, 0.3)";
        address.style.color= "rgba(255, 0, 50, 1)";
    }
    if (address.value.length > 35){
        regex_address.style.visibility="visible";
        address.style.background= "rgba(255, 0, 50, 0.3)";
        address.style.color= "rgba(255, 0, 50, 1)";
    }   
        // get input values
    let firstName_value = firstName.value;
    let lastName_value = lastName.value;
    let address_value = address.value;
    let date_value = date.value;
    let gender_value = gender.value;
    let notes_value = notes.value;
      
      // get the html table
      // 0 = the first table
    var table = document.getElementsByTagName('table')[0];
      
      // add new empty row to the table
      // 0 = in the top 
      // table.rows.length = the end
      // table.rows.length/2+1 = the center
    var newRow = table.insertRow(table.rows.length/2+1);
      
      // add cells to the row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
      
      // add values to the cells
    cell1.innerHTML = firstName_value;
    cell2.innerHTML = lastName_value;
    cell3.innerHTML = address_value;
    cell4.innerHTML = date_value;
    cell5.innerHTML = gender_value;
    cell6.innerHTML = notes_value;
});
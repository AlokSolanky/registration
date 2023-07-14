// selecting form to submit
const frm = document.getElementById("form");
class User {
  constructor(name, mail, phone) {
    this.mail = mail;
    this.name = name;
    this.phone = phone;
  }

//   to convert the user object into string 
  converToString() {
    return JSON.stringify(this);
  }
}

// listening if submit button is clicked 
frm.addEventListener("submit", (e) => {
  e.preventDefault();

//   fetching the details of form if submitted 
  let name = document.getElementById("name").value;
  let mail = document.getElementById("mail").value;
  let phone = document.getElementById("phone").value;

//   making a new user out of this data 
  const user = new User(name, mail, phone);

// checking if the mail is already registered or not 
  if (localStorage.getItem(mail) === null) {

    // if there is no such mail then create that mail in local storage 
    localStorage.setItem(mail, user.converToString());
    let formtedObj = JSON.parse(localStorage.getItem(mail));

    // creating a new list to display the submitted data 
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "list-group-item");

    // creating 3 text nodes to store name mail and phone 
    let nameTextNode = document.createTextNode(formtedObj.name + "  ");
    let mailTextNode = document.createTextNode(formtedObj.mail + "  ");
    let phoneTextNode = document.createTextNode(formtedObj.phone);

    // appending them into list 
    newLi.appendChild(mailTextNode);
    newLi.appendChild(nameTextNode);
    newLi.appendChild(phoneTextNode);

    // creating edit button to edit the data 

    let edit_btn = document.createElement("button");
    edit_btn.setAttribute("class", "btn btn-sm btn-primary float-right edit");
    edit_btn.textContent = "+";

    newLi.appendChild(edit_btn);

    // creating delete button to delete the data 
    let del_btn = document.createElement("button");
    del_btn.setAttribute("class", "btn btn-sm btn-danger float-right delete");
    del_btn.textContent = "X";

    newLi.appendChild(del_btn);

    // now appending the list into li container 
    const cont = document.querySelector(".li_container");
    cont.appendChild(newLi);
  } else {
    // if there is already a user registered with that mail then alert 
    alert("User already registered");
  }
});

// listening on li container to handle the event on delete button 

let del_btn_space = document.querySelector(".li_container");
del_btn_space.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {

    // if clicked on delete button inside that li container
    // then search that mail in local storage and remove it from there and from li container 
    let searchMail = e.target.parentElement.firstChild.textContent;
    localStorage.removeItem(searchMail.trim());
    del_btn_space.removeChild(e.target.parentElement);
  }
  else if (e.target.classList.contains("edit")) {

    // if clicked on edit button inside that li container 
    // also search mail in local storage and if present then delete it from there 
    let searchMail = e.target.parentElement.firstChild.textContent;
    searchMail = searchMail.trim();
    let obj = JSON.parse(localStorage.getItem(searchMail));
    localStorage.removeItem(searchMail);
    del_btn_space.removeChild(e.target.parentElement);

    // also set the value in form to let the user edit his data 
    document.getElementById("name").value = obj.name;
    document.getElementById("mail").value = obj.mail;
    document.getElementById("phone").value = obj.phone;

  }
});

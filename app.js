// selecting form to submit
const frm = document.getElementById("form");
class User {
  constructor(amount, description, type) {
    this.amount = amount;
    this.description = description;
    this.type = type;
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
  let amount = document.getElementById("amount").value;
  let description = document.getElementById("description").value;
  let type = document.getElementById("type").value;

//   making a new user out of this data 
  const user = new User(amount, description, type);

// checking if the mail is already registered or not 
  if (localStorage.getItem(description) === null) {

    // if there is no such mail then create that mail in local storage 
    localStorage.setItem(description, user.converToString());
    let formtedObj = JSON.parse(localStorage.getItem(description));

    // creating a new list to display the submitted data 
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "list-group-item");

    // creating 3 text nodes to store name mail and phone 
    let amountTextNode = document.createTextNode(formtedObj.amount + "  ");
    let descriptionTextNode = document.createTextNode(formtedObj.description + "  ");
    let typeTextNode = document.createTextNode(formtedObj.type);

    // appending them into list 
    newLi.appendChild(descriptionTextNode);
    newLi.appendChild(amountTextNode);
    newLi.appendChild(typeTextNode);

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
    alert("Expense already Present");
  }
});

// listening on li container to handle the event on delete button 

let del_btn_space = document.querySelector(".li_container");
del_btn_space.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {

    // if clicked on delete button inside that li container
    // then search that mail in local storage and remove it from there and from li container 
    let searchDescription = e.target.parentElement.firstChild.textContent;
    localStorage.removeItem(searchDescription.trim());
    del_btn_space.removeChild(e.target.parentElement);
  }
  else if (e.target.classList.contains("edit")) {

    // if clicked on edit button inside that li container 
    // also search mail in local storage and if present then delete it from there 
    let searchDescription = e.target.parentElement.firstChild.textContent;
    searchDescription = searchDescription.trim();
    let obj = JSON.parse(localStorage.getItem(searchDescription));
    localStorage.removeItem(searchDescription);
    del_btn_space.removeChild(e.target.parentElement);

    // also set the value in form to let the user edit his data 
    document.getElementById("amount").value = obj.amount;
    document.getElementById("description").value = obj.description;
    document.getElementById("type").value = obj.type;

  }
});

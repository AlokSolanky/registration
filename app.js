const frm = document.getElementById("form");

function displayAllUser() {
  axios
    .get(`https://crudcrud.com/api/363b0400214e4898ba5ae8638e3685f4/products`)
    .then((res) => {
      let users = res.data;
      users.forEach((user) => {
        createLi(user);
      });
    });
}
function addUsertoDatabase(user)
{
  axios.post(`https://crudcrud.com/api/363b0400214e4898ba5ae8638e3685f4/products`,user).then((res)=>
  {
    alert("product added");
  }).catch(()=>
  {
    alert("something failed")
  });
}

async function removedatafromDatabase(nme)
{
  let id;
  await axios
    .get(`https://crudcrud.com/api/363b0400214e4898ba5ae8638e3685f4/products`)
    .then((res) => {
      let users = res.data;
      users.forEach((user) => {
        if(user.name === nme)
        {
          id = user._id;
        }
      });
    });
  axios.delete(
  `https://crudcrud.com/api/363b0400214e4898ba5ae8638e3685f4/products/${id}`
);
}

function createLi(user) {
  let newLi = document.createElement("li");
  newLi.setAttribute("class", "list-group-item product_li");

  let amountTextNode = document.createTextNode(user.amount + "  ");
  let nameTextNode = document.createTextNode(user.name + "  ");
  let typeTextNode = document.createTextNode(user.type);

  newLi.appendChild(nameTextNode);
  newLi.appendChild(amountTextNode);
  newLi.appendChild(typeTextNode);

  let del_btn = document.createElement("button");
  del_btn.setAttribute("class", "btn btn-sm btn-danger float-right delete");
  del_btn.textContent = "X";

  newLi.appendChild(del_btn);
  let appendHere;
  if (user.type === "electronic") {
    appendHere = document.querySelector(".elect_desc");
  } else if (user.type === "food") {
    appendHere = document.querySelector(".food_desc");
  } else {
    appendHere = document.querySelector(".skin_desc");
  }

  appendHere.appendChild(newLi);
  
  
}

// selecting form to submit

class User {
  constructor(amount, name, type) {
    this.amount = amount;
    this.name = name;
    this.type = type;
  }
}

window.onload = () => {
  displayAllUser();
  frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let amount = document.getElementById("amount").value;
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;

    const user = new User(amount, name, type);

    createLi(user);
    addUsertoDatabase(user);
  });
};

let del_btn_space = document.querySelector(".li_container");
del_btn_space.addEventListener("click", (e) => {
  console.log("clicked");
  if (e.target.classList.contains("delete")) {
    n = e.target.parentElement.firstChild.textContent.trim();
    removedatafromDatabase(n);
    e.target.parentElement.parentElement.removeChild(e.target.parentElement)

  } 
});

const frm = document.getElementById('form');
class User{
    constructor(name,mail,phone)
    {
        this.mail = mail;
        this.name = name;
        this.phone = phone;
    }

    converToString()
    {
        return JSON.stringify(this);
    }
}


frm.addEventListener('submit',(e)=>
{
    e.preventDefault();

    let name = document.getElementById('name').value;
    let mail = document.getElementById('mail').value;
    let phone = document.getElementById('phone').value;

    const user = new User(name,mail,phone);
    
    
    // alert("data submitted successfully");
    
    
    if(localStorage.getItem(mail)===null)
    {

    localStorage.setItem(mail, user.converToString());
    let formtedObj = JSON.parse(localStorage.getItem(mail));

    let newLi = document.createElement('li');
    newLi.setAttribute('class','list-group-item');
    let nameTextNode = document.createTextNode(formtedObj.name+"  ");
    let mailTextNode = document.createTextNode(formtedObj.mail+"  ")
    let phoneTextNode = document.createTextNode(formtedObj.phone);

    newLi.appendChild(mailTextNode);
    newLi.appendChild(nameTextNode);
    newLi.appendChild(phoneTextNode);

    let del_btn = document.createElement('button');
    del_btn.setAttribute("class","btn btn-sm btn-danger delete");
    del_btn.textContent = "X";

    newLi.appendChild(del_btn)
   

    const cont = document.querySelector('.li_container');
    cont.appendChild(newLi);
    }
    else{
        alert("User already registered");
    }
})

let del_btn_space = document.querySelector('.li_container');
del_btn_space.addEventListener('click',(e)=>
{
    if(e.target.classList.contains('delete'))
    {
        let searchMail = e.target.parentElement.firstChild.textContent;
        localStorage.removeItem(searchMail.trim());
        del_btn_space.removeChild(e.target.parentElement);
        
    }
})


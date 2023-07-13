const frm = document.getElementById('form');
class User{
    constructor(name,mail,phone)
    {
        this.name = name;
        this.mail =mail;
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
    
    localStorage.setItem(mail, user.converToString());
    alert("data submitted successfully");
    let formtedObj = JSON.parse(localStorage.getItem(mail));
    console.log(`email is ${formtedObj.mail} and password is ${formtedObj.password}`);

    
    let newLi = document.createElement('li');
    newLi.setAttribute('class','list-group-item');
    let textNode = document.createTextNode(`Name is ${name} Email is ${mail} phone number is ${phone}`);

    newLi.appendChild(textNode);

    const cont = document.querySelector('.li_container');
    cont.appendChild(newLi);
})



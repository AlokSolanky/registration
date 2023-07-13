const frm = document.getElementById('form');
class User{
    constructor(mail,password)
    {
        this.mail =mail;
        this.password = password;
    }

    converToString()
    {
        return JSON.stringify(this);
    }
}
frm.addEventListener('submit',(e)=>
{
    e.preventDefault();

    let mail = document.getElementById('mail').value;
    let passwd = document.getElementById('password').value;

    const user = new User(mail,passwd);
    
    localStorage.setItem(mail, user.converToString());
    alert("data submitted successfully");
    let formtedObj = JSON.parse(localStorage.getItem(mail));
    console.log(`email is ${formtedObj.mail} and password is ${formtedObj.password}`);
})


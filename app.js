const frm = document.getElementById('form');

frm.addEventListener('submit',(e)=>
{
    e.preventDefault();

    let mail = document.getElementById('mail').value;
    let passwd = document.getElementById('password').value;

    localStorage.setItem(mail,passwd);
    alert("data submitted successfully");
    console.log("also new repositery is created here by alok date : 14 july 23");
})
const btn = document.querySelector('.btn'); 

//Add event
btn.addEventListener('click', 
function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const newUser = {
    name: name.value,
    email: email.value,
    password: password.value
}
alert('You have successfully');
console.log(newUser);
}

);
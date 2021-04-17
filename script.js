const unhidePasswordIcon = document.getElementById('unhidePassword');
const buttonLogin=document.getElementById('buttonLogin');
const inputPassword=document.getElementById('password');


//hiding and unhiding password typed within the password input
unhidePasswordIcon.addEventListener('click', function unhidePassword(){
    
    if (inputPassword.type === 'password') {
        inputPassword.type='text';
    } else if (inputPassword.type === 'text'){
        inputPassword.type='password';
    } 
    
} );


//checking whether the fields are filled correctly
buttonLogin.addEventListener('click', e=> {
    const inputEmail=document.getElementById('email');
    const emailTyped=inputEmail.value;
    const passwordTyped=inputPassword.value;
    const emailMissing=document.getElementById('emailMissing');
    const passwordMissing=document.getElementById('passwordMissing');

    if (!verifyingEmail(emailTyped)){        
        emailMissing.innerHTML="Enter an e-mail address";
    } else {
        emailMissing.innerHTML="";
    }

    if(passwordTyped==""){
        passwordMissing.innerHTML="Enter a password";
    } else {
        passwordMissing.innerHTML="";
    }  

})

//function in order to test whether the text typed within the input has a proper email format
function verifyingEmail(email){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

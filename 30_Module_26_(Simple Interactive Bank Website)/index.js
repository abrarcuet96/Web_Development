//step-1: add click event handler with submit button.
document.getElementById('btn-submit').addEventListener('click',function(){
    //step-2: get the email address inside the email address field.
    //always remember to use .value to get text from an input field.
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    //step-3: get password.
    const passField=document.getElementById('user-pass');
    const pass=passField.value;
    // danger: do not verify email password on the client side.
    //step-4: verify email and password.
    if(email === 'abrarhaider@gmail.com' && pass === 'webdeveloper'){
        window.location.href='bank.html'
    }
    else{
        alert('Invalid Email or Password');
    }

})
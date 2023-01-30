const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//check email is valid
function checkemail(input){
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }
    else{
        showError(input, 'Email is not valid');
    }
}
// check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim()===''){
            showError(input, `${(input.id)} is required`);
        }
        else{
            showSuccess(input);
        }
        
    });
}
//check input length
function checklength(input,min,max){
    if(input.value.length < min){
        showError(input, `${input.id} must be atleast ${min} characters`);
    }
    else if(input.value.length > max){
        showError(input, `${input.id} must be less than ${max} characters`);
    }
    else {
        showSuccess(input);
    }
}
//check password match
function checkpasssmatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Password do not match ')
    }
}
//Event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, Email, password,password2]);
    checklength(username, 3,15);
    checklength(password, 6,20);
    checkemail(Email);
    checkpasssmatch(password,password2);
});
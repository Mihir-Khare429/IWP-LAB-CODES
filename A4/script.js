let value;
var date;

$(document).ready(function(){
    value = $('#val').val();
    document.getElementById('insuranceValue').innerText = value
    $('#val').change(realTimeDisplay)
    date = document.getElementById('dob')
    date.addEventListener('blur',function(){
        const sage = getAge(new Date(date.value))
        document.getElementById('age').value = sage
    })
})

const realTimeDisplay = function(){
    value = $('#val').val();
    document.getElementById('insuranceValue').innerText = value
}

function getAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Regex 

var pattern = /[a-zA-Z0-9]+@gmail.com/i
var pattern1 = /^\.[A-Z]{1}/


//Checking Before Submiiting
const submit = document.getElementById('btnSubmit')
submit.addEventListener('click',function(e){
    e.preventDefault()
    if(pattern.test(document.getElementById('em2').value) == false){
        alert('Email Id should end with @gmail.com')
    }
    if(pattern1.test(document.getElementById('Lname').value) == false){
        alert('Lname Regex not Verified!')
    }
})

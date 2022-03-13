window.onload = pageLoad;
function pageLoad(){
    var register = document.getElementById("myForm");
    register.onsubmit = validateForm;	
}

function validateForm() {
    var password  = document.forms["myForm"]["password"]
    var error = document.getElementById("errormsg");
    var result = true;

    if (password[0].value != password[1].value ){
        error.innerText = "Password incorret";
        result = false;
    }    
        return result;

    
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}
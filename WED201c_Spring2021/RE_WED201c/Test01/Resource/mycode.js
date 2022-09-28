function checkForm(){
    var form = document.forms[0];
    var name = form.name.value;
    var email = form.email.value;
    var phone = form.phone.value;
    var error = "";
    if(name == ""){
        error += "Please enter your name.\n";
    }
    if(email == ""){
        error += "Please enter your email.\n";
    }
    if(phone == ""){
        error += "Please enter your phone.\n";
    }
    if(phone != "" && name !=""){
         alert ("wellcome " + name + "-" + phone);
    }
    if(error == ""){
        return true;
    }else{
        alert(error);
        return false;
    }
}
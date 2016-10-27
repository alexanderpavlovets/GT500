function check_passwords(){
    var a=document.form1.password.value;
    var b=document.form1.password1.value;
    
    if (a==b){
        alert ("Пароли совпадают!");
    }
    else{
        alert ("Пароли не совпадают!");
    }
}

function man_and_animal(){
    if(document.form1.elements[4].checked && document.form1.elements[6][3].selected){
        alert ("Мужчтна любит животных!");
    }
    else{
        alert ("Непонятно связь мужика и животного");
    }
}
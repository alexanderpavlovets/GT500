var users = new Array("Irina", "Sasha", "Lima", "Asia");

function showDay() {
    var nDays=new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота");
    var now=new Date();
    var day=now.getDay();
    var iDay=nDays[day];
    var str="Сегодня " + iDay;
    document.write(str);
}

function check_name(obj){
    var k;
    var users=new Array("Artem","Irina","Sergey","Boris","Olga","Viktor");
    var n=obj.name.value;
    for (var i=0; i<=users.length-1; i++){
        if (users[i]==n){
            k=0;break
        }  
    }
    if (k==0){
        alert("Это имя присутствует в массиве");
    }
    else{
        alert("Такого имени в массиве нет");
    }
}
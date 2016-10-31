var users = new Array("Irina", "Sasha", "Lima", "Asia");

function showDay() {
    var nDays=new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота");
    var now=new Date();
    var day=now.getDay();
    var iDay=nDays[day];
    var str="Сегодня " + iDay;
    document.write(str);
}


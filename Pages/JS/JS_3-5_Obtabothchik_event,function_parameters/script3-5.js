function showMessage() {
    alert ("Вы щелкнуи по div-у!")
}

function areaRectangle() {
    var a=document.form1.t1.value;
    var b=document.form1.t2.value;
    var s=a*b;
    document.form1.res.value=s;
}

//Теперь та же функция, но с параметром - что б была универсальной.

function areaRectangle1(obj) {
    var a=obj.t1.value;
    var b=obj.t2.value;
    var s=a*b;
    obj.res.value=s;
}
//ф-я для квадратов
function message(m) {
    alert (m);
}

//ф-я для ягод
function showDesc (obj, n) {
    obj.desc.value=n;
}

function delet(obj) {
    obj.desc.value=' ';
}

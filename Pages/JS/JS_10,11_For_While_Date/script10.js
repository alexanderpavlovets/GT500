function summ(obj){
    var summa=0;
    var a1=1*obj.a1.value;
    var a2=1*obj.a2.value;
    if (a1<a2){
        for (var i = a1; i <= a2; i++){
            summa+=i;
        }
        obj.result.value = summa;
    }
    else {
        alert ("Число ОТ должно быть меньше числа ДО");
    }
}

function nTime(obj) {
    var t=new Date();
    var h=t.getHours();
    var m=t.getMinutes();
    var s=t.getSeconds();
    var result=h+":"+m+":"+s;
    obj.res.value=result;
}


function formatTime(obj){
    var t=new Date();
    var h=t.getHours();
    if (h<10){
        h="0"+h
    }
    var m=t.getMinutes();
    if (m<10){
        m="0"+m
    }
    var s=t.getSeconds();
    if (s<10){
        s="0"+s
    }
    var result=h+":"+m+":"+s;
    obj.res.value=result;
}

function d_m_yDate(obj){
    var s;
    var t=new Date();
    var y=t.getFullYear();
    var m=t.getMonth();
    var d=t.getDate();
    switch(m){
        case 0: s="января"; break;
        case 1: s="февраля"; break;
        case 2: s="марта"; break;
        case 3: s="апреля"; break;
        case 4: s="мая"; break;
        case 5: s="июня"; break;
        case 6: s="июля"; break;
        case 7: s="августа"; break;
        case 8: s="сентября"; break;
        case 9: s="октября"; break;
        case 10: s="ноября"; break;
        case 11: s="декабря"; break;
    }
    var result=d+" "+s+" "+y+" года";
    obj.res.value=result;
}


function areaOfTriangle(obj) {
    var a=1*obj.st1.value;
    var b=1*obj.st2.value;
    var c=1*obj.st3.value;
    var p=(a+b+c)/2;
    var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
    s=s.toFixed(2);
    obj.res.value=s;
}

function    maxZnach(obj) {
    var a=1*obj.zn1.value;
    var b=1*obj.zn2.value;
    var c=1*obj.zn3.value;
    var m=a;
    if (b>m) m=b;
    if (c>m) m=c;
    obj.res.value=m;
}

//Альтернативный вариант функции для определения макс. значения:

function maxZnach_alt (obj) {
    var a=1*obj.zn1.value;
    var b=1*obj.zn2.value;
    var c=1*obj.zn3.value; 
    obj.res.value=Math.max(Math.max(a,b),c);
}

//Тигр увеличиващийся

function bigPict() {
   var w=document.tigr.width;
    if(w<302){
        document.tigr.width=w+1;
        document.tigr.src="tigrenok.jpg";
        setTimeout("bigPict()", 20);
    }
}

function smallPict() {
    var w=document.tigr.width;
    if (w>102) {
        document.tigr.width=w-1;
        document.tigr.src="tigrenok.jpg";
        setTimeout("smallPict()", 20);
    }
}


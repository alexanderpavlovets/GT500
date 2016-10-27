function weather_predict(obj){
    if (obj.elements[0][0].selected)
        obj.res.value="В понедельник будет ветренно, температура будет +20, я не рад писать эти штуки тут, надо как-то упростить";
    if (obj.elements[0][1].selected)
        obj.res.value="Тут прогноз для вторника - будет все хорошо во все вторники";
    if (obj.elements[0][2].selected)
        obj.res.value="Тут прогноз для среды";
    if (obj.elements[0][3].selected)
        obj.res.value="Четверг! Четверг! Четверг! Прям как сегодня (когда писал я это всё)";
    if (obj.elements[0][4].selected)
        obj.res.value="Пятница, хороший день, но многие пьют - поэтому не спокойный.";
    if (obj.elements[0][5].selected)
        obj.res.value="Суббота! Очень люблю субботу, и выспался и все выходные ещё впереди";
    if (obj.elements[0][6].selected)
        obj.res.value="Воскресенье, хороший день, если все дела порешал в субботу, можно и отдохнуть и потренить спокойно.";
}

function weather_forecast_by_entered_value(obj){
    var a=obj.entered_zn.value;
    var s;
    switch(a){
        case 'понедельник': s="Ну ... за понедельник"; break;
        case 'вторник': s="Ну ... за вторник"; break;
        case 'среда': s="Ну ... за среду"; break;
        case 'четверг': s="Ну ... за четверг"; break;
        case 'пятница': s="Ну ... за пятницу! За пятницу ! "; break;
        case 'суббота': s="Суббота тут - хватит нукать ;)"; break;
        case 'воскресенье': s="Восресенье просто отдыхаем"; break;
        
        default: s="Укажите правильно день неделиб начиная с маленькой буквы"
    }
    obj.res.value=s;
}

function month_name_by_number(obj){
    var a=obj.entered_month_number.value;
    var s;
    switch(a){
            case'1':s="Январь"; break;
            case'2':s="Февраль"; break;
            case'3':s="Март"; break;
            case'4':s="Апрель"; break;
            case'5':s="Май"; break;
            case'6':s="Июнь"; break;
            case'7':s="Июль"; break;
            case'8':s="Август"; break;
            case'9':s="Сентябрь"; break;
            case'10':s="Октябрь"; break;
            case'11':s="Ноябрь"; break;
            case'12':s="Декабрь"; break;
            
        default: s="Введите число от 1-го до 12-ти"
    }
    obj.res.value=s;
}
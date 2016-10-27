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


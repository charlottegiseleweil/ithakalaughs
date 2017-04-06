function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    //thissound.currentTime = 0;   //Add this line if I want to re-start sound from beginning on hover
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
}


function generateLaughTemplate(d) {
  var template = $('#template').html();
  
  var rendered = Mustache.render(template, {name: d});
  return rendered;
}



//Dataset
     var laughs = ['ami','jack','rupa','elliot','angie','annalee',
        'damien','laura','kamakshi',
        'charlie','tareq','daniel','isaac','ian','caroline',
        'karen','jan','john','catherine',
        'kelley','lee','lena','maria','wilson','omar',
        'raquel','tasha','tinker','tucker', 'jlo','vanessa',
        'kevin','rob','dj','natasha'];




$(document).ready(main);

function main() {

    var baseDiv = d3.select('#container_div');
       console.log('treter', laughs, baseDiv);

    baseDiv.selectAll('.laugh')
        .data(laughs)
        .enter()
        .append('div.laugh').html(generateLaughTemplate)
}


        
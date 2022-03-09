

var slider_img = document.querySelector('.slider-img');
var images = ['', '', '', '',''];
var i = 0;

function prev(){
    if (i <= 0 ) i = images.length;
    i--;
    return setImg();
}

function next(){
    if ( i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'images/' + images[i]);
}
var hunger = document.getElementById("hunger");
var health = document.getElementById("health");
var happiness = document.getElementById("happiness");
var knowledge = document.getElementById("knowledge");
function makanIncrease(){
    hunger.style.width = (parseInt(hunger.style.width) + 20) + "%";
}

function tidurIncrease(){
    health.style.width = (parseInt(health.style.width) + 20) + "%";
}

function mainIncrease(){
    happiness.style.width = (parseInt(happiness.style.width) + 20) + "%";
}

function belajarIncrease(){
    knowledge.style.width = (parseInt(knowledge.style.width) + 20) + "%";
}
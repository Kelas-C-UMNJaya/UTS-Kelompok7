
let j = 0;
let hunger = 50
let health = 50
let happiness = 50
let knowledge = 0
let jam = 8;
let menit = 0;
var slider_img = document.querySelector('.slider-img');
var images = ['char1.png', 'char2.png'];
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
  
const pics = ['url(char1.png)', 'char2.png'];

const pic = document.querySelector('section');

function showImage(){
    var a = math.floor(Math.random()*pics.length);
    var img = pics[a]
}

function gameStart(){
    let playerName = document.getElementById("nama").value;
    
    document.getElementById("avatar").classList.add("d-none");
    document.getElementById("game").classList.remove("d-none");
    document.getElementById("username").innerHTML = playerName;
    progressBar("hunger", hunger);
    progressBar("health", health);
    progressBar("happiness", happiness);
    progressBar("knowledge", knowledge);
    timerun();

}
/* WIP buat jam yang jalan otomatis. Note :setInterval itu mirip loop jadi functionnya jalan tiap lewat beberapa saat, clearInterval untuk akhirin looping.
Ubah i jadi j karena udah dipake variabelnya

let timeRun = setInterval(() => {
    if (win == true) {
    clearInterval(timeRun);
    }
    i++;

    if (win == true || go == true) {
    clearInterval(timeRun);
    }

    if (i > 59) {
    hour++;

    if (!(win == true || go == true)) {
        if (hour == 5) {
        clickSound("berkokok");
        }
    }

    if (hour > 23) {
        hour = 0;
    }

    cekTime(hour);
    setBackground(hour);

    i = 0;
    }

    minutes = i;

    if (minutes < 10) {
    minutes = "0" + i;
    }

    watchHour.innerHTML = hour;
    watchMinutes.innerHTML = minutes;
}, 1000);
*/
  


function progressBar  (id, value)  {
    const progressBar = document.getElementById(id);
    //let cls = "progress-bar";
    //cls += " " + id;
  
    progressBar.setAttribute("style", "width: " + value + "%");
    //progressBar.setAttribute("class", cls);
    progressBar.innerHTML = value;
  };
function makanIncrease(){
    hunger += 20;
    main -= 10;
    clearInterval(timeRun);
    j += 15;
    if (j > 59) {
        hour++;
        if (hour > 23) {
            hour = 0;
        }
        j = 0
    }
    if(hunger > 100){
        hunger = 100;
    }
    startTime();
    progressBar("hunger", hunger);
}
/*
function tidurIncrease(){
    health.style.width = (parseInt(health.style.width) + 20) + "%";
    hunger.style.width = (parseInt(hunger.style.width) - 10) + "%";
    hunger.ariaValueNow = (parseInt(hunger.ariaValueNow) - 10);
    health.ariaValueNow = (parseInt(health.ariaValueNow) + 20);
}

function mainIncrease(){
    if (health.ariaValueNow < 20 ) {
        happiness.style.width = (parseInt(happiness.style.width) + 5) + "%";
        happiness.ariaValueNow = (parseInt(happiness.ariaValueNow) + 5);
    } else if (happiness.ariaValueNow < 100 && happiness.ariaValueNow > 20){
        happiness.style.width = (parseInt(happiness.style.width) + 20) + "%";
        health.style.width = (parseInt(health.style.width) - 10) + "%";
        health.ariaValueNow = (parseInt(health.ariaValueNow) - 10);
        happiness.ariaValueNow = (parseInt(happiness.ariaValueNow) + 20);
    }

    
    if(health.ariaValueNow >= 99 ) {
        happiness.style.width = 99 + "%";
        happiness.ariaValueNow= 99;
    }
    
}

function belajarIncrease(){
    if (hunger.ariaValueNow < 20 ) {
        knowledge.style.width = (parseInt(knowledge.style.width) + 20) + "%";
        happiness.style.width = (parseInt(happiness.style.width) - 10) + "%";
        health.style.width = (parseInt(health.style.width) - 10) + "%";
        happiness.ariaValueNow = (parseInt(happiness.ariaValueNow) - 10);
        health.ariaValueNow = (parseInt(health.ariaValueNow) - 10);
        knowledge.ariaValueNow = (parseInt(knowledge.ariaValueNow) + 20);
        
    } else {
        knowledge.style.width = (parseInt(knowledge.style.width) + 20) + "%";
        hunger.style.width = (parseInt(hunger.style.width) - 10) + "%";
        hunger.ariaValueNow = (parseInt(hunger.ariaValueNow) - 10);
        knowledge.ariaValueNow = (parseInt(knowledge.ariaValueNow) + 20);
    }
    
}

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
}
setInterval(displayTime, 10);*/
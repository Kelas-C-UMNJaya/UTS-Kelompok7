

//let hour = Math.floor(Math.random() * 24);
//let minutes = 0;
let j = 0;
let hunger = 50
let health = 50
let happiness = 50
let knowledge = 0
let jam = 8;
let menit = 0;
const minutes = document.querySelector(".minutes");
const hour = document.querySelector(".hours");
var slider_img = document.querySelector('.slider-img');
var images = ['char1.png', 'char2.png'];
var i = 0;
let win = false;

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

const pics = [
    'images("char1.jpg")',
    'images("char2.jpg")',
] 

const pic = document.querySelector('.slider-img');

function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img
} 

/*
var adjective = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even","Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "High-pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing", "Thundering", "Voiceless", "Whispering"] 
var object = ["Taco", "Operating System", "Sphere", "Watermelon", "Cheeseburger", "Apple Pie", "Spider", "Dragon", "Remote Control", "Soda", "Barbie Doll", "Watch", "Purple Pen", "Dollar Bill", "Stuffed Animal", "Hair Clip", "Sunglasses", "T-shirt", "Purse", "Towel", "Hat", "Camera", "Hand Sanitizer Bottle", "Photo", "Dog Bone", "Hair Brush", "Birthday Card"]
var list;

function generator() {
    document.getElementById("nama").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];
}
*/

/*
function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

function generateName(){
    var first_name = ["abandoned","able","absolute","adorable"];

    var last_name = ["people","history","way","art","world"];

    var name = capFirst(first_name[getRandomInt(0, first_name.length + 1)]) + ' ' + capFirst(last_name[getRandomInt(0, last_name.length + 1)]);
        document.getElementById("namaText").innerHTML = name;
}
*/

const firstNames = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];

const secondNames = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${firstNames[getRandomNumber(firstNames.length)]} ${secondNames[getRandomNumber(secondNames.length)]}`;

const setRandomName = () => {
  document.getElementById('nama').innerText = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();
const clock = setInterval(() => {
    // if (win == true) {
    // clearInterval(clock);
    // }
    j++;

    // if (win == true || go == true) {
    // clearInterval(clock);
    // }

    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
        }

        //cekTime(hour);
        //setBackground(hour);

        j = 0;
    }

    menit = j;

    if (menit < 10) {
    menit = "0" + j;
}

hour.innerHTML = jam;
minutes.innerHTML = menit;
}, 1000);


function gameStart(){
    if (menit < 10) {
        menit = "0" + j;
    }
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    let playerName = document.getElementById("nama").value;
    
    document.getElementById("avatar").classList.add("d-none");
    document.getElementById("game").classList.remove("d-none");
    document.getElementById("username").innerHTML = playerName;

    progressBar("hunger", hunger);
    progressBar("health", health);
    progressBar("happiness", happiness);
    progressBar("knowledge", knowledge);
    clock;

}
// WIP buat jam yang jalan otomatis. Note :setInterval itu mirip loop jadi functionnya jalan tiap lewat beberapa saat, clearInterval untuk akhirin looping.
//Ubah i jadi j karena udah dipake variabelnya


  


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
    happiness -= 10;
    
    j += 15;
    if (j > 59) {
        jam++;
        if (jam > 23) {
            jam = 0;
        }
        j -= 60;
    }
    menit = j;
    if (menit < 10) {
        menit = "0" + j;
    }
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    if(hunger > 100){
        hunger = 100;
    }
    progressBar("hunger", hunger);
    progressBar("happiness", happiness);
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

// var hours = dateTime.getHours();
// var minutes = dateTime.getMinutes();
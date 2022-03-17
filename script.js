

let hunger = 50
let health = 50
let happiness = 50
let knowledge = 0
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
  
  function randomAvatar(){
    random_index = Math.floor(Math.random() * images.length);

    selected_image = images[random_index]
  
    document.getElementById('image_shower').src = `./images/${selected_image}`
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


}




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
    if(hunger > 100){
        hunger = 100;
    }
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
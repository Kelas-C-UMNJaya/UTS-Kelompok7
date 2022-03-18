

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
var images = ['char1.png', 'char2.png', 'char3.png','char4.png'];
var voice = ['char1.wav', 'char2.wav', 'char3.wav', 'char4.wav'];
var warningHunger = 0;
var warningHappiness = 0;
var warningHealth = 0;
var warningKnowledge = 0;
var semester = 1;
var i = 0;
var k = 0;
var l = 0;
var limit = 20;

let win = false;
var avatar = document.querySelector('.avatarPlay-img');
var voiceline = document.getElementById("voiceline");
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
    return slider_img.setAttribute('src', 'assets/avatar/' + images[i]);
}

document.querySelector("#avatar-btn").addEventListener("click", get_random_image);

function get_random_image(){
    i = Math.floor(Math.random() * images.length);
  
    selected_image = images[i]
  
    document.getElementById('image_shower').src = `./assets/avatar/${selected_image}`
  }


var adjective = ["Hope","Obie", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"]; 
var object = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];
var list;

document.querySelector("#gen-button").addEventListener("click", generator);

function generator() {
    document.querySelector("#nama").value = adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];
}

function waktuBerjalan(){
    const clock = setInterval(() => {
        if (semester > 8) {
            clearInterval(clock);
        }
        j++;
        k++;
        l++;
        
        if (j > 59) {
            jam++;
            if (jam > 23) {
                jam = 0;
            }
            cekJam(jam);
            j = 0;
        }
        if(hunger < 20 && l > 10){
            alert("Status : Lapar, segera makan");
            l = 0;
            warningHunger++;
        }
        if(happiness < 20 && l > 10){
            alert("Status : Stress, segera lepaskan stress");
            l = 0;
            warningHappiness++;
        }
        if(health < 20 && l > 10){
            alert("Status : Capek, segera tidur");
            l = 0;
            warningHealth++;
        }
        if(knowledge < limit && k > 500 && l > 10){
            alert("Status : akan dropout, segera belajar");
            l = 0;
            k = 0;
            limit += 20;
            warningKnowledge++;
        } 
        if (warningHunger > 2){
            clearInterval(clock);
            document.getElementById("game").classList.add("d-none");
            alert("Game over. Reason : mati kelaparan.");
        }
        if (warningHappiness > 2){
            clearInterval(clock);
            document.getElementById("game").classList.add("d-none");
            alert("Game over. Reason : Stress sehingga dropout.");
        }
        if (warningHealth > 2){
            clearInterval(clock);
            document.getElementById("game").classList.add("d-none");
            alert("Game over. Reason : mati kecapekan.");
        }
        if (warningKnowledge > 2){
            clearInterval(clock);
            document.getElementById("game").classList.add("d-none");
            alert("Game over. Reason : Dropout.");
        }
    
        hunger--;
        happiness--;
        health--;
        menit = j;
        if(hunger < 0){
            hunger = 0;
        }
        if(happiness < 0){
            happiness = 0;
        }
        if(health < 0){
            health = 0;
        }

        progressBar("hunger", hunger);
        progressBar("health", health);
        progressBar("happiness", happiness);
        progressBar("knowledge", knowledge);
        if (menit < 10) {
        menit = "0" + j;
        }
    
    
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    }, 3000);
}



function gameStart(){
    
    if (menit < 10) {
        menit = "0" + j;
    }
    hour.innerHTML = jam;
    minutes.innerHTML = menit;
    cekJam(jam);
    document.getElementById("semester").innerHTML = semester;
    let playerName = document.getElementById("nama").value;
    document.getElementById("avatar").classList.add("d-none");
    document.getElementById("game").classList.remove("d-none");
    document.getElementById("username").innerHTML = playerName;
    avatar.setAttribute('src', 'assets/avatar/' + images[i]);
    progressBar("hunger", hunger);
    progressBar("health", health);
    progressBar("happiness", happiness);
    progressBar("knowledge", knowledge);
    waktuBerjalan();
    
}

function cekJam(jam) {
    var greeting = document.getElementById("greeting");
    var greet;
    var bg = document.body;
    if (jam > 2 && jam <= 10) {
        greet = "Good Morning ";
        bg.setAttribute('style', 'background: url(assets/morning.png)');
    } else if (jam > 10 && jam <= 16) {
        greet = "Good Afternoon ";
        bg.setAttribute('style', 'background: url(assets/day.png)');
    } else if (jam > 16 && jam <= 23) {
        greet = "Good Night ";
        bg.setAttribute('style', 'background: url(assets/night.png)');
    } else if (jam == 0) {
        bg.setAttribute('style', 'background: url(assets/night.png)');
        greet = "Good Night ";
    } else if (jam > 0 && jam <= 2) {
        bg.setAttribute('style', 'background: url(assets/night.png)');
        greet = "Good Night ";
    }
    greeting.innerHTML = greet;
}

  
function resetAvatar(){
    avatar.setAttribute('src', 'assets/avatar/' + images[i]);
}

function progressBar  (id, value)  {
    const progressBar = document.getElementById(id);
    progressBar.setAttribute("style", "width: " + value + "%");
    progressBar.innerHTML = value;
  };
function makanIncrease(){
    
    if (happiness < 20) {
        hunger += 5;
        happiness -= 5;
    } else {
        hunger += 15;
        happiness -= 5;
    }
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
    if(happiness < 0){
        happiness = 0;
    }
    cekJam(jam);
    progressBar("hunger", hunger);
    progressBar("happiness", happiness);
    avatar.setAttribute('src', 'assets/avatar/makan/' + images[i]);
    voiceline.setAttribute('src', 'assets/avatar/makanAudio/' + voice[i]);
    voiceline.play();
    setTimeout(resetAvatar, 5000)
}
function tidurIncrease(){
    
    if (hunger < 20) {
        health += 5;
        hunger -= 5;
    } else {
        health += 15;
        hunger -= 5;
    }

    jam+= 6;
    if (jam > 23) {
        jam -= 24;
    }
    
    hour.innerHTML = jam;
    if(health > 100){
        health = 100;
    }
    if(hunger < 0){
        hunger = 0;
    }
    cekJam(jam);
    progressBar("hunger", hunger);
    progressBar("health", health);
    avatar.setAttribute('src', 'assets/avatar/tidur/' + images[i]);
    voiceline.setAttribute('src', 'assets/avatar/tidurAudio/' + voice[i]);
    voiceline.play();
    setTimeout(resetAvatar, 5000)
}
function mainIncrease(){
    
    if (health < 20) {
        health -= 5;
        happiness += 5;
    } else {
        health -= 5;
        happiness += 15;
    }
    
    jam++;
    if (jam > 23) {
        jam -= 24;
    }
    hour.innerHTML = jam;
    if(happiness > 100){
        happiness = 100;
    }
    if(health < 0){
        health = 0;
    }
    cekJam(jam);
    progressBar("health", health);
    progressBar("happiness", happiness);
    avatar.setAttribute('src', 'assets/avatar/main/' + images[i]);
    voiceline.setAttribute('src', 'assets/avatar/mainAudio/' + voice[i]);
    voiceline.play();
    setTimeout(resetAvatar, 5000)
}
function belajarIncrease(){
    
    if (happiness < 20 || health < 20 || hunger < 20) {
        happiness -= 5;
        health -= 5;
        hunger -= 5;
    } else {
        knowledge += 10;
        happiness -= 5;
        health -= 5;
        hunger -= 5;
    }
    jam+= 3;
    if (jam > 23) {
        jam -= 24;
    }

    hour.innerHTML = jam;
    if(knowledge > 100){
        semester++;
        knowledge = 0;
        limit = 20; 
        k = 0;

    }

    if(hunger < 0){
        hunger = 0;
    }
    if(health < 0){
        health = 0;
    }
    if(happiness < 0){
        happiness = 0;
    }
    cekJam(jam);
    progressBar("hunger", hunger);
    progressBar("happiness", happiness);
    progressBar("health", health);
    progressBar("knowledge", knowledge);
    avatar.setAttribute('src', 'assets/avatar/belajar/' + images[i]);
    voiceline.setAttribute('src', 'assets/avatar/belajarAudio/' + voice[i]);
    voiceline.play();
    setTimeout(resetAvatar, 5000);
    document.getElementById("semester").innerHTML = semester;
    if (semester > 8) {
        document.getElementById("game").classList.add("d-none");
        document.getElementById("Victory").classList.remove("d-none");
    }
}
function showName(){
    document.getElementById("usrNm") = window.location.search;
}


var hunger = document.getElementById("hunger");
var health = document.getElementById("health");
var happiness = document.getElementById("happiness");
var knowledge = document.getElementById("knowledge");

function makanIncrease(){
    hunger.style.width = (parseInt(hunger.style.width) + 20) + "%";
    happiness.style.width = (parseInt(happiness.style.width) - 10) + "%";
    hunger.ariaValueNow = (parseInt(hunger.ariaValueNow) + 20);
    happiness.ariaValueNow = (parseInt(happiness.ariaValueNow) - 10);
}

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
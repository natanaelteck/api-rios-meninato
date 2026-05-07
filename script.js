window.addEventListener("load", ()=>{

document.getElementById("loader").style.display="none";

});

const counters = document.querySelectorAll('[data-target]');

counters.forEach(counter=>{

const updateCounter = ()=>{

const target = +counter.getAttribute('data-target');

const count = +counter.innerText;

const increment = target / 200;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter, 10);

}else{

counter.innerText = target;

}

}

updateCounter();

});

window.addEventListener('scroll',()=>{

const buttons = document.querySelector('.floating-buttons');

if(window.scrollY > 300){

buttons.style.opacity = "1";

}else{

buttons.style.opacity = "0";

}

});

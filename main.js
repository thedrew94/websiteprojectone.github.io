('use strict');

const containers = document.querySelectorAll('.bck-color');
const colors = ['rgba(255, 0, 0, 0.1)', 'rgb(198, 148, 218, 0.1)', 'rgba(0, 0, 255, 0.1)', 'rgb(148, 218, 169, 0.1)', 'rgba(255, 192, 203, 0.1)', 'rgba(255, 255, 0, 0.1)'];

alert("This project is a replica of the official Sky Tree Tokyo website.\n\
It was created with the goal of refining my skills in JavaScript, HTML, and CSS.\n\
Some features are still under development and may differ from the original.\n\
This project was completed by Tornyai Laurentiu Andrei.");


containers.forEach((container, index) => {
  container.addEventListener('mouseenter', function() {
    container.style.backgroundColor = colors[index -1];
  });

  container.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '';
    this.style.opacity = '';
  });
});

const tbs = document.querySelectorAll('.tb');
tbs.forEach(function(tb) {
  tb.addEventListener('click', function (event) {
    tbs.forEach(function(btn) {
      btn.classList.remove('btn-active-class');
    });
    event.currentTarget.classList.add('btn-active-class');
  });
});

const inOutMenu = document.querySelector('.tickets-inout-menu');

inOutMenu.addEventListener('mouseenter', function () {
    inOutMenu.style.animation = 'scrollInOut 0.2s linear forwards';
});

inOutMenu.addEventListener('mouseleave', function () {
    inOutMenu.style.animation = 'scrollInOutBack 0.2s linear forwards';
});

const ticketsOption1 = document.querySelector('.tick-op1');
const ticketsOption2 = document.querySelector('.tick-op2');
const ticketsOption3 = document.querySelector('.tick-op3');
const ticketContent1 = document.querySelector('.advance-ticket-container');
const ticketContent2 = document.querySelector('.same-day-container');
const ticketContent3 = document.querySelector('.skytree-container');


ticketsOption1.addEventListener('click', function() {
    ticketContent1.scrollIntoView({ behavior: 'smooth' });
});

ticketsOption2.addEventListener('click', function() {
    ticketContent2.scrollIntoView({ behavior: 'smooth' });
});

ticketsOption3.addEventListener('click', function() {
    ticketContent3.scrollIntoView({ behavior: 'smooth' });
});


const screenshots = document.querySelectorAll('.screenshots');
const btnNext = document.querySelector('.slide-btn');
let curSlide = 0;
const maxSlide = screenshots.length;

screenshots.forEach((s, i) => {
s.style.transform = `translateX(${100 * i}%)`;
});

btnNext.addEventListener('click', function() {
if (curSlide === maxSlide - 1) {
curSlide = 0;
} else {
curSlide++;
}

screenshots.forEach((s, i) => {
  s.style.transition = "transform 0.5s";
  s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
});
});

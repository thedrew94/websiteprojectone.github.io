('use strict');
const containers = document.querySelectorAll('.bck-color');
const colors = ['rgba(255, 0, 0, 0.1)', 'rgb(198, 148, 218, 0.1)', 'rgba(0, 0, 255, 0.1)', 'rgb(148, 218, 169, 0.1)', 'rgba(255, 192, 203, 0.1)', 'rgba(255, 255, 0, 0.1)'];

// alert("This project is a replica of the official Sky Tree Tokyo website.\n\
// It was created with the goal of refining my skills in JavaScript, HTML, and CSS.\n\
// Some features are still under development and may differ from the original.Not yet 100% implemented for phone\n\
// This project was completed by Tornyai Laurentiu Andrei.");


containers.forEach((container, index) => {
  container.addEventListener('mouseenter', function() {
    container.style.backgroundColor = colors[index -1];
  });

  container.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '';
    this.style.opacity = '';
  });
});


window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    const navMenu = document.querySelector('.center-div'); 
    const headerContainer = document.querySelector('.header-links');
    navMenu.style.animation = 'shrinkIn 0.6s linear forwards';
    headerContainer.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.1)';
    const logoSkyTree = document.querySelector('.logo-skytree');
    // logoSkyTree.src = 'https://www.tokyo-skytree.jp/common/img/header_logo_fixed.png'

  } else {
    const navMenu = document.querySelector('.center-div'); 
    const headerContainer = document.querySelector('.header-links');
    navMenu.style.animation = 'shrinkBack 0.6s linear forwards';
    headerContainer.style.boxShadow = '0px 0px 0px';
  }
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
  ticketContent1.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
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


const headerLang = document.querySelector('.header-lang');
const headerIndex = document.querySelector('.header-utility');
const modalWindow = document.querySelector('.modal-window-lang');

let modalDisplay = 'none';
let headerIndexprop = 200;

headerLang.addEventListener('click', function() {
  headerLang.classList.toggle('header-lang-onclick');

  if (modalDisplay === 'none' && headerIndexprop === 200) {
    modalWindow.style.display = 'block';
    headerIndex.style.zIndex = 1000;
    modalDisplay = 'block';
    headerIndexprop = 1000;
    
  } else if (modalDisplay === 'block') {
    modalWindow.style.display = 'none';
    headerIndex.style.zIndex = 200;
    modalDisplay = 'none';
    headerIndexprop = 200;
  }
});

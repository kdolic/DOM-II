// Your code goes here
//_____________________________________________________________________
// click - DONE
const nav = document.querySelector('nav');
nav.addEventListener('click', (event) => {
    event.preventDefault();
    event.target.style.color = 'red';
    event.target.style.fontSize = '3rem';
});

//_____________________________________________________________________
// mouseover - DONE
const fun = document.querySelector('h1');
fun.addEventListener('mouseover', event => {
    event.target.style.color = 'red';
    event.target.style.fontSize = '5rem';
});

//_____________________________________________________________________
// mouseout - DONE
const funOut = document.querySelector('h1');
funOut.addEventListener('mouseout', event => {
    event.target.style.color = 'black';
    event.target.style.fontSize = '4rem';
});

//_____________________________________________________________________
// keydown - DONE
document.body.addEventListener('keydown', event => {
    event.preventDefault();
    alert(`You hit ${event.key}! Don't type here!`);
});

//_____________________________________________________________________
// wheel - DONE
const containerBody = document.querySelector('div.container.home');
containerBody.addEventListener('wheel', event => {
    event.target.style.fontSize = '3rem';
    event.target.style.backgroundColor = 'beige';
});

//_____________________________________________________________________
// load - DONE
window.addEventListener('load', () =>{
    console.log('page is fully loaded');
    alert('page is fully loaded');
});

//_____________________________________________________________________
// resize - DONE
const resizeImg = document.querySelector('.intro img');
window.addEventListener('resize', () => {
    resizeImg.style.width = "50%";
    resizeImg.style.height = "50%";
    
});

//_____________________________________________________________________
// dblclick - DONE
const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('dblclick', event =>{
    event.target.style.border = 'thick solid red';
});

//_____________________________________________________________________
// scroll
const scrollText = document.querySelector('.destination p');
scrollText.addEventListener('scroll', event => {
    event.target.style.backgroundColor = 'red';
});

//_____________________________________________________________________
// copy - DONE
document.addEventListener('copy', () => {
    alert('Copied to Clipboard');
    console.log('copy action initiated')
});



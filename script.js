const button = document.querySelector('.section1_wrapper_button')
const buttonSec = document.querySelector('.section3_button')
const buttonThird = document.querySelector('.section4_button')
const section2 = document.querySelector('.section2'
)


section2.addEventListener('mouseover', function() {
    section2.style.transform = 'scale(1.1)'
    section2.style.backgroundColor = 'rgb(27, 59, 110)'
})
section2.addEventListener('mouseout', function() {
    section2.style.transform = 'scale(1)'
    section2.style.backgroundColor = 'rgb(84, 127, 196)'
})



button.addEventListener('mouseover', function() {
  button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseout', function() {
  button.style.transform = 'scale(1)';
});

buttonSec.addEventListener('mouseover', function() {
    buttonSec.style.transform = 'scale(1.1)';
});

buttonSec.addEventListener('mouseout', function() {
    buttonSec.style.transform = 'scale(1)';
});
buttonThird.addEventListener('mouseover', function() {
    buttonThird.style.transform = 'scale(1.1)';
});

buttonThird.addEventListener('mouseout', function() {
    buttonThird.style.transform = 'scale(1)';
});
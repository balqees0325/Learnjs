'use strict';
console.log('hello');

const lbsInput = document.querySelector('#lbsInput');
const output = document.querySelector('#output');
const kgOutput  = document.querySelector('#kgOutput');
const gramsOutput = document.querySelector('#gramsOutput');
const ozOutput = document.querySelector('#ozOutput');


output.style.visibility = 'hidden';
lbsInput.addEventListener('input', (e)=> {
  output.style.visibility = 'visible';
  let lbs = e.target.value;
  gramsOutput.innerHTML = lbs/0.0022046;
  kgOutput.innerHTML = lbs/2.2046;
  ozOutput.innerHTML = lbs * 16;
});
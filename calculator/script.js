const btnOne = document.getElementById('calc-one');
const btnTwo = document.getElementById('calc-two');
const btnThree = document.getElementById('calc-three');
const btnFour = document.getElementById('calc-four');
const btnfive = document.getElementById('calc-five');
const btnSix = document.getElementById('calc-six');
const btnseven = document.getElementById('calc-seven');
const btnEight = document.getElementById('calc-eight');
const btnNine = document.getElementById('calc-nine');

const decimalBtn = document.getElementById('calc-decimal');
const clearBtn = document.getElementById('calc-clear');
const backspaceBtn = document.getElementById('calc-backspace');
const displayValElement = document.getElementById('calc-display-val');

const calcBtnNums = document.getElementsByClassName('calc-btn-num');

const calcOperators = document.getElementsByClassName('calc-btn-operator');

let displayVal = '0';
let pendingVal;
let evalStringArray = [];

const updateDisplayVal = (clickObj) => {
  let btnText = clickObj.target.innerText;

  if(displayVal === '0') 
    displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;
  
}

const performOperation = (clickObj) => {
  let operator = clickObj.target.innerText;

  switch(operator) {
    case '+': 
      pendingVal = displayVal;
      displayVal = 0;
      displayValElement.innerText = displayVal;
      evalStringArray.push('+') ;
    break;
    case '-': 
      pendingVal = displayVal;
      displayVal = 0;
      displayValElement.innerText = displayVal;
      evalStringArray.push('-') ;
    break;
    case 'x': 
      pendingVal = displayVal;
      displayVal = 0;
      displayValElement.innerText = displayVal;
      evalStringArray.push('*') ;
    break;
    case '÷': 
      pendingVal = displayVal;
      displayVal = 0;
      displayValElement.innerText = displayVal;
      evalStringArray.push('/') ;
    break;
    case '=': 
      evalStringArray.push(displayVal);
      let evaluation = eval(evalStringArray.join(' '));
      displayValElement.innerText = displayVal;
      evalStringArray= [];
    break;
    default:
    break;
  }
}

for (i = 0; i < calcBtnNums.length; i++){
   calcBtnNums[i].addEventListener('click', updateDisplayVal, false);
}

for (i = 0; i < calcOperators.length; i++){
  calcOperators[i].addEventListener('click', performOperation, false);

}
clearBtn.onclick = () => {
  displayVal = '0';
 pendingVal  = undefined;
 evalStringArray = [];
 displayValElement.innerText = displayVal;
}
backspaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
  displayVal.slice(0, lengthOfDisplayVal -1);
  if(displayVal === '') 
    displayVal = 0;
    displayValElement.innerText = displayVal;
  
}
decimalBtn.onclick = () => {
  if(displayVal.includes('.'))
  display + '.';
  displayValElement.innerText = displayVal;
}


const celsiusInput = document.querySelector('.celsius >input');
const fahrenheitInput = document.querySelector('.fahrenheit >input');
const kelvinInput = document.querySelector('.kelvin >input');


const roundTemp =(num) => {
  return Math.floor(Math.round(num));
}
const celsiusConversion = () =>{
const cTemp = parseInt(celsiusInput.value);
const fTemp = (cTemp * (9/5)) + 32;
const kTemp = cTemp + 273;
fahrenheitInput.value = roundTemp(fTemp);
kelvinInput.value = roundTemp(kTemp);
}
const fahrenheitConversion =() => {
const fTemp = parseInt(fahrenheitInput.value);
const cTemp = (fTemp - 32) * (5/9);
const kTemp = fTemp + 459 * (5/9);
celsiusInput.value = roundTemp(cTemp);
kelvinInput.value = roundTemp(kTemp);
}
const kelvinConversion = ()=> {
const kTemp = parseInt(kelvinInput.value);
const cTemp = kTemp - 273;
const fTemp = 9/5 * (kTemp -273) + 32;
fahrenheitInput.value = roundTemp(fTemp);
celsiusInput.value = roundTemp(cTemp);
} 
const temp =() => {
celsiusInput.addEventListener('input', celsiusConversion);
fahrenheitInput.addEventListener('input', fahrenheitConversion);
kelvinInput.addEventListener('input', kelvinConversion);
}
temp();
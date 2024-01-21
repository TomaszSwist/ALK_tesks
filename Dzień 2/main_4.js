// Stwórz konwerter temperatur; musi umożliwiać przeliczanie stopni Celsjusza na stopnie
// Fahrenheita i odwrotnie; kalkulator musi mieć guzik do szybkiego odwrócenia konwersji.

const leftLbl = document.querySelector('[for="left"]')
const leftIn = document.querySelector('#left')

const switchBtn = document.querySelector('#switch')

const rightLbl = document.querySelector('[for="right"]')
const rightIn = document.querySelector('#right')

const cToF = degC => degF = (degC * 1.8) + 32
const fToC = degF => degC = (degF - 32) / 1.8

let convert = cToF

switchBtn.addEventListener('click', () => {
    if (convert === cToF) {
        convert = fToC
        leftLbl.textContent = 'Fahrenheit'    
        rightLbl.textContent = 'Celcius'
        leftIn.value = ''
        rightIn.value = ''    
    } else if (convert === fToC) {
        convert = cToF
        leftLbl.textContent = 'Celcius'    
        rightLbl.textContent = 'Fahrenheit'
        leftIn.value = ''
        rightIn.value = ''    
    }
})

leftIn.addEventListener('input', () => {
	
    const result = convert(Number(leftIn.value));
     // ucinamy wynik do 2 miejsc po przecinku
    rightIn.value = Math.trunc(result);
})
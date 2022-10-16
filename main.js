const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomeLower,
    upper: getRandomeUpper,
    number: getRandomeNumber,
    symbol: getRandomeSymbol
}

generateElement.addEventListener('click', () => {
    const length = +lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numbersElement.checked;
    const hasSymbols = symbolsElement.checked;
    
    
    resultElement.innerHTML =  generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length)
})

clipboardElement.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    

    if(!resultElement.innerHTML) {
        return;
    }

    textarea.value = resultElement.innerHTML;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password Copied to clipBoard')

})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );

    console.log(typesArray)

    if(typesCount === 0){ // if all check box are unchecked
        return '';
    }

    for (let i = 0; i < length; i+= typesCount) {
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;

}

// https://net-comber.com/charset.html
function getRandomeLower() {
   return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

function getRandomeUpper() {
   return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomeNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

function getRandomeSymbol() {
    const symbols = '!@#(){}[]|/~&$<>,.'
    return symbols[Math.floor(Math.random()* symbols.length)]
}


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');



function Enter()
{
    social_panel_container.classList.toggle('visible')
}

function Leave()
{
    social_panel_container.classList.remove('visible')
}
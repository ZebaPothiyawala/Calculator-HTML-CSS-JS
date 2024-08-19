const answer = document.getElementById('result');
const addbtn = document.getElementById('addition');
const subbtn = document.getElementById('subtraction');
const multibtn = document.getElementById('multiplication');
const divibtn = document.getElementById('division');
const modulasbtn = document.getElementById('modulas');
const sqrtbtn = document.getElementById('sqrt');
const pmbtn = document.getElementById('plusminus');
const clearbtn = document.getElementById('clear');
const delbtn = document.getElementById('del');
const pibtn = document.getElementById('pi');
const point = document.getElementById('point');
const equalbtn = document.getElementById('equal');
const numberbtn = document.querySelectorAll('.number');

// Variables 
let res = '';
let operation = '';
let no = 0;

// Function to add numbers 
const addnum = (number) => {
    // Point Logic 
    if (number === '.' && res.includes('.')) {
        return;
    }
    res += number;
    updateDisplay();

}

// Functioh To update Display 
const updateDisplay = () => {
    if (operation) {
        answer.innerText = no + operation + res;
    }
    else {
        answer.innerText = res;
    }
}
// Function For Operators
const displayOperator = (operator) => {
    if (res === '') {
        alert('Please Enter First Operand...');
        return;
    }
    if (operation !== '' && no !== '') {
        calculateResult();
    }
    operation = operator;
    no = res;
    res = '';
    updateDisplay();
}
// Calculate 
const calculateResult = () => {
    let calres;
    const prev = parseFloat(no);
    const next = parseFloat(res);
    if (isNaN(prev) || isNaN(next)) {
        return;
    }
    switch (operation) {
        case '+':
            calres = prev + next;
            break;
        case '-':
            calres = prev - next;
            break;
        case '*':
            calres = prev * next;
            break;
        case '/':
            calres = prev / next;
            break;
        case '%':
            calres = prev % next;
            break;
        default:
            return;
    }
    document.getElementById("txtcal").value = `${no} ${operation} ${res}`;
    res = calres.toString();
    operation = '';
    prev = '';
}

// Click the button to function call 
numberbtn.forEach(btn => {
    btn.addEventListener('click', () => {
        addnum(btn.innerText);
    });
});

const clearall = () => {
    res = '';
    prev = '';
    operation = '';
    updateDisplay();
}
const deletebtn = () => {
    if (res === '') {
        alert("Enter Any Button...");
    }
    res = res.slice(0, -1);
    updateDisplay();
}
const calculatesqrt = () => {
    document.getElementById("txtcal").value = `√ ${res}`;
    res = Math.sqrt(res, 2);
    answer.innerText = res;
}
const calculatePi = () => {
    res = 3.14159265359;
    document.getElementById("txtcal").value = `π`;
    answer.innerText = res;
}
var currentValue = 0;
const calculateplusminus = () => {
    if (res === '') {
        alert('Please Enter First Operand...');
        return;
    }
    currentValue = parseFloat(res);
    res = (currentValue * -1).toString();
    answer.innerText = res;
}
point.addEventListener('click', () => addnum('.'));
addbtn.addEventListener('click', () => displayOperator('+'));
subbtn.addEventListener('click', () => displayOperator('-'));
multibtn.addEventListener('click', () => displayOperator('*'));
pibtn.addEventListener('click', () => calculatePi('&Pi;'));
clearbtn.addEventListener('click', clearall);
delbtn.addEventListener('click', deletebtn);
modulasbtn.addEventListener('click', () => displayOperator('%'));
sqrtbtn.addEventListener('click', () => calculatesqrt('√'));
pmbtn.addEventListener('click', () => calculateplusminus('&#xB1;'));
divibtn.addEventListener('click', () => displayOperator('/'));
equalbtn.addEventListener('click', () => {
    if (res === '') {
        alert('Enter Digits...');
        return;
    }
    calculateResult();
    updateDisplay();
});
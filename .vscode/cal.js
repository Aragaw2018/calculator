const display = document.getElementById('display');
let isCalculated = false;

function appendToDisplay(input) {
    if (isCalculated && !isNaN(input)) {
        display.value = "";
    }
    display.value += input;
    isCalculated = false;
}

function clearDisplay() {
    display.value = "";
    isCalculated = false;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        // ውጤቱን እናሰላለን
        let result = eval(expression);
        
        // ውጤቱ ረጅም ቁጥር ከሆነ እንዲያሳጥር (ለምሳሌ 3.33333333)
        if (result.toString().includes('.')) {
            result = result.toFixed(4);
        }
        
        display.value = result;
        isCalculated = true;
    } catch (error) {
        display.value = "Error";
        isCalculated = true;
    }
}

// አዲስ የሳይንቲፊክ ስራዎች
function scientific(type) {
    let val = parseFloat(display.value);
    if (isNaN(val) && type !== 'pi') return;

    switch(type) {
        case 'sqrt': display.value = Math.sqrt(val); break;
        case 'pow': display.value = Math.pow(val, 2); break;
        case 'sin': display.value = Math.sin(val * Math.PI / 180).toFixed(4); break;
        case 'cos': display.value = Math.cos(val * Math.PI / 180).toFixed(4); break;
        case 'tan': display.value = Math.tan(val * Math.PI / 180).toFixed(4); break;
        case 'log': display.value = Math.log10(val).toFixed(4); break;
        case 'pi': display.value += Math.PI.toFixed(4); break;
    }
    isCalculated = true;
}
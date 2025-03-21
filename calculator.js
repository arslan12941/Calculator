function appendToDisplay(value) {
    let display = document.getElementById("display");
    let currentValue = display.value;

    if (value === '.' && (currentValue === '' || /[\+\-\*\/]$/.test(currentValue) || currentValue.split(/[\+\-\*\/]/).pop().includes('.'))) {
        return;
    }

    if (/[\+\-\*\/]$/.test(currentValue.slice(-1)) && /[\+\-\*\/]/.test(value)) {
        return;
    }

    if (currentValue === '' && /[\+\*\/]/.test(value)) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    let display = document.getElementById("display");
    let expression = display.value;

    if (expression === '' || /[\+\-\*\/]$/.test(expression)) {
        display.value = "Error";
        return;
    }

    try {
        let result = eval(expression);
        if (result !== undefined && result !== null) {
            addToHistory(expression + " = " + result);
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}

function addToHistory(entry) {
    let historyList = document.getElementById("history-list");
    let listItem = document.createElement("li");
    listItem.classList.add("history-entry");
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}
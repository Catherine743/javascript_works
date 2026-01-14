// 1. Display number in text box
function displayNum(num) {
    result.value += num;
}

// 2. Clear text box
function clearBox(){
    result.value = ""
}

// 3. Evaluate expression

function evaluateExp() {
    result.value = eval(result.value)
}

// 4. Remove last item from text box

function removeLastItem() {
    result.value = result.value.slice(0,-1)
}
result = document.getElementById('result');

function alphaNum(btn) {
    result.focus()
    result.value += btn.textContent;
}

function backSpace() {
    result.focus();
    result.value = result.value.slice(0,-1)
}

function enterBtn() {
    result.focus();
    result.value += '\n'
}

capsOn = true;
function capsBtn() {
    result.focus();
    capsOn = !capsOn;
    buttons = document.querySelectorAll('.alpha-btn')
    buttons.forEach((button) => {
        if (button.textContent == button.textContent.toUpperCase()) {
            button.textContent = button.textContent.toLowerCase()
        }
        else {
            button.textContent = button.textContent.toUpperCase()
        }
    })

}
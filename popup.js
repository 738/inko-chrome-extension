let inko = new Inko();
let inkoInput = document.getElementById('inkoInput');
let inkoOutput = document.getElementById('inkoOutput');
let inputLabel = document.getElementById('inputLabel');
let outputLabel = document.getElementById('outputLabel');
let clipboard_copy = document.getElementById('clipboard_copy');
let erase = document.getElementById('erase');
let arrow = document.getElementById('arrow');
let inkoLogo = document.getElementById('inkoLogo');
let githubLogo = document.getElementById('githubLogo');
let toastMessage = document.getElementById('toastMessage');

isEn2koMode = true;

inkoInput.onkeyup = function(element) {
    let input =  element.target.value;
    inkoOutput.value = isEn2koMode ? inko.en2ko(input) : inko.ko2en(input);
}

clipboard_copy.onclick = function(_) {
    copyToClipboard(inkoOutput.value);
}

erase.onclick = function(_) {
    inkoInput.value = '';
    inkoOutput.value = '';
}

arrow.onclick = function(_) {
    toggleEn2koMode();
}

inkoLogo.onclick = function(_) {
    window.open('https://inko.holy.kiwi');
}

githubLogo.onclick = function(_) {
    window.open('https://github.com/738/inko');
}

// 클립보드에 텍스트 복사하는 함수
function copyToClipboard(text) {
    let textField = document.createElement('textarea');
    textField.innerText = text;
    // 모바일에서 밑으로 내려가는 현상 때문에
    textField.style.position = 'fixed';
    textField.style.top = '0px';
    textField.style.right = '0px';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
}

function toggleEn2koMode() {
    if (isEn2koMode) {
        isEn2koMode = false;
        inputLabel.innerHTML = '한글';
        outputLabel.innerHTML = '영어';
        changeInputAndOutput();
    } else {
        isEn2koMode = true;
        inputLabel.innerHTML = '영어';
        outputLabel.innerHTML = '한글';
        changeInputAndOutput();
    }
}

function changeInputAndOutput() {
    let tmp = inkoInput.value;
    inkoInput.value = inkoOutput.value;
    inkoOutput.value = tmp;
    convert = inko.ko2en;
}
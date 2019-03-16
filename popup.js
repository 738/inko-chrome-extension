let inko = new Inko();
let englishInput = document.getElementById('englishInput');
let koreanInput = document.getElementById('koreanInput');
let englishCopyButton = document.getElementById('englishCopyButton');
let koreanCopyButton = document.getElementById('koreanCopyButton');

englishInput.onkeyup = function(element) {
    let input =  element.target.value;
    koreanInput.value = inko.en2ko(input);
}

koreanInput.onkeyup = function(element) {
    let input =  element.target.value;
    englishInput.value = inko.ko2en(input);
}

englishCopyButton.onclick = function(element) {
    copyToClipboard(englishInput.value)
}

koreanCopyButton.onclick = function(element) {
    copyToClipboard(koreanInput.value)
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

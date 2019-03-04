let inko = new Inko();
let englishInput = document.getElementById('englishInput');
let koreanInput = document.getElementById('koreanInput');
let koreanOutputCopyButton = document.getElementById('koreanOutputCopyButton');
let englishOutputCopyButton = document.getElementById('englishOutputCopyButton');

englishInput.onkeyup = function(element) {
    let input =  element.target.value;
    document.getElementById("koreanOutput").innerHTML = inko.en2ko(input);
}

koreanInput.onkeyup = function(element) {
    let input =  element.target.value;
    document.getElementById("englishOutput").innerHTML = inko.ko2en(input);
}

koreanOutputCopyButton.onclick = function(element) {
    copyToClipboard(document.getElementById("koreanOutput").innerHTML)
}

englishOutputCopyButton.onclick = function(element) {
    copyToClipboard(document.getElementById("englishOutput").innerHTML)
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

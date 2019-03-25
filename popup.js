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

let isEn2koMode = true;
let isToastMessageShown = false;
let version = '';

readJSON('./manifest.json');

inkoInput.onkeyup = function(element) {
    let input =  element.target.value;
    inkoOutput.value = isEn2koMode ? inko.en2ko(input) : inko.ko2en(input);
}

clipboard_copy.onclick = function(_) {
    copyToClipboard(inkoOutput.value);
    showToastMessage('클립보드에 복사되었습니다');
}

erase.onclick = function(_) {
    inkoInput.value = '';
    inkoOutput.value = '';
    showToastMessage('내용을 지웁니다');
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

function showToastMessage(msg) {
    toastMessage.innerHTML = msg;
    if (isToastMessageShown) return;
    isToastMessageShown = true;
    toastMessage.classList.add('show');
    setTimeout(function() {
        isToastMessageShown = false;
        toastMessage.classList.remove('show');
    }, 2700);
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

function readJSON(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) { 
      if (this.status == 200) {
          var file = new File([this.response], 'temp');
          var fileReader = new FileReader();
          fileReader.addEventListener('load', function(){
              version = JSON.parse(fileReader.result) ? JSON.parse(fileReader.result).version : '';
              document.getElementById('version').innerHTML = `v ${version}`;
          });
          fileReader.readAsText(file);
      } 
    }
    xhr.send();
}

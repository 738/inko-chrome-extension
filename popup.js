let inko = new Inko();
let englishInput = document.getElementById('englishInput');
let koreanInput = document.getElementById('koreanInput');

englishInput.onkeyup = function(element) {
    let input =  element.target.value;
    document.getElementById("koreanOutput").innerHTML = inko.en2ko(input);
}

koreanInput.onkeyup = function(element) {
    let input =  element.target.value;
    document.getElementById("englishOutput").innerHTML = inko.ko2en(input);
}

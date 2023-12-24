const writeElement= ['Web Development', 'Digital Solutions for Education'];
let count = 0;
let writeIndex = 0;
let currentWrite = '';
let words = '';

(function write() {

    if(count == writeElement.length){
        count = 0;
    }

    currentWrite = writeElement[count];

    words = currentWrite.slice(0, ++writeIndex);
    document.querySelector('.write-efect').textContent = words;

    if(words.length == currentWrite.length){
        count++;
        writeIndex = 0;
    }
    setTimeout(write, 200);
})();
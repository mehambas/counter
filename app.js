/* variables */

var result = document.querySelector('.result');
var decBtn = document.querySelector('.dec');
var resBtn = document.querySelector('.res');
var incBtn = document.querySelector('.inc');


let resultCount = 0;
result.innerHTML = resultCount;

/* eventlistener */

decBtn.addEventListener('click', decrease);
incBtn.addEventListener('click', increase);
resBtn.addEventListener('click', reset);

/* functions */

function decrease() {
    resultCount--;
    result.innerHTML = resultCount;
    colorResult()
}

function increase() {
    resultCount++;
    result.innerHTML = resultCount;
    colorResult()
}

function reset() {
    resultCount = 0;
    result.innerHTML = resultCount;
    colorResult()
}


/* color function */
function colorResult() {
    if (resultCount == 0) {
        result.setAttribute('style', 'color:#575555;');
        document.body.style.backgroundColor = '#575555';
        setTimeout(() => {
            document.body.removeAttribute('style')
        }, 400);
    }
    
    if (resultCount >= 1) {
        result.setAttribute('style', 'color:#046104;');
        document.body.style.backgroundColor = '#046104';
        setTimeout(() => {
            document.body.removeAttribute('style')
        }, 400);
    }
    
    if (resultCount <= -1) {
        result.setAttribute('style', 'color:#860303;');
        document.body.style.backgroundColor = '#860303';
        setTimeout(() => {
            document.body.removeAttribute('style')
        }, 400);
    }
}


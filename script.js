
document.getElementById('siteContent');

function showSite(){
  siteContent.style.display = 'block'

}

document.getElementById('siteContent');

function hideSite(){
  siteContent.style.display = 'none'
}

const svg = document.getElementById('triangles');

svg.onmouseenter = (e) => {
    const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
    const rando = () => colors[Math.floor(Math.random() * colors.length)];

    document.documentElement.style.cssText = `
    
    --dark-color: ${rando()};
    --light-color: ${rando()};
    `
}


const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');


let count = 0;

increaseBtn.onclick = function() {
  count++;
  countLabel.textContent = count
}

decreaseBtn.onclick = function() {
  count--;
  countLabel.textContent = count
}

resetBtn.onclick = function() {
  count = 0
  countLabel.textContent = count;
}


randomBtn.onclick = () => {
  
  countLabel.textContent = Math.floor(Math.random() * 100);
  count = countLabel.textContent;
}



function rollDice(){


  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult")
  const diceImages = document.getElementById("diceImages")
  const values = [];
  const images = [];


  for (let i = 0; i < numOfDice; i++) {


    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="img/capture_0${value}.png">`)


  }

  diceResult.textContent = `dice ${values.join(', ')}`
  diceImages.innerHTML = images.join('')

}



const boxRezultat = document.getElementById('boxRezultat')
const buttonNu = document.getElementById('buttonNu');
const buttonDa = document.getElementById('buttonDa');
const newP = document.createElement('p');


buttonDa.addEventListener('click', event => {
  newP.setAttribute('id','newP');
  newP.textContent = 'Da..'
  newP.style.fontSize = '2rem'
  boxRezultat.appendChild(newP);
});


buttonNu.addEventListener('mouseover', event => {
    event.target.textContent = "Da"
    event.target.style.backgroundColor = 'lightgreen'
});

buttonNu.addEventListener('mouseout', event => {
    event.target.textContent = "Nu"
    event.target.style.backgroundColor = 'tomato'

})

buttonNu.addEventListener('click', event => {
  newP.setAttribute('id','newP');
  newP.textContent = 'Ia mai gandeste-te'
  newP.style.fontSize = '2rem'
  boxRezultat.appendChild(newP);
});




buttonReset.addEventListener('click', event => {
    
  boxRezultat.removeChild(newP);
});


const calculateBtn = document.getElementById('myBtn');
const resultLabel = document.getElementById('myLabel');

console.log(typeof a);
console.log(typeof b);



function calculate(){
   

    try {
        const a = Number(document.getElementById('myInput1').value);
        const b = Number(document.getElementById('myInput2').value);
        let result = 0;
        result = result + (a / b);
        resultLabel.textContent = result;
        console.log(a);
        console.log(b);
        console.log(result);

        if(b == 0){
            resultLabel.textContent = `Cannot divide by 0`;
            throw new Error(`Cannot divide by 0`) 
        }

        if(isNaN(a) || isNaN(b)){
            resultLabel.textContent = `No Numbers`;
            throw new Error(`No Numbers`) 
        }

    }

    catch(error){
        console.error(error)
    };

};

function clearResult(){
    resultLabel.textContent = '0';
    
}

function addColor(){
    const body = document.getElementById('body');
    body.classList.add('colorful')
}

function removeColor(){
    const body = document.getElementById('body');
    body.classList.remove('colorful')
}

function pauseColor(){
    const body = document.getElementById('body');
    body.classList.add('pauseColor')
}


const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
};

function clearDisplay(){
    display.value = '0';
};

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'error';
    }
    
};

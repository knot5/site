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
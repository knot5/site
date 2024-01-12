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

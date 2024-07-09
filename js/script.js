// FUNCTIONS
function numbersGenerator(array) {
  let ul = document.querySelector(".random");
  while (array.length < 5) {
    let random = Math.floor(Math.random() * 100 + 1);
    if (!array.includes(random)) {
      array.push(random);
      let li = document.createElement("li");
      li.innerText = random;
      ul.append(li);
    }
  }
  console.log(array);
}

function userNumbersRecovery() {
    let userArray = [];
    for (let k = 0; k < 5; k++) {
        
    }
}
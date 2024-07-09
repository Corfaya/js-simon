// FUNCTIONS
function numbersGenerator(array) {
    let ul = document.querySelector(".random");
    while (array.length < 5) {
        let random = Math.floor(Math.random() * 100 + 1);
        if (!array.includes(random)) {
            array.push(random);
          }
      }
      console.log(array);
  }
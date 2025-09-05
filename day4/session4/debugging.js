function add(a, b) {
  let sum = a + b;   
  return sum;        
}

function multiply(x, y) {
  let result = x * y;  
  return result;       
}

function calculate() {
  let total = add(2, 3);          
  let product = multiply(total, 4); 
  console.log("Result:", product);  
}

document.querySelector('#runBtn').addEventListener('click', calculate);

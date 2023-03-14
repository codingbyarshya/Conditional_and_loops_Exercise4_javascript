//first solution, without using loops
function sumUntil(maxValue){

  let result=maxValue*(maxValue+1)/2
  return result;
} 

console.log(sumUntil(5));
console.log(sumUntil(10));

//second solution , using for loop
function sumUntil(num) {
    let sum = 0;
  
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
  
    return sum;
  }

  console.log(sumUntil(5));
  console.log(sumUntil(10));

//third solution , using while loops
function sumUntil(num) {
  let sum = 0;
  let i = 1;
  
  while (i <= num) {
    sum += i;
    i++;
  }
  
  return sum;
}
console.log(sumUntil(5));
console.log(sumUntil(10));
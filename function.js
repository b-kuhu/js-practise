function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
console.log(factorial(5))  

//nested function 
 function result(){
    const a =10;
    const b= 20;
    function add(){
        return `The sum of a and b is ${a+b}`
    }
    return add();
 }


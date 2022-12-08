function getFruits(num){
    num--;
  let fruits = ['Apple','Orange','Banana','Watermelon']

  if(fruits[num]){
    return fruits[num]
  }
  else{
    throw new Error('Invalid');
  }
}   
try {
    fruitName = getFruits(1)
}catch(e){
  fruitName = 'unknown'
  console.log(e)
}
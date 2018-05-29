function theBeatlesPlay (musicians, instruments){
  let anArr = [];
  for (let i = 0; i < musicians.length; i++){
    let curr = musicians[i];
    anArr.push(`${curr} plays ${instruments[i]}`)
  }
  return anArr;
}

function johnLennonFacts(facts){
  let anArr = [];
  let i = 0;
  while (facts[i]){
    anArr.push(`${facts[i]}!!!`)
    i++
  }
  return anArr;
}

function iLoveTheBeatles(number){
  let anArr = [];
  if (number < 15){
    let number = 0;
    do {
      (anArr.push('I love the Beatles!'))
      number++;
    }while (number > 0);
  }
  return anArr;
}

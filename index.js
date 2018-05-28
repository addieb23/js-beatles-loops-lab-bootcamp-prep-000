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

    anArr.push(`"${facts[i]}!!!"`)
    i++
  }
  return anArr;
}

function theBeatlesPlay (musicians, instruments){
  let anArr = [];
  for (let i = 0; i < musicians.length; i++){
    let curr = musicians[i];
    anArr.push(`${curr} plays ${instruments[i]}`)
  }
  return anArr;
}

function johnLennonFacts(johnLennonFacts){
  let anArr = [];
  while (johnLennonFacts.length>0){
    anArr.push(`"${johnLennonFacts[i]}!!!"`)
    i--
  }
  return anArr;
}

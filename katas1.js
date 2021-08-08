function oneThroughTwenty() {
   let retorno = [];
   for (let counter = 1; counter <= 20; counter++) {
     retorno.push(counter);
   }
   return retorno;
}

//call function oneThroughTwenty

function evensToTwenty() {
  let retorno = [];
  for (let counter = 1; counter <=20; counter++) {
    if (counter % 2 === 0) {
      retorno.push(counter);
    }
  } 
  return retorno;
}

//call function evensToTwenty

function oddsToTwenty() {
  let retorno = [];
  for (let counter = 1; counter <=20; counter++) {
    if (counter % 2 !== 0) {
      retorno.push(counter);
    }
  } 
  return retorno;
}

//call function oddsToTwenty

function multiplesOfFive() {
  let retorno = [];
  for (let counter = 1; counter <=100; counter++) {
    if (counter % 5 === 0) {
      retorno.push(counter);
    }
  } 
  return retorno;
}

//call function multiplesOfFive

function squareNumbers() {
  let retorno = [];
  for (let counter = 1; counter <= 10; counter++) {
    let x = counter ** 2;
    retorno.push(x);
  } 
  return retorno;
}

//call function squareNumbers

function countingBackwards() {
  let retorno = [];
  for (let counter = 20; counter <= 20 && counter >= 1; counter--) {
    retorno.push(counter);
  }
  return retorno;
}

//call function countingBackwards

function evenNumbersBackwards() {
  let retorno = [];
  for (let counter = 20; counter <= 20 && counter >= 1; counter--) {
    if (counter % 2 === 0) {
      retorno.push(counter);
    }
  }
  return retorno;
}

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let retorno = [];
  for (let counter = 20; counter <= 20 && counter >= 1; counter--) {
    if (counter % 2 !== 0) {
      retorno.push(counter);
    }
  }
  return retorno;
}

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let retorno = [];
  for (let counter = 100; counter <= 100 && counter >= 1; counter--) {
    if (counter % 5 === 0) {
      retorno.push(counter);
    }
  }
  return retorno;
}

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let retorno = [];
  for (let counter = 10; counter <= 10 && counter >= 1; counter--) {
    let x = counter ** 2;
    retorno.push(x);
  } 
  return retorno;
}

//call function squareNumbersBackwards

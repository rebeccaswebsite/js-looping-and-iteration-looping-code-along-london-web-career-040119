function writeCards(names, occasion) {
  let cardsArray = []
  for (let i = 0; i < names.length; i++ ) {
    cardsArray.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
  }
  return cardsArray
}

function countdown(num) {
  while (num >= 0) {
    console.log(num--)
  }
}

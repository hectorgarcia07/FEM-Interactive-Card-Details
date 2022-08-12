export const setCVC = (cvc:string) => {
  return cvc.padEnd(3, '0')
}

export const setCardNumber = ( cardNum:string ) => {
  const cardNumber = cardNum.replace(/ /g,'').padEnd(16, '0').match(/.{1,4}/g)?.join(' ')
  console.log(cardNumber)
  
  return cardNumber
}

export const setCardName = (cardName:string) => cardName ? cardName : 'Jane AppleSeed'

export const setCardExpDate = (month:string, year:string) => {
  const m = month.padEnd(2, '0')
  const y = year.padEnd(2, '0')

  return `${m}/${y}`
}
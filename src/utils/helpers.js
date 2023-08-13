export const additionalZeroInNumbers = (number) => {
  const str = number / 10 + ''
  return str[0] === '0' ? str.split('.').join('') : number + ''
}

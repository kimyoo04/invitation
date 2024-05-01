export function pad(num: number, minDigits: number): string {
  const strNum = num.toString()
  const zerosToAdd = minDigits - strNum.length

  return zerosToAdd > 0 ? '0'.repeat(zerosToAdd) + strNum : strNum
}

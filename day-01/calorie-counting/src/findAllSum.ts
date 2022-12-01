import {getArraySum} from './getArraySum';

export const findAllSum = (inputArray: number[][]) : number[] => {
  let sums: number[] = [];

  outer: for (let i = 0; i < inputArray.length; ++i) {
    const tempSum = getArraySum(inputArray[i])
    sums.push(tempSum)

  }
  sums.sort((a, b) => b - a)
  return sums
}

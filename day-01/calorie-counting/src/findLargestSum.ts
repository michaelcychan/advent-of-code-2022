import {getArraySum} from './getArraySum';

export const findLargestSum = (inputArray: number[][]) : number => {
  let largest = 0;

  for (let i = 0; i < inputArray.length; ++i) {
    const tempSum = getArraySum(inputArray[i])
    if (tempSum > largest) {
      largest = tempSum
    }
  }
  return largest
}
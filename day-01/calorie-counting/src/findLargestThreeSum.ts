import {getArraySum} from './getArraySum';

export const findLargestThreeSum = (inputArray: number[][]) : number[] => {
  let largests: number[] = [0,0,0];

  outer: for (let i = 0; i < inputArray.length; ++i) {
    const tempSum = getArraySum(inputArray[i])
    for (let j = 0; j < largests.length; ++j) {
      if (tempSum > largests[j]) {
        largests.splice(j, 0, tempSum)
        largests = largests.slice(0,3)
        continue outer
      }
      
    }
  }
  return largests
}

import  {getAssignements}  from './getAssignments'; 
import { isOverlap } from './isOverlap';
import {turnAssignmentsToArray} from './turnAssignmentsToArray'


const wholeData = getAssignements()
let fullyContainCounter = 0
let overlapCounter = 0
for (let i = 0; i<wholeData.length; ++i) {
  const newLineArray = turnAssignmentsToArray(wholeData[i])
  if (newLineArray[0][0] >= newLineArray[1][0] && newLineArray[0][1] <= newLineArray[1][1]) {
    fullyContainCounter += 1
  } else if (newLineArray[1][0] >= newLineArray[0][0] && newLineArray[1][1] <= newLineArray[0][1]) {
    fullyContainCounter += 1
  }
  if (isOverlap(newLineArray)) {
    overlapCounter += 1
  }
}

console.log(`The number of pairs with fully contained assignement: ${fullyContainCounter}`)
console.log(`The number of any kind of overlap is : ${overlapCounter}`)
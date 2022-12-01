import {getCalories} from './getCalorie'
import {findLargestSum} from './findLargestSum'
import {findLargestThreeSum} from './findLargestThreeSum'
import {getArraySum} from './getArraySum'
import {findAllSum} from './findAllSum'

getCalories()
  .then((resolve:number[][]) => {
    console.log(`number of elf: ${resolve.length}`)
    console.log(`The calories held by the highest calorie elf: ${findLargestSum(resolve)}`)
    const topThree = findLargestThreeSum(resolve)
    console.log(`The caloires held by the top three calorie elf: ${topThree}`)
    const topThreeSum = getArraySum(topThree)
    console.log(`Their total calorie is ${topThreeSum}`)
    console.log("top 10 Sums: ")
    console.log(findAllSum(resolve).slice(0, 10))
  })
  .catch((reject:Error) => {
    console.error(reject)
  })
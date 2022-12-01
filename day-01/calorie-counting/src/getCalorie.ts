import fs from 'fs';

export const getCalories = async () => {
  let outputArray:number[][] = [[]];
  const data = fs.readFileSync('day-1-input.txt', {encoding: 'utf-8'}).toString().split('\n')
  
  let elfCounter: number = 0
  for (let i = 0; i < data.length; ++i) {
    if (data[i] === "") {
      elfCounter ++
      outputArray.push([])
    } else {
      outputArray[elfCounter].push(Number(data[i]))
    }
  }
    
  return outputArray
}
import fs from 'fs';

export const getAssignements = (): string[][] => {
  const outputArray: number[][] = []
  const data = fs.readFileSync('./src/assigned-sections.txt', {encoding: 'utf-8'}).toString().split('\n').map((line) => {
    return line.split(',')
  })
  return data
}
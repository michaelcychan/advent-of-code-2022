import fs from 'fs';

export const getScreenLines = ():string[] => {
  const data:string[] = fs.readFileSync('terminal.txt', {encoding: 'utf-8'}).toString().split('\n')
  return data
}
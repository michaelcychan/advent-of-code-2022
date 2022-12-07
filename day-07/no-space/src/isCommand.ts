export const isCommand = (line:string):boolean => {
  if (line[0] === '$') {
    return true
  }
  return false
}
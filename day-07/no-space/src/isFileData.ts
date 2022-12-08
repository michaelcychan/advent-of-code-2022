export const isFileData = (line:string):boolean => {
  if (line.split(' ')[0].match(/^\d+$/gm)) {
    return true
  } else {
    return false
  }
}
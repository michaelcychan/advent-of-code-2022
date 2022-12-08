export const getDirLayer = (longDir:string): string[] => {
  if (longDir === '/') {
    return ['/']
  }
  const dirArray = ['/']
  const count = (longDir.match(/\//g) || []).length;
  if (count >= 1) {
    for (let i = 2; i <= count + 1; ++i) {
      dirArray.push(longDir.split('/').slice(0,i).join('/'))
    }
  }
  return dirArray
}
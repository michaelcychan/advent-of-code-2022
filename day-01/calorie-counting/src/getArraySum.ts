export const getArraySum = (arr: number[]): number => {
  return arr.reduce((prev, val) => {
    return prev + val
  }, 0)
}
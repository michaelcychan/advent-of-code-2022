export const turnAssignmentsToArray = (input: string[]): number[][] => {
  const output: number[][] = []
  for (let i = 0; i < input.length; ++i) {
    const newLine = input[i].split('-').map((numStr) => {
      return parseInt(numStr, 10)
    })
    output.push(newLine)
  }
  return output
}
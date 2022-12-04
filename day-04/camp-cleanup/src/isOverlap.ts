export const isOverlap = (line: number[][]): boolean => {
  let overlap = false;

  if (line[0][0] === line[1][0] || line[0][0] === line[1][1] || line[0][1] === line[1][0] || line[0][1] === line[1][1]) {
    overlap = true
  } else if (line[0][0] >= line[1][0] && line[0][0] <= line[1][1]) {
    overlap = true
  } else if (line[0][1] >= line[1][0] && line[0][1] <= line[1][1]) {
    overlap = true
  } else if (line[1][0] >= line[0][0] && line[1][0] <= line[0][1]) {
    overlap = true
  } else if (line[1][1] >= line[0][0] && line[1][1] <= line[0][1]) {
    overlap = true
  }

  return overlap
}
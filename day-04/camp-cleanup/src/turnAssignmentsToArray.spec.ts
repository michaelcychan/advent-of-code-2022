import {turnAssignmentsToArray} from './turnAssignmentsToArray'

describe('turnAssignmentsToArray', () => {
  it('turns array of string into number[][]', () => {
    const input = ['1-3', '2-4']
    const expected = [[1,3], [2,4]]
  
    const actual = turnAssignmentsToArray(input)
    expect(actual[0][0]).toBe(expected[0][0])
    expect(actual[0][1]).toBe(expected[0][1])
  })

})
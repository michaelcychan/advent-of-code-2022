import  {getAssignements}  from './getAssignments'; 

describe('getAssignment', () => {
  it('returns the first element as two arrays', () => {
    const data = getAssignements();
    const firstLine = ['57-93', '9-57']
    expect(data[0][0]).toStrictEqual(firstLine[0])
    expect(data[0][1]).toStrictEqual(firstLine[1])
  })
})
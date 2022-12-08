import {isFileData} from '../src/isFileData';

describe('isfileData', () => {
  it('returns true for file data with storage', () => {
    const line = '14848514 b.txt'
    const expected = true

    const actual = isFileData(line)
    expect(actual).toBe(expected)
  })
  it('returns false for directory', () => {
    const line = 'dir a'
    const expected = false

    const actual = isFileData(line)
    expect(actual).toBe(expected)
  })
})
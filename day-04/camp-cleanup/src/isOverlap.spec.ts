import {isOverlap} from './isOverlap'

describe('isOverlap', () => {
  it('returns false for no overlap (case 1)', () => {
    const input = [[2,4], [6,8]]
    const expected = false

    const actual = isOverlap(input)
    expect(actual).toBe(expected)
  })
  it('returns false for no overlap (case 2)', () => {
    const input = [[2,3], [4,5]]
    const expected = false

    const actual = isOverlap(input)
    expect(actual).toBe(expected)
  })
  it('returns true for single section overlap', () => {
    const input = [[5, 7], [7, 9]]
    const expected = true

    const actual = isOverlap(input)
    expect(actual).toBe(expected)
  })
  it('returns true for whole overlap', () => {
    const input = [[2, 8], [3,7]]
    const expected = true

    const actual = isOverlap(input)
    expect(actual).toBe(expected)
  })
  it('returns true for overlap with single assignment', () => {
    const input = [[6, 6], [4, 6]]
    const expected = true

    const actual = isOverlap(input)
    expect(actual).toBe(expected)
  })
  it('returns true for partly overlap', () => {
    const input = [[2, 6], [4, 8]]
    const expected = true

    const actual = isOverlap(input)
    expect(actual).toBe(expected)
  })
})
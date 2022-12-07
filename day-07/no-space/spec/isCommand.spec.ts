import {isCommand} from '../src/isCommand'

describe('isCommand', () => {
  it('returns true for a cd command', () => {
    const input:string = '$ cd /'
    const expected: boolean = true

    const actual:boolean = isCommand(input)
    expect(actual).toBe(expected)
  })
  it('returns true for a ls command', () => {
    const input:string = '$ ls'
    const expected: boolean = true

    const actual:boolean = isCommand(input)
    expect(actual).toBe(expected)
  })
  it('returns false for a stdout', () => {
    const input:string = '68612 ggb.qgd'
    const expected: boolean = false

    const actual:boolean = isCommand(input)
    expect(actual).toBe(expected)
  })
  
})
import {getDirLayer} from '../src/getDirLayer';

describe('getDirLayer', () => {
  it('returns an array with / for  /', () => {
    const inputDir = '/'
    const expected = ['/']

    const actual = getDirLayer(inputDir)
    expect(actual).toStrictEqual(expected)
  })
  it('returns root and new directory for inner directory', () => {
    const inputDir = '/a'
    const expected = ['/', '/a']

    const actual = getDirLayer(inputDir)
    expect(actual).toStrictEqual(expected)
  })
  it('returns root and multiple new directories for multiple level inner directory', () => {
    const inputDir = '/a/b/c/d'
    const expected = ['/', '/a', '/a/b', '/a/b/c', '/a/b/c/d']

    const actual = getDirLayer(inputDir)
    expect(actual).toStrictEqual(expected)
  })
})
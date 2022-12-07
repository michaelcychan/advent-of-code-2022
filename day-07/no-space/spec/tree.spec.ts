import {Tree} from '../src/tree'

describe('Tree', () => {
  describe('cd', () => {
    it('initialises with pwd at root', () => {
      const tree = new Tree()
      
      const expected: string = "/"
      tree.cd('/')
      
      expect(tree.getPwd()).toStrictEqual(expected)
    })
    it('changes pwd if cd a new director', () => {
      const tree = new Tree()
      const expected:string = '/new-dir'
  
      tree.cd('new-dir')
  
      expect(tree.getPwd()).toStrictEqual(expected)
    })
    it('move down directories two times', () => {
      const tree = new Tree()
      const expected:string = '/a/e'
  
      tree.cd('a')
      tree.cd('e')
  
      expect(tree.getPwd()).toBe(expected)
    })
    it('able to move up directories', () => {
      const tree = new Tree()
      const expected:string = '/a'
  
      tree.cd('a')
      tree.cd('e')
      tree.cd('..')
  
      expect(tree.getPwd()).toBe(expected)
    })
    it('able to move up and down directories', () => {
      const tree = new Tree()
      const expected:string = '/d'
  
      tree.cd('a')
      tree.cd('e')
      tree.cd('..')
      tree.cd('..')
      tree.cd('d')
  
      expect(tree.getPwd()).toBe(expected)
    })
  })
  it.skip('does something', () => {
    const tree = new Tree()

  })
})
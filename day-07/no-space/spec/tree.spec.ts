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
  describe('getStorage', () => {
    it ('initialises with 0 storage if nothing is saved', () => {
      const tree = new Tree()
      const expected = 0

      const actual = tree.getStorage('/')
      expect(actual).toBe(expected)
    })
    it('saves storage to current dictory', () => {
      const tree = new Tree()
      tree.addStorage('14848514 b.txt')
      const expected = 14848514

      const actual = tree.getStorage('/')
      expect(actual).toBe(expected)
    })
    it('saves multiple storage to current dictory', () => {
      const tree = new Tree()
      tree.addStorage('4060174 j')
      tree.addStorage('8033020 d.log')
      tree.addStorage('5626152 d.ext')
      tree.addStorage('7214296 k')
      const expected = 24933642

      const actual = tree.getStorage('/')
      expect(actual).toBe(expected)
    })

    it('saves inner directory storage to outside directory too', () => {
      const tree = new Tree()
      tree.addStorage('1 a.txt')

      tree.cd('innerDir')
      debugger;
      tree.addStorage('4060174 j')
      debugger;
      tree.addStorage('8033020 d.log')
      tree.addStorage('5626152 d.ext')
      tree.addStorage('7214296 k')

      const expectedInnerDir = 24933642
      const expectedRoot = 24933643

      const actualInnderDir = tree.getStorage('/innerDir')
      const actualRoot = tree.getStorage('/')
      expect(actualInnderDir).toBe(expectedInnerDir)
      expect(actualRoot).toBe(expectedRoot)
    })


    
  })
})
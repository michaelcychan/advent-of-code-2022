import {getDirLayer} from './getDirLayer'

export class Tree {
  pwd: string;
  tree: Map<string, number>;

  constructor(){
    this.tree = new Map<string, number>()
    this.pwd = '/'
  }

  getPwd(){
    return this.pwd
  }

  getStorage(directory: string):number {
    const storage : number | undefined = this.tree.get(directory)
    if (storage !== undefined) {
      return storage
    } else {
      return 0
    }
  }

  addStorage(fileStorage: string) {
    const [storageStr, fileName] = fileStorage.split(' ')
    const storage = Number(storageStr)
    const dirArray = getDirLayer(this.pwd)
    for (let i = 0; i < dirArray.length; ++i) {
      const currentStorage : number | undefined = this.tree.get(dirArray[i])
      if (currentStorage !== undefined) {
        this.tree.set(dirArray[i], currentStorage + storage)
      } else {
        this.tree.set(dirArray[i], storage)
      }
    }
    console.log(this.tree)
  }

  buildTree(files:string) {
    if (files.substring(0, 3) === 'dir') {
      const directoryName:string = files.split(' ')[1]
    }
  }

  cd(command:string) {
    let pwdArray
    if (this.pwd === '/') {
      pwdArray = ['']
    } else {
      pwdArray = this.pwd.split('/')
    }
    if (command === '/') {
      this.pwd = '/'
    } else if (command === '..') {
      pwdArray.pop()
      this.pwd = pwdArray.join('/')
    } else {
      pwdArray.push(command)
      this.pwd = pwdArray.join('/')
    }
  }
}
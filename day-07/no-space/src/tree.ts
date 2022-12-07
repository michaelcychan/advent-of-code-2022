
export class Tree {
  tree: {};
  pwd: string;

  constructor(){
    this.tree = {}
    this.pwd = '/'
  }

  getPwd(){
    return this.pwd
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
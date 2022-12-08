import {isCommand} from './isCommand'
import { isFileData } from './isFileData'

interface Tree {
  getPwd(): string,
  getStorage(directory: string): number,
  addStorage(fileStorage: string): void,
  buildTree(files:string): void,
  cd(command:string): void
}

export class Interpreter  {
  tree: Tree
  constructor(tree: Tree) {
    this.tree = tree
  }

  interpret(line:string){
    if (isCommand(line)) {
      if (line.split(' ')[1] == 'cd') {
        this.tree.cd(line.split(' ')[2])
      }
    } else if (isFileData(line)){
      this.tree.addStorage(line)
    }
  }
}
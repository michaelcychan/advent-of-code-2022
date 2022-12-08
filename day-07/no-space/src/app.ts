import {Tree} from './tree'
import {Interpreter} from './interpreter';
import {getScreenLines} from './getScreenLines';

const tree = new Tree();
const interpreter = new Interpreter(tree);

const data = getScreenLines()
for (let i = 0; i < data.length; ++i) {
  interpreter.interpret(data[i])
}

const limit:number = 100000

console.log(tree.getAllStorage())
const answer1 = tree.getDirLessThanX(limit)
console.log(`The total storage of directories of storage at most ${limit} is: ${answer1}`)
const usedStoraged = tree.getUsedStorage()
console.log(`The used storage is ${usedStoraged}`)
const minFreedSpace = usedStoraged - (70000000 - 30000000)
console.log(`The mininum storage to remove is: ${minFreedSpace}`)
console.log("the directories that can free up enough space: ")
console.log(tree.getDirMoreThanX(minFreedSpace))
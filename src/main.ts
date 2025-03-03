import * as ast from "./AST";
// import * as scratch from "./Scratch";

console.log('start')

let a = new ast.Number(4);
let b = new ast.Number(4);
let c = new ast.Equal(a, b);
let d = a.equals(b);
let e = new ast.Call("func", [a, b, c]);
let f = new ast.Call("func", [a, b, c]);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(d);
console.log(a.value === b.value);
console.log(e.equals(f));
console.log(a instanceof ast.Number)

let source = new ast.Source("hello1 bye2", 0);
let result = ast.Parser.regexp(/hello[0-9]/y).parse(source);
console.assert(result!.value === "hello1");
console.assert(result!.source.index === 6);

console.log('end')
// let p = new scratch.Pair(3,3);
// console.log(p.toString())

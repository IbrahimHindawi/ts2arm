import * as ast from "./AST";
import * as scratch from "./Scratch";

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

let p = new scratch.Pair(3,3);
console.log(p.toString())

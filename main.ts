import * as ast from "./AST";
import * as Scratch from "./Scratch";

let a = new ast.Number(4);
let b = new ast.Number(4);
let c = new ast.Equal(a, b);
let d = a.equals(b);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(d);
console.log(a.value === b.value);


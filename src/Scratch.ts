/*
class Equal implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) {
        if(this == other) {
            return true;
        }
        else {
            return false;
        }
    }
}
*/

/*
class Pair {
    public first: number;
    public second: number;

    constructor(first: number, second:number) {
        this.first = first;
        this.second = second;
    }
}
*/
export
class Pair {
    static zero = 0;
    static origin() {
        return new Pair(0, 0);
    }
    constructor(public first: number,
                public second: number) {}
    toString() {
        return `(${this.first}, ${this.second})`;
    }
}

function add(a: number, b: number) {
    return a + b;
}

let add_lambda = (a: number, b: number) => a + b;

function fvar() {
    var x = 1;
    {
        var x = 2;
    }
    console.log(x); // var is method level therefore x = 2
}

function flet() {
    let x = 1;
    {
        let x = 2;
    }
    console.log(x); // let is scope level therefore x = 1
}

//console.log("hell");
//console.log(`2 + 2 = ${2 + 2}`);
//
//console.log(`
//this
//   is
//some
//   magic
//`);
//console.assert(2 === 2)

// console.assert(2 === 1)
// throw Error("Error messages go here!")
//let n = add(1, 1);
//console.log(n);

//let m = add_lambda(1, 1);
//console.log(m);

let array: Array<number> = [1, 2, 3];

let result = "hello world".match(/[a-z]+/);
// console.assert(result[0] === "hello");
if (result != null) {
    console.log(result[0]);
}

let origin = new Pair(0, 0);

interface AST { equals(node: AST): boolean; } // interface

export 
class Number implements AST {
    constructor(public value: number) {}
    equals(other: AST) { return other instanceof Number && this.value === other.value; }
}

export 
class Id implements AST {
    constructor(public value: string) {}
    equals(other: AST) { return other instanceof Id && other.value === this.value; }
}

export 
class Not implements AST {
    constructor(public term: AST) {} // some polymorphic magic??
    equals(other: AST) { return other instanceof Not && other.term === this.term; }
}

export 
class Equal implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { return other instanceof Equal && other.left === this.left && other.right === this.right; }
}

export 
class NotEqual implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { return other instanceof NotEqual && other.left === this.left && other.right === this.right; }
}

export 
class Add implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { return other instanceof Add && other.left === this.left && other.right === this.right; }
}

export 
class Subtract implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { return other instanceof Subtract && other.left === this.left && other.right === this.right; }
}

export 
class Multiply implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { return other instanceof Multiply && other.left === this.left && other.right === this.right; }
}

export 
class Divide implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { return other instanceof Divide && other.left === this.left && other.right === this.right; }
}

export 
class Call implements AST {
    constructor(public callee: string,
                public args: Array<AST>) {}
    equals(other: AST): boolean {
        return other instanceof Call &&
            this.callee === other.callee &&
            this.args.length === other.args.length &&
            this.args.every((arg, i) =>
                arg.equals(other.args[i]));
    }
}


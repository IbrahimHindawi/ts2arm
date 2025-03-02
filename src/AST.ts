interface AST { equals(node: AST): boolean; } // interface

export 
class Number implements AST {
    constructor(public value: number) {}
    equals(other: AST) { if(this == other) { return true; } else { return false; } }
}

export 
class Id implements AST {
    constructor(public value: string) {}
    equals(other: AST) { if(this == other) { return true; } else { return false; } }
}

export 
class Not implements AST {
    constructor(public term: AST) {} // some polymorphic magic
    equals(other: AST) { if(this == other) { return true; } else { return false; } }
}

export 
class Equal implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { if(this == other) { return true; } else { return false; } }
}

export 
class NotEqual implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { if(this == other) { return true; } else { return false; } }
}

export 
class Add implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { if(this == other) { return true; } else { return false; } }
}

export 
class Subtract implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { if(this == other) { return true; } else { return false; } }
}

export 
class Multiply implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { if(this == other) { return true; } else { return false; } }
}

export 
class Divide implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST) { if(this == other) { return true; } else { return false; } }
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

export
class Return implements AST {
    constructor(public term: AST) {}
    equals(other: AST) { if(this == other) { return true; } else { return false; } }
}

//---------------------------------------------------------------------------------------------------
// Abstract Syntax Tree Nodes
//---------------------------------------------------------------------------------------------------
interface AST { equals(node: AST): boolean; } // interface

export 
class Number implements AST {
    constructor(public value: number) {}
    equals(other: AST): boolean {
        return other instanceof Number && this.value === other.value;
    }
}

export 
class Id implements AST {
    constructor(public value: string) {}
    equals(other: AST): boolean {
        return other instanceof Id && other.value === this.value;
    }
}

export 
class Not implements AST {
    constructor(public term: AST) {} // some polymorphic magic??
    equals(other: AST): boolean {
        return other instanceof Not && other.term === this.term;
    }
}

export 
class Equal implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST): boolean {
        return other instanceof Equal && 
            other.left === this.left && 
            other.right === this.right;
    }
}

export 
class NotEqual implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST): boolean {
        return other instanceof NotEqual && 
            other.left === this.left && 
            other.right === this.right;
    }
}

export 
class Add implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST): boolean {
        return other instanceof Add &&
            other.left === this.left &&
            other.right === this.right;
    }
}

export 
class Subtract implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST): boolean {
        return other instanceof Subtract &&
            other.left === this.left &&
            other.right === this.right;
    }
}

export 
class Multiply implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST): boolean {
        return other instanceof Multiply &&
            other.left === this.left &&
            other.right === this.right;
    }
}

export 
class Divide implements AST {
    constructor(public left: AST, public right: AST) {}
    equals(other: AST): boolean {
        return other instanceof Divide &&
            other.left === this.left &&
            other.right === this.right;
    }
}

export 
class Call implements AST {
    constructor(public callee: string, public args: Array<AST>) {}
    equals(other: AST): boolean {
        return other instanceof Call &&
            this.callee === other.callee &&
            this.args.length === other.args.length &&
            this.args.every((arg, i) => arg.equals(other.args[i]));
    }
}

export
class Return implements AST {
    constructor(public term: AST) {}
    equals(other: AST): boolean {
        if(this == other) {
            return true;
        } else {
            return false;
        }
    }
}

export
class Block implements AST {
    constructor(public stmts: Array<AST>) {}
    equals(other: AST): boolean {
        return other instanceof Block &&
            this.stmts.length === other.stmts.length &&
            this.stmts.every((statement, i) =>
                statement.equals(other.stmts[i]));
            
    }
}

export
class If implements AST {
    constructor(public conditional: AST,
               public consequence: AST,
               public alternative: AST) {}
    equals(other: AST): boolean {
        return other instanceof If &&
            this.conditional === other.conditional &&
            this.consequence === other.consequence &&
            this.alternative === other.alternative
    }
}

export
class Function implements AST {
    constructor(public name: string,
                public params: Array<string>,
                public body: AST) {}
    equals(other: AST): boolean {
        return other instanceof Function &&
            this.name === other.name &&
            this.body === other.body &&
            this.params.every((param, i) => param === other.params[i]);
    }
}

export
class Variable implements AST {
    constructor(public name: string, public value: AST) {}
    equals(other: AST): boolean {
        return other instanceof Variable &&
            this.name === other.name &&
            this.value === other.value;
    }
}

export
class Assign implements AST {
    constructor(public name: string, public value: AST) {}
    equals(other: AST): boolean {
        return other instanceof Assign &&
            this.name === other.name &&
            this.value === other.value;
    }
}

export
class While implements AST {
    constructor(public conditional: AST, public body: AST) {}
    equals(other: AST): boolean {
        return other instanceof While &&
            this.conditional === other.conditional &&
            this.body === other.body;
    }
}

//---------------------------------------------------------------------------------------------------
// Parser
//---------------------------------------------------------------------------------------------------
export
interface Parser<T> {
    parse(source: Source): ParseResult<T> | null;
}

export
class Parser<T> {
    constructor(public parse: (s: Source) => (ParseResult<T> | null)) {}
    static regexp(regexp: RegExp): Parser<string> {
        return new Parser(source => source.match(regexp));
    }
}

export
class ParseResult<T> {
    constructor(public value: T, public source: Source) {}
}

export
class Source {
    constructor(public string: string,
                public index: number) {}
    match(regexp: RegExp): (ParseResult<string> | null) {
        console.assert(regexp.sticky);
        regexp.lastIndex = this.index;
        let match = this.string.match(regexp);
        if (match) {
            let value = match[0];
            let newIndex = this.index + value.length;
            let source = new Source(this.string, newIndex);
            return new ParseResult(value, source);
        }
        return null;
    }
}

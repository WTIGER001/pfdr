import * as jsep from 'jsep'

export class Formula {
    public vars = new Array<string>()
    public arrays = new Array<string>()
    public functions = new Array<string>()

    constructor(public formula: string) {
        this.parse()
    }

    public parse() {
        let node = jsep(this.formula)

        let varNames = new Map<string, string>()
        let arrNames = new Map<string, string>()
        let fnNames = new Map<string, string>()
        this.nodeParse(node, varNames, arrNames, fnNames)

        varNames.forEach((v, k) => {
            this.vars.push(k)
        });
        arrNames.forEach((v, k) => {
            this.arrays.push(k)
        });
        fnNames.forEach((v, k) => {
            this.functions.push(k)
        });
    }

    private nodeParse(node, varNames: Map<string, string>, arrNames: Map<string, string>, fnNames: Map<string, string>) {
        if (node.type === "Literal") {
            // No Work!
        } else if (node.type === "BinaryExpression") {
            this.nodeParse(node.left, varNames, arrNames, fnNames)
            this.nodeParse(node.right, varNames, arrNames, fnNames)
        } else if (node.type === "Identifier") {
            varNames.set(node.name, node.name)
        } else if (node.type === "MemberExpression" && node.computed == false) {
            let bigname = node.object.name + "." + node.property.name
            varNames.set(bigname, bigname)
        } else if (node.type === "MemberExpression" && node.computed == true) {
            arrNames.set(node.object.name, node.object.name)
            this.nodeParse(node.property, varNames, arrNames, fnNames)
        } else if (node.type === "CallExpression") {
            fnNames.set(node.callee.name, node.callee.name)
            for (let i = 0; i < node.arguments.length; i++) {
                this.nodeParse(node.arguments[i], varNames, arrNames, fnNames)
            }
        }
    }

    public evaluate(varValues: Map<string, number>, arrayValues: Map<string, Array<number>>, fnValues: Map<string, { (): number }>): number {
        let node = jsep(this.formula)
        return this.nodeEval(node, varValues, arrayValues, fnValues)
    }

    private nodeEval(node, varValues: Map<string, number>, arrayValues: Map<string, Array<number>>, fnValues: Map<string, { (): number }>): number {
        if (node.type === "Literal") {
            return node.value
        } else if (node.type === "BinaryExpression") {
            let left = this.nodeEval(node.left, varValues, arrayValues, fnValues)
            let right = this.nodeEval(node.right, varValues, arrayValues, fnValues)

            if (node.operator == "+") {
                return left + right
            } else if (node.operator == "-") {
                return left - right
            } else if (node.operator == "*") {
                return left * right
            } else if (node.operator == "/") {
                return left / right
            }

        } else if (node.type === "Identifier") {
            let v = varValues.get(node.name)
            if (v === undefined) {
                throw "Unknown Value : " + node.name
            }
            return v
        } else if (node.type === "MemberExpression" && node.computed == false) {
            let name = node.object.name + "." + node.property.name
            let v = varValues.get(name)
            if (v === undefined) {
                throw "Unknown Value : " + name
            }
            return v
        } else if (node.type === "MemberExpression" && node.computed == true) {
            let arrayName = node.object.name
            let arrayIndex = this.nodeEval(node.property, varValues, arrayValues, fnValues)
            let arr = arrayValues.get(arrayName)
            if (arr === undefined) {
                throw "Unknown Array : " + arrayName
            }

            return arr.values[arrayIndex]
        } else if (node.type === "CallExpression") {
            let fName = node.callee.name
            let args = []
            for (let i = 0; i < node.arguments.length; i++) {
                args[i] = this.nodeEval(node.arguments[i], varValues, arrayValues, fnValues)
            }
            let fn = fnValues.get(fName)
            if (fn === undefined) {
                throw "Unknown Function : " + fName
            }
            let val = fn.apply(null, args)
            return val;
        }
    }
}
/*

type: 'MemberExpression'
computed: true 
object:
type: 'Identifier'
name: 'ABILITY_MODS'
property:
type: 'Identifier'
name: 'STR'


export interface IExpression {
      type: string;  
    }

    export interface ILiteral extends IExpression {
      type: "Literal";
      value: any;
      raw: string;
    }

    export interface IIdentifier extends IExpression {
      type: 'Identifier'
      name: string;
    }

    export interface IBinaryExpression extends IExpression {
      type: 'BinaryExpression';
      operator: string;
      left: IExpression;
      right: IExpression;
    }

    export interface IUnaryExpression extends IExpression {
      type: 'UnaryExpression';
      operator: string;
      argument: IExpression;
      prefix: boolean;
    }

    export interface IMemberExpression extends IExpression {
      type: 'MemberExpression';
      computed: boolean;
      object: IExpression;
      property: IExpression;
    }
    */
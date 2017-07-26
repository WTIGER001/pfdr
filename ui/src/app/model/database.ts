// Contains the reference data
import { Book } from "./book";
import { User, Campaign, RuleBook, Character, Target, Subtarget, NamedArray, Rule } from '../model'
import { ClassDef } from './ref/classDef'

export class Database {



    public named_arrays: NamedArray[] = new Array()
    public targets: Target[] = new Array()
    public sub_targets: Subtarget[] = new Array()
    public classes: ClassDef[] = new Array()
    public books: Book[] = new Array()
    public rules: Rule[] = new Array()

    public namedArraysMap = new Map<string, Array<number>>()
    public targetsMap = new Map<string, Target>()
    public subtargetsMap = new Map<string, Subtarget>()
    public classesMap = new Map<string, ClassDef>()

    public fromJson(d: Database): Database {
        d.named_arrays.forEach(a => {
            this.named_arrays.push(Object.assign(new NamedArray(), a))
        })
        d.targets.forEach(a => {
            this.targets.push(Object.assign(new Target(), a))
        })
        d.sub_targets.forEach(a => {
            this.sub_targets.push(Object.assign(new Subtarget(), a))
        })
        d.classes.forEach(a => {
            this.classes.push(new ClassDef().fromJson(a))
        })
        d.books.forEach(a => {
            this.books.push(Object.assign(new Book(), a))
        })
        d.rules.forEach(a => {
            this.rules.push(new Rule().fromJson(a))
        })
        return this
    }

    public index() {
        this.namedArraysMap = this.index1(this.named_arrays)
        this.targetsMap = this.index1(this.targets)
        this.subtargetsMap = this.index1(this.sub_targets)
        this.classesMap = this.index1(this.classes)

        this.cleanUp()
    }

    private index1(arr: any[]): Map<string, any> {
        let mp = new Map<string, any>()
        if (arr != undefined) {
            arr.forEach(item => {
                mp.set(item.name, item)
            });
        }
        return mp
    }


    private cleanUp() {
        this.targets.forEach(t => {
            if (t.raw == undefined) {
                t.raw = 0
            } else {
                t.raw = Number(t.raw)
            }
        });
        this.sub_targets.forEach(t => {
            if (t.raw == undefined) {
                t.raw = 0
            } else {
                t.raw = Number(t.raw)
            }
        });
    }
}
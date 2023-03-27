import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
}

export namespace A {
    
    export type mkdir = () => g_this.ASYNC.A.C.Mkdir
    
    export type readDir = () => g_this.ASYNC.A.C.ReadDir
    
    export type readFile = () => g_this.ASYNC.A.C.ReadFile
    
    export type unlink = () => g_this.ASYNC.A.C.Unlink
    
    export type writeFile = () => g_this.ASYNC.A.C.WriteFile
}

export type API = {
    readonly 'mkdir': A.mkdir
    readonly 'readDir': A.readDir
    readonly 'readFile': A.readFile
    readonly 'unlink': A.unlink
    readonly 'writeFile': A.writeFile
}
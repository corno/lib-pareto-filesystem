import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type mkdir = g_this.ASYNC.A.F.Mkdir
    
    export type readDir = g_this.ASYNC.A.F.ReadDir
    
    export type readFile = g_this.ASYNC.A.F.ReadFile
    
    export type unlink = g_this.ASYNC.A.F.Unlink
    
    export type writeFile = g_this.ASYNC.A.F.WriteFile
}

export type API = {
    mkdir: A.mkdir
    readDir: A.readDir
    readFile: A.readFile
    unlink: A.unlink
    writeFile: A.writeFile
}
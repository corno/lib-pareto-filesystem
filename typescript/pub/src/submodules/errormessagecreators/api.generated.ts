import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type mkdir = g_this.ASYNC.A.C.Mkdir
    
    export type readDir = g_this.ASYNC.A.C.ReadDir
    
    export type readFile = g_this.ASYNC.A.C.ReadFile
    
    export type rmdir = g_this.ASYNC.A.C.Rmdir
    
    export type unlink = g_this.ASYNC.A.C.Unlink
    
    export type writeFile = g_this.ASYNC.A.C.WriteFile
}

export type API = {
    mkdir: A.mkdir
    readDir: A.readDir
    readFile: A.readFile
    rmdir: A.rmdir
    unlink: A.unlink
    writeFile: A.writeFile
}
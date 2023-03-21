import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type mkdir = () => g_this.SYNC.A.F.Mkdir
    
    export type readDir = () => g_this.SYNC.A.F.ReadDir
    
    export type readFile = () => g_this.SYNC.A.F.ReadFile
    
    export type rmdir = () => g_this.SYNC.A.F.Rmdir
    
    export type unlink = () => g_this.SYNC.A.F.Unlink
    
    export type writeFile = () => g_this.SYNC.A.F.WriteFile
}

export type API = {
    readonly 'mkdir': A.mkdir
    readonly 'readDir': A.readDir
    readonly 'readFile': A.readFile
    readonly 'rmdir': A.rmdir
    readonly 'unlink': A.unlink
    readonly 'writeFile': A.writeFile
}
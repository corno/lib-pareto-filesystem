import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type mkdir = g_this.F.Mkdir

export type readDir = g_this.F.ReadDir

export type readFile = g_this.F.ReadFile

export type unlink = g_this.F.Unlink

export type writeFile = g_this.F.WriteFile

export type API = {
    mkdir: mkdir
    readDir: readDir
    readFile: readFile
    unlink: unlink
    writeFile: writeFile
}
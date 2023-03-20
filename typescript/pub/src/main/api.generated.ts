import * as pt from 'pareto-core-types'

import * as g_fs from "res-pareto-filesystem"
import * as g_this from "./glossary"

export namespace A {
    
    export type createReadDirectoryOrAbort = ($d: {
        readonly 'readDirectory': g_fs.ASYNC.A.F.ReadDirectory
    }, $se: {
        readonly 'onError': g_this.ASYNC.I.HandleAnnotatedReadDirError
    }) => g_this.ASYNC.A.F.ReadDirectoryOrAbort
    
    export type createReadOptionalDirectory = ($d: {
        readonly 'readDirectory': g_fs.ASYNC.A.F.ReadDirectory
    }, $se: {
        readonly 'onError': g_this.ASYNC.I.HandleAnnotatedReadDirError
    }) => g_this.ASYNC.A.F.ReadOptionalDirectory
}

export type API = {
    createReadDirectoryOrAbort: A.createReadDirectoryOrAbort
    createReadOptionalDirectory: A.createReadOptionalDirectory
}
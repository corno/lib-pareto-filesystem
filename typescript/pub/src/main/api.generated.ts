import * as pt from 'pareto-core-types'

import * as g_fs from "res-pareto-filesystem"
import * as g_this from "./glossary"

export namespace D {
    
    export type createReadDirectoryOrAbort = {
        readonly 'readDirectory': g_fs.ASYNC.A.F.ReadDirectory
    }
    
    export type createReadOptionalDirectory = {
        readonly 'readDirectory': g_fs.ASYNC.A.F.ReadDirectory
    }
    
    export type createUnlinkFireAndForget = {
        readonly 'unlink': g_fs.ASYNC.A.F.Unlink
    }
    
    export type createWriteFileFireAndForget = {
        readonly 'createFileWriter': g_fs.ASYNC.A.C.CreateFileWriter
    }
}

export namespace A {
    
    export type createReadDirectoryOrAbort = ($d: D.createReadDirectoryOrAbort, $se: {
        readonly 'onError': g_this.ASYNC.I.HandleAnnotatedReadDirError
    }) => g_this.ASYNC.A.F.ReadDirectoryOrAbort
    
    export type createReadOptionalDirectory = ($d: D.createReadOptionalDirectory, $se: {
        readonly 'onError': g_this.ASYNC.I.HandleAnnotatedReadDirError
    }) => g_this.ASYNC.A.F.ReadOptionalDirectory
    
    export type createUnlinkFireAndForget = ($d: D.createUnlinkFireAndForget, ) => g_this.ASYNC.A.C.CreateUnlinkFireAndForget
    
    export type createWriteFileFireAndForget = ($d: D.createWriteFileFireAndForget, ) => g_this.ASYNC.A.C.CreateWriteFileFireAndForget
}

export type API = {
    readonly 'createReadDirectoryOrAbort': A.createReadDirectoryOrAbort
    readonly 'createReadOptionalDirectory': A.createReadOptionalDirectory
    readonly 'createUnlinkFireAndForget': A.createUnlinkFireAndForget
    readonly 'createWriteFileFireAndForget': A.createWriteFileFireAndForget
}
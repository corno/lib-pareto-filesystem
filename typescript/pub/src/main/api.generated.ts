import * as pt from 'pareto-core-types'

import * as g_fs from "res-pareto-filesystem"
import * as g_this from "./glossary"

export namespace A {
    
    export type createReadDirectoryOrAbort = ($d: {
        readonly 'readDirectory': g_fs.ASYNC.A.F.ReadDirectory
    }, $se: {
        readonly 'onError': g_this.ASYNC.I.HandleAnnotatedReadDirError
    }, ) => g_this.ASYNC.A.F.ReadDirectoryOrAbort
    
    export type createReadOptionalDirectory = ($d: {
        readonly 'readDirectory': g_fs.ASYNC.A.F.ReadDirectory
    }, $se: {
        readonly 'onError': g_this.ASYNC.I.HandleAnnotatedReadDirError
    }, ) => g_this.ASYNC.A.F.ReadOptionalDirectory
    
    export type createUnlinkFireAndForget = ($d: {
        readonly 'unlink': g_fs.ASYNC.A.F.Unlink
    }, ) => g_this.ASYNC.A.C.CreateUnlinkFireAndForget
    
    export type createWriteFileFireAndForget = ($d: {
        readonly 'createFileWriter': g_fs.ASYNC.A.C.CreateFileWriter
    }, ) => g_this.ASYNC.A.C.CreateWriteFileFireAndForget
}

export type API = {
    readonly 'createReadDirectoryOrAbort': A.createReadDirectoryOrAbort
    readonly 'createReadOptionalDirectory': A.createReadOptionalDirectory
    readonly 'createUnlinkFireAndForget': A.createUnlinkFireAndForget
    readonly 'createWriteFileFireAndForget': A.createWriteFileFireAndForget
}
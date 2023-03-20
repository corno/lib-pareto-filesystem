import * as pt from 'pareto-core-types'

import * as g_fs from "res-pareto-filesystem"
import * as g_this from "./glossary"

export namespace A {
    
    export type createUnlinkFireAndForget = ($d: {
        readonly 'unlink': g_fs.ASYNC.A.F.Unlink
    }, $se: {
        readonly 'onError': g_this.ASYNC.I.HandleAnnotatedUnlinkError
    }) => g_this.ASYNC.A.C.UnlinkFireAndForget
    
    export type createWriteFileFireAndForget = ($d: {
        readonly 'createFileWriter': g_fs.ASYNC.A.F.CreateFileWriter
    }, $se: {
        readonly 'onError': g_this.ASYNC.I.HandleAnnotatedWriteFileError
    }) => g_this.ASYNC.A.C.WriteFile
}

export type API = {
    createUnlinkFireAndForget: A.createUnlinkFireAndForget
    createWriteFileFireAndForget: A.createWriteFileFireAndForget
}
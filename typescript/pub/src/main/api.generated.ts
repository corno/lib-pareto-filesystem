import * as pt from 'pareto-core-types'

import * as g_fs from "res-pareto-filesystem"
import * as g_this from "./glossary"

export type createReadDirectoryOrAbort = ($d: {
    readonly 'onError': g_this.F.TempHandleAnnotatedReadDirError
    readonly 'readDirectory': g_fs.F.ReadDirectory
}) => g_this.F.ReadDirectoryOrAbort

export type createReadOptionalDirectory = ($d: {
    readonly 'onError': g_this.F.TempHandleAnnotatedReadDirError
    readonly 'readDirectory': g_fs.F.ReadDirectory
}) => g_this.F.ReadOptionalDirectory

export type API = {
    createReadDirectoryOrAbort: createReadDirectoryOrAbort
    createReadOptionalDirectory: createReadOptionalDirectory
}
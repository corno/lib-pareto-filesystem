import * as pt from 'pareto-core-types'

import * as g_fs from "res-pareto-filesystem"
import * as g_this from "./glossary"

export type createUnlinkFireAndForget = ($d: {
    readonly 'temp_onError': g_this.F.TempHandleAnnotatedUnlinkError
    readonly 'unlink': g_fs.F.Unlink
}) => g_this.F.TempUnlinkFireAndForget

export type createWriteFileFireAndForget = ($d: {
    readonly 'createFileWriter': g_fs.F.CreateFileWriter
    readonly 'temp_onError': g_this.F.TempHandleAnnotatedWriteFileError
}) => g_this.F.TempWriteFile

export type API = {
    createUnlinkFireAndForget: createUnlinkFireAndForget
    createWriteFileFireAndForget: createWriteFileFireAndForget
}
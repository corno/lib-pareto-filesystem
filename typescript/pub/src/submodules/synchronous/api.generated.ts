import * as pt from 'pareto-core-types'

import * as g_fs from "res-pareto-filesystem"
import * as g_this from "./glossary"

export type createUnlinkFireAndForget = ($d: {
    readonly 'onError': g_this.B.HandleAnnotatedUnlinkError
    readonly 'unlink': g_fs.F.Unlink
}) => ($c: g_this.C.UnlinkFireAndForget) => void

export type createWriteFileFireAndForget = ($d: {
    readonly 'createFileWriter': g_fs.F.CreateFileWriter
    readonly 'onError': g_this.B.HandleAnnotatedWriteFileError
}) => ($c: g_this.C.WriteFile) => void

export type API = {
    createUnlinkFireAndForget: createUnlinkFireAndForget
    createWriteFileFireAndForget: createWriteFileFireAndForget
}
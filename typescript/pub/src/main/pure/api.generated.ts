import * as pt from 'pareto-core-types'

import * as g_fs from "res-pareto-filesystem"
import * as g_this from "../glossary"

export type createReadDirectoryOrAbort = ($d: {
    readonly 'onError': g_this.F.HandleAnnotatedReadDirError
    readonly 'readDirectory': g_fs.F.ReadDirectory
}) => g_this.F.ReadDirectoryOrAbort

export type createReadOptionalDirectory = ($d: {
    readonly 'onError': g_this.F.HandleAnnotatedReadDirError
    readonly 'readDirectory': g_fs.F.ReadDirectory
}) => g_this.F.ReadOptionalDirectory

export type createUnlinkFireAndForget = ($d: {
    readonly 'onError': g_this.F.HandleAnnotatedUnlinkError
    readonly 'unlink': g_fs.F.Unlink
}) => g_this.F.UnlinkFireAndForget

export type createWriteFileFireAndForget = ($d: {
    readonly 'createFileWriter': g_fs.F.CreateFileWriter
    readonly 'onError': g_this.F.HandleAnnotatedWriteFileError
}) => g_this.F.WriteFile

export type API = {
    createReadDirectoryOrAbort: createReadDirectoryOrAbort
    createReadOptionalDirectory: createReadOptionalDirectory
    createUnlinkFireAndForget: createUnlinkFireAndForget
    createWriteFileFireAndForget: createWriteFileFireAndForget
}
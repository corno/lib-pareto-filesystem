import * as pt from 'pareto-core-types'

import * as g_fs from "res-pareto-filesystem"
import * as g_this from "./glossary"

export type createMkdirErrorMessage = g_this.F.CreateMkdirErrorMessage

export type createReadDirectoryOrAbort = ($d: {
    readonly 'onError': g_this.F.HandleAnnotatedReadDirError
    readonly 'readDirectory': g_fs.F.ReadDirectory
}) => g_this.F.ReadDirectoryOrAbort

export type createReadDirErrorMessage = g_this.F.CreateReadDirErrorMessage

export type createReadFileErrorMessage = g_this.F.CreateReadFileErrorMessage

export type createReadOptionalDirectory = ($d: {
    readonly 'onError': g_this.F.HandleAnnotatedReadDirError
    readonly 'readDirectory': g_fs.F.ReadDirectory
}) => g_this.F.ReadOptionalDirectory

export type createRmdirErrorMessage = g_this.F.CreateRmdirErrorMessage

export type createUnlinkErrorMessage = g_this.F.CreateUnlinkErrorMessage

export type createUnlinkFireAndForget = ($d: {
    readonly 'onError': g_this.F.HandleAnnotatedUnlinkError
    readonly 'unlink': g_fs.F.Unlink
}) => g_this.F.UnlinkFireAndForget

export type createWriteFileErrorMessage = g_this.F.CreateWriteFileErrorMessage

export type createWriteFileFireAndForget = ($d: {
    readonly 'createWriter': g_fs.F.CreateWriter
}) => g_this.F.WriteFile

export type API = {
    createMkdirErrorMessage: createMkdirErrorMessage
    createReadDirectoryOrAbort: createReadDirectoryOrAbort
    createReadDirErrorMessage: createReadDirErrorMessage
    createReadFileErrorMessage: createReadFileErrorMessage
    createReadOptionalDirectory: createReadOptionalDirectory
    createRmdirErrorMessage: createRmdirErrorMessage
    createUnlinkErrorMessage: createUnlinkErrorMessage
    createUnlinkFireAndForget: createUnlinkFireAndForget
    createWriteFileErrorMessage: createWriteFileErrorMessage
    createWriteFileFireAndForget: createWriteFileFireAndForget
}
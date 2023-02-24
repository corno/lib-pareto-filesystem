import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gfs from "res-pareto-filesystem"

export type CcreateMkdirErrorMessage = gglo.FCreateMkdirErrorMessage

export type CcreateReadDirectoryOrAbort = ($d: {
    readonly 'onError': gglo.FHandleAnnotatedReadDirError
    readonly 'readDirectory': gfs.FReadDirectory
}) => gglo.FReadDirectoryOrAbort

export type CcreateReadDirErrorMessage = gglo.FCreateReadDirErrorMessage

export type CcreateReadFileErrorMessage = gglo.FCreateReadFileErrorMessage

export type CcreateReadOptionalDirectory = ($d: {
    readonly 'onError': gglo.FHandleAnnotatedReadDirError
    readonly 'readDirectory': gfs.FReadDirectory
}) => gglo.FReadOptionalDirectory

export type CcreateRmdirErrorMessage = gglo.FCreateRmdirErrorMessage

export type CcreateUnlinkErrorMessage = gglo.FCreateUnlinkErrorMessage

export type CcreateUnlinkFireAndForget = ($d: {
    readonly 'onError': gglo.FHandleAnnotatedUnlinkError
    readonly 'unlink': gfs.FUnlink
}) => gglo.FUnlinkFireAndForget

export type CcreateWriteFileErrorMessage = gglo.FCreateWriteFileErrorMessage

export type CcreateWriteFileFireAndForget = ($d: {
    readonly 'createWriteStream': gfs.FCreateWriteStream
}) => gglo.FWriteFile

export type API = {
    createMkdirErrorMessage: CcreateMkdirErrorMessage
    createReadDirectoryOrAbort: CcreateReadDirectoryOrAbort
    createReadDirErrorMessage: CcreateReadDirErrorMessage
    createReadFileErrorMessage: CcreateReadFileErrorMessage
    createReadOptionalDirectory: CcreateReadOptionalDirectory
    createRmdirErrorMessage: CcreateRmdirErrorMessage
    createUnlinkErrorMessage: CcreateUnlinkErrorMessage
    createUnlinkFireAndForget: CcreateUnlinkFireAndForget
    createWriteFileErrorMessage: CcreateWriteFileErrorMessage
    createWriteFileFireAndForget: CcreateWriteFileFireAndForget
}
import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mfs from "res-pareto-filesystem"

export type CcreateMkdirErrorMessage = glo.FCreateMkdirErrorMessage

export type CcreateReadDirectoryOrAbort = ($d: {
    readonly 'onError': glo.FHandleAnnotatedReadDirError
    readonly 'readDirectory': mfs.FReadDirectory
}) => glo.FReadDirectoryOrAbort

export type CcreateReadDirErrorMessage = glo.FCreateReadDirErrorMessage

export type CcreateReadFileErrorMessage = glo.FCreateReadFileErrorMessage

export type CcreateReadOptionalDirectory = ($d: {
    readonly 'onError': glo.FHandleAnnotatedReadDirError
    readonly 'readDirectory': mfs.FReadDirectory
}) => glo.FReadOptionalDirectory

export type CcreateRmdirErrorMessage = glo.FCreateRmdirErrorMessage

export type CcreateUnlinkErrorMessage = glo.FCreateUnlinkErrorMessage

export type CcreateUnlinkFireAndForget = ($d: {
    readonly 'onError': glo.FHandleAnnotatedUnlinkError
    readonly 'unlink': mfs.FUnlink
}) => glo.FUnlinkFireAndForget

export type CcreateWriteFileErrorMessage = glo.FCreateWriteFileErrorMessage

export type CcreateWriteFileFireAndForget = ($d: {
    readonly 'createWriteStream': mfs.FCreateWriteStream
}) => glo.FWriteFile

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
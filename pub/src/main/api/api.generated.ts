import * as pt from 'pareto-core-types'

import * as gfs from "res-pareto-filesystem"
import * as gthis from "./glossary"

export type CcreateMkdirErrorMessage = gthis.FCreateMkdirErrorMessage

export type CcreateReadDirectoryOrAbort = ($d: {
    readonly 'onError': gthis.FHandleAnnotatedReadDirError
    readonly 'readDirectory': gfs.FReadDirectory
}) => gthis.FReadDirectoryOrAbort

export type CcreateReadDirErrorMessage = gthis.FCreateReadDirErrorMessage

export type CcreateReadFileErrorMessage = gthis.FCreateReadFileErrorMessage

export type CcreateReadOptionalDirectory = ($d: {
    readonly 'onError': gthis.FHandleAnnotatedReadDirError
    readonly 'readDirectory': gfs.FReadDirectory
}) => gthis.FReadOptionalDirectory

export type CcreateRmdirErrorMessage = gthis.FCreateRmdirErrorMessage

export type CcreateUnlinkErrorMessage = gthis.FCreateUnlinkErrorMessage

export type CcreateUnlinkFireAndForget = ($d: {
    readonly 'onError': gthis.FHandleAnnotatedUnlinkError
    readonly 'unlink': gfs.FUnlink
}) => gthis.FUnlinkFireAndForget

export type CcreateWriteFileErrorMessage = gthis.FCreateWriteFileErrorMessage

export type CcreateWriteFileFireAndForget = ($d: {
    readonly 'createWriteStream': gfs.FCreateWriteStream
}) => gthis.FWriteFile

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
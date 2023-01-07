import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mfs from "res-pareto-filesystem"

export type CcreateMkdirErrorMessage = glo.FCreateMkdirErrorMessage

export type CcreateReadDirectoryOrAbort = ($: null, $d: {
    readonly "onError": pt.Procedure<mfs.TAnnotatedFSError<mfs.TReadDirError>>
    readonly "readDirectory": mfs.FReadDirectory
}) => glo.AReadDirectoryOrAbort

export type CcreateReadDirErrorMessage = glo.FCreateReadDirErrorMessage

export type CcreateReadFileErrorMessage = glo.FCreateReadFileErrorMessage

export type CcreateReadOptionalDirectory = ($: null, $d: {
    readonly "onError": pt.Procedure<mfs.TAnnotatedFSError<mfs.TReadDirError>>
    readonly "readDirectory": mfs.FReadDirectory
}) => glo.AReadOptionalDirectory

export type CcreateRmdirErrorMessage = glo.FCreateRmdirErrorMessage

export type CcreateUnlinkErrorMessage = glo.FCreateUnlinkErrorMessage

export type CcreateUnlinkFireAndForget = ($: null, $d: {
    readonly "onError": pt.Procedure<mfs.TAnnotatedFSError<mfs.TUnlinkError>>
    readonly "unlink": mfs.FUnlink
}) => pt.Procedure<mfs.TUnlink_Data>

export type CcreateWriteFileErrorMessage = glo.FCreateWriteFileErrorMessage

export type CcreateWriteFileFireAndForget = ($: null, $d: {
    readonly "createWriteStream": mfs.FCreateWriteStream
    readonly "onError": pt.Procedure<mfs.TAnnotatedFSError<mfs.TWriteFileError>>
}) => pt.Procedure<mfs.TWriteFileData>

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
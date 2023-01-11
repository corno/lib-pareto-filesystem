import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mfs from "res-pareto-filesystem"

export type CcreateMkdirErrorMessage = glo.FCreateMkdirErrorMessage

export type CcreateReadDirectoryOrAbort = ($d: {
    readonly "pr_onError": pt.Procedure<mfs.TAnnotatedFSError<mfs.TReadDirError>>
    readonly "sf_readDirectory": mfs.FReadDirectory
}) => glo.AReadDirectoryOrAbort

export type CcreateReadDirErrorMessage = glo.FCreateReadDirErrorMessage

export type CcreateReadFileErrorMessage = glo.FCreateReadFileErrorMessage

export type CcreateReadOptionalDirectory = ($d: {
    readonly "pr_onError": pt.Procedure<mfs.TAnnotatedFSError<mfs.TReadDirError>>
    readonly "sf_readDirectory": mfs.FReadDirectory
}) => glo.AReadOptionalDirectory

export type CcreateRmdirErrorMessage = glo.FCreateRmdirErrorMessage

export type CcreateUnlinkErrorMessage = glo.FCreateUnlinkErrorMessage

export type CcreateUnlinkFireAndForget = ($d: {
    readonly "pr_onError": pt.Procedure<mfs.TAnnotatedFSError<mfs.TUnlinkError>>
    readonly "sf_unlink": mfs.FUnlink
}) => pt.Procedure<mfs.TUnlink_Data>

export type CcreateWriteFileErrorMessage = glo.FCreateWriteFileErrorMessage

export type CcreateWriteFileFireAndForget = ($d: {
    readonly "sf_createWriteStream": mfs.FCreateWriteStream
    readonly "pr_onError": pt.Procedure<mfs.TAnnotatedFSError<mfs.TWriteFileError>>
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
import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"
import * as mfs from "res-pareto-filesystem"

export type TDirNodeData = {
    readonly 'path': string
    readonly 'type': 
        | ['directory', null]
        | ['file', null]
        | ['unknown', null]
}

export type TReadDirectoryResult = null | pt.Dictionary<TDirNodeData>

export type TReadOptionalDirectoryData = {
    readonly 'allow': {
        readonly 'isNotADirectory'?: boolean
        readonly 'noEntity'?: boolean
    }
    readonly 'fs': mfs.TReadDirectory_Data
}

export type TReadOptionalDirectoryResult = null | TReadDirectoryResult

export type FCreateMkdirErrorMessage = ($: mfs.TMkdirError,) => mcommon.TString

export type FCreateReadDirErrorMessage = ($: mfs.TReadDirError,) => mcommon.TString

export type FCreateReadFileErrorMessage = ($: mfs.TReadFileError,) => mcommon.TString

export type FCreateRmdirErrorMessage = ($: mfs.TRmdirError,) => mcommon.TString

export type FCreateUnlinkErrorMessage = ($: mfs.TUnlinkError,) => mcommon.TString

export type FCreateWriteFileErrorMessage = ($: mfs.TUnlinkError,) => mcommon.TString

export type FHandleAnnotatedReadDirError = ($: mfs.TAnnotatedReadDirError,) => void

export type FHandleAnnotatedUnlinkError = ($: mfs.TAnnotatedUnlinkError,) => void

export type FReadDirectoryOrAbort = ($: mfs.TReadDirectory_Data,) => pt.AsyncValue<TReadDirectoryResult>

export type FReadFileOrAbort = ($: mfs.TReadFile_Data,) => pt.AsyncValue<mcommon.TString>

export type FReadOptionalDirectory = ($: TReadOptionalDirectoryData,) => pt.AsyncValue<TReadOptionalDirectoryResult>

export type FUnlinkFireAndForget = ($: mfs.TUnlink_Data,) => void

export type FWriteFile = ($: mfs.TWriteFileData,) => void
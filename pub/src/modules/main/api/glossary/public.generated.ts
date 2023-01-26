import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mfs from "res-pareto-filesystem"

export type TDirNodeData = t.UDirNodeData

export type TReadDirectoryResult = t.UReadDirectoryResult

export type TReadOptionalDirectoryData = t.UReadOptionalDirectoryData

export type TReadOptionalDirectoryResult = t.UReadOptionalDirectoryResult

export type FCreateMkdirErrorMessage = ($: mfs.TMkdirError,) => mcommon.TString

export type FCreateReadDirErrorMessage = ($: mfs.TReadDirError,) => mcommon.TString

export type FCreateReadFileErrorMessage = ($: mfs.TReadFileError,) => mcommon.TString

export type FCreateRmdirErrorMessage = ($: mfs.TRmdirError,) => mcommon.TString

export type FCreateUnlinkErrorMessage = ($: mfs.TUnlinkError,) => mcommon.TString

export type FCreateWriteFileErrorMessage = ($: mfs.TUnlinkError,) => mcommon.TString

export type FHandleAnnotatedReadDirError = ($: mfs.TAnnotatedReadDirError,) => void

export type FHandleAnnotatedUnlinkError = ($: mfs.TAnnotatedUnlinkError,) => void

export type FReadDirectoryOrAbort = ($: mfs.TReadDirectory_$Data,) => pt.AsyncValue<TReadDirectoryResult>

export type FReadFileOrAbort = ($: mfs.TReadFile_$Data,) => pt.AsyncValue<mcommon.TString>

export type FReadOptionalDirectory = ($: TReadOptionalDirectoryData,) => pt.AsyncValue<TReadOptionalDirectoryResult>

export type FUnlinkFireAndForget = ($: mfs.TUnlink_$Data,) => void

export type FWriteFile = ($: mfs.TWriteFileData,) => void
import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mfs from "res-pareto-filesystem"

export type FCreateMkdirErrorMessage = ($: mfs.T.MkdirError,) => mcommon.T.String

export type FCreateReadDirErrorMessage = ($: mfs.T.ReadDirError,) => mcommon.T.String

export type FCreateReadFileErrorMessage = ($: mfs.T.ReadFileError,) => mcommon.T.String

export type FCreateRmdirErrorMessage = ($: mfs.T.RmdirError,) => mcommon.T.String

export type FCreateUnlinkErrorMessage = ($: mfs.T.UnlinkError,) => mcommon.T.String

export type FCreateWriteFileErrorMessage = ($: mfs.T.UnlinkError,) => mcommon.T.String

export type FHandleAnnotatedReadDirError = ($: mfs.T.AnnotatedReadDirError,) => void

export type FHandleAnnotatedUnlinkError = ($: mfs.T.AnnotatedUnlinkError,) => void

export type FReadDirectoryOrAbort = ($: mfs.T.ReadDirectory_$Data,) => pt.AsyncValue<T.ReadDirectoryResult>

export type FReadFileOrAbort = ($: mfs.T.ReadFile_$Data,) => pt.AsyncValue<mcommon.T.String>

export type FReadOptionalDirectory = ($: T.ReadOptionalDirectoryData,) => pt.AsyncValue<T.ReadOptionalDirectoryResult>

export type FUnlinkFireAndForget = ($: mfs.T.Unlink_$Data,) => void

export type FWriteFile = ($: mfs.T.WriteFileData,) => void
import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"
import * as gfs from "res-pareto-filesystem"

export type FCreateMkdirErrorMessage = ($: gfs.T.MkdirError,) => gcommon.T.String

export type FCreateReadDirErrorMessage = ($: gfs.T.ReadDirError,) => gcommon.T.String

export type FCreateReadFileErrorMessage = ($: gfs.T.ReadFileError,) => gcommon.T.String

export type FCreateRmdirErrorMessage = ($: gfs.T.RmdirError,) => gcommon.T.String

export type FCreateUnlinkErrorMessage = ($: gfs.T.UnlinkError,) => gcommon.T.String

export type FCreateWriteFileErrorMessage = ($: gfs.T.WriteFileError,) => gcommon.T.String

export type FHandleAnnotatedReadDirError = ($: gfs.T.AnnotatedReadDirError,) => void

export type FHandleAnnotatedUnlinkError = ($: gfs.T.AnnotatedUnlinkError,) => void

export type FReadDirectoryOrAbort = ($: gfs.T.ReadDirectory_$Data,) => pt.AsyncValue<T.ReadDirectoryResult>

export type FReadFileOrAbort = ($: gfs.T.ReadFile_$Data,) => pt.AsyncValue<gcommon.T.String>

export type FReadOptionalDirectory = ($: T.ReadOptionalDirectoryData,) => pt.AsyncValue<T.ReadOptionalDirectoryResult>

export type FUnlinkFireAndForget = ($: gfs.T.Unlink_$Data,) => void

export type FWriteFile = ($: gfs.T.WriteFileData,) => void
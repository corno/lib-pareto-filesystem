import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"

export namespace I {}

export namespace F {
    
    export type HandleAnnotatedReadDirError = ($: g_fs.T.AnnotatedReadDirError,) => void
    
    export type HandleAnnotatedUnlinkError = ($: g_fs.T.AnnotatedUnlinkError,) => void
    
    export type HandleAnnotatedWriteFileError = ($: g_fs.T.AnnotatedWriteFileError,) => void
    
    export type ReadDirectoryOrAbort = ($: g_fs.T.ReadDirectory_$Data,) => pt.AsyncValue<g_fs.T.ReadDirectory_$Success>
    
    export type ReadFileOrAbort = ($: g_fs.T.ReadFile_$Data,) => pt.AsyncValue<g_common.T.String>
    
    export type ReadOptionalDirectory = ($: T.ReadOptionalDirectoryData,) => pt.AsyncValue<T.ReadOptionalDirectoryResult>
    
    export type UnlinkFireAndForget = ($: g_fs.T.Unlink_$Data,) => void
    
    export type WriteFile = ($: T.WriteFileData,) => void
}
import * as pt from "pareto-core-types"
import * as mfs from "res-pareto-filesystem"

export type TDirNodeData = {
    readonly "path": string
    readonly "type": 
        | [ "directory", null ]
        | [ "file", null ]
        | [ "unknown", null ]
}

export type TReadDirectoryResult = null | pt.Dictionary<TDirNodeData>

export type TReadOptionalDirectoryData = {
    readonly "allow": {
        readonly "isNotADirectory"?: boolean
        readonly "noEntity"?: boolean
    }
    readonly "fs": mfs.TReadDirectory_Data
}

export type TReadOptionalDirectoryResult = null | TReadDirectoryResult

export type FCreateMkdirErrorMessage = ($: mfs.TMkdirError) => string

export type FCreateReadDirErrorMessage = ($: mfs.TReadDirError) => string

export type FCreateReadFileErrorMessage = ($: mfs.TReadFileError) => string

export type FCreateRmdirErrorMessage = ($: mfs.TRmdirError) => string

export type FCreateUnlinkErrorMessage = ($: mfs.TUnlinkError) => string

export type FCreateWriteFileErrorMessage = ($: mfs.TUnlinkError) => string

export type AReadDirectoryOrAbort = ($: mfs.TReadDirectory_Data) => pt.AsyncValue<TReadDirectoryResult>

export type AReadFileOrAbort = ($: mfs.TReadFile_Data) => pt.AsyncValue<string>

export type AReadOptionalDirectory = ($: TReadOptionalDirectoryData) => pt.AsyncValue<TReadOptionalDirectoryResult>
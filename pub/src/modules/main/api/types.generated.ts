import * as pt from "pareto-core-types"
import * as mcommon from "glo-pareto-common"
import * as mfs from "res-pareto-filesystem"

export type TDirNodeData = {
    readonly "path": string
    readonly "type": 
        | ["directory", null]
        | ["file", null]
        | ["unknown", null]
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

export type FCreateMkdirErrorMessage = ($: mfs.TMkdirError) => mcommon.TString

export type FCreateReadDirErrorMessage = ($: mfs.TReadDirError) => mcommon.TString

export type FCreateReadFileErrorMessage = ($: mfs.TReadFileError) => mcommon.TString

export type FCreateRmdirErrorMessage = ($: mfs.TRmdirError) => mcommon.TString

export type FCreateUnlinkErrorMessage = ($: mfs.TUnlinkError) => mcommon.TString

export type FCreateWriteFileErrorMessage = ($: mfs.TUnlinkError) => mcommon.TString

export type AReadDirectoryOrAbort = ($: mfs.TReadDirectory_Data) => pt.AsyncValue<TReadDirectoryResult>

export type AReadFileOrAbort = ($: mfs.TReadFile_Data) => pt.AsyncValue<mcommon.TString>

export type AReadOptionalDirectory = ($: TReadOptionalDirectoryData) => pt.AsyncValue<TReadOptionalDirectoryResult>
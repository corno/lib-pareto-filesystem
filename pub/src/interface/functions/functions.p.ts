import * as fs from "api-pareto-filesystem"
import * as async from "api-pareto-async"
import * as tostring from "api-pareto-tostring"
import * as pt from "pareto-core-types"
import { TDirNodeData } from "../types/DirNodeData.p"

// export type CreateCachingResource = (
//     $: {
//         contextPath: api.Path
//     },
//     $i: {
//         onReadError: api.OnFSError<api.TReadFileError>,
//         onMkdirError: api.OnFSError<api.TMkdirError>,
//         onWriteError: api.OnFSError<api.TWriteFileError>,
//     },
//     $d: {
//         source: Resource<api.Path, string>,
//         getFile: api.GetFile,
//         writeFile: api.WriteFile
//         startAsync: ($: pt.AsyncNonValue) => void
//     }
// ) => Resource<api.Path, string>

// export type CreateFileResource = (
//     $: {
//         contextPath: api.Path
//     },
//     $i: {
//         onError: api.OnFSError<api.TReadFileError>
//     },
//     $d: {
//         startAsync: ($: pt.AsyncNonValue) => void
//         getFile: api.GetFile
//     }
// ) => Resource<api.Path, string>

export type FReadOptionalFile = (
    $: {
        readonly "fs": fs.TReadFile_Data,
        readonly "allow": {
            readonly "noEntity"?: boolean
            readonly "isDirectory"?: boolean
        }
    },
) => pt.AsyncValue<null | string>

export type FCreateReadOptionalFile = (
    $i: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadFileError>) => void
    },
    $d: {
        getFile: fs.FGetFile
        aggregate: async.FCreateAggregater
        array2string: tostring.FGetArrayAsString
    },
) => FReadOptionalFile


export type FReadFileOrAbort = (
    $: fs.TReadFile_Data,
) => pt.AsyncValue<string>

export type FCreateReadFileOrAbort = (
    $i: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadFileError>) => void
    },
    $d: {
        getFile: fs.FGetFile
        aggregate: async.FCreateAggregater
    },
) => FReadFileOrAbort

export type FReadOptionalDirectory = (
    $: {
        readonly "fs": fs.TReadDirectory_Data
        readonly "allow": {
            readonly "noEntity"?: boolean
            readonly "isNotADirectory"?: boolean
        }
    },
    $i: {
        readonly "error": (
            $: {
                readonly "path": string,
            }
        ) => void
    }
) => pt.AsyncValue<null | pt.Dictionary<TDirNodeData>>

export type FCreateReadOptionalDirectory = (
    $i: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadDirError>) => void
    },
    $d: fs.FReadDirectory
) => FReadOptionalDirectory


export type FReadDirectoryOrAbort = (
    $: fs.TReadDirectory_Data,
) => pt.AsyncValue<pt.Dictionary<TDirNodeData>>

export type FCreateReadDirectoryOrAbort = (
    $i: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadDirError>) => void
    },
    $d: fs.FReadDirectory
) => FReadDirectoryOrAbort

export type FWriteFileFireAndForget = (
    $: fs.TWriteFileData,
) => void

export type FCreateWriteFileFireAndForget = (
    $i: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TWriteFileError>) => void
    },
    $d: fs.FCreateWriteStream,
    $a: pt.ProcessAsyncValue,
) => FWriteFileFireAndForget

export type FUnlinkFireAndForget = (
    $: fs.TUnlink_Data,
) => void

export type FCreateUnlinkFireAndForget = (
    $i: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TUnlinkError>) => void
    },
    $d: fs.FUnlink,
    $a: pt.ProcessAsyncValue
) => FUnlinkFireAndForget
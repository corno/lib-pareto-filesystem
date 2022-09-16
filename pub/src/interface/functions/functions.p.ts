import * as api from "api-pareto-filesystem"
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
        readonly "fs": api.TReadFile_Data,
        readonly "allow": {
            readonly "noEntity"?: boolean
            readonly "isDirectory"?: boolean
        }
    },
) => pt.AsyncValue<null | string>

export type FCreateReadOptionalFile = (
    $i: {
        readonly "onError": ($: api.TAnnotatedFSError<api.TReadFileError>) => void
    },
    $d: api.FReadFile
) => FReadOptionalFile


export type FReadFileOrAbort = (
    $: api.TReadFile_Data,
) => pt.AsyncValue<string>

export type FCreateReadFileOrAbort = (
    $i: {
        readonly "onError": ($: api.TAnnotatedFSError<api.TReadFileError>) => void
    },
    $d: api.FReadFile
) => FReadFileOrAbort

export type FReadOptionalDirectory = (
    $: {
        readonly "fs": api.TReadDirectory_Data
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
        readonly "onError": ($: api.TAnnotatedFSError<api.TReadDirError>) => void
    },
    $d: api.FReadDirectory
) => FReadOptionalDirectory


export type FReadDirectoryOrAbort = (
    $: api.TReadDirectory_Data,
) => pt.AsyncValue<pt.Dictionary<TDirNodeData>>

export type FCreateReadDirectoryOrAbort = (
    $i: {
        readonly "onError": ($: api.TAnnotatedFSError<api.TReadDirError>) => void
    },
    $d: api.FReadDirectory
) => FReadDirectoryOrAbort

export type FWriteFileFireAndForget = (
    $: api.TWriteFileData,
) => void

export type FCreateWriteFileFireAndForget = (
    $i: {
        readonly "onError": ($: api.TAnnotatedFSError<api.TWriteFileError>) => void
    },
    $d: api.FWriteFile,
    $a: pt.ProcessAsyncValue,
) => FWriteFileFireAndForget

export type FUnlinkFireAndForget = (
    $: api.TUnlink_Data,
) => void

export type FCreateUnlinkFireAndForget = (
    $i: {
        readonly "onError": ($: api.TAnnotatedFSError<api.TUnlinkError>) => void
    },
    $d: api.FUnlink,
    $a: pt.ProcessAsyncValue
) => FUnlinkFireAndForget
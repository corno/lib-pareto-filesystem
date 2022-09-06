import * as api from "api-pareto-filesystem"
import * as pt from "pareto-core-types"
import { TDirNodeData } from "../types/DirNodeData"

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
        onError: ($: api.TAnnotatedFSError<api.TReadFileError>) => void
    },
    $d: {
        readFile: api.AReadFile
    }
) => FReadOptionalFile


export type FReadFileOrAbort = (
    $: api.TReadFile_Data,
) => pt.AsyncValue<string>

export type FCreateReadFileOrAbort = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TReadFileError>) => void
    },
    $d: {
        readFile: api.AReadFile
    }
) => FReadFileOrAbort

export type FReadOptionalDirectory = (
    $: {
        fs: api.TReadDirectory_Data
        allow: {
            noEntity?: boolean
            isNotADirectory?: boolean
        }
    },
    $i: {
        error: (
            $: {
                path: string,
            }
        ) => void
    }
) => pt.AsyncValue<null | pt.Dictionary<TDirNodeData>>

export type FCreateReadOptionalDirectory = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TReadDirError>) => void
    },
    $d: {
        readDirectory: api.AReadDirectory
    }
) => FReadOptionalDirectory


export type FReadDirectoryOrAbort = (
    $: api.TReadDirectory_Data,
) => pt.AsyncValue<pt.Dictionary<TDirNodeData>>

export type XCreateReadDirectoryOrAbort = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TReadDirError>) => void
    },
    $d: {
        readDirectory: api.AReadDirectory
    }
) => FReadDirectoryOrAbort

export type PWriteFileFireAndForget = (
    $: api.TWriteFile_Data,
    $s: pa.Async,
) => void

export type FCreateWriteFileFireAndForget = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TWriteFileError>) => void
    },
    $d: {
        writeFile: api.AWriteFile
    }
) => PWriteFileFireAndForget

export type FUnlinkFireAndForget = (
    $: api.TUnlink_Data,
) => pt.AsyncNonValue

export type FCreateUnlinkFireAndForget = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TUnlinkError>) => void
    },
    $d: {
        unlink: api.Unlink
    }
) => FUnlinkFireAndForget
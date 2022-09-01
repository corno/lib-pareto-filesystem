import * as api from "api-pareto-filesystem"
import * as pt from "pareto-core-types"

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


export type CreateReadFileErrorMessage = ($: api.TReadFileError) => string
export type CreateReadDirErrorMessage = ($: api.TReadDirError) => string
export type CreateUnlinkErrorMessage = ($: api.TUnlinkError) => string
export type CreateWriteFileErrorMessage = ($: api.TWriteFileError) => string
export type CreateMkdirErrorMessage = ($: api.TMkdirError) => string
export type CreateRmdirErrorMessage = ($: api.TRmdirError) => string

export type ReadOptionalFile = (
    $: {
        fs: api.ReadFile_Data,
        allow: {
            noEntity?: boolean
            isDirectory?: boolean
        }
    },
) => pt.AsyncValue<null | string>

export type CreateReadOptionalFile = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TReadFileError>) => void
    },
    $d: {
        readFile: api.ReadFile
    }
) => ReadOptionalFile


export type ReadFileOrAbort = (
    $: api.ReadFile_Data,
) => pt.AsyncValue<string>

export type CreateReadFileOrAbort = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TReadFileError>) => void
    },
    $d: {
        readFile: api.ReadFile
    }
) => ReadFileOrAbort



export type DirNodeData = {
    readonly path: string
    readonly type:
    | ["directory", {}]
    | ["file", {}]
    | ["unknown", {}]
}

export type ReadOptionalDirectory = (
    $: {
        fs: api.ReadDirectory_Data
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
) => pt.AsyncValue<null | pt.Dictionary<DirNodeData>>

export type CreateReadOptionalDirectory = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TReadDirError>) => void
    },
    $d: {
        readDirectory: api.ReadDirectory
    }
) => ReadOptionalDirectory


export type ReadDirectoryOrAbort = (
    $: api.ReadDirectory_Data,
) => pt.AsyncValue<pt.Dictionary<DirNodeData>>

export type CreateReadDirectoryOrAbort = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TReadDirError>) => void
    },
    $d: {
        readDirectory: api.ReadDirectory
    }
) => ReadDirectoryOrAbort

export type WriteFileFireAndForget = (
    $: api.WriteFile_Data,
) => pt.AsyncNonValue

export type CreateWriteFileFireAndForget = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TWriteFileError>) => void
    },
    $d: {
        writeFile: api.WriteFile
    }
) => WriteFileFireAndForget

export type UnlinkFireAndForget = (
    $: api.Unlink_Data,
) => pt.AsyncNonValue

export type CreateUnlinkFireAndForget = (
    $i: {
        onError: ($: api.TAnnotatedFSError<api.TUnlinkError>) => void
    },
    $d: {
        unlink: api.Unlink
    }
) => UnlinkFireAndForget
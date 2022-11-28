
import * as fs from "res-pareto-filesystem"
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

export type FReadFileOrAbort = (
    $: fs.TReadFile_Data,
) => pt.AsyncValue<string>

export type FReadOptionalDirectory = (
    $: {
        readonly "fs": fs.TReadDirectory_Data
        readonly "allow": {
            readonly "noEntity"?: boolean
            readonly "isNotADirectory"?: boolean
        }
    }
) => pt.AsyncValue<null | pt.Dictionary<TDirNodeData>>

export type FReadDirectoryOrAbort = (
    $: fs.TReadDirectory_Data,
) => pt.AsyncValue<pt.Dictionary<TDirNodeData>>

export type PUnlinkFireAndForget = (
    $: fs.TUnlink_Data,
) => void

export type PWriteFileFireAndForget = (
    $: fs.TWriteFileData,
) => void
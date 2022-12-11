
import * as pt from "pareto-core-types"
import { TDirNodeData } from "../types/types.p"

import * as fs from "res-pareto-filesystem"

// export type THandledReadFileSystemError = {
//     readonly "path": string
//     readonly "type":
//     | ["file read", fs.TReadFileError]
//     | ["directory read", fs.TReadDirError]
// }


// export type THandledWriteFileSystemError = {
//     readonly "path": string
//     readonly "type":
//     | ["unlink", fs.TUnlinkError]
//     | ["file write", fs.TWriteFileError]
// }

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

export type FReadOptionalFile = pt.AsyncFunction<
    {
        readonly "fs": fs.TReadFile_Data,
        readonly "allow": {
            readonly "noEntity"?: boolean
            readonly "isDirectory"?: boolean
        }
    },
    null | string
>

export type FReadFileOrAbort = pt.AsyncFunction<fs.TReadFile_Data, string>

export type FReadOptionalDirectory = pt.AsyncFunction<
    {
        readonly "fs": fs.TReadDirectory_Data
        readonly "allow": {
            readonly "noEntity"?: boolean
            readonly "isNotADirectory"?: boolean
        }
    },
    null | pt.Dictionary<TDirNodeData>
>

export type FReadDirectoryOrAbort = pt.AsyncFunction<
    fs.TReadDirectory_Data,
    pt.Dictionary<TDirNodeData>
>

export type PUnlinkFireAndForget = pt.Procedure<fs.TUnlink_Data>

export type PWriteFileFireAndForget = pt.Procedure<fs.TWriteFileData>

export type FCreateReadFileErrorMessage = pt.Function<fs.TReadFileError, string>
export type FCreateReadDirErrorMessage = pt.Function<fs.TReadDirError, string>
export type FCreateUnlinkErrorMessage = pt.Function<fs.TUnlinkError, string>
export type FCreateWriteFileErrorMessage = pt.Function<fs.TWriteFileError, string>
export type FCreateMkdirErrorMessage = pt.Function<fs.TMkdirError, string>
export type FCreateRmdirErrorMessage = pt.Function<fs.TRmdirError, string>


export type IStreamConsumer = {
    readonly onData: pt.Procedure<string>
    readonly onEnd: pt.Procedure<null>
}

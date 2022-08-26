// import * as pt from "pareto-core-types"
// import { TReadDirError } from "./types/ReadDirError"
// import { TReadFileError } from "./types/ReadFileError"
// import { TWriteFileError } from "./types/WriteFileError"
// import { TUnlinkError } from "./types/UnlinkError"
// import { OnFSError } from "./OnFSError"
// import { TMkdirError } from "./types/MkdirError"
// import { TRmdirError } from "./types/RmdirError"

// export type Path = pt.Nested<string>

// export type OptionalFile_Data = {
//     path: Path
//     allow: {
//         noEntity?: boolean
//         isDirectory?: boolean
//     }
// }

// export type OptionalFile_Algorithms = {
//     error: (
//         $: {
//             error: TReadFileError,
//             path: string,
//         },
//         $i: null,
//     ) => void,
// }

// export type OptionalFile = (
//     $: OptionalFile_Data,
//     $i: OptionalFile_Algorithms
// ) => pt.AsyncValue<null | string>


// export type File_Data = {
//     path: Path
// }

// export type File_Algorithms = {
//     error: (
//         $: {
//             error: TReadFileError,
//             path: string,
//         },
//         $i: null,
//     ) => void,
// }

// export type File = (
//     $: File_Data,
//     $i: File_Algorithms
// ) => pt.AsyncValue<string>


// export type DirNodeData = {
//     readonly path: string
//     readonly type:
//     | ["directory", {}]
//     | ["file", {}]
//     | ["unknown", {}]
// }

// export type OptionalDirectory_Data = {
//     path: Path
//     allow: {
//         noEntity?: boolean
//         isNotADirectory?: boolean
//     }
// }

// export type OptionalDirectory_Algorithms = {
//     error: (
//         $: {
//             error: TReadDirError,
//             path: string,
//         }
//     ) => void
// }

// export type OptionalDirectory = (
//     $: OptionalDirectory_Data,
//     $i: OptionalDirectory_Algorithms
// ) => pt.AsyncValue<null | pt.Dictionary<DirNodeData>>


// export type Directory_Data = {
//     path: Path
// }

// export type Directory_Algorithms = {
//     error: (
//         $: {
//             error: TReadDirError,
//             path: string,
//         }
//     ) => void
// }

// export type Directory = (
//     $: Directory_Data,
//     $i: Directory_Algorithms
// ) => pt.AsyncValue<pt.Dictionary<DirNodeData>>

// export type WriteFile_Data = {
//     readonly path: Path,
//     readonly data: string,
// }

// export type WriteFile_Algorithms = {
//     error: (
//         $: {
//             error: TWriteFileError,
//             path: string,
//         },
//     ) => void,
// }

// export type WriteFile = (
//     $: WriteFile_Data,
//     $i: WriteFile_Algorithms
// ) => pt.AsyncNonValue

// export type Unlink_Data = {
//     path: Path
// }

// export type Unlink_Algorithms = {
//     error: (
//         $: {
//             error: TUnlinkError
//             path: string
//         }
//     ) => void
// }

// export type Unlink = (
//     $: Unlink_Data,
//     $i: Unlink_Algorithms

// ) => pt.AsyncNonValue



// export type Mkdir_Data = {
//     path: Path
// }

// export type Mkdir_Algorithms = {
//     error: (
//         $: {
//             error: TMkdirError
//             path: string
//         }
//     ) => void
// }

// export type Mkdir = (
//     $: Mkdir_Data,
//     $i: Mkdir_Algorithms

// ) => pt.AsyncNonValue


// export type CreateCachingResource = (
//     $: {
//         contextPath: Path
//     },
//     $i: {
//         onReadError: OnFSError<TReadFileError>,
//         onMkdirError: OnFSError<TMkdirError>,
//         onWriteError: OnFSError<TWriteFileError>,
//         source: pt.Resource<Path, string>,
//     },
// ) => pt.Resource<Path, string>

// export type CreateFileResource = (
//     $: {
//         contextPath: Path
//     },
//     $i: {
//         onError: OnFSError<TReadFileError>,
//     },
// ) => pt.Resource<Path, string>


// export type CreateReadFileErrorMessage = ($: TReadFileError) => string
// export type CreateReadDirErrorMessage = ($: TReadDirError) => string
// export type CreateUnlinkErrorMessage = ($: TUnlinkError) => string
// export type CreateWriteFileErrorMessage = ($: TWriteFileError) => string
// export type CreateMkdirErrorMessage = ($: TMkdirError) => string
// export type CreateRmdirErrorMessage = ($: TRmdirError) => string
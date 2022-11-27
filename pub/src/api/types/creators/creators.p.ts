import * as pt from "pareto-core-types"

import * as fs from "api-pareto-filesystem"
import {
    FReadDirectoryOrAbort,
    FReadFileOrAbort,
    FReadOptionalDirectory,
    FReadOptionalFile,
    PUnlinkFireAndForget,
    PWriteFileFireAndForget,
} from "../functions/functions.p"

export type CCreateReadOptionalFile = (
    $d: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadFileError>) => void
    }
) => FReadOptionalFile


export type CCreateReadFileOrAbort = (
    $d: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadFileError>) => void
    },
    // $d: {
    //     getFile: fs.FGetFile
    //     aggregate: async.FCreateAggregater
    // },
) => FReadFileOrAbort

export type CCreateReadOptionalDirectory = (
    $d: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadDirError>) => void
        readonly "readDirectory": fs.FReadDirectory

    },
    // $d: fs.FReadDirectory
) => FReadOptionalDirectory


export type CCreateReadDirectoryOrAbort = (
    $d: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadDirError>) => void
        readonly "readDirectory": fs.FReadDirectory
    },
) => FReadDirectoryOrAbort


export type CCreateWriteFileFireAndForget = (
    $d: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TWriteFileError>) => void
        readonly "createWriteStream": fs.FCreateWriteStream,
    },
    $a: pt.ProcessAsyncValue,
) => PWriteFileFireAndForget


export type CCreateUnlinkFireAndForget = (
    $d: {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TUnlinkError>) => void
        readonly "unlink": fs.FUnlink,

    },
    $a: pt.ProcessAsyncValue,
) => PUnlinkFireAndForget
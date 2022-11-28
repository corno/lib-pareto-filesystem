import * as pt from "pareto-core-types"


export type AsyncProcessingCreator<Dependencies, Algorithm> = (
    $d: Dependencies,
    $a: <T>($: pt.AsyncValue<T>, $i: ($: T) => void) => void
) => Algorithm

import * as fs from "res-pareto-filesystem"
import {
    FReadDirectoryOrAbort,
    FReadFileOrAbort,
    FReadOptionalDirectory,
    FReadOptionalFile,
    PUnlinkFireAndForget,
    PWriteFileFireAndForget,
} from "../functions/functions.p"

export type CCreateReadOptionalFile = pt.Creator<
    {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadFileError>) => void
    },
    FReadOptionalFile
>


export type CCreateReadFileOrAbort = pt.Creator<
    {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadFileError>) => void
    },
    FReadFileOrAbort
>

export type CCreateReadOptionalDirectory = pt.Creator<
    {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadDirError>) => void
        readonly "readDirectory": fs.FReadDirectory

    },
    FReadOptionalDirectory
>


export type CCreateReadDirectoryOrAbort = pt.Creator<
    {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TReadDirError>) => void
        readonly "readDirectory": fs.FReadDirectory
    },
    FReadDirectoryOrAbort
>


export type CCreateWriteFileFireAndForget = AsyncProcessingCreator<
    {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TWriteFileError>) => void
        readonly "createWriteStream": fs.FCreateWriteStream,
    },
    PWriteFileFireAndForget
>


export type CCreateUnlinkFireAndForget = AsyncProcessingCreator<
    {
        readonly "onError": ($: fs.TAnnotatedFSError<fs.TUnlinkError>) => void
        readonly "unlink": fs.FUnlink,

    },
    PUnlinkFireAndForget
>
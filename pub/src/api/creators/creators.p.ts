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
} from "../glossary/algorithms/algorithms.p"

export type CCreateReadOptionalFile = pt.Creator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadFileError>>
    },
    FReadOptionalFile
>


export type CCreateReadFileOrAbort = pt.Creator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadFileError>>
    },
    FReadFileOrAbort
>

export type CCreateReadOptionalDirectory = pt.Creator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadDirError>>

    },
    FReadOptionalDirectory
>


export type CCreateReadDirectoryOrAbort = pt.Creator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadDirError>>
    },
    FReadDirectoryOrAbort
>


export type CCreateWriteFileFireAndForget = AsyncProcessingCreator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TWriteFileError>>
    },
    PWriteFileFireAndForget
>


export type CCreateUnlinkFireAndForget = AsyncProcessingCreator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TUnlinkError>>

    },
    PUnlinkFireAndForget
>
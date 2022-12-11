import * as pt from "pareto-core-types"


export type AsyncProcessingCreator<Dependencies, Algorithm> = (
    $d: Dependencies,
    $a: <T>($: pt.AsyncValue<T>, $i: ($: T) => void) => void
) => Algorithm

import * as fs from "res-pareto-filesystem"

import * as api from "../../api"


export type CCreateReadOptionalFile = pt.Creator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadFileError>>
    },
    api.FReadOptionalFile
>


export type CCreateReadFileOrAbort = pt.Creator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadFileError>>
    },
    api.FReadFileOrAbort
>

export type CCreateReadOptionalDirectory = pt.Creator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadDirError>>
        readonly "readDirectory": fs.FReadDirectory

    },
    api.FReadOptionalDirectory
>


export type CCreateReadDirectoryOrAbort = pt.Creator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadDirError>>
        readonly "readDirectory": fs.FReadDirectory
    },
    api.FReadDirectoryOrAbort
>


export type CCreateWriteFileFireAndForget = AsyncProcessingCreator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TWriteFileError>>
        readonly "createWriteStream": fs.FCreateWriteStream,
    },
    api.PWriteFileFireAndForget
>


export type CCreateUnlinkFireAndForget = AsyncProcessingCreator<
    {
        readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TUnlinkError>>
        readonly "unlink": fs.FUnlink,

    },
    api.PUnlinkFireAndForget
>
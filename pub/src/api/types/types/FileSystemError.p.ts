import * as api from "res-pareto-filesystem"


export type THandledReadFileSystemError = {
    readonly "path": string
    readonly "type":
    | ["file read", api.TReadFileError]
    | ["directory read", api.TReadDirError]
}


export type THandledWriteFileSystemError = {
    readonly "path": string
    readonly "type":
    | ["unlink", api.TUnlinkError]
    | ["file write", api.TWriteFileError]
}

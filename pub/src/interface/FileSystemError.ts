import * as api from "api-pareto-filesystem"


export type HandledReadFileSystemError = {
    path: string
    type:
    | ["file read", api.TReadFileError]
    | ["directory read", api.TReadDirError]
}


export type HandledWriteFileSystemError = {
    path: string
    type:
    | ["unlink", api.TUnlinkError]
    | ["file write", api.TWriteFileError]
}

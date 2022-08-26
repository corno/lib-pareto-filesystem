import * as api from "api-pareto-filesystem"
import * as pt from "pareto-core-types"
import { HandledReadFileSystemError, HandledWriteFileSystemError } from "./FileSystemError"
import * as hfs from "api-pareto-handledfilesystem"
import { Resource } from "./Resource";

export type IHandledReadFilesystem = {
    file: hfs.File
    optionalFile: hfs.OptionalFile
    directory: hfs.Directory
    optionalDirectory: hfs.OptionalDirectory
};
export type IHandledWriteFilesystem = {
    writeFile: hfs.WriteFile
    unlink: hfs.Unlink
};

export type CreateHandledReadFilesystem = (
    onError: ($: HandledReadFileSystemError) => void
) => IHandledReadFilesystem


export type CreateHandledNonValueFilesystem = (
    onError: ($: HandledWriteFileSystemError) => void
) => IHandledWriteFilesystem

export type CreateCachingResource_Data = {
    contextPath: api.Path
}

export type CreateCachingResource_Algorithms = {
    onReadError: api.OnFSError<api.TReadFileError>,
    onMkdirError: api.OnFSError<api.TMkdirError>,
    onWriteError: api.OnFSError<api.TWriteFileError>,
    source: Resource<api.Path, string>,
    getFile: api.GetFile,
    writeFile: api.WriteFile
    startAsync: ($: pt.AsyncNonValue) => void
}

export type CreateCachingResource = (
    $: CreateCachingResource_Data,
    $i: CreateCachingResource_Algorithms,
) => Resource<api.Path, string>


export type CreateFileResource_Data = {
    contextPath: api.Path
}

export type CreateFileResource_Algorithms = {
    onError: api.OnFSError<api.TReadFileError>
    startAsync: ($: pt.AsyncNonValue) => void
    getFile: api.GetFile
}

export type CreateFileResource = (
    $: CreateFileResource_Data,
    $i: CreateFileResource_Algorithms,
) => Resource<api.Path, string>


export type CreateReadFileErrorMessage = ($: api.TReadFileError) => string
export type CreateReadDirErrorMessage = ($: api.TReadDirError) => string
export type CreateUnlinkErrorMessage = ($: api.TUnlinkError) => string
export type CreateWriteFileErrorMessage = ($: api.TWriteFileError) => string
export type CreateMkdirErrorMessage = ($: api.TMkdirError) => string
export type CreateRmdirErrorMessage = ($: api.TRmdirError) => string

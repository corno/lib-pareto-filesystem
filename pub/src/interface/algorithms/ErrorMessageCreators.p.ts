import { TMkdirError, TReadDirError, TReadFileError, TRmdirError, TUnlinkError, TWriteFileError } from "api-pareto-filesystem"

export type FCreateReadFileErrorMessage = ($: TReadFileError) => string
export type FCreateReadDirErrorMessage = ($: TReadDirError) => string
export type FCreateUnlinkErrorMessage = ($: TUnlinkError) => string
export type FCreateWriteFileErrorMessage = ($: TWriteFileError) => string
export type FCreateMkdirErrorMessage = ($: TMkdirError) => string
export type FCreateRmdirErrorMessage = ($: TRmdirError) => string
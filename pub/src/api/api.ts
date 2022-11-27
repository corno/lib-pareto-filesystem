import { CCreateReadDirectoryOrAbort, CCreateReadFileOrAbort, CCreateReadOptionalDirectory, CCreateReadOptionalFile, CCreateUnlinkFireAndForget, CCreateWriteFileFireAndForget, FCreateMkdirErrorMessage, FCreateReadDirErrorMessage, FCreateReadFileErrorMessage, FCreateRmdirErrorMessage, FCreateUnlinkErrorMessage, FCreateWriteFileErrorMessage } from "./types";

export type API = {
    createMkdirErrorMessage: FCreateMkdirErrorMessage,
    createReadDirErrorMessage: FCreateReadDirErrorMessage,
    createReadFileErrorMessage: FCreateReadFileErrorMessage,
    createRmdirErrorMessage: FCreateRmdirErrorMessage,
    createUnlinkErrorMessage: FCreateUnlinkErrorMessage,
    createWriteFileErrorMessage: FCreateWriteFileErrorMessage,

    //createReadOptionalFile: CCreateReadOptionalFile,
    //createReadFileOrAbort: CCreateReadFileOrAbort,
    createReadOptionalDirectory: CCreateReadOptionalDirectory,
    createReadDirectoryOrAbort: CCreateReadDirectoryOrAbort,
    createWriteFileFireAndForget: CCreateWriteFileFireAndForget,
    createUnlinkFireAndForget: CCreateUnlinkFireAndForget,
}
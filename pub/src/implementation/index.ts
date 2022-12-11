import * as fs from "res-pareto-filesystem"

import { API } from "../api/api"
import { f_createMkdirErrorMessage } from "./public/createMkdirErrorMessage.p"
import { f_createReadDirectoryOrAbort } from "./public/createReadDirectoryOrAbort.p"
import { f_createReadDirErrorMessage } from "./public/createReadDirErrorMessage.p"
import { f_createReadFileErrorMessage } from "./public/createReadFileErrorMessage.p"
import { f_createReadOptionalDirectory } from "./public/createReadOptionalDirectory.p"
import { f_createRmdirErrorMessage } from "./public/createRmdirErrorMessage.p"
import { f_createUnlinkErrorMessage } from "./public/createUnlinkErrorMessage.p"
import { f_createUnlinkFireAndForget } from "./public/createUnlinkFireAndForget.p"
import { f_createWriteFileErrorMessage } from "./public/createWriteFileErrorMessage.p"
import { f_createWriteFileFireAndForget } from "./public/createWriteFileFireAndForget.p"

// export * from "./public/createMkdirErrorMessage.p"
// export * from "./public/createReadDirErrorMessage.p"
// export * from "./public/createReadFileErrorMessage.p"
// export * from "./public/createRmdirErrorMessage.p"
// export * from "./public/createUnlinkErrorMessage.p"
// export * from "./public/createWriteFileErrorMessage.p"

// export * from "./public/createReadOptionalFile.p"
// export * from "./public/createReadFileOrAbort.p"
// export * from "./public/createReadOptionalDirectory.p"
// export * from "./public/createReadDirectoryOrAbort.p"
// export * from "./public/createWriteFileFireAndForget.p"
// export * from "./public/createUnlinkFireAndForget.p"

export const $b: API = {
    createMkdirErrorMessage: f_createMkdirErrorMessage,
    createReadDirErrorMessage: f_createReadDirErrorMessage,
    createReadFileErrorMessage: f_createReadFileErrorMessage,
    createRmdirErrorMessage: f_createRmdirErrorMessage,
    createUnlinkErrorMessage: f_createUnlinkErrorMessage,
    createWriteFileErrorMessage: f_createWriteFileErrorMessage,

    //createReadOptionalFile: readop,
    //createReadFileOrAbort: createR,
    createReadOptionalDirectory: ($d) => f_createReadOptionalDirectory({
        onError: $d.onError,
        readDirectory: fs.f_readDirectory,
    }),
    createReadDirectoryOrAbort: ($d) => f_createReadDirectoryOrAbort({
        onError: $d.onError,
        readDirectory: fs.f_readDirectory,
    }),
    createWriteFileFireAndForget: ($d) => f_createWriteFileFireAndForget({
        onError: $d.onError,
        createWriteStream: fs.f_createWriteStream,
    }, ($, $i) => $._execute($i)),
    createUnlinkFireAndForget: ($d) => f_createUnlinkFireAndForget({
        onError: $d.onError,
        unlink: fs.f_unlink,
    }, ($, $i) => $._execute($i)),
}

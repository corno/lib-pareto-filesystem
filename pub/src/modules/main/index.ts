import { API } from "./api"
import { icreateMkdirErrorMessage } from "./implementations/createMkdirErrorMessage.p"
import { icreateReadDirectoryOrAbort } from "./implementations/createReadDirectoryOrAbort.p"
import { icreateReadDirErrorMessage } from "./implementations/createReadDirErrorMessage.p"
import { icreateReadFileErrorMessage } from "./implementations/createReadFileErrorMessage.p"
import { icreateReadOptionalDirectory } from "./implementations/createReadOptionalDirectory.p"
import { icreateRmdirErrorMessage } from "./implementations/createRmdirErrorMessage.p"
import { icreateUnlinkErrorMessage } from "./implementations/createUnlinkErrorMessage.p"
import { icreateUnlinkFireAndForget } from "./implementations/createUnlinkFireAndForget.p"
import { icreateWriteFileErrorMessage } from "./implementations/createWriteFileErrorMessage.p"
import { icreateWriteFileFireAndForget } from "./implementations/createWriteFileFireAndForget.p"

export * from "./api"

export const $a: API = {
    "createMkdirErrorMessage": icreateMkdirErrorMessage,
    "createReadDirectoryOrAbort": icreateReadDirectoryOrAbort,
    "createReadDirErrorMessage": icreateReadDirErrorMessage,
    "createReadFileErrorMessage": icreateReadFileErrorMessage,
    "createReadOptionalDirectory": icreateReadOptionalDirectory,
    "createRmdirErrorMessage": icreateRmdirErrorMessage,
    "createUnlinkErrorMessage": icreateUnlinkErrorMessage,
    "createUnlinkFireAndForget": icreateUnlinkFireAndForget,
    "createWriteFileErrorMessage": icreateWriteFileErrorMessage,
    "createWriteFileFireAndForget": icreateWriteFileFireAndForget,
}
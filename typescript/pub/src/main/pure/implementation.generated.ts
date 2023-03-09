import { API } from "./api.generated"
import { $$ as icreateMkdirErrorMessage } from "./implementations/createMkdirErrorMessage.p"
import { $$ as icreateReadDirectoryOrAbort } from "./implementations/createReadDirectoryOrAbort.p"
import { $$ as icreateReadDirErrorMessage } from "./implementations/createReadDirErrorMessage.p"
import { $$ as icreateReadFileErrorMessage } from "./implementations/createReadFileErrorMessage.p"
import { $$ as icreateReadOptionalDirectory } from "./implementations/createReadOptionalDirectory.p"
import { $$ as icreateRmdirErrorMessage } from "./implementations/createRmdirErrorMessage.p"
import { $$ as icreateUnlinkErrorMessage } from "./implementations/createUnlinkErrorMessage.p"
import { $$ as icreateUnlinkFireAndForget } from "./implementations/createUnlinkFireAndForget.p"
import { $$ as icreateWriteFileErrorMessage } from "./implementations/createWriteFileErrorMessage.p"
import { $$ as icreateWriteFileFireAndForget } from "./implementations/createWriteFileFireAndForget.p"

export const $api: API = {
    'createMkdirErrorMessage': icreateMkdirErrorMessage,
    'createReadDirectoryOrAbort': icreateReadDirectoryOrAbort,
    'createReadDirErrorMessage': icreateReadDirErrorMessage,
    'createReadFileErrorMessage': icreateReadFileErrorMessage,
    'createReadOptionalDirectory': icreateReadOptionalDirectory,
    'createRmdirErrorMessage': icreateRmdirErrorMessage,
    'createUnlinkErrorMessage': icreateUnlinkErrorMessage,
    'createUnlinkFireAndForget': icreateUnlinkFireAndForget,
    'createWriteFileErrorMessage': icreateWriteFileErrorMessage,
    'createWriteFileFireAndForget': icreateWriteFileFireAndForget,
}
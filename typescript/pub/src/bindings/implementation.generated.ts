import { API } from "./api.generated"
import { $$ as icreateReadDirectoryOrAbort } from "./implementations/createReadDirectoryOrAbort.b"
import { $$ as icreateReadOptionalDirectory } from "./implementations/createReadOptionalDirectory.b"
import { $$ as icreateUnlinkFireAndForget } from "./implementations/createUnlinkFireAndForget.b"
import { $$ as icreateWriteFileFireAndForget } from "./implementations/createWriteFileFireAndForget.b"

export const $api: API = {
    'createReadDirectoryOrAbort': icreateReadDirectoryOrAbort,
    'createReadOptionalDirectory': icreateReadOptionalDirectory,
    'createUnlinkFireAndForget': icreateUnlinkFireAndForget,
    'createWriteFileFireAndForget': icreateWriteFileFireAndForget,
}
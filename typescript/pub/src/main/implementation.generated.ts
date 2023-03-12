import { API } from "./api.generated"
import { $$ as icreateReadDirectoryOrAbort } from "./implementations/createReadDirectoryOrAbort.p"
import { $$ as icreateReadOptionalDirectory } from "./implementations/createReadOptionalDirectory.p"
import { $$ as icreateUnlinkFireAndForget } from "./implementations/createUnlinkFireAndForget.p"
import { $$ as icreateWriteFileFireAndForget } from "./implementations/createWriteFileFireAndForget.p"

export const $api: API = {
    'createReadDirectoryOrAbort': icreateReadDirectoryOrAbort,
    'createReadOptionalDirectory': icreateReadOptionalDirectory,
    'createUnlinkFireAndForget': icreateUnlinkFireAndForget,
    'createWriteFileFireAndForget': icreateWriteFileFireAndForget,
}
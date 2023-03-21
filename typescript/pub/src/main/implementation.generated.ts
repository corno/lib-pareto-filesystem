import { API } from "./api.generated"
import { $$ as icreateReadDirectoryOrAbort } from "./implementations/createReadDirectoryOrAbort.a.f"
import { $$ as icreateReadOptionalDirectory } from "./implementations/createReadOptionalDirectory.a.f"
import { $$ as icreateUnlinkFireAndForget } from "./implementations/createUnlinkFireAndForget.a.c"
import { $$ as icreateWriteFileFireAndForget } from "./implementations/createWriteFileFireAndForget.a.c"

export const $api: API = {
    'createReadDirectoryOrAbort': icreateReadDirectoryOrAbort,
    'createReadOptionalDirectory': icreateReadOptionalDirectory,
    'createUnlinkFireAndForget': icreateUnlinkFireAndForget,
    'createWriteFileFireAndForget': icreateWriteFileFireAndForget,
}
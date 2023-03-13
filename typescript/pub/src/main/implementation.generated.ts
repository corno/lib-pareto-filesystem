import { API } from "./api.generated"
import { $$ as icreateReadDirectoryOrAbort } from "./implementations/createReadDirectoryOrAbort.p"
import { $$ as icreateReadOptionalDirectory } from "./implementations/createReadOptionalDirectory.p"

export const $api: API = {
    'createReadDirectoryOrAbort': icreateReadDirectoryOrAbort,
    'createReadOptionalDirectory': icreateReadOptionalDirectory,
}
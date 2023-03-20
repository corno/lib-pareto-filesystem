import { API } from "./api.generated"
import { $$ as icreateReadDirectoryOrAbort } from "./implementations/createReadDirectoryOrAbort.a.f"
import { $$ as icreateReadOptionalDirectory } from "./implementations/createReadOptionalDirectory.a.f"

export const $api: API = {
    'createReadDirectoryOrAbort': icreateReadDirectoryOrAbort,
    'createReadOptionalDirectory': icreateReadOptionalDirectory,
}
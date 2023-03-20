import { API } from "./api.generated"
import { $$ as icreateUnlinkFireAndForget } from "./implementations/createUnlinkFireAndForget.a.c"
import { $$ as icreateWriteFileFireAndForget } from "./implementations/createWriteFileFireAndForget.a.c"

export const $api: API = {
    'createUnlinkFireAndForget': icreateUnlinkFireAndForget,
    'createWriteFileFireAndForget': icreateWriteFileFireAndForget,
}
import { API } from "./api.generated"
import { $$ as icreateUnlinkFireAndForget } from "./implementations/createUnlinkFireAndForget.p"
import { $$ as icreateWriteFileFireAndForget } from "./implementations/createWriteFileFireAndForget.p"

export const $api: API = {
    'createUnlinkFireAndForget': icreateUnlinkFireAndForget,
    'createWriteFileFireAndForget': icreateWriteFileFireAndForget,
}
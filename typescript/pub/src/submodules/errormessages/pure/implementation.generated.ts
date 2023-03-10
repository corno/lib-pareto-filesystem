import { API } from "./api.generated"
import { $$ as icreateMkdirErrorMessage } from "./implementations/createMkdirErrorMessage.p"
import { $$ as icreateReadDirErrorMessage } from "./implementations/createReadDirErrorMessage.p"
import { $$ as icreateReadFileErrorMessage } from "./implementations/createReadFileErrorMessage.p"
import { $$ as icreateRmdirErrorMessage } from "./implementations/createRmdirErrorMessage.p"
import { $$ as icreateUnlinkErrorMessage } from "./implementations/createUnlinkErrorMessage.p"
import { $$ as icreateWriteFileErrorMessage } from "./implementations/createWriteFileErrorMessage.p"

export const $api: API = {
    'createMkdirErrorMessage': icreateMkdirErrorMessage,
    'createReadDirErrorMessage': icreateReadDirErrorMessage,
    'createReadFileErrorMessage': icreateReadFileErrorMessage,
    'createRmdirErrorMessage': icreateRmdirErrorMessage,
    'createUnlinkErrorMessage': icreateUnlinkErrorMessage,
    'createWriteFileErrorMessage': icreateWriteFileErrorMessage,
}
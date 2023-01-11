import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as main_createMkdirErrorMessage } from "../modules/main/createMkdirErrorMessage.p"
import { test as main_createReadDirectoryOrAbort } from "../modules/main/createReadDirectoryOrAbort.p"
import { test as main_createReadDirErrorMessage } from "../modules/main/createReadDirErrorMessage.p"
import { test as main_createReadFileErrorMessage } from "../modules/main/createReadFileErrorMessage.p"
import { test as main_createReadOptionalDirectory } from "../modules/main/createReadOptionalDirectory.p"
import { test as main_createRmdirErrorMessage } from "../modules/main/createRmdirErrorMessage.p"
import { test as main_createUnlinkErrorMessage } from "../modules/main/createUnlinkErrorMessage.p"
import { test as main_createUnlinkFireAndForget } from "../modules/main/createUnlinkFireAndForget.p"
import { test as main_createWriteFileErrorMessage } from "../modules/main/createWriteFileErrorMessage.p"
import { test as main_createWriteFileFireAndForget } from "../modules/main/createWriteFileFireAndForget.p"

const x = pr.wrapRawDictionary({
    "main": pr.wrapRawDictionary({
        "createMkdirErrorMessage": main_createMkdirErrorMessage,
        "createReadDirectoryOrAbort": main_createReadDirectoryOrAbort,
        "createReadDirErrorMessage": main_createReadDirErrorMessage,
        "createReadFileErrorMessage": main_createReadFileErrorMessage,
        "createReadOptionalDirectory": main_createReadOptionalDirectory,
        "createRmdirErrorMessage": main_createRmdirErrorMessage,
        "createUnlinkErrorMessage": main_createUnlinkErrorMessage,
        "createUnlinkFireAndForget": main_createUnlinkFireAndForget,
        "createWriteFileErrorMessage": main_createWriteFileErrorMessage,
        "createWriteFileFireAndForget": main_createWriteFileFireAndForget,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))
import * as pl from "pareto-core-lib"

import * as api from "../../interface"

export function f_createReadDirErrorMessage(): api.FCreateReadDirErrorMessage {
    return ($) => {
        switch ($[0]) {
            case "is not directory":
                return pl.cc($[1], ($) => {
                    return `readdir error: is not directory`

                })
            case "no entity":
                return pl.cc($[1], ($) => {
                    return `readdir error: no entity`

                })
            case "unknown":
                return pl.cc($[1], ($) => {
                    return `other readdir error: ${$.message}`
                })
            default: return pl.au($[0])
        }
    }
}

export const l_createReadDirErrorMessage = f_createReadDirErrorMessage()
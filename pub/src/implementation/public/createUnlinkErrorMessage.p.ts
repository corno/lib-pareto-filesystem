import * as pl from "pareto-core-lib"

import * as api from "../../interface"

export function f_createUnlinkErrorMessage(): api.FCreateUnlinkErrorMessage {
    return ($) => {

        switch ($[0]) {
            case "is directory":
                return pl.cc($[1], ($) => {
                    return `unlink error: is directory`

                })
            case "no entity":
                return pl.cc($[1], ($) => {
                    return `unlink error: no entity`

                })
            case "unknown":
                return pl.cc($[1], ($) => {
                    return `unknown unlink error: ${$.message}`
                })
            default: return pl.au($[0])
        }
    }
}

export const l_createUnlinkErrorMessage = f_createUnlinkErrorMessage()
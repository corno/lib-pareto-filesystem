import * as pl from "pareto-core-lib"

import * as api from "../../interface"

export function f_createReadFileErrorMessage(): api.FCreateReadFileErrorMessage {
    return ($) => {

        switch ($[0]) {
            case "is directory":
                return pl.cc($[1], ($) => {
                    return `read error: is directory`

                })
            case "no entity":
                return pl.cc($[1], ($) => {
                    return `read error: no entity`

                })
            case "unknown":
                return pl.cc($[1], ($) => {
                    return `unknown read error: ${$.message}`
                })
            default: return pl.au($[0])
        }
    }
}

export const l_createReadFileErrorMessage = f_createReadFileErrorMessage()

import * as pl from "pareto-core-lib"

import * as api from "../../interface"

export function f_createMkdirErrorMessage(): api.FCreateMkdirErrorMessage {
    return ($) => {

        switch ($[0]) {
            case "exists":
                return pl.cc($[1], ($) => {
                    return `mkdir error: exists`

                })
            case "no entity":
                return pl.cc($[1], ($) => {
                    return `mkdir error: no entity`

                })
            case "unknown":
                return pl.cc($[1], ($) => {
                    return `unknown mkdir error: ${$.message}`
                })
            default: return pl.au($[0])
        }
    }
}

export const l_createMkdirErrorMessage = f_createMkdirErrorMessage()
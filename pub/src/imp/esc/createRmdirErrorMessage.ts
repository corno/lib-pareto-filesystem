import * as pl from "pareto-core-lib"

import * as api from "api-pareto-filesystem"

export function createRmdirErrorMessage($: api.TRmdirError): string {

    switch ($[0]) {
        case "not empty":
            return pl.cc($[1], ($) => {
                return `rmdir error: not empty`

            })
        case "no entity":
            return pl.cc($[1], ($) => {
                return `rmdir error: no entity`

            })
        case "unknown":
            return pl.cc($[1], ($) => {
                return `unknown rmdir error: ${$.message}`
            })
        default: return pl.au($[0])
    }
}
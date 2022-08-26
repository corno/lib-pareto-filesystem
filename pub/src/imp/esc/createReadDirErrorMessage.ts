import * as pl from "pareto-core-lib"

import * as api from "api-pareto-filesystem"

export function createReadDirErrorMessage($: api.TReadDirError): string {

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
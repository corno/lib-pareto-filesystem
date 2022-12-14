import * as pl from "pareto-core-lib"

import * as api from "../api"

export const icreateWriteFileErrorMessage: api.CcreateWriteFileErrorMessage = ($) => {
    switch ($[0]) {
        case "no entity":
            return pl.cc($[1], ($) => {
                return `write file error: no entity`

            })
        case "is directory":
            return pl.cc($[1], ($) => {
                return `write file error: is directory`

            })
        case "unknown":
            return pl.cc($[1], ($) => {
                return `unknown write file error: ${$.message}`
            })
        default: return pl.au($[0])
    }
}
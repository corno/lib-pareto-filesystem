import * as pl from 'pareto-core-lib'

import * as mapi from "../api"

export const $$: mapi.CcreateReadFileErrorMessage = ($) => {
    switch ($[0]) {
        case 'is directory':
            return pl.cc($[1], ($) => {
                return `read error: is directory`

            })
        case 'no entity':
            return pl.cc($[1], ($) => {
                return `read error: no entity`

            })
        case 'unknown':
            return pl.cc($[1], ($) => {
                return `unknown read error: ${$.message}`
            })
        default: return pl.au($[0])
    }
}

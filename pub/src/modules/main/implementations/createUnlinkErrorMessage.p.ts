import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CcreateUnlinkErrorMessage = ($) => {

    switch ($[0]) {
        case 'is directory':
            return pl.cc($[1], ($) => {
                return `unlink error: is directory`

            })
        case 'no entity':
            return pl.cc($[1], ($) => {
                return `unlink error: no entity`

            })
        case 'unknown':
            return pl.cc($[1], ($) => {
                return `unknown unlink error: ${$.message}`
            })
        default: return pl.au($[0])
    }
}
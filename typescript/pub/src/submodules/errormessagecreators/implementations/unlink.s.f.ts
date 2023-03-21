import * as pl from 'pareto-core-lib'

import { A } from "../api.generated"

export const $$: A.unlink = () => {
    return ($) => {
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
}
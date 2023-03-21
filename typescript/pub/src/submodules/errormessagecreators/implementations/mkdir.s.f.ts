import * as pl from 'pareto-core-lib'

import { A } from "../api.generated"

export const $$: A.mkdir = () => {
    return ($) => {
        switch ($[0]) {
            case 'exists':
                return pl.cc($[1], ($) => {
                    return `mkdir error: exists`

                })
            case 'no entity':
                return pl.cc($[1], ($) => {
                    return `mkdir error: no entity`

                })
            case 'unknown':
                return pl.cc($[1], ($) => {
                    return `unknown mkdir error: ${$.message}`
                })
            default: return pl.au($[0])
        }
    }
}
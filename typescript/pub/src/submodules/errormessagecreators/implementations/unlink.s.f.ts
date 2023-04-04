import * as pl from 'pareto-core-lib'

import { A } from "../api.generated"

export const $$: A.unlink = () => {
    return ($) => {
        switch ($[0]) {
            case 'is directory': return pl.ss($, ($) =>  `unlink error: is directory`)
            case 'no entity': return pl.ss($, ($) => `unlink error: no entity`)
            case 'unknown': return pl.ss($, ($) => `unknown unlink error: ${$.message}`)
            default: return pl.au($[0])
        }
    }
}
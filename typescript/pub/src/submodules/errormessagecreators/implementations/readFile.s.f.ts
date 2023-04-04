import * as pl from 'pareto-core-lib'

import { A } from "../api.generated"

export const $$: A.readFile = () => {
    return ($) => {
        switch ($[0]) {
            case 'is directory': return pl.ss($, ($) => `read error: is directory`)
            case 'no entity': return pl.ss($, ($) => `read error: no entity`)
            case 'unknown': return pl.ss($, ($) => `unknown read error: ${$.message}`)
            default: return pl.au($[0])
        }
    }
}

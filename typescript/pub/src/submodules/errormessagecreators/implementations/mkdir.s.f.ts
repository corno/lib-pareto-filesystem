import * as pl from 'pareto-core-lib'

import { A } from "../api.generated"

export const $$: A.mkdir = () => {
    return ($) => {
        switch ($[0]) {
            case 'exists': return pl.ss($, ($) => `mkdir error: exists`)
            case 'no entity': return pl.ss($, ($) => `mkdir error: no entity`)
            case 'unknown': return pl.ss($, ($) => `unknown mkdir error: ${$.message}`)
            default: return pl.au($[0])
        }
    }
}
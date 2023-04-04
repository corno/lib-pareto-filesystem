import * as pl from 'pareto-core-lib'

import { A } from "../api.generated"

export const $$: A.readDir = () => {
    return ($) => {
        switch ($[0]) {
            case 'is not directory': return pl.ss($, ($) => `readdir error: is not directory`)
            case 'no entity': return pl.ss($, ($) => `readdir error: no entity`)
            case 'unknown': return pl.ss($, ($) => `other readdir error: ${$.message}`)
            default: return pl.au($[0])
        }
    }
}

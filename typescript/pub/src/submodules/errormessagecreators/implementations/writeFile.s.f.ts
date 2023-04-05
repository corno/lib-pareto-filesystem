import * as pl from 'pareto-core-lib'

import { A } from "../api.generated"

export const $$: A.writeFile = () => {
    return ($) => {
        switch ($[0]) {
            case 'no entity': return pl.ss($, ($) =>  `write file error: containing directory does not exist`)
            case 'is directory': return pl.ss($, ($) =>  `write file error: is directory`)
            case 'unknown': return pl.ss($, ($) =>  `unknown write file error: ${$.message}`)
            default: return pl.au($[0])
        }
    }
}
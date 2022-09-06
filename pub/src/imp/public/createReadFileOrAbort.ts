
import * as pl from "pareto-core-lib"

import * as api from "../../interface"

export const createReadFileOrAbort: api.FCreateReadFileOrAbort = ($i, $d) => {
    return ($) => {
        return $d.readFile(
            $,
        ).setCondition(($) => {
            switch ($[0]) {
                case "error":
                    return pl.cc($[1], ($) => {
                        $i.onError($)
                        return undefined
                    })
                case "success":
                    return pl.cc($[1], ($) => {
                        return pl.asyncValue($)
                    })
                default: return pl.au($[0])
            }
        }
        )

    }
}
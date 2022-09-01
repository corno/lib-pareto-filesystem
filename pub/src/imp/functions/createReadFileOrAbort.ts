
import * as pa from "pareto-core-async"
import * as pl from "pareto-core-lib"

import * as api from "../../interface"

export const createReadFileOrAbort: api.CreateReadFileOrAbort = ($i, $d) => {
    return ($) => {
        return pa.setCondition(
            $d.readFile(
                $,
            ),
            ($) => {
                switch ($[0]) {
                    case "error":
                        return pl.cc($[1], ($) => {
                            $i.onError($)
                            return undefined
                        })
                    case "success":
                        return pl.cc($[1], ($) => {
                            return pa.value($)
                        })
                    default: return pl.au($[0])
                }
            }
        )

    }
}
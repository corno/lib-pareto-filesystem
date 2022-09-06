
import * as pa from "pareto-core-async"
import * as pl from "pareto-core-lib"

import * as api from "../../interface"

export const createReadDirectoryOrAbort: api.XCreateReadDirectoryOrAbort = ($i, $d) => {
    return ($) => {
        return pa.setCondition(
            $d.readDirectory(
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

import * as pl from "pareto-core-lib"

import * as api from "../../interface"

export const f_createUnlinkFireAndForget: api.FCreateUnlinkFireAndForget = ($i, $d, $a) => {
    return ($) => {
        return $a(
            $d.unlink(
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
                            return pl.asyncValue($)
                        })
                    default: return pl.au($[0])
                }
            }
        )

    }
}
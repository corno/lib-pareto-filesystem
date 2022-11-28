import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as api from "../../api"

import * as fs from "res-pareto-filesystem"
import * as fsRes from "res-pareto-filesystem"

export const f_createUnlinkFireAndForget: api.CCreateUnlinkFireAndForget = ($i, $a) => {
    return ($) => {
        return $a(
            $i.unlink(
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
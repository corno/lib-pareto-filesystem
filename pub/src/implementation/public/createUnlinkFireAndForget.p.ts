import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as api from "../../interface"

import * as fs from "res-pareto-filesystem"
import * as fsRes from "res-pareto-filesystem"

export function f_createUnlinkFireAndForget(
    $d: fs.FUnlink,
    $a: pt.ProcessAsyncValue,
): api.FCreateUnlinkFireAndForget {
    return ($i) => {
        return ($) => {
            return $a(
                $d(
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
}

export const l_createUnlinkFireAndForget = f_createUnlinkFireAndForget(
    fsRes.f_unlink,
    ($, $i) => $._execute($i)
)
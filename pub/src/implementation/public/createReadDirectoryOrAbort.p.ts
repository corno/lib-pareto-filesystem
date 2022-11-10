
import * as pl from "pareto-core-lib"

import * as api from "../../interface"

import * as fs from "api-pareto-filesystem"
import * as fsRes from "res-pareto-filesystem"

export function f_createReadDirectoryOrAbort(
    $d: fs.FReadDirectory
): api.FCreateReadDirectoryOrAbort {
    return ($i) => {
        return ($) => {
            return $d(
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
            })
        }
    }
}

export const l_createReadDirectoryOrAbort = f_createReadDirectoryOrAbort(fsRes.f_readDirectory)
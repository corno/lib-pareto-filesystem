
import * as pl from "pareto-core-lib"

import * as api from "../../interface"

import * as fs from "api-pareto-filesystem"
import * as fsRes from "res-pareto-filesystem"

export function f_createReadOptionalDirectory(
    $d: fs.FReadDirectory
): api.FCreateReadOptionalDirectory {
    return ($i) => {
        return ($) => {
            const allow = $.allow
            return $d(
                $.fs,
            ).setCondition(($) => {
                switch ($[0]) {
                    case "error":
                        return pl.cc($[1], ($) => {
                            const err = $
                            switch ($.error[0]) {
                                case "is not directory":
                                    return pl.cc($.error[1], ($) => {
                                        if (allow.isNotADirectory) {
                                            return pl.asyncValue(null)
                                        } else {
                                            $i.onError(err)
                                            return undefined
                                        }
                                    })
                                case "no entity":
                                    return pl.cc($.error[1], ($) => {
                                        if (allow.noEntity) {
                                            return pl.asyncValue(null)
                                        } else {
                                            $i.onError(err)
                                            return undefined
                                        }
                                    })
                                case "unknown":
                                    return pl.cc($.error[1], ($) => {
                                        $i.onError(err)
                                        return undefined
                                    })
                                default: return pl.au($.error[0])
                            }
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

export const l_createReadOptionalDirectory = f_createReadOptionalDirectory(fsRes.f_readDirectory)

import * as pl from "pareto-core-lib"

import * as api from "../../interface"

export const f_createReadOptionalDirectory: api.FCreateReadOptionalDirectory = ($i, $d) => {
    return ($) => {
        const allow = $.allow
        return $d.readDirectory(
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
        }
        )

    }
}
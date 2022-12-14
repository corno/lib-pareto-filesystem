
import * as pl from "pareto-core-lib"

import * as api from "../api"

export const icreateReadDirectoryOrAbort: api.CcreateReadDirectoryOrAbort = ($d) => {
    return ($) => {
        return $d.sf_readDirectory(
            $,
        ).setCondition(($) => {
            switch ($[0]) {
                case "error":
                    return pl.cc($[1], ($) => {
                        $d.pr_onError($)
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
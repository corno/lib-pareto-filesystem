import * as pt from "pareto-core-types"

import * as api from "../api"

export const icreateWriteFileFireAndForget: api.CcreateWriteFileFireAndForget = ($d) => {
    return ($) => {
        $d.if_createWriteStream(
            {
                path: $.path,
                createContainingDirectories: $.createContainingDirectories,
            },
            ($i) => {
                $i($.data)
            },
        )
    }
}
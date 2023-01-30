import * as pt from 'pareto-core-types'

import * as api from "../api"

export const $$: api.CcreateWriteFileFireAndForget = ($d) => {
    return ($) => {
        $d.createWriteStream(
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
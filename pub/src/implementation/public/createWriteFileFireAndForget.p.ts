
import * as pl from "pareto-core-lib"

import * as api from "../../interface"

export const f_createWriteFileFireAndForget: api.FCreateWriteFileFireAndForget = ($i, $d, $a) => {
    return ($) => {
        $d(
            {
                path: $.path,
                createContainingDirectories: $.createContainingDirectories,
            },
            ($i) => {
                $i($.data)
            },
            {
                onError: $i.onError,
            },
            $a
        )
    }

}
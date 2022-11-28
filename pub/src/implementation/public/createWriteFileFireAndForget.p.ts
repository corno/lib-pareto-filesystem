import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as api from "../../api"

import * as fs from "res-pareto-filesystem"
import * as fsRes from "res-pareto-filesystem"

export const f_createWriteFileFireAndForget: api.CCreateWriteFileFireAndForget = ($i, $a) => {
    return ($) => {
        $i.createWriteStream(
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
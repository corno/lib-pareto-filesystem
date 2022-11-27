import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as api from "../../interface"

import * as fs from "res-pareto-filesystem"
import * as fsRes from "res-pareto-filesystem"

export function f_createWriteFileFireAndForget(
    $d: fs.FCreateWriteStream,
    $a: pt.ProcessAsyncValue,
): api.FCreateWriteFileFireAndForget {
    return ($i) => {
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
}

export const l_createWriteFileFireAndForget = f_createWriteFileFireAndForget(
    fsRes.f_createWriteStream,
    ($, $i) => $._execute($i)
)
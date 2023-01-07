import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as fs from "res-pareto-filesystem"
import * as fsRes from "res-pareto-filesystem"

export const icreateWriteFileFireAndForget: api.CcreateWriteFileFireAndForget = ($, $d) => {
    type x = <T>($: pt.AsyncValue<T>, $i: ($: T) => void) => void
    const $a: x = ($, $i) => $._execute($i)
    return ($) => {
        $d.createWriteStream(
            {
                path: $.path,
                createContainingDirectories: $.createContainingDirectories,
            },
            ($i) => {
                $i($.data)
            },
            {
                onError: $d.onError,
            },
            $a
        )
    }
}
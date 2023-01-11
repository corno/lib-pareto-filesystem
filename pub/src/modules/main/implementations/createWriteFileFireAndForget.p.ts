import * as pt from "pareto-core-types"

import * as api from "../api"

export const icreateWriteFileFireAndForget: api.CcreateWriteFileFireAndForget = ($d) => {
    type x = <T>($: pt.AsyncValue<T>, $i: ($: T) => void) => void
    const $a: x = ($, $i) => $._execute($i)
    return ($) => {
        $d.sf_createWriteStream(
            {
                path: $.path,
                createContainingDirectories: $.createContainingDirectories,
            },
            ($i) => {
                $i($.data)
            },
            {
                onError: $d.pr_onError,
            },
            $a
        )
    }
}
import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'

import { createUnlinkFireAndForget } from "../api.generated"

export const $$: createUnlinkFireAndForget = ($d) => {

    type x = <T>($: pt.AsyncValue<T>, $i: ($: T) => void) => void
    const $a: x = ($, $i) => $.__execute($i)
    return ($) => {
        return $a(
            $d.unlink(
                $,
            ),
            ($) => {
                switch ($[0]) {
                    case 'error':
                        return pl.cc($[1], ($) => {
                            $d.onError($)
                            return undefined
                        })
                    case 'success':
                        return pl.cc($[1], ($) => {
                            return pa.asyncValue($)
                        })
                    default: return pl.au($[0])
                }
            }
        )

    }
}
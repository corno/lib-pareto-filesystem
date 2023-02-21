import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mfs from "res-pareto-filesystem"
import * as mfsRes from "res-pareto-filesystem"

export const $$: api.CcreateUnlinkFireAndForget = ($d) => {

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
                            return pl.asyncValue($)
                        })
                    default: return pl.au($[0])
                }
            }
        )

    }
}
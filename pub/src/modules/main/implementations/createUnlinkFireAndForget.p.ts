import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as api from "../api"

import * as fs from "res-pareto-filesystem"
import * as fsRes from "res-pareto-filesystem"

export const icreateUnlinkFireAndForget: api.CcreateUnlinkFireAndForget = ($d) => {

    type x = <T>($: pt.AsyncValue<T>, $i: ($: T) => void) => void
    const $a: x = ($, $i) => $._execute($i)
    return ($) => {
        return $a(
            $d.funlink(
                $,
            ),
            ($) => {
                switch ($[0]) {
                    case "error":
                        return pl.cc($[1], ($) => {
                            $d.donError($)
                            return undefined
                        })
                    case "success":
                        return pl.cc($[1], ($) => {
                            return pl.asyncValue($)
                        })
                    default: return pl.au($[0])
                }
            }
        )

    }
}
import * as pt from 'pareto-core-types'
import * as pi from 'pareto-core-internals'
import * as pa from 'pareto-core-async'

import * as g_fs from "res-pareto-filesystem"

import { createReadDirectoryOrAbort } from "../api.generated"


function filter<T>($: pt.AsyncValue<pt.OptionalValue<T>>) {
    return pi.wrapAsyncValueImp<T>(($i) => {
        $.__execute(($) => {
            if ($[0] === true) {
                $i($[1])
            }
        })
    })
}

export const $$: createReadDirectoryOrAbort = ($d) => {
    return ($) => {

        return filter(
            $d.readDirectory($).map<pt.OptionalValue<g_fs.T.ReadDirectory_$Success>>(($) => {
                switch ($[0]) {
                    case 'error':
                        return pi.cc($[1], ($) => {
                            $d.onError(null)($)
                            return pa.asyncValue([false])
                        })
                    case 'success':
                        return pi.cc($[1], ($) => {
                            return pa.asyncValue([true, $])
                        })
                    default: return pi.au($[0])
                }
            })
        )
    }
}
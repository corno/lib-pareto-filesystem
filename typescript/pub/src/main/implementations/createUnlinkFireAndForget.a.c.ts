import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'

import { A } from "../api.generated"

export const $$: A.createUnlinkFireAndForget = ($d) => {
    return ($is) => {
        return ($) => {
            pl.processAsyncValue(
                $d.unlink(
                    $,
                ),
                ($) => {
                    switch ($[0]) {
                        case 'error':
                            return pl.cc($[1], ($) => {
                                $is.errorHandler($)
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
}
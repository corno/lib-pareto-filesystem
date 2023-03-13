import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'

import { createUnlinkFireAndForget } from "../api.generated"

export const $$: createUnlinkFireAndForget = ($d) => {
    return ($, $c) => {
        $c(($) => {
            pl.processAsyncValue(
                $d.unlink(
                    $,
                ),
                ($) => {
                    switch ($[0]) {
                        case 'error':
                            return pl.cc($[1], ($) => {
                                $d.temp_onError(null, ($i) => {
                                    $i($)
                                })
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

        })

    }
}
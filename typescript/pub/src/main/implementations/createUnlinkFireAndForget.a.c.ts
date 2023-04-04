import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'

import { A } from "../api.generated"

export const $$: A.createUnlinkFireAndForget = ($d) => {
    return {
        'construct': ($is) => {
            return ($) => {
                pl.processAsyncValue(
                    $d.unlink(
                        $,
                    ),
                    ($) => {
                        switch ($[0]) {
                            case 'error':
                                pl.ss($, ($) => {
                                    $is.errorHandler($)
                                })
                                break
                            case 'success':
                                pl.ss($, ($) => pa.asyncValue($))
                                break
                            default: pl.au($[0])
                        }
                    }
                )
            }
        }
    }
}
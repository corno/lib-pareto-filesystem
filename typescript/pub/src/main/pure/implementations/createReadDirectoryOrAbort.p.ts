import * as pt from 'pareto-core-types'
import * as pi from 'pareto-core-internals'

import {createReadDirectoryOrAbort } from "../api.generated"

export const $$: createReadDirectoryOrAbort = ($d) => {
    return ($) => {
        pi.panic("IMPLEMENT ME!!!!!!!")
        // function setCondition<T>($: pt.AsyncValue<T>, $v: () => XXXX) {
        //     function setCondition<In, Out>(
        //         source: Execute<In>,
        //         rewrite: (v: In) => undefined | pt.AsyncValue<Out>,
        //     ): pt.AsyncValue<Out> {
        //         return wrapAsyncValueImp(
        //             false,
        //             (cb) => {
        //                 source((vIn) => {
        //                     const res = rewrite(vIn)
        //                     if (res !== undefined) {
        //                         res._execute(cb)
        //                     }
        //                     //callback is never called
        //                 })
        //             }
        //         )
        //     }
        //     return setCondition(execute, $v)

        // },
        // return $d.readDirectory(
        //     $,
        // ).__execute(($) => {
        //     switch ($[0]) {
        //         case 'error':
        //             return pi.cc($[1], ($) => {
        //                 $d.onError($)
        //                 return undefined
        //             })
        //         case 'success':
        //             return pi.cc($[1], ($) => {
        //                 return pi.asyncValue($)
        //             })
        //         default: return pi.au($[0])
        //     }
        // })
    }
}
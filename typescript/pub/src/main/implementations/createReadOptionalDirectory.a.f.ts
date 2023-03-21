import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.createReadOptionalDirectory = ($d) => {
    return ($) => {
        pi.panic("IMPLEMENT ME!!!!!")
        // const allow = $.allow
        // return $d.readDirectory(
        //     $.fs,
        // ).setCondition(($) => {
        //     switch ($[0]) {
        //         case 'error':
        //             return pl.cc($[1], ($) => {
        //                 const err = $
        //                 switch ($.error[0]) {
        //                     case 'is not directory':
        //                         return pl.cc($.error[1], ($) => {
        //                             if (allow.isNotADirectory) {
        //                                 return pa.asyncValue([false])
        //                             } else {
        //                                 $d.onError(err)
        //                                 return undefined
        //                             }
        //                         })
        //                     case 'no entity':
        //                         return pl.cc($.error[1], ($) => {
        //                             if (allow.noEntity) {
        //                                 return pa.asyncValue([false])
        //                             } else {
        //                                 $d.onError(err)
        //                                 return undefined
        //                             }
        //                         })
        //                     case 'unknown':
        //                         return pl.cc($.error[1], ($) => {
        //                             $d.onError(err)
        //                             return undefined
        //                         })
        //                     default: return pl.au($.error[0])
        //                 }
        //             })
        //         case 'success':
        //             return pl.cc($[1], ($) => {
        //                 return pa.asyncValue([true, $])
        //             })
        //         default: return pl.au($[0])
        //     }
        // })
    }
}
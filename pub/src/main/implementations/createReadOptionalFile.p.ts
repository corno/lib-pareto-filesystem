
import * as pl from 'pareto-core-lib'

import * as mapi from "../api"

// export const $$: api.CcreateReadOptionalFile = ($i, $d) => {
//     return ($) => {
//         const allow = $.allow
//         return $d(
//             $.fs,
//         ).setCondition(($) => {
//             switch ($[0]) {
//                 case 'error':
//                     return pl.cc($[1], ($) => {
//                         const err = $
//                         switch ($.error[0]) {
//                             case 'is directory':
//                                 return pl.cc($.error[1], ($) => {
//                                     if (allow.isDirectory) {
//                                         return pa.asyncValue(null)
//                                     } else {
//                                         $i.onError(err)
//                                         return undefined
//                                     }
//                                 })
//                             case 'no entity':
//                                 return pl.cc($.error[1], ($) => {
//                                     if (allow.noEntity) {
//                                         return pa.asyncValue(null)
//                                     } else {
//                                         $i.onError(err)
//                                         return undefined
//                                     }
//                                 })
//                             case 'unknown':
//                                 return pl.cc($.error[1], ($) => {
//                                     $i.onError(err)
//                                     return undefined
//                                 })
//                             default: return pl.au($.error[0])
//                         }
//                     })
//                 case 'success':
//                     return pl.cc($[1], ($) => {
//                         return pa.asyncValue($)
//                     })
//                 default: return pl.au($[0])
//             }
//         })

//     }
// }
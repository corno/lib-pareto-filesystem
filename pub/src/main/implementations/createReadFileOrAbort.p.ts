import * as pa from 'pareto-core-async'

import * as mfsAPI from "res-pareto-filesystem"

import * as mapi from "../api"

// export const icreateReadFileOrAbort: glo.FCreateReadFileOrAbort = ($i, $d) => {
//     return ($) => {
//         return $d.aggregate<fsAPI.TReadFile_Data, string>(
//             {
//                 connectToStream: ($, $i) => {
//                     sss
//                 }
//             }
//         )($).map(($) => {
//             return pa.asyncValue("FOOO")
//         })
//         // $d(
//         //     $.path,
//         //     {
//         //         init: () => {

//         //         },
                
//         //     }
//         // ),
//         // $a
//         // return $d(
//         //     $,
//         // ).setCondition(($) => {
//         //     switch ($[0]) {
//         //         case 'error':
//         //             return pl.cc($[1], ($) => {
//         //                 $i.onError($)
//         //                 return undefined
//         //             })
//         //         case 'success':
//         //             return pl.cc($[1], ($) => {
//         //                 return pa.asyncValue($)
//         //             })
//         //         default: return pl.au($[0])
//         //     }
//         // })

//     }
// }
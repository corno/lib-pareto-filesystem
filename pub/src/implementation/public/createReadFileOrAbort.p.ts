import * as pl from "pareto-core-lib"

import * as pa from "api-pareto-async"

import * as fsAPI from "api-pareto-filesystem"

import * as api from "../../interface"

// export const f_createReadFileOrAbort: api.FCreateReadFileOrAbort = ($i, $d) => {
//     return ($) => {
//         return $d.aggregate<fsAPI.TReadFile_Data, string>(
//             {
//                 connectToStream: ($, $i) => {
//                     sss
//                 }
//             }
//         )($).map(($) => {
//             return pl.asyncValue("FOOO")
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
//         //         case "error":
//         //             return pl.cc($[1], ($) => {
//         //                 $i.onError($)
//         //                 return undefined
//         //             })
//         //         case "success":
//         //             return pl.cc($[1], ($) => {
//         //                 return pl.asyncValue($)
//         //             })
//         //         default: return pl.au($[0])
//         //     }
//         // })

//     }
// }
// import * as pt from "pareto-core-types"
// import * as pl from "pareto-core-lib"
// import * as inf from "../interface"

// import * as api from "api-pareto-filesystem"


// export function createFileResource(
//     $: inf.CreateFileResource_Data,
//     $i: inf.CreateFileResource_Algorithms,
// ): inf.Resource<api.Path, string> {
//     const contextPath = $.contextPath
//     const onError = $i.onError
//     const getFile = $i.getFile
//     const startAsync = $i.startAsync
//     return {
//         get: ($, $i) => {
//             startAsync(
//                 getFile(
//                     {
//                         path: [contextPath, $.id],
//                     },
//                     {
//                         onError: ($) => {
//                             const error = $
//                             switch ($.error[0]) {
//                                 case "is directory":
//                                     pl.cc($.error[1], ($) => {
//                                         onError(error)
//                                         $i.onFailed()
//                                     })
//                                     break

//                                 case "no entity":
//                                     pl.cc($.error[1], ($) => {
//                                         $i.onNotExists()
//                                     })
//                                     break

//                                 case "unknown":
//                                     pl.cc($.error[1], ($) => {
//                                         onError(error)
//                                         $i.onFailed()
//                                     })
//                                     break
//                                 default: pl.au($.error[0])
//                             }
//                         },
//                         init: $i.init
//                     }
//                 )
//             )
//         }
//     }
// }

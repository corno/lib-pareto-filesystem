// import * as pt from "pareto-core-types"
// import * as pa from "pareto-core-async"
// import * as pl from "pareto-core-lib"

// import * as api from "api-pareto-filesystem"

// import * as inf from "../interface"



// export function createCachingResource( //
//     $: inf.CreateCachingResource_Data,
//     $i: inf.CreateCachingResource_Algorithms
// ): inf.Resource<api.Path, string> {
//     const source = $i.source
//     const contextPath = $.contextPath
//     const onReadError = $i.onReadError
//     const onWriteError = $i.onWriteError
//     const getFile = $i.getFile
//     const writeFile = $i.writeFile
//     return {
//         get: ($, $i) => {
//             const id = $.id
//             $i.startAsync(
//                 getFile(
//                     {
//                         path: [contextPath, id]
//                     },
//                     {
//                         onError: ($) => {

//                             if ($.error[0] !== "no entity") {
//                                 onReadError($)
//                             } else {
//                                 source.get(
//                                     {
//                                         id: id
//                                     },
//                                     {
//                                         onFailed: () => {
//                                             $i.onFailed()
//                                         },
//                                         onNotExists: () => {
//                                             $i.onNotExists()
//                                         },
//                                         init: () => {
//                                             const consumer = $i.init()
//                                             let out = ""
//                                             return {
//                                                 onData: ($) => {
//                                                     consumer.onData($)
//                                                     out += $

//                                                 },
//                                                 onEnd: () => {
//                                                     consumer.onEnd()
//                                                     $i.startAsync(
//                                                         pa.processValue(
//                                                             writeFile(
//                                                                 {
//                                                                     path: [contextPath, id],
//                                                                     data: out,
//                                                                     createContainingDirectories: true,
//                                                                 }
//                                                             ),
//                                                             ($) => {
//                                                                 switch ($[0]) {
//                                                                     case "error":
//                                                                         pl.cc($[1], ($) => {
//                                                                             onWriteError($)
//                                                                         })
//                                                                         break
//                                                                     case "success":
//                                                                         pl.cc($[1], ($) => {
//                                                                             //nothing to do
//                                                                         })
//                                                                         break
//                                                                     default: pl.au($[0])
//                                                                 }
//                                                             }

//                                                         )
//                                                     )

//                                                 }
//                                             }
//                                         }
//                                     }
//                                 )
//                             }

//                         },
//                         init: $i.init
//                     }
//                 )
//             )
//         }
//     }
// }

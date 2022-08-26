// import * as pt from "pareto-core-types"
// import * as api from "api-pareto-filesystem"
// import * as inf from "../interface"
// import * as pl from "pareto-core-lib"
// import * as pa from "pareto-core-async"
// // import { optionalFile } from "./asyncAPI/optionalFile"
// // import { optionalDirectory } from "./asyncAPI/optionalDirectory"

// export function createHandledWriteFilesystem(
//     $: {

//     },
//     $i: {
//         onError: ($: inf.HandledWriteFileSystemError) => void
//         writeFile: api.WriteFile
//         unlink: api.Unlink
//         startAsync: pa.StartAsync
//     }
// ): inf.IHandledWriteFilesystem {
//     return {
//         writeFile: (
//             $
//         ) => {
//             $i.startAsync(
//                 pa.processValue(
//                     $i.writeFile(
//                         {
//                             path: $.path,
//                             data: $.data,
//                             createContainingDirectories: true, //FIX make this configurable
//                         }
//                     ),
//                     ($) => {
//                         switch ($[0]) {
//                             case "error":
//                                 pl.cc($[1], ($) => {
//                                     $i.onError({
//                                         type: ["file write", $.error],
//                                         path: $.path,
//                                     })
//                                 })
//                                 break
//                             case "success":
//                                 pl.cc($[1], ($) => {
//                                 })
//                                 break

//                             default: pl.au($[0])
//                         }
//                     }
//                 )
//             )
//         },
//         unlink: (
//             $
//         ) => {
//             return unlink(
//                 $,
//                 {
//                     error: ($) => {
//                         onError({
//                             type: ["unlink", $.error],
//                             path: $.path,
//                         })
//                     }
//                 }
//             )
//         }
//     }
// }

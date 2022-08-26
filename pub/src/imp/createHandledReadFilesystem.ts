import * as pt from "pareto-core-types"
import * as api from "api-pareto-filesystem"
import * as inf from "../interface"
import * as pl from "pareto-core-lib"
import * as pa from "pareto-core-async"
// import { optionalFile } from "./asyncAPI/optionalFile"
// import { optionalDirectory } from "./asyncAPI/optionalDirectory"

export function createHandledReadFilesystem(
    $: {

    },
    $i: {
        onError: ($: inf.HandledReadFileSystemError) => void,
        readFile: api.ReadFile
        readDirectory: api.ReadDirectory
    }
): inf.IHandledReadFilesystem {
    return {
        file: (
            $,
        ) => {
            return pa.setCondition(
                $i.readFile(
                    $,
                ),
                ($) => {
                    switch ($[0]) {
                        case "error":
                            return pl.cc($[1], ($) => {
                                $i.onError({
                                    path: $.path,
                                    type: ["file read", $.error],
                                })
                                return undefined
                            })
                        case "success":
                            return pl.cc($[1], ($) => {
                                return pa.value($)
                            })
                        default: return pl.au($[0])
                    }
                }
            )
        },
        optionalFile: (
            $
        ) => {
            return pa.rewrite(
                $i.readFile(
                    $,
                ),
                ($) => {
                    switch ($[0]) {
                        case "error":
                            return pl.cc($[1], ($) => {
                                $i.onError({
                                    path: $.path,
                                    type: ["file read", $.error],
                                })
                                return pa.value(null)
                            })
                        case "success":
                            return pl.cc($[1], ($) => {
                                return pa.value($)
                            })
                        default: return pl.au($[0])
                    }
                }
            )
        },
        directory: (
            $,
        ) => {
            return pa.setCondition(
                $i.readDirectory(
                    $,
                ),
                ($) => {
                    switch ($[0]) {
                        case "error":
                            return pl.cc($[1], ($) => {
                                $i.onError({
                                    type: ["directory read", $.error],
                                    path: $.path
                                })
                                return undefined
                            })
                        case "success":
                            return pl.cc($[1], ($) => {
                                return pa.value($)
                            })
                        default: return pl.au($[0])
                    }
                }
            )

        },
        optionalDirectory: (
            $,
        ) => {
            return pa.rewrite(
                $i.readDirectory(
                    $,
                ),
                ($) => {
                    switch ($[0]) {
                        case "error":
                            return pl.cc($[1], ($) => {
                                $i.onError({
                                    type: ["directory read", $.error],
                                    path: $.path
                                })
                                return pa.value(null)
                            })
                        case "success":
                            return pl.cc($[1], ($) => {
                                return pa.value($)
                            })
                        default: return pl.au($[0])
                    }
                }
            )

        },
    }
}

import * as a_fs from "res-pareto-filesystem"
import * as a_main from "../../main"

import * as a_err from "../../submodules/errormessagecreators"

import { A } from "../api.generated"

export const $$: A.createReadDirectoryOrAbort = ($se) => {
    return a_main.$a.createReadDirectoryOrAbort({
        'readDirectory': a_fs.$r.readDirectory(),
    }, {
        'onError': ($) => {
            $se.onError(`${$.path}: ${a_err.$a.readDir()($.error)}`)
        }
    })
}
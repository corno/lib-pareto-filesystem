import * as a_fs from "res-pareto-filesystem"
import * as a_main from "../../main"
import * as a_err from "../../submodules/errormessagecreators"

import { A } from "../api.generated"

export const $$: A.createWriteFileFireAndForget = () => {
    return ($is) => {
        return a_main.$a.createWriteFileFireAndForget({
            'createFileWriter': a_fs.$r.createFileWriter()
        })({
            'errorHandler': ($) => {
                $is.errorHandler(`${$.path}: ${a_err.$a.writeFile()($.error)}`)
            }
        })
    }
}
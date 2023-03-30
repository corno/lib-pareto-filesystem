import * as a_fs from "res-pareto-filesystem"
import * as a_main from "../../main"
import * as a_err from "../../submodules/errormessagecreators"

import { A } from "../api.generated"

export const $$: A.createUnlinkFireAndForget = () => {
    return {
        'construct': ($is) => {
            return a_main.$a.createUnlinkFireAndForget({
                'unlink': a_fs.$r.unlink()
            }).construct({
                'errorHandler': ($) => {
                    $is.errorHandler(`${$.path}: ${a_err.$a.unlink()($.error)}`)
                }
            })
        }
    }
}
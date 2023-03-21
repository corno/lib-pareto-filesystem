import * as pl from 'pareto-core-lib'

import * as g_creators from "../../errormessagecreators"

import { A } from "../api.generated"

export const $$: A.writeFile = () => {
    return ($is) => {
        return ($) => {
            $is.handler(`${$.path}: ${g_creators.$a.writeFile()($.error)}`)
        }
    }
}

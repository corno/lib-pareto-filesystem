import * as pl from 'pareto-core-lib'

import * as g_creators from "../../errormessagecreators"

import { readDir } from "../api.generated"

export const $$: readDir = ($, $i) => {
    $i(`${$.path}: ${g_creators.$a.readDir($.error)}`)
}

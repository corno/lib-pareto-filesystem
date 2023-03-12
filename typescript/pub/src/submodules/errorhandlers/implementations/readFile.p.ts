import * as pl from 'pareto-core-lib'

import * as g_creators from "../../errormessagecreators"

import { readFile } from "../api.generated"

export const $$: readFile = ($, $i) => {
    $i(`${$.path}: ${g_creators.$a.readFile($.error)}`)
}

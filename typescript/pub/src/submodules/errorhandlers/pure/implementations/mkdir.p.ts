import * as pl from 'pareto-core-lib'

import * as g_creators from "../../../errormessagecreators"

import { mkdir } from "../api.generated"

export const $$: mkdir = ($, $i) => {
    $i(`${$.path}: ${g_creators.$a.mkdir($.error)}`)
}

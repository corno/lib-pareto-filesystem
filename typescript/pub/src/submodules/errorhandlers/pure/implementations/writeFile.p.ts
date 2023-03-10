import * as pl from 'pareto-core-lib'

import * as g_creators from "../../../errormessagecreators"

import { writeFile } from "../api.generated"

export const $$: writeFile = ($, $i) => {
    $i(`${$.path}: ${g_creators.$a.writeFile($.error)}`)
}

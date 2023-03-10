import * as pl from 'pareto-core-lib'

import * as g_creators from "../../../errormessagecreators"

import { unlink } from "../api.generated"

export const $$: unlink = ($, $i) => {
    $i(`${$.path}: ${g_creators.$a.unlink($.error)}`)
}

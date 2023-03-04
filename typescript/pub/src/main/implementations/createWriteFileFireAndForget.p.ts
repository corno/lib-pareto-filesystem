

import {createWriteFileFireAndForget } from "../definition/api.generated"

export const $$: createWriteFileFireAndForget = ($d) => {
    return ($) => {
        $d.createWriter(
            {
                path: $.path,
                createContainingDirectories: $.createContainingDirectories,
            },
            ($i) => {
                $i($.data)
            },
        )
    }
}
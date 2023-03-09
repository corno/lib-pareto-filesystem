

import { createWriteFileFireAndForget } from "../api.generated"

export const $$: createWriteFileFireAndForget = ($d) => {
    return ($) => {
        $d.writeFile(
            {
                path: $.path,
                createContainingDirectories: $.createContainingDirectories,
            },
            ($i) => {
                $i($.data)
            },
            ($) => {
                //$d.
            },
        )
    }
}
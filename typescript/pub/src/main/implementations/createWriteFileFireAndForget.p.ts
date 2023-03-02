

import { CcreateWriteFileFireAndForget } from "../definition/api.generated"

export const $$:CcreateWriteFileFireAndForget = ($d) => {
    return ($) => {
        $d.createWriteStream(
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
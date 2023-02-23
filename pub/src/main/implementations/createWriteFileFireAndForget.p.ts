

import { CcreateWriteFileFireAndForget } from "../api"

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
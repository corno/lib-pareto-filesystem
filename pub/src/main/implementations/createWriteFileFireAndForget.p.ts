import * as mapi from "../api"

export const $$: mapi.CcreateWriteFileFireAndForget = ($d) => {
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
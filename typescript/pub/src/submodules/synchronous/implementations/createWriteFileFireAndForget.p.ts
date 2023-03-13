

import { createWriteFileFireAndForget } from "../api.generated"

export const $$: createWriteFileFireAndForget = ($d) => {
    return ($, $c) => {
        $c(($) => {
            $d.temp_onError(null, ($i) => {
                const fw = $d.createFileWriter(
                    $.settings,
                    $i,
                )
                fw.data($.data)
                fw.end()

            })
        })
    }
}
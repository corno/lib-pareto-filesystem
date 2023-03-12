

import { createWriteFileFireAndForget } from "../api.generated"

export const $$: createWriteFileFireAndForget = ($d) => {
    return ($) => {
        const fw = $d.createFileWriter(
            $.settings,
            $d.onError,
        )
        fw.data($.data)
        fw.end()
    }
}
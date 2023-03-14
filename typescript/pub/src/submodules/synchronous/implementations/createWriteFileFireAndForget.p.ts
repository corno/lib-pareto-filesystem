

import { createWriteFileFireAndForget } from "../api.generated"

export const $$: createWriteFileFireAndForget = ($d) => {
    return ($b) => {
        $b(($) => {
            const fw = $d.createFileWriter(
                $.settings,
                $d.onError,
            )
            fw.data($.data)
            fw.end()
        })
    }
}
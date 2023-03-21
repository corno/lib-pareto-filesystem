

import { A } from "../api.generated"

export const $$: A.createWriteFileFireAndForget = ($d) => {
    return ($is) => {
        return ($) => {
            const fw = $d.createFileWriter({
                'onWriteFileError': $is.errorHandler,
            })(
                $.settings,
            )
            fw.data($.data)
            fw.end()
        }
    }
}
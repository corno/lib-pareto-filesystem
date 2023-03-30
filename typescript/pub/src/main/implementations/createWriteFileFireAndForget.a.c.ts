

import { A } from "../api.generated"

export const $$: A.createWriteFileFireAndForget = ($d) => {
    return {
        'construct': ($is) => {
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
}
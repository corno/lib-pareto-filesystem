import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_main from "../../main"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {
        
        
        export namespace C {
            export type CreateUnlinkFireAndForget = {
                'construct': ($is: {
                    readonly 'errorHandler': g_common.ASYNC.I.String
                }) => g_main.ASYNC.I.UnlinkFireAndForget
            }
        }
        
        
        export namespace C {
            export type CreateWriteFileFireAndForget = {
                'construct': ($is: {
                    readonly 'errorHandler': g_common.ASYNC.I.String
                }) => g_main.ASYNC.I.WriteFileFireAndForget
            }
        }
    }
}

export namespace SYNC {}
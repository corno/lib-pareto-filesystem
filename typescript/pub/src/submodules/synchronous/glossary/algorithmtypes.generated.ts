import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"

export namespace ASYNC {
    
    export namespace I {
        
        export type HandleAnnotatedUnlinkError = ($: g_fs.T.AnnotatedUnlinkError, ) => void
        
        export type HandleAnnotatedWriteFileError = ($: g_fs.T.AnnotatedWriteFileError, ) => void
        
        export type UnlinkFireAndForget = ($: g_fs.T.Unlink_$Data, ) => void
        
        export type WriteFile = ($: T.WriteFileData, ) => void
    }
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace IW {}
    
    export namespace A {}
}
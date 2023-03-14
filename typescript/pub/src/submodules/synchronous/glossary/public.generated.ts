import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"

export namespace B {
    
    export type HandleAnnotatedUnlinkError = ($: g_fs.T.AnnotatedUnlinkError, ) => void
    
    export type HandleAnnotatedWriteFileError = ($: g_fs.T.AnnotatedWriteFileError, ) => void
    
    export type UnlinkFireAndForget = ($: g_fs.T.Unlink_$Data, ) => void
    
    export type WriteFile = ($: T.WriteFileData, ) => void
}

export namespace F {}
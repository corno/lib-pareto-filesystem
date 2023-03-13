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

export namespace F {
    
    export type TempHandleAnnotatedUnlinkError = ($: g_common.T.Null, $c: ($b: B.HandleAnnotatedUnlinkError) => void,) => void
    
    export type TempHandleAnnotatedWriteFileError = ($: g_common.T.Null, $c: ($b: B.HandleAnnotatedWriteFileError) => void,) => void
    
    export type TempUnlinkFireAndForget = ($: g_common.T.Null, $c: ($b: B.UnlinkFireAndForget) => void,) => void
    
    export type TempWriteFile = ($: g_common.T.Null, $c: ($b: B.WriteFile) => void,) => void
    
    export type UnlinkFireAndForget = ($: g_fs.T.Unlink_$Data,) => void
    
    export type WriteFile = ($: T.WriteFileData,) => void
}
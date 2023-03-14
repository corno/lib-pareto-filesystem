import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"

export namespace B {}

export namespace C {}

export namespace F {
    
    export type Mkdir = ($: g_fs.T.AnnotatedMkdirError, $b: g_common.B.String) => void
    
    export type ReadDir = ($: g_fs.T.AnnotatedReadDirError, $b: g_common.B.String) => void
    
    export type ReadFile = ($: g_fs.T.AnnotatedReadFileError, $b: g_common.B.String) => void
    
    export type Unlink = ($: g_fs.T.AnnotatedUnlinkError, $b: g_common.B.String) => void
    
    export type WriteFile = ($: g_fs.T.AnnotatedWriteFileError, $b: g_common.B.String) => void
}
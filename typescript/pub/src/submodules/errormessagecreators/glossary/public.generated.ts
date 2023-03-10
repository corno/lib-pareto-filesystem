import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"

export namespace B {}

export namespace F {
    
    export type Mkdir = ($: g_fs.T.MkdirError,) => g_common.T.String
    
    export type ReadDir = ($: g_fs.T.ReadDirError,) => g_common.T.String
    
    export type ReadFile = ($: g_fs.T.ReadFileError,) => g_common.T.String
    
    export type Rmdir = ($: g_fs.T.RmdirError,) => g_common.T.String
    
    export type Unlink = ($: g_fs.T.UnlinkError,) => g_common.T.String
    
    export type WriteFile = ($: g_fs.T.WriteFileError,) => g_common.T.String
}
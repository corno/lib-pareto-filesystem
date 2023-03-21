import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"

export namespace ASYNC {
    
    export namespace I {
        
        export type Mkdir = ($: g_fs.T.AnnotatedMkdirError, ) => void
        
        export type ReadDir = ($: g_fs.T.AnnotatedReadDirError, ) => void
        
        export type ReadFile = ($: g_fs.T.AnnotatedReadFileError, ) => void
        
        export type String = ($: g_common.T.String, ) => void
        
        export type Unlink = ($: g_fs.T.AnnotatedUnlinkError, ) => void
        
        export type WriteFile = ($: g_fs.T.AnnotatedWriteFileError, ) => void
    }
    
    export namespace A {
        
        
        export namespace C {
            export type Mkdir = ($is: {
                readonly 'handler': ASYNC.I.String
            }) => ASYNC.I.Mkdir
        }
        
        
        export namespace C {
            export type ReadDir = ($is: {
                readonly 'handler': ASYNC.I.String
            }) => ASYNC.I.ReadDir
        }
        
        
        export namespace C {
            export type ReadFile = ($is: {
                readonly 'handler': ASYNC.I.String
            }) => ASYNC.I.ReadFile
        }
        
        
        export namespace C {
            export type Unlink = ($is: {
                readonly 'handler': ASYNC.I.String
            }) => ASYNC.I.Unlink
        }
        
        
        export namespace C {
            export type WriteFile = ($is: {
                readonly 'handler': ASYNC.I.String
            }) => ASYNC.I.WriteFile
        }
    }
}

export namespace SYNC {}
import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gfs from "res-pareto-filesystem"

export namespace T {
    
    export namespace DirNodeData {
        
        export type path = string
        
        export namespace _ltype {
            
            export type directory = null
            
            export type file = null
            
            export type _lunknown = null
        }
        
        export type _ltype = 
            | ['directory', null]
            | ['file', null]
            | ['unknown', null]
    }
    
    export type DirNodeData = {
        readonly 'path': string
        readonly 'type': 
            | ['directory', null]
            | ['file', null]
            | ['unknown', null]
    }
    
    export namespace ReadDirectoryResult {
        
        export type D = T.DirNodeData
    }
    
    export type ReadDirectoryResult = pt.Dictionary<T.DirNodeData>
    
    export namespace ReadOptionalDirectoryData {
        
        export namespace allow {
            
            export type isNotADirectory = boolean
            
            export type noEntity = boolean
        }
        
        export type allow = {
            readonly 'isNotADirectory': boolean
            readonly 'noEntity': boolean
        }
        
        export type fs = gfs.T.ReadDirectory_$Data
    }
    
    export type ReadOptionalDirectoryData = {
        readonly 'allow': {
            readonly 'isNotADirectory': boolean
            readonly 'noEntity': boolean
        }
        readonly 'fs': gfs.T.ReadDirectory_$Data
    }
    
    export namespace ReadOptionalDirectoryResult {
        
        export type O = T.ReadDirectoryResult
    }
    
    export type ReadOptionalDirectoryResult = [ false ] | [ true, T.ReadDirectoryResult]
}
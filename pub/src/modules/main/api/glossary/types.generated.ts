import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"
import * as mfs from "res-pareto-filesystem"

export namespace GDirNodeData {
    
    export namespace Ptype {}
    export type Ptype = 
        | ['directory', null]
        | ['file', null]
        | ['unknown', null]
}
export type GDirNodeData = {
    readonly 'path': string
    readonly 'type': GDirNodeData.Ptype
}
export type UDirNodeData = GDirNodeData

export namespace GReadDirectoryResult {
    
    export namespace O {}
    export type O = pt.Dictionary<UDirNodeData>
}
export type GReadDirectoryResult = null | GReadDirectoryResult.O
export type UReadDirectoryResult = GReadDirectoryResult

export namespace GReadOptionalDirectoryData {
    
    export namespace Pallow {}
    export type Pallow = {
        readonly 'isNotADirectory'?: boolean
        readonly 'noEntity'?: boolean
    }
}
export type GReadOptionalDirectoryData = {
    readonly 'allow': GReadOptionalDirectoryData.Pallow
    readonly 'fs': mfs.TReadDirectory_$Data
}
export type UReadOptionalDirectoryData = GReadOptionalDirectoryData

export namespace GReadOptionalDirectoryResult {}
export type GReadOptionalDirectoryResult = null | UReadDirectoryResult
export type UReadOptionalDirectoryResult = GReadOptionalDirectoryResult
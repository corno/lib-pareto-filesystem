import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_main from "../main"
import * as g_this from "./glossary"

export namespace D {
    
    
    
    
}

export namespace A {
    
    export type createReadDirectoryOrAbort = ($se: {
        readonly 'onError': g_common.ASYNC.I.String
    }) => g_main.ASYNC.A.F.ReadDirectoryOrAbort
    
    export type createReadOptionalDirectory = ($se: {
        readonly 'onError': g_common.ASYNC.I.String
    }) => g_main.ASYNC.A.F.ReadOptionalDirectory
    
    export type createUnlinkFireAndForget = () => g_this.ASYNC.A.C.CreateUnlinkFireAndForget
    
    export type createWriteFileFireAndForget = () => g_this.ASYNC.A.C.CreateWriteFileFireAndForget
}

export type API = {
    readonly 'createReadDirectoryOrAbort': A.createReadDirectoryOrAbort
    readonly 'createReadOptionalDirectory': A.createReadOptionalDirectory
    readonly 'createUnlinkFireAndForget': A.createUnlinkFireAndForget
    readonly 'createWriteFileFireAndForget': A.createWriteFileFireAndForget
}
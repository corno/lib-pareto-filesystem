import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"

export type createMkdirErrorMessage = g_this.F.CreateMkdirErrorMessage

export type createReadDirErrorMessage = g_this.F.CreateReadDirErrorMessage

export type createReadFileErrorMessage = g_this.F.CreateReadFileErrorMessage

export type createRmdirErrorMessage = g_this.F.CreateRmdirErrorMessage

export type createUnlinkErrorMessage = g_this.F.CreateUnlinkErrorMessage

export type createWriteFileErrorMessage = g_this.F.CreateWriteFileErrorMessage

export type API = {
    createMkdirErrorMessage: createMkdirErrorMessage
    createReadDirErrorMessage: createReadDirErrorMessage
    createReadFileErrorMessage: createReadFileErrorMessage
    createRmdirErrorMessage: createRmdirErrorMessage
    createUnlinkErrorMessage: createUnlinkErrorMessage
    createWriteFileErrorMessage: createWriteFileErrorMessage
}
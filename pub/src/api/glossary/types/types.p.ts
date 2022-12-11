import * as fs from "res-pareto-filesystem"

export type TDirNodeData = {
    readonly "path": string
    readonly "type":
    | ["directory", null]
    | ["file", null]
    | ["unknown", null]
}

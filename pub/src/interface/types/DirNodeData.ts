
export type TDirNodeData = {
    readonly path: string
    readonly type:
    | ["directory", {}]
    | ["file", {}]
    | ["unknown", {}]
}

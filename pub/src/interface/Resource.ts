import * as pt from "pareto-core-types"

export type StreamConsumer = {
    onData: ($: string) => void
    onEnd: () => void
}

export type Resource<ID, DATA> = {
    get: (
        $: {
            id: ID;
        },
        $i: {
            onNotExists: () => void;
            onFailed: () => void;
            init: () => StreamConsumer
            //startAsync: ($: pt.AsyncNonValue) => void
        }
    ) => pt.AsyncNonValue
}
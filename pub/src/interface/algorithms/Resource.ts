import * as pt from "pareto-core-types"
import { IStreamConsumer } from "../interfaces/StreamConsumer";

export type PResource<ID, DATA> = (
    $: {
        id: ID;
    },
    $i: {
        onNotExists: () => void;
        onFailed: () => void;
        init: () => IStreamConsumer
        //startAsync: ($: pt.AsyncNonValue) => void
    },
    $s: pa.StartAsync
) => void

import * as pb from "pareto-core-exe"
import * as pl from "pareto-core-lib"
import * as rt from "../esc/implementation/runTests"


pb.runProgram(
    ($) => {
        // if ($.argument === undefined) {
        //     pl.panic("missing testDataDir")
        // }
        // rt.runTests(
        //     $.argument,
        // )
    }
)

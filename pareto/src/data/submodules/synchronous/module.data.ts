import * as pd from 'pareto-core-data'

import { external, main, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"
import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as pure } from "./pure.api.data"

import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: g_project.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "fs": external("res-pareto-filesystem"),
            "common": external("glo-pareto-common"),
        }),
    },
    'api': {
        'root': pure,
        'imports': d({
            "this": this_(),
            "fs": external("res-pareto-filesystem"),
        }),
    },
    'implementation': ['typescript', null],

}
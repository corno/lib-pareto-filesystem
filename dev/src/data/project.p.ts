import * as pr from "pareto-core-raw"

import * as NProject from "lib-pareto-typescript-project/dist/modules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.p"

export const $: NProject.TProject = {
    'modules': d({
        "main": {
            'definition': api,
            'implementation': {}

        },
    }),
    'main': "main"
}
import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.p"

export const $: mproject.TProject = {
    'name': "lib-pareto-filesystem",

    'author': "Corno",
    'description': "helper functions to make working with the filesystem easier than the low level functionality of res-pareto-filesystem",
    'license': "ISC",

    'type': ['library', {}],
    'modules': d({
        "main": {
            'definition': api,

        },
    }),
    'main': "main",
    'pubdependencies': d({
        "res-pareto-filesystem": {},
    }),
    'testdependencies': d({}),
}
import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.data"

export const $: mproject.TProject = {
    'author': "Corno",
    'description': "helper functions to make working with the filesystem easier than the low level functionality of res-pareto-filesystem",
    'license': "ISC",

    'pubdependencies': d({
        "res-pareto-filesystem": {},
    }),
    'type': ['library', {
        'main': {
            'definition': api,

        },
        'submodules': d({
        }),
        'test': {
            'dependencies': d({
                "res-pareto-tostring": {},
            }),
        }
    }],
}
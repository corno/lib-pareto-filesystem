import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"

export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "helper functions to make working with the filesystem easier than the low level functionality of res-pareto-filesystem",
    'license': "ISC",

    'dependencies': d({
        "res-pareto-filesystem": {},
    }),
    'type': ['library', {
        'main': {
            'definition': api,

        },
        'submodules': d({
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-tostring": {},
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}
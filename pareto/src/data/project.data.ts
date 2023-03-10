import * as pd from 'pareto-core-data'

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as errormessagecreators } from "./submodules/ErrorMessagesCreators/module.data"
import { $ as errorhandlers } from "./submodules/ErrorHandlers/module.data"

import { $ as bindings } from "./main/bindings.api.data"
import { $ as pure } from "./main/pure.api.data"
import { $ as glossary } from "./main/glossary.data"

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "helper functions to make working with the filesystem easier than the low level functionality of res-pareto-filesystem",
    'license': "TBD",

    'dependencies': d({
        "res-pareto-filesystem": null,
    }),
    'type': ['library', {
        'main': {
            'glossary': {
                'root': glossary,
                'imports': d({
                    "fs": external("res-pareto-filesystem"),
                    "common": external("glo-pareto-common"),
                }),
            },
            'bindings': {
                'api': {
                    'root': bindings,
                    'imports': d({
                        "fs": external("res-pareto-filesystem"),
                        "this": this_(),
                    }),
                },
                'implementation': ['typescript', null],

            },
            'pure algorithms': {
                'api': {
                    'root': pure,
                    'imports': d({
                        "fs": external("res-pareto-filesystem"),
                        "this": this_(),
                    }),
                },
                'implementation': ['typescript', null],

            },
        },
        'submodules': d({
            "errormessagecreators": errormessagecreators,
            "errorhandlers": errorhandlers,
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-tostring": null,
            }),
            'glossary': {
                'parameters': d({}),
                'types': d({}),
                'type': ['synchronous', {
                    'builders': d({}),
                    'functions': d<gglossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),
                }],
            },
            'imports': d({}),

        }
    }],
}
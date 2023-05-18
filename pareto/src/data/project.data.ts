import * as pd from 'pareto-core-data'

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as errormessagecreators } from "./submodules/ErrorMessagesCreators/module.data"
import { $ as errorhandlers } from "./submodules/ErrorHandlers/module.data"

import { $ as bindings } from "./bindings/moduledefintion.data"
import { $ as api } from "./main/api.data"
import { $ as glossary } from "./main/glossary.data"

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "helper functions to make working with the filesystem easier than the low level functionality of res-pareto-filesystem",
    'license': "TBD",

    'dependencies': d({
        "res-pareto-filesystem": null,
    }),
    'type': ['library', {
        'main': {
            'definition': {
                'glossary': {
                    'root': glossary,
                    'imports': d({
                        "fs": external("res-pareto-filesystem"),
                        "common": external("glo-pareto-common"),
                    }),
                },
                'api': {
                    'root': api,
                    'imports': d({
                        "fs": external("res-pareto-filesystem"),
                        "this": this_(),
                    }),
                },
            },
            'implementation': ['typescript', null],

        },
        'bindings': [true, {
            'definition': bindings,
            'implementation': ['typescript', null],

        }],
        'submodules': d({
            "errormessagecreators": errormessagecreators,
            "errorhandlers": errorhandlers,
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-tostring": null,
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'glossary parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        }
    }],
}
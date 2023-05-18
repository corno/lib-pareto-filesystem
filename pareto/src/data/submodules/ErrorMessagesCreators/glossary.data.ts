import * as pd from 'pareto-core-data'

import {
    typeReference,
    data,
    sfunction,
    externalTypeReference,
    imp,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
    }),
    'imports': d({
        "common": imp(),
        "fs": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "Mkdir": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("fs", "MkdirError"))),
            "Rmdir": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("fs", "RmdirError"))),
            "ReadDir": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("fs", "ReadDirError"))),
            "ReadFile": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("fs", "ReadFileError"))),
            "Unlink": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("fs", "UnlinkError"))),
            "WriteFile": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("fs", "WriteFileError"))),
        }),
    },
}
import * as pd from 'pareto-core-data'

import { constructor, aExternalInterfaceReference, imp } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "main": imp({}),
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({}),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "CreateUnlinkFireAndForget": constructor(aExternalInterfaceReference("main", "UnlinkFireAndForget"), {
                "errorHandler": aExternalInterfaceReference("common", "String")
            }),
            "CreateWriteFileFireAndForget": constructor(aExternalInterfaceReference("main", "WriteFileFireAndForget"), {
                "errorHandler": aExternalInterfaceReference("common", "String")
            }),
        }),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),

    },
}
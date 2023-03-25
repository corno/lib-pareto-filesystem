import * as pd from 'pareto-core-data'

import {
    constructor, aInterfaceMethod, aInterfaceReference, externalTypeReference, imp, aInterface
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
    'imports': d({
        "common": imp({}),
        "fs": imp({}),
    }),
    'types': d({
    }),
    'asynchronous': {
        'interfaces': d({
            "String": aInterface( aInterfaceMethod(externalTypeReference("common", "String"))),

            "Mkdir": aInterface(aInterfaceMethod(externalTypeReference("fs", "AnnotatedMkdirError"))),
            //"Rmdir":aInterface( aInterfaceMethod(externalTypeReference("fs", "AnnotatedRmdirError"))),
            "ReadDir":aInterface( aInterfaceMethod(externalTypeReference("fs", "AnnotatedReadDirError"))),
            "ReadFile":aInterface( aInterfaceMethod(externalTypeReference("fs", "AnnotatedReadFileError"))),
            "Unlink": aInterface(aInterfaceMethod(externalTypeReference("fs", "AnnotatedUnlinkError"))),
            "WriteFile": aInterface(aInterfaceMethod(externalTypeReference("fs", "AnnotatedWriteFileError"))),
        }),
        'algorithms': d({
            "Mkdir": constructor(aInterfaceReference("Mkdir"), {
                "handler": aInterfaceReference("String")
            }),
            // "Rmdir": constructor(aInterfaceReference("Rmdir"), {
            //     "handler": aInterfaceReference("String")
            // }),
            "ReadDir": constructor(aInterfaceReference("ReadDir"), {
                "handler": aInterfaceReference("String")
            }),
            "ReadFile": constructor(aInterfaceReference("ReadFile"), {
                "handler": aInterfaceReference("String")
            }),
            "Unlink": constructor(aInterfaceReference("Unlink"), {
                "handler": aInterfaceReference("String")
            }),
            "WriteFile": constructor(aInterfaceReference("WriteFile"), {
                "handler": aInterfaceReference("String")
            }),
        }),
        
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
        
    },

}
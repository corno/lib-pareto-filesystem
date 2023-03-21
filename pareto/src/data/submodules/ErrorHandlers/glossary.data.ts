import * as pd from 'pareto-core-data'

import {
    aconstructor, aInterfaceMethod, aInterfaceReference, externalTypeReference, imp
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
            "String": aInterfaceMethod(externalTypeReference("common", "String")),

            "Mkdir": aInterfaceMethod(externalTypeReference("fs", "AnnotatedMkdirError")),
            //"Rmdir": aInterfaceMethod(externalTypeReference("fs", "AnnotatedRmdirError")),
            "ReadDir": aInterfaceMethod(externalTypeReference("fs", "AnnotatedReadDirError")),
            "ReadFile": aInterfaceMethod(externalTypeReference("fs", "AnnotatedReadFileError")),
            "Unlink": aInterfaceMethod(externalTypeReference("fs", "AnnotatedUnlinkError")),
            "WriteFile": aInterfaceMethod(externalTypeReference("fs", "AnnotatedWriteFileError")),
        }),
        'algorithms': d({
            "Mkdir": aconstructor(aInterfaceReference("Mkdir"), {
                "handler": aInterfaceReference("String")
            }),
            // "Rmdir": aconstructor(aInterfaceReference("Rmdir"), {
            //     "handler": aInterfaceReference("String")
            // }),
            "ReadDir": aconstructor(aInterfaceReference("ReadDir"), {
                "handler": aInterfaceReference("String")
            }),
            "ReadFile": aconstructor(aInterfaceReference("ReadFile"), {
                "handler": aInterfaceReference("String")
            }),
            "Unlink": aconstructor(aInterfaceReference("Unlink"), {
                "handler": aInterfaceReference("String")
            }),
            "WriteFile": aconstructor(aInterfaceReference("WriteFile"), {
                "handler": aInterfaceReference("String")
            }),
        }),
        
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
        
    },

}
import * as pd from 'pareto-core-data'

import {
    constructor,
    afunction,
    aInterfaceMethod,
    aInterfaceReference,
    boolean, data, externalTypeReference, group, imp, inf, member, optional, ref, string, type, typeReference, aInterface
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "fs": imp({}),
        "common": imp({}),
    }),
    'types': d({
        "ReadOptionalDirectoryResult": type(optional(ref(externalTypeReference("fs", "ReadDirectory_Success")))),
        "ReadOptionalDirectoryData": type(group({
            "fs": member(ref(externalTypeReference("fs", "ReadDirectory_Data"))),
            "allow": member(group({
                "noEntity": member(boolean()),
                "isNotADirectory": member(boolean()),
            })),
        })),
        "WriteFileData": type(group({
            "settings": member(ref(externalTypeReference("fs", "WriteFileData"))),
            "data": member(string()),
        }))
    }),
    'asynchronous': {
        'interfaces': d({
            "HandleAnnotatedReadDirError": aInterface(aInterfaceMethod(externalTypeReference("fs", "AnnotatedReadDirError"), null)),
            "HandleAnnotatedUnlinkError": aInterface(aInterfaceMethod(externalTypeReference("fs", "AnnotatedUnlinkError"), null)),
            "HandleAnnotatedWriteFileError": aInterface(aInterfaceMethod(externalTypeReference("fs", "AnnotatedWriteFileError"), null)),


            "UnlinkFireAndForget": aInterface(aInterfaceMethod(externalTypeReference("fs", "Unlink_Data"), null)),
            "WriteFileFireAndForget": aInterface(aInterfaceMethod(typeReference("WriteFileData"), null)),

        }),
        'algorithms': d({
            "CreateUnlinkFireAndForget": constructor(aInterfaceReference("UnlinkFireAndForget"), {
                "errorHandler": aInterfaceReference("HandleAnnotatedUnlinkError")
            }),
            "CreateWriteFileFireAndForget": constructor(aInterfaceReference("WriteFileFireAndForget"), {
                "errorHandler": aInterfaceReference("HandleAnnotatedUnlinkError")
            }),
            "ReadFileOrAbort": afunction(externalTypeReference("common", "String"), externalTypeReference("fs", "ReadFile_Data")),
            "ReadDirectoryOrAbort": afunction(externalTypeReference("fs", "ReadDirectory_Success"), externalTypeReference("fs", "ReadDirectory_Data")),
            "ReadOptionalDirectory": afunction(typeReference("ReadOptionalDirectoryResult"), typeReference("ReadOptionalDirectoryData")),
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },

}
import * as pd from 'pareto-core-data'

import {
    string, member,group,
    typeReference,
    boolean,
    type,
    optional,
    reference,
    sfunc,
    builderMethod,
    builderReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
        "ReadOptionalDirectoryResult": type(optional(reference("fs", "ReadDirectory_Success"))),
        "ReadOptionalDirectoryData": type(group({
            "fs": member(reference("fs", "ReadDirectory_Data")),
            "allow": member(group({
                "noEntity": member(boolean()),
                "isNotADirectory": member(boolean()),
            })),
        })),
        "WriteFileData": type(group({
            "settings": member(reference("fs", "WriteFileData")),
            "data": member(string()),
        }))
    }),
    'type': ['synchronous', {
        'builders': d({
            "UnlinkFireAndForget": builderMethod(typeReference("fs", "Unlink_Data"), null),
            "WriteFile": builderMethod(typeReference("WriteFileData"), null),


            "HandleAnnotatedUnlinkError": builderMethod(typeReference("fs", "AnnotatedUnlinkError"), null),
            "HandleAnnotatedWriteFileError": builderMethod(typeReference("fs", "AnnotatedWriteFileError"), null),
        }),
        'functions': d({


            "TempHandleAnnotatedUnlinkError": sfunc(typeReference("common", "Null"), builderReference("HandleAnnotatedUnlinkError"), null, null),
            "TempHandleAnnotatedWriteFileError": sfunc(typeReference("common", "Null"), builderReference("HandleAnnotatedWriteFileError"), null, null),

            "TempUnlinkFireAndForget": sfunc(typeReference("common", "Null"), builderReference("UnlinkFireAndForget"), null, null),
            "TempWriteFile": sfunc(typeReference("common", "Null"), builderReference("WriteFile"), null, null),


            "UnlinkFireAndForget": sfunc(typeReference("fs", "Unlink_Data"), null, null, null),
            "WriteFile": sfunc(typeReference("WriteFileData"), null, null, null),
        }),

    }],
}
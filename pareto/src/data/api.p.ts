import * as pr from 'pareto-core-raw'

import {
    string,
    null_,
    reference,
    boolean,
    nested,
    typeReference,
    procedure, dictionary, group, member, taggedUnion, types, _function, template, parameter,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fs": "res-pareto-filesystem",
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({
            "Optional": {
                'parameters': d({ "Type": {}, }),
                'type': taggedUnion({
                    "set": parameter("Type"),
                    "not set": group({}),
                })
            }
        }),
        'types': types({
            "ReadDirectoryResult": dictionary(reference("DirNodeData")),
            "ReadOptionalDirectoryResult": template("Optional", {
                "Type": reference("ReadDirectoryResult")
            }),
            "DirNodeData": group({
                "path": member(string()),
                "type": member(taggedUnion({
                    "directory": null_(),
                    "file": null_(),
                    "unknown": null_(),
                }))
            }),
            "ReadOptionalDirectoryData": group({
                "fs": member(reference("fs", "ReadDirectory_Data")),
                "allow": member(group({
                    "noEntity": member(boolean(), true),
                    "isNotADirectory": member(boolean(), true),
                })),
            }),
        }),
        'interfaces': d({}),
        'functions': d({
            "CreateMkdirErrorMessage": _function(typeReference("fs", "MkdirError"), typeReference("common", "String")),
            "CreateRmdirErrorMessage": _function(typeReference("fs", "RmdirError"), typeReference("common", "String")),
            "CreateReadDirErrorMessage": _function(typeReference("fs", "ReadDirError"), typeReference("common", "String")),
            "CreateReadFileErrorMessage": _function(typeReference("fs", "ReadFileError"), typeReference("common", "String")),
            "CreateUnlinkErrorMessage": _function(typeReference("fs", "UnlinkError"), typeReference("common", "String")),
            "CreateWriteFileErrorMessage": _function(typeReference("fs", "UnlinkError"), typeReference("common", "String")),

            "HandleAnnotatedReadDirError": procedure(typeReference("fs", "AnnotatedReadDirError")),
            "HandleAnnotatedUnlinkError": procedure(typeReference("fs", "AnnotatedUnlinkError")),

            "ReadFileOrAbort": _function(typeReference("fs", "ReadFile_Data"), typeReference("common", "String"), true),
            "ReadDirectoryOrAbort": _function(typeReference("fs", "ReadDirectory_Data"), typeReference("ReadDirectoryResult"), true),
            "ReadOptionalDirectory": _function(typeReference("ReadOptionalDirectoryData"), typeReference("ReadOptionalDirectoryResult"), true),

            "UnlinkFireAndForget": procedure(typeReference("fs", "Unlink_Data")),
            "WriteFile": procedure(typeReference("fs", "WriteFileData")),
        }),
    },
    'api': {
        'imports': d({
            "fs": "res-pareto-filesystem",
        }),
        'algorithms': d({
            "createMkdirErrorMessage": algorithm(definitionReference("CreateMkdirErrorMessage")),
            "createReadDirectoryOrAbort": algorithm(definitionReference("ReadDirectoryOrAbort"), constructor(null, {
                "onError": definitionReference("HandleAnnotatedReadDirError"),
                "readDirectory": definitionReference("fs", "ReadDirectory"),
            })),
            "createReadDirErrorMessage": algorithm(definitionReference("CreateReadDirErrorMessage")),
            "createReadFileErrorMessage": algorithm(definitionReference("CreateReadFileErrorMessage")),
            // "createReadFileOrAbort": ['foo', {
            //     data: ['null', null],
            //     dependencies: d({
            //         "onError": {
            //             type: ['procedure', externalReference("fs", "AnnotatedFSError<mfs.TReadFileError>")],

            //         },
            //     }),
            //     result: {
            //         type: ['function', {
            //             function: "ReadFileOrAbort",
            //             async: true,
            //         }],
            //     }
            // }],
            "createReadOptionalDirectory": algorithm(definitionReference("ReadOptionalDirectory"), constructor(null, {
                "onError": definitionReference("HandleAnnotatedReadDirError"),
                "readDirectory": definitionReference("fs", "ReadDirectory"),
            })),
            // "createReadOptionalFile": ['algorithm', {
            //     type: ['function', {
            //         'function': "XX"
            //     }],
            // }],
            "createRmdirErrorMessage": algorithm(definitionReference("CreateRmdirErrorMessage")),
            "createUnlinkErrorMessage": algorithm(definitionReference("CreateUnlinkErrorMessage")),
            "createUnlinkFireAndForget": algorithm(definitionReference("UnlinkFireAndForget"), constructor(null, {
                "onError": definitionReference("HandleAnnotatedUnlinkError"),
                "unlink": definitionReference("fs", "Unlink"),
            })),
            "createWriteFileErrorMessage": algorithm(definitionReference("CreateWriteFileErrorMessage")),
            "createWriteFileFireAndForget": algorithm(definitionReference("WriteFile"), constructor(null, {
                "createWriteStream": definitionReference("fs", "CreateWriteStream"),
            })),

        })
    },
}
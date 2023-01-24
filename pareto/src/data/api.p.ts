import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    optional,
    externalTypeReference,
    typeReference,
    procedure,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import {definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fs": "res-pareto-filesystem",
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'namespace': {
            'types': types({
                "ReadDirectoryResult": optional(dictionary(ref("DirNodeData"))),
                "ReadOptionalDirectoryResult": optional(ref("ReadDirectoryResult")),
                "DirNodeData": group({
                    "path": member(str()),
                    "type": member(taggedUnion({
                        "directory": null_(),
                        "file": null_(),
                        "unknown": null_(),
                    }))
                }),
                "ReadOptionalDirectoryData": group({
                    "fs": member(er("fs", "ReadDirectory_Data")),
                    "allow": member(group({
                        "noEntity": member(bln(), true),
                        "isNotADirectory": member(bln(), true),
                    })),
                }),
                // readonly "fs": fs.TReadDirectory_Data
                // readonly "allow": {
                //     readonly "noEntity"?: boolean
                //     readonly "isNotADirectory"?: boolean
                // }
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "CreateMkdirErrorMessage": _function(externalTypeReference("fs", "MkdirError"),externalTypeReference("common", "String")),
            "CreateRmdirErrorMessage": _function(externalTypeReference("fs", "RmdirError"),externalTypeReference("common", "String")),
            "CreateReadDirErrorMessage": _function(externalTypeReference("fs", "ReadDirError"),externalTypeReference("common", "String")),
            "CreateReadFileErrorMessage": _function(externalTypeReference("fs", "ReadFileError"),externalTypeReference("common", "String")),
            "CreateUnlinkErrorMessage": _function(externalTypeReference("fs", "UnlinkError"),externalTypeReference("common", "String")),
            "CreateWriteFileErrorMessage": _function(externalTypeReference("fs", "UnlinkError"),externalTypeReference("common", "String")),
            
            "HandleAnnotatedReadDirError": procedure(externalTypeReference("fs", "AnnotatedReadDirError")),
            "HandleAnnotatedUnlinkError": procedure(externalTypeReference("fs", "AnnotatedUnlinkError")),
            
            "ReadFileOrAbort": _function(externalTypeReference("fs", "ReadFile_Data"),externalTypeReference("common", "String"), true),
            "ReadDirectoryOrAbort": _function(externalTypeReference("fs", "ReadDirectory_Data"),typeReference("ReadDirectoryResult"), true),
            "ReadOptionalDirectory": _function(typeReference("ReadOptionalDirectoryData"),typeReference("ReadOptionalDirectoryResult"), true),

            "UnlinkFireAndForget": procedure(externalTypeReference("fs", "Unlink_Data")),
            "WriteFile": procedure(externalTypeReference("fs", "WriteFileData")),
        }),
    },
    'api': {
        'imports': d({
            "fs": "res-pareto-filesystem",
        }),
        'algorithms': d({
            "createMkdirErrorMessage": {
                'type': ['reference', null],
                'definition': {
                    'function': "CreateMkdirErrorMessage"
                },
            },
            "createReadDirectoryOrAbort": {
                'definition': {
                    'function': "ReadDirectoryOrAbort",
                    'async': true,
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "onError": {
                            'function': "HandleAnnotatedReadDirError"
                        },
                        "readDirectory": {
                            'context': ['import', "fs"],
                            'function': "ReadDirectory",
                        },
                    }),
                }]
            },
            "createReadDirErrorMessage": {
                'type': ['reference', null],
                'definition': {
                    'function': "CreateReadDirErrorMessage",
                },
            },
            "createReadFileErrorMessage": {
                'type': ['reference', null],
                'definition': {
                    'function': "CreateReadFileErrorMessage"
                },
            },
            // "createReadFileOrAbort": ['constructor', {
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
            "createReadOptionalDirectory": {
                'definition': {
                    'function': "ReadOptionalDirectory",
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "onError": {
                            'function': "HandleAnnotatedReadDirError"
                        },
                        "readDirectory": {
                            'context': ['import', "fs"],
                            'function': "ReadDirectory",
                        },
                    }),
                }],
            },
            // "createReadOptionalFile": ['algorithm', {
            //     type: ['function', {
            //         'function': "XX"
            //     }],
            // }],
            "createRmdirErrorMessage": {
                'type': ['reference', null],
                'definition': {
                    'function': "CreateRmdirErrorMessage"
                },
            },
            "createUnlinkErrorMessage": {
                'type': ['reference', null],
                'definition': {
                    'function': "CreateUnlinkErrorMessage"
                },
            },
            "createUnlinkFireAndForget": {
                'definition': {
                    'function': "UnlinkFireAndForget"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "onError": {
                            'function': "HandleAnnotatedUnlinkError"
                        },
                        "unlink": {
                            'context': ['import', "fs"],
                            'function': "Unlink",
                        },
                    }),
                }]
            },
            "createWriteFileErrorMessage": {
                'type': ['reference', null],
                'definition': {
                    'function': "CreateWriteFileErrorMessage"
                },
            },
            "createWriteFileFireAndForget": {
                'definition': {
                    'function': "WriteFile"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "createWriteStream": {
                            'context': ['import', "fs"],
                            'function': "CreateWriteStream",
                        },
                    }),
                }]
            },
        })
    },
}
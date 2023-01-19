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
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "fs": "res-pareto-filesystem",
            "common": "glo-pareto-common",
        }),
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
            "CreateMkdirErrorMessage": {
                'data': externalTypeReference("fs", "MkdirError"),
                'return value': externalTypeReference("common", "String")
            },
            "CreateRmdirErrorMessage": {
                'data': externalTypeReference("fs", "RmdirError"),
                'return value': externalTypeReference("common", "String")
            },
            "CreateReadDirErrorMessage": {
                'data': externalTypeReference("fs", "ReadDirError"),
                'return value': externalTypeReference("common", "String")
            },
            "CreateReadFileErrorMessage": {
                'data': externalTypeReference("fs", "ReadFileError"),
                'return value': externalTypeReference("common", "String")
            },
            "CreateUnlinkErrorMessage": {
                'data': externalTypeReference("fs", "UnlinkError"),
                'return value': externalTypeReference("common", "String")
            },
            "CreateWriteFileErrorMessage": {
                'data': externalTypeReference("fs", "UnlinkError"),
                'return value': externalTypeReference("common", "String")
            },
            "ReadFileOrAbort": {
                'async': true,
                'data': externalTypeReference("fs", "ReadFile_Data"),
                'return value': externalTypeReference("common", "String")
            },
            "ReadDirectoryOrAbort": {
                'async': true,
                'data': externalTypeReference("fs", "ReadDirectory_Data"),
                'return value': typeReference("ReadDirectoryResult")
            },
            "ReadOptionalDirectory": {
                'async': true,
                'data': typeReference("ReadOptionalDirectoryData"),
                'return value': typeReference("ReadOptionalDirectoryResult")
            },


        }),
        'callbacks': d({}),
        'pipes': d({}),
    },
    'api': {
        'imports': d({
            "fs": "res-pareto-filesystem",
        }),
        'algorithms': d({
            "createMkdirErrorMessage": {
                'type': ['reference', null],
                'definition': ['function', {
                    'function': "CreateMkdirErrorMessage"
                }],
            },
            "createReadDirectoryOrAbort": {
                'definition': ['function', {
                    'function': "ReadDirectoryOrAbort",
                    'async': true,
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "onError": ['procedure', externalTypeReference("fs", "AnnotatedReadDirError")],
                        "readDirectory": ['function', {
                            'context': ['import', "fs"],
                            'function': "ReadDirectory",
                            'async': true,
                        }]
                    }),
                }]
            },
            "createReadDirErrorMessage": {
                'type': ['reference', null],
                'definition': ['function', {
                    'function': "CreateReadDirErrorMessage",
                }],
            },
            "createReadFileErrorMessage": {
                'type': ['reference', null],
                'definition': ['function', {
                    'function': "CreateReadFileErrorMessage"
                }],
            },
            // // "createReadFileOrAbort": ['constructor', {
            // //     data: ['null', null],
            // //     dependencies: d({
            // //         "onError": {
            // //             type: ['procedure', externalReference("fs", "AnnotatedFSError<mfs.TReadFileError>")],

            // //         },
            // //     }),
            // //     result: {
            // //         type: ['function', {
            // //             function: "ReadFileOrAbort",
            // //             async: true,
            // //         }],
            // //     }
            // // }],
            "createReadOptionalDirectory": {
                'definition': ['function', {
                    'function': "ReadOptionalDirectory",
                    'async': true,
                }],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "onError": ['procedure', externalTypeReference("fs", "AnnotatedReadDirError")],
                        "readDirectory": ['function', {
                            'context': ['import', "fs"],
                            'function': "ReadDirectory",
                            'async': true,
                        }],
                    }),
                }],
            },
            // // "createReadOptionalFile": ['algorithm', {
            // //     type: ['function', {
            // //         'function': "XX"
            // //     }],
            // // }],
            "createRmdirErrorMessage": {
                'type': ['reference', null],
                'definition': ['function', {
                    'function': "CreateRmdirErrorMessage"
                }],
            },
            "createUnlinkErrorMessage": {
                'type': ['reference', null],
                'definition': ['function', {
                    'function': "CreateUnlinkErrorMessage"
                }],
            },
            "createUnlinkFireAndForget": {
                'definition': ['procedure',  externalTypeReference("fs", "Unlink_Data")],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "onError": ['procedure', externalTypeReference("fs", "AnnotatedUnlinkError")],
                        "unlink": ['function', {
                            'context': ['import', "fs"],
                            'function': "Unlink",
                            'async': true,
                        }],
                    }),
                }]
            },
            "createWriteFileErrorMessage": {
                'type': ['reference', null],
                'definition': ['function', {
                    'function': "CreateWriteFileErrorMessage"
                }],
            },
            "createWriteFileFireAndForget": {
                'definition': ['procedure', externalTypeReference("fs", "WriteFileData")],
                'type': ['constructor', {
                    'configuration data': null,
                    'dependencies': d({
                        "createWriteStream": ['interface', {
                            'context': ['import', "fs"],
                            'interface': "CreateWriteStream",
                        }],
                    }),
                }]
            },
        })
    },
}
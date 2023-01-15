import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    array,
    optional,
    nullType,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary
export const project: NProject.TProject = {
    'modules': wd({
        "main": {
            'definition': {
                'glossary': {
                    'imports': wd({
                        "fs": "res-pareto-filesystem"
                    }),
                    'types': types({
                        "ReadDirectoryResult": optional(dictionary(ref("DirNodeData"))),
                        "ReadOptionalDirectoryResult": optional(ref("ReadDirectoryResult")),
                        "DirNodeData": group({
                            "path": member(str()),
                            "type": member(taggedUnion({
                                "directory": nullType(),
                                "file": nullType(),
                                "unknown": nullType(),
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
                    'functions': wd({
                        "CreateMkdirErrorMessage": {
                            'data': externalReference("fs", "MkdirError"),
                            'return value': string()
                        },
                        "CreateRmdirErrorMessage": {
                            'data': externalReference("fs", "RmdirError"),
                            'return value': string()
                        },
                        "CreateReadDirErrorMessage": {
                            'data': externalReference("fs", "ReadDirError"),
                            'return value': string()
                        },
                        "CreateReadFileErrorMessage": {
                            'data': externalReference("fs", "ReadFileError"),
                            'return value': string()
                        },
                        "CreateUnlinkErrorMessage": {
                            'data': externalReference("fs", "UnlinkError"),
                            'return value': string()
                        },
                        "CreateWriteFileErrorMessage": {
                            'data': externalReference("fs", "UnlinkError"),
                            'return value': string()
                        },
                        "ReadFileOrAbort": {
                            'async': true,
                            'data': externalReference("fs", "ReadFile_Data"),
                            'return value': string()
                        },
                        "ReadDirectoryOrAbort": {
                            'async': true,
                            'data': externalReference("fs", "ReadDirectory_Data"),
                            'return value': reference("ReadDirectoryResult")
                        },
                        "ReadOptionalDirectory": {
                            'async': true,
                            'data': reference("ReadOptionalDirectoryData"),
                            'return value': reference("ReadOptionalDirectoryResult")
                        },


                    }),
                    'interfaces': wd({}),
                    'callbacks': wd({}),
                    'pipes': wd({}),
                },
                'api': {
                    'imports': wd({
                        "fs": "res-pareto-filesystem",
                    }),
                    'algorithms': wd({
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
                                'configuration data': ['null', null],
                                'dependencies': wd({
                                    "onError": ['procedure', ['type', externalReference("fs", "AnnotatedReadDirError")]],
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
                        // //     dependencies: wd({
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
                                'configuration data': ['null', null],
                                'dependencies': wd({
                                    "onError": ['procedure', ['type', externalReference("fs", "AnnotatedReadDirError")]],
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
                            'definition': ['procedure', ['type', externalReference("fs", "Unlink_Data")]],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({
                                    "onError": ['procedure', ['type', externalReference("fs", "AnnotatedUnlinkError")]],
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
                            'definition': ['procedure', ['type', externalReference("fs", "WriteFileData")]],
                            'type': ['constructor', {
                                'configuration data': ['null', null],
                                'dependencies': wd({
                                    "createWriteStream": ['interface', {
                                        'context': ['import', "fs"],
                                        'interface': "CreateWriteStream",
                                    }],
                                }),
                            }]
                        },
                    })
                },
            },
            'implementation': {}

        },
    }),
    'main': "main"
}
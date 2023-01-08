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
                    'callbacks': wd({
                    }),
                    'interfaces': wd({}),
                },
                'api': {
                    'imports': wd({
                        "fs": "res-pareto-filesystem",
                    }),
                    'algorithms': wd({
                        "createMkdirErrorMessage": ['function', {
                            'function': "CreateMkdirErrorMessage"
                        }],
                        "createReadDirectoryOrAbort": ['function constructor', {
                            'configuration data': ['null', null],
                            'dependencies': {
                                'functions': wd({
                                    "readDirectory": {
                                        'context': ['import', "fs"],
                                        'function': "ReadDirectory"
                                    },
                                }),
                                'side effects': wd({
                                    "onError": ['type', externalReference("fs", "AnnotatedFSError<mfs.TReadDirError>")],
                                }),
                            },
                            'function': {
                                'function': "ReadDirectoryOrAbort",
                                'async': true,
                            },
                        }],
                        "createReadDirErrorMessage": ['function', {
                            'function': "CreateReadDirErrorMessage"
                        }],
                        "createReadFileErrorMessage": ['function', {
                            'function': "CreateReadFileErrorMessage"
                        }],
                        // "createReadFileOrAbort": ['constructor', {
                        //     data: ['null', null],
                        //     dependencies: wd({
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
                        "createReadOptionalDirectory": ['function constructor', {
                            'configuration data': ['null', null],
                            'dependencies': {
                                'functions': wd({
                                    "readDirectory": {
                                        'context': ['import', "fs"],
                                        'function': "ReadDirectory"
                                    },
                                }),
                                'side effects': wd({
                                    "onError": ['type', externalReference("fs", "AnnotatedFSError<mfs.TReadDirError>")],
                                }),
                            },
                            'function': {
                                'function': "ReadOptionalDirectory",
                                'async': true,
                            },
                            'result': {
                                'type': ['function', {
                                    'function': "ReadOptionalDirectory",
                                    'async': true,
                                }],
                            }
                        }],
                        // "createReadOptionalFile": ['algorithm', {
                        //     type: ['function', {
                        //         'function': "XX"
                        //     }],
                        // }],
                        "createRmdirErrorMessage": ['function', {
                            'function': "CreateRmdirErrorMessage"
                        }],
                        "createUnlinkErrorMessage": ['function', {
                            'function': "CreateUnlinkErrorMessage"
                        }],
                        "createUnlinkFireAndForget": ['procedure constructor', {
                            'configuration data': ['null', null],
                            'dependencies': {
                                'downstreams': wd({
                                    "onError": ['type', externalReference("fs", "AnnotatedFSError<mfs.TUnlinkError>")],
                                }),
                                'functions': wd({
                                    "unlink": {
                                        'context': ['import', "fs"],
                                        'function': "Unlink"
                                    },
                                }),
                            },
                            'type': ['type', externalReference("fs", "Unlink_Data")],
                        }],
                        "createWriteFileErrorMessage": ['function', {
                            'function': "CreateWriteFileErrorMessage"
                        }],
                        "createWriteFileFireAndForget": ['procedure constructor', {
                            'configuration data': ['null', null],
                            'dependencies': {
                                'downstreams': wd({
                                    "onError": ['type', externalReference("fs", "AnnotatedFSError<mfs.TWriteFileError>")],
                                }),
                                'functions': wd({
                                    "createWriteStream": {
                                        'context': ['import', "fs"],
                                        'function': "CreateWriteStream"
                                    },
                                }),
                            },
                            'type': ['type', externalReference("fs", "WriteFileData")],
                        }],
                    })
                },
            },
            'implementation': {}

        },
    }),
    'main': "main"
}
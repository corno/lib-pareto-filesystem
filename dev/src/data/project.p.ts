import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    _null as nll,
    reference as ref,
    boolean as bln,
    number as nr,
    array,
    optional,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, _null, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary
export const project: NProject.TProject = {
    modules: wd({
        "main": {
            definition: {
                "glossary": {
                    'imports': wd({
                        "fs": "res-pareto-filesystem"
                    }),
                    'types': types({
                        "ReadDirectoryResult": optional(dictionary(ref("DirNodeData"))),
                        "ReadOptionalDirectoryResult": optional(ref("ReadDirectoryResult")),
                        "DirNodeData": group({
                            "path": member(str()),
                            "type": member(taggedUnion({
                                "directory": nll(),
                                "file": nll(),
                                "unknown": nll(),
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
                        "XX": {
                            'data': externalReference("fs", "MkdirError"),
                            'return value': number()
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
                "api": {
                    "imports": wd({
                        "fs": "res-pareto-filesystem",
                    }),
                    "algorithms": wd({

                        //     export type CCreateReadOptionalFile = pt.Creator<
                        //     {
                        //         readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadFileError>>
                        //     },
                        //     api.FReadOptionalFile
                        // >


                        // export type CCreateReadFileOrAbort = pt.Creator<
                        //     {
                        //         readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadFileError>>
                        //     },
                        //     api.FReadFileOrAbort
                        // >

                        // export type CCreateReadOptionalDirectory = pt.Creator<
                        //     {
                        //         readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadDirError>>
                        //         readonly "readDirectory": fs.FReadDirectory

                        //     },
                        //     api.FReadOptionalDirectory
                        // >


                        // export type CCreateReadDirectoryOrAbort = pt.Creator<
                        //     {
                        //         readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TReadDirError>>
                        //         readonly "readDirectory": fs.FReadDirectory
                        //     },
                        //     api.FReadDirectoryOrAbort
                        // >


                        // export type CCreateWriteFileFireAndForget = AsyncProcessingCreator<
                        //     {
                        //         readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TWriteFileError>>
                        //         readonly "createWriteStream": fs.FCreateWriteStream,
                        //     },
                        //     api.PWriteFileFireAndForget
                        // >


                        // export type CCreateUnlinkFireAndForget = AsyncProcessingCreator<
                        //     {
                        //         readonly "onError": pt.Procedure<fs.TAnnotatedFSError<fs.TUnlinkError>>
                        //         readonly "unlink": fs.FUnlink,

                        //     },
                        //     api.PUnlinkFireAndForget
                        // >

                        "createMkdirErrorMessage": ["algorithm", {
                            type: ["function", {
                                'function': "CreateMkdirErrorMessage"
                            }],
                        }],
                        "createReadDirectoryOrAbort": ["constructor", {
                            data: ["null", null],
                            dependencies: wd({
                                "onError": {
                                    type: ["procedure", externalReference("fs", "AnnotatedFSError<mfs.TReadDirError>")],

                                },
                                "readDirectory": {
                                    type: ["function", {
                                        'context': ['import', "fs"],
                                        'function': "ReadDirectory"
                                    }]
                                },
                            }),
                            result: {
                                type: ["function", {
                                    function: "ReadDirectoryOrAbort",
                                    async: true,
                                }],
                            }
                        }],
                        "createReadDirErrorMessage": ["algorithm", {
                            type: ["function", {
                                'function': "CreateReadDirErrorMessage"
                            }],
                        }],
                        "createReadFileErrorMessage": ["algorithm", {
                            type: ["function", {
                                'function': "CreateReadFileErrorMessage"
                            }],
                        }],
                        // "createReadFileOrAbort": ["constructor", {
                        //     data: ["null", null],
                        //     dependencies: wd({
                        //         "onError": {
                        //             type: ["procedure", externalReference("fs", "AnnotatedFSError<mfs.TReadFileError>")],

                        //         },
                        //     }),
                        //     result: {
                        //         type: ["function", {
                        //             function: "ReadFileOrAbort",
                        //             async: true,
                        //         }],
                        //     }
                        // }],
                        "createReadOptionalDirectory": ["constructor", {
                            data: ["null", null],
                            dependencies: wd({
                                "onError": {
                                    type: ["procedure", externalReference("fs", "AnnotatedFSError<mfs.TReadDirError>")],

                                },
                                "readDirectory": {
                                    type: ["function", {
                                        'context': ['import', "fs"],
                                        'function': "ReadDirectory"
                                    }]
                                },
                            }),
                            result: {
                                type: ["function", {
                                    function: "ReadOptionalDirectory",
                                    async: true,
                                }],
                            }
                        }],
                        // "createReadOptionalFile": ["algorithm", {
                        //     type: ["function", {
                        //         'function': "XX"
                        //     }],
                        // }],
                        "createRmdirErrorMessage": ["algorithm", {
                            type: ["function", {
                                'function': "CreateRmdirErrorMessage"
                            }],
                        }],
                        "createUnlinkErrorMessage": ["algorithm", {
                            type: ["function", {
                                'function': "CreateUnlinkErrorMessage"
                            }],
                        }],
                        "createUnlinkFireAndForget": ["constructor", {
                            data: ["null", null],
                            dependencies: wd({
                                "onError": {
                                    type: ["procedure", externalReference("fs", "AnnotatedFSError<mfs.TUnlinkError>")],

                                },
                                "unlink": {
                                    type: ["function", {
                                        'context': ['import', "fs"],
                                        'function': "Unlink"
                                    }]
                                },
                            }),
                            result: {
                                type: ["procedure", externalReference("fs", "Unlink_Data")],
                            }
                        }],
                        "createWriteFileErrorMessage": ["algorithm", {
                            type: ["function", {
                                'function': "CreateWriteFileErrorMessage"
                            }],
                        }],
                        "createWriteFileFireAndForget": ["constructor", {
                            data: ["null", null],
                            dependencies: wd({
                                "onError": {
                                    type: ["procedure", externalReference("fs", "AnnotatedFSError<mfs.TWriteFileError>")],

                                },
                                "createWriteStream": {
                                    type: ["function", {
                                        'context': ['import', "fs"],
                                        'function': "CreateWriteStream"
                                    }]
                                },
                            }),
                            result: {
                                type: ["procedure", externalReference("fs", "WriteFileData")],
                            }
                        }],
                    })
                },
            },
            implementation: {}

        },
    }),
    main: "main"
}
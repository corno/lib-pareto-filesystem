import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        // "createReadFileOrAbort": ['foo', {
        //     data: ['null', null],
        //     dependencies: d({
        //         "onError": {
        //             type: ['procedure', externalReference("fs", "AnnotatedFSError<gfs.TReadFileError>")],

        //         },
        //     }),
        //     result: {
        //         type: ['function', {
        //             function: "ReadFileOrAbort",
        //             async: true,
        //         }],
        //     }
        // }],
        "createReadOptionalDirectory": algorithm(functionReference("this", {}, "ReadOptionalDirectory"), constructor(null, {
            "onError": functionReference("this", {}, "HandleAnnotatedReadDirError"),
            "readDirectory": functionReference("fs", {}, "ReadDirectory"),
        })),
        // "createReadOptionalFile": ['algorithm', {
        //     type: ['function', {
        //         'function': "XX"
        //     }],
        // }],
        "createUnlinkFireAndForget": algorithm(functionReference("this", {}, "UnlinkFireAndForget"), constructor(null, {
            "onError": functionReference("this", {}, "HandleAnnotatedUnlinkError"),
            "unlink": functionReference("fs", {}, "Unlink"),
        })),
        "createReadDirectoryOrAbort": algorithm(functionReference("this", {}, "ReadDirectoryOrAbort"), constructor(null, {
            "onError": functionReference("this", {}, "HandleAnnotatedReadDirError"),
            "readDirectory": functionReference("fs", {}, "ReadDirectory"),
        })),
        "createWriteFileFireAndForget": algorithm(functionReference("this", {}, "WriteFile"), constructor(null, {
            "createFileWriter": functionReference("fs", {}, "CreateFileWriter"),
            "onError": functionReference("this", {}, "HandleAnnotatedWriteFileError"),
        })),

    }),
}
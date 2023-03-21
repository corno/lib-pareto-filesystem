import * as pd from 'pareto-core-data'

import { aconstructor, afunction, algorithm, aSideEffect, dependent } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        // "createReadFileOrAbort": ['foo', {
        //     data: ['null', null],
        //     dependencies: d({
        //         "onError": {
        //             type: ['procedure', externalReference("fs", "AnnotatedFSError<g_fs.TReadFileError>")],

        //         },
        //     }),
        //     result: {
        //         type: ['function', {
        //             function: "ReadFileOrAbort",
        //             async: true,
        //         }],
        //     }
        // }],
        "createReadOptionalDirectory": algorithm(afunction("this", {}, "ReadOptionalDirectory"), {}, dependent(null, {
            "readDirectory": afunction("fs", {}, "ReadDirectory"),
        }, {
            "onError": aSideEffect("this", {}, "HandleAnnotatedReadDirError"),
        })),
        // "createReadOptionalFile": ['algorithm', {
        //     type: ['function', {
        //         'function': "XX"
        //     }],
        // }],
        "createReadDirectoryOrAbort": algorithm(afunction("this", {}, "ReadDirectoryOrAbort"), {}, dependent(null, {
            "readDirectory": afunction("fs", {}, "ReadDirectory"),
        }, {
            "onError": aSideEffect("this", {}, "HandleAnnotatedReadDirError"),
        })),

        "createUnlinkFireAndForget": algorithm(aconstructor("this", {}, "CreateUnlinkFireAndForget"), {}, dependent(null, {
            "unlink": afunction("fs", {}, "Unlink"),
        }, {
        })),
        "createWriteFileFireAndForget": algorithm(aconstructor("this", {}, "CreateWriteFileFireAndForget"), {}, dependent(null, {
            "createFileWriter": aconstructor("fs", {}, "CreateFileWriter"),
        }, {
            "onError": aSideEffect("this", {}, "HandleAnnotatedWriteFileError"),
        })),
    }),
}
import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
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
        "createReadOptionalDirectory": algorithm(functionReference("this", {}, "ReadOptionalDirectory"), constructor(null, {
            "onError": functionReference("this", {}, "TempHandleAnnotatedReadDirError"),
            "readDirectory": functionReference("fs", {}, "ReadDirectory"),
        })),
        // "createReadOptionalFile": ['algorithm', {
        //     type: ['function', {
        //         'function': "XX"
        //     }],
        // }],
        "createReadDirectoryOrAbort": algorithm(functionReference("this", {}, "ReadDirectoryOrAbort"), constructor(null, {
            "onError": functionReference("this", {}, "TempHandleAnnotatedReadDirError"),
            "readDirectory": functionReference("fs", {}, "ReadDirectory"),
        })),

    }),
}
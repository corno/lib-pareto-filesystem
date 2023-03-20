import { API } from "./api.generated"
import { $$ as imkdir } from "./implementations/mkdir.a.c"
import { $$ as ireadDir } from "./implementations/readDir.a.c"
import { $$ as ireadFile } from "./implementations/readFile.a.c"
import { $$ as irmdir } from "./implementations/rmdir.a.c"
import { $$ as iunlink } from "./implementations/unlink.a.c"
import { $$ as iwriteFile } from "./implementations/writeFile.a.c"

export const $api: API = {
    'mkdir': imkdir,
    'readDir': ireadDir,
    'readFile': ireadFile,
    'rmdir': irmdir,
    'unlink': iunlink,
    'writeFile': iwriteFile,
}
import { API } from "./api.generated"
import { $$ as imkdir } from "./implementations/mkdir.p"
import { $$ as ireadDir } from "./implementations/readDir.p"
import { $$ as ireadFile } from "./implementations/readFile.p"
import { $$ as iunlink } from "./implementations/unlink.p"
import { $$ as iwriteFile } from "./implementations/writeFile.p"

export const $api: API = {
    'mkdir': imkdir,
    'readDir': ireadDir,
    'readFile': ireadFile,
    'unlink': iunlink,
    'writeFile': iwriteFile,
}
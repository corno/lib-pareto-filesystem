import { API } from "./api.generated"
import { $$ as imkdir } from "./implementations/mkdir.a.f"
import { $$ as ireadDir } from "./implementations/readDir.a.f"
import { $$ as ireadFile } from "./implementations/readFile.a.f"
import { $$ as iunlink } from "./implementations/unlink.a.f"
import { $$ as iwriteFile } from "./implementations/writeFile.a.f"

export const $api: API = {
    'mkdir': imkdir,
    'readDir': ireadDir,
    'readFile': ireadFile,
    'unlink': iunlink,
    'writeFile': iwriteFile,
}
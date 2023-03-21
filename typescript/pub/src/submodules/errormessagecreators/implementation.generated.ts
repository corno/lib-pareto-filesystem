import { API } from "./api.generated"
import { $$ as imkdir } from "./implementations/mkdir.s.f"
import { $$ as ireadDir } from "./implementations/readDir.s.f"
import { $$ as ireadFile } from "./implementations/readFile.s.f"
import { $$ as irmdir } from "./implementations/rmdir.s.f"
import { $$ as iunlink } from "./implementations/unlink.s.f"
import { $$ as iwriteFile } from "./implementations/writeFile.s.f"

export const $api: API = {
    'mkdir': imkdir,
    'readDir': ireadDir,
    'readFile': ireadFile,
    'rmdir': irmdir,
    'unlink': iunlink,
    'writeFile': iwriteFile,
}
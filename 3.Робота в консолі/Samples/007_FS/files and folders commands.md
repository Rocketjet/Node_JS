1. fs.access(path, (error) => {}) - checks access to the given path
2. fs.cp(source, dest, (error) => {}) - copies files and folders
  * it creates all required folders in dest
  * use { recursive: true } after dest to copy a folder with its content
3. fs.rename(oldPath, newPath, (error) => {}) - renames files and folders
4. fs.stat(path, (error, stats) => {}) - gets info about a file or a folder
  * stats.isFile() - gives true for a file
  * stats.isDirectory()- gives true for a folder
5. fs.rm(path, (error) => {}) - remove a file or a folder
  * fs.rm(path, { recursive: true }, (error) => {}) - remove a folder with all it's content
6. fs.mkdir(path, (error) => {}) - creates a new folder
7. fs.readdir(path, (error, data) => {}) - reads a folder content

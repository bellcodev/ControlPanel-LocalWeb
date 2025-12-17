import os

def searchFile(disk, fileName):
    fileName = fileName.lower()
    results = []

    def scan(dir_path):
        try:
            with os.scandir(dir_path) as it:
                for entry in it:
                    if entry.is_file() and entry.name.lower().startswith(fileName):
                        results.append(entry.path)

                    if entry.is_dir(follow_symlinks=False):
                        scan(entry.path)

        except (PermissionError, FileNotFoundError):
            pass

    scan(disk)
    return results

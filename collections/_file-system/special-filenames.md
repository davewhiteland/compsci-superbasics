---
title: Special filenames
layout: topic
order: 112
---

Some filenames have special meaning:

| name     | meaning                                                              |
| -------- | -------------------------------------------------------------------- |
| `.`      | The [current directory]({{ site.baseurl }}/files/current-directory). |
| `..`     | The [parent directory]({{ site.baseurl }}/files/parent-directory) of any given directory. |
| `/`      | The [root directory]({{ site.baseurl }}/files/root).<br>(It's `\` on Windows).<br>By no coincidence, this is also the [path separator]({{ site.baseurl }}/files/path-separators). |

### Unix only

| name     | meaning                                                              |
| -------- | -------------------------------------------------------------------- |
| `.foo`<br>`.bar`   | Filenames beginning with `.` are [hidden files]({{ site.baseurl }}/files/hidden files) and will not normally be displayed when you ask for a directory listing. |
| `~`      | Your home directory.<br>This is usually the current directory when you first log in. |
| `~bilbo` | User `bilbo`'s home directory (you won't necessarily have [permission]({{ site.baseurl }}/files/permissions) to look inside it). |

Most Unix systems have conventions for the name of system directories too. A
few of them are described below. It's a good idea to become familiar with these
so you can find your way about. Remember these are only conventions, so
individual systems can — and will — do things differently:

| name       | use                                                             |
| ---------- | --------------------------------------------------------------- |
| `/bin`     | Binary files — files that contain the instructions the machine follows for implementing commands or programs. |
| `/home`    | Often the directory containing all the users' home directories. |
| `/sbin`    | System binaries, like `/bin` but with executables critical for system operation.|
| `/tmp`     | Temporary files                                                 |
| `/usr`     | "User" files — generally more for the users than the system.    |
| `/var`     | "Variable" files — files expected to change a lot.              |
| `/var/log` | System log files.                                               |
| `/var/tmp` | Temporary files.                                                |








---
title: File permissions
layout: topic
order: 118
---

The file system has the concept of _permissions_, which describe what you
(or other users) are allowed to do with a file.

This is a complex topic, which is core to ideas of computer security. But for
the superbasics you really just need to know that permissions exist and that
they typically take into account things like:

* what your relationship is to the file (for example, did you create it?)
* what _kind_ of user you are (are you an administrator?)
* the specific settings on the file
* settings on each of the directories in the file's path

### On Unix

On Unix systems, every file has three basic _permissions_:

| code | permission | used to determine...                         |
| ---- | ---------- | -------------------------------------------- |
| `r`  | read       | can you see the contents of the file?        |
| `w`  | write      | can you modify (edit, rename, or delete) it? |
| `x`  | execute    | can you execute it?                          |

There are three different _user classes_ to which those permissions apply,
which depend on how you (or, specifically, your user account) are related to
the file:

| class | qualification                                       |
| ----- | ----------------------------------------------------|
| owner | you own the file (probably because you created it)  |
| group | you are a member of the file's group                |
| other | you are neither the owner nor in the group          |

Whenever you try to access a file, the operating system determines your class,
checks the permissions for that class, and allows or denies the operation you
are attempting.

On the college Linux systems, this mechanism is what prevents you accessing
other students' files.

Incidentally, you might not need execute permission on a Python program (for
example, `example.py`) in order to run it, because the program you're _really_
executing there is the Python interpreter... So in that case you probably just
need read permission to access the Python source code, but execute permission
on the Python3 binaries.

If you want to see the permissions on your files, do:

    ls -l

The `-l` option is "long format". It will list the files (in the current
directory, if you don't specify a directory as an argument) with extra
information including the permissions, and they will look something like this:

    -rwxr-xr--

The first character (`-`) indicates if the file is a special type,
such as a [directory]({{ site.baseurl }}/files/directories) or
[symlink]({{ site.baseurl }}/files/symlinks). In this example it is neither
(if it was, it would be `d` or `l`). Being a directory is not really a
permission, _but_ it's relevant because the meaning of `rwx` is slightly
different for directories. For example, the `x` permission on a directory
indicates whether or not a user is allowed to `cd` (change directory) into it.

The next three (`rwx`) are the permissions for the _owner_. In this example,
the owner has all three permissions, so can do anything to this file (including
deleting it).

The next three (`r-x`) are the permissions for users who are not the owner, but
are in the same _group_ as the file. In this case, such users can read and
execute the file, but cannot change it: there's a `-` where the `w` (write)
permission should be.

The last three (`r--`) are the permissions for any other users. They can only
read the file, but not change it or execute it.

For full details,
[read the manual]({{ site.baseurl }}/command-line/getting-information) for the
`ls` command.


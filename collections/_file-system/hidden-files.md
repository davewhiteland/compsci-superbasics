---
title: Hidden files
layout: topic
order: 116
---

Hidden files are files that you don't normally see when you look inside a
directory.

These are typically files which the computer or its applications use and which
human users (e.g., you) are not expected to edit.

For example, applications often store your preferences in hidden files: you can
change them by doing so _inside_ the application, and you don't need to know
how or where those preferences are being stored. Furthermore, it might be easy
for you to break them if you edited or deleted the file.

### On Unix

The `.` ([current directory]({{ site.baseurl }}/files/current-directory)) and
`..` ([parent directory]({{ site.baseurl }}/files/parent-directory)) special
names are hidden files (they start with a dot). This is convenient: they are
always there, so you don't normally need to see them when you look inside
directories.

On Unix systems, your home directory will almost certainly contain many hidden
files, because it's conventionally where your personal settings are kept for
the applications you use.

> To see these, go to your home directory:
>
>     cd ~
>
> To list the files normally:
>
>     ls
>
> You don't see any hidden files, because this is default behaviour.
> Then use the `-a` option too to see the hidden files too:
>
>     ls -a
>
> Now you'll see files with `.` at the start of their name. For example, if
> you've used Git, you might see `.gitconfig` where Git has stored your
> global settings, or `.profile` or `.bash_login` that are used to set things
> up for your shell when you log in.

### Hidden files on Windows

Windows manages hidden files differently. Instead of using the convention of
the first-character `.` in the filename, files are hidden by setting the
"hidden file" attribute.

On the command prompt, `attrib` is the command for changing file attributes.
`+s` means "system attribute" and `+h` is "hidden"

    attrib +s +h myfile.txt

To unhide the file:

    attrib -s -h myfile.txt




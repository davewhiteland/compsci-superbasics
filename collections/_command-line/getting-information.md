---
title: Getting information (man)
layout: topic
order: 115
---

It's common to learn the useful options for the commands you use most. But you
must know how to find the options available.

You might be able to search on the web, of course. Make sure you're looking at
the right information for the version and type of command you are trying to use.
The Windows commands are available on the
[Microsoft documentation site](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands).

On Unix, use the `man` (manual) command. The manual's information is
definitive and thorough, and will be correct for the specific version of the
command you're using.

For example, to get information about the `ls` command, which lists directory
contents, do:

    man ls

The information you get from `man` is always in a similar format. There are
other sections too, but these are the main ones:

| section     |  what it tells you |
| ----------- | ------------------ |
| NAME        | The name of the command and what it does. |
| SYNOPSIS    | A summary of the command as you might type it: square brackets (`[` and `]`) indicate that the item is _optional_. Options are preceded with `-` and all possible short options are normally listed. Arguments follow, with `...` indicating more may be added. |
| DESCRIPTION | A detailed description of what the command does, together with details for each option. |
| EXAMPLES    | Sometimes some example commands (with options and arguments) are shown. |
| DIAGNOSTICS | If you write programs that issue this command, it's useful to know _how_ it communicates what happened when it ran. |

> You should learn to read the SYNOPSIS section by looking at `man` for commands
> you _do_ know. That way you are practising how to extract information about
> new commands.

### Example with `ls`

If you do `man ls` and look at the synopsis for that command, you'll see there
are 40 options available. You can tell they are options because they are preceded
by `-`, and you can tell that they are all optional because they are inside
square brackets:

```
SYNOPSIS
  ls [-ABCFGHLOPRSTUW@abcdefghiklmnopqrstuwx1] [file ...]
```
One of the options listed is `a`. If you look down in the
DESCRIPTION you can read _what_ that option does:

```
-a   Include directory entries whose names
     begin with a dot (.).
```

Files whose names begin with `.` are 
[hidden files]({{ site.baseurl }}/file-system/hidden-files).
So `-a` shows hidden files which are not normally listed.

Often these short options are chosen as mnemonics: `-a` here effectively means
"show **a**ll files".

For example, this command — with _no_ options — lists the files (but doesn't
show any hidden files, because by default hidden files are... hidden):

    ls

But by adding the `-a` option, you can list _all_ the files, including hidden
ones:

    ls -a

Notice how there is no argument on that command. That works because arguments
for `ls` are optional: you know that because the argument(s) in the synopsis
are inside square brackets. In the synopsis, the argument was `file` — you know
that is an argument, not an option, because it is _not_ prefixed by a `-`.

So, you could add an argument — for example, `*.txt`:

    ls -a *.txt

...and this would list all files (including hidden files) whose names end in
`.txt`. The `*` is a wildcard which matches any characters.

You can have more than one argument: that's what the `...` at the end of
the synopsis told you. So:

    ls -a *.txt assignment.py

...will list all the text files _and_ `assignment.py` (if it exists).



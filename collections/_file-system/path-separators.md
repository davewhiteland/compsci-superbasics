---
title: Path separators
layout: topic
order: 111
---

You'll need to use [paths]({{ site.baseurl }}/files/paths) a lot because they
are how you navigate the directory structure, and uniquely identify files.

The character that goes between the directory (and file) names in the path is
called the _path separator_. Remember that it is different on the Windows
operating system:

* on Unix (includes Macs, and paths in URLs): `/`

* on Windows: `\`

On the [command line]({{ site.baseurl }}/command-line), separators convey
critical information: spaces between commands, options, and arguments, and path
separators in file paths. For this reason, be disciplined and sensible when you
are [naming files]({{ site.baseurl }}/files/names).

### Path separators in your programs

When you are typing on a command line, will normally know if you're working on
a Unix or a Windows system, so you can choose the right separator. But if you
write a program that uses file paths — and sooner or later you will — you can
run into problems if it's using the wrong path separators.

Suppose you write a Python program that tries to identify a data file using a
path with `/` separating the directory names. That program may work fine on
a Unix machine. But the same program, with no changes, may fail to find its
data file when you (or someone else) run it on Windows.

The right way to handle this is to avoid using hard-coded `/` or `\` characters
in your paths, and delegate the problem to the operating system. Whatever
programming language you are using, there will be a mechanism for dealing with
this because it is a universal problem.

### In Python

There's more than one way of doing this, but Python 3.4+ has a `pathlib` module
to solve this problem for you. The `Path` object will use the correct separators
for whichever system the program is running on.

For example:

```python
from pathlib import Path

data_path = Path("data", "raw", "ex-1.dat")

# data_path will contain:
# - "data/raw/ex-1.dat" on Unix/Mac
# - "data\raw\ex-1.dat" on Windows
```

Older Python programs use the `os` (operating system) module which contained
similar features (and `os.sep` contained the correct separator character).

### In Java

The Java library `io.File` contains `File.separator` (a string) and
`File.separatorChar` (a character). They will be correct for whichever system
your (compiled) program is running on.

```java
import java.io.File;

public class ExampleFilePath {
    public static void main(String[] args) {
        System.out.println("data" + File.separator + "raw"
          + File.separator + "ex-1.dat"
        );
    }
}
```


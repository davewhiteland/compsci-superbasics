---
title: File managers
layout: topic
order: 117
---

# File managers (navigating with a GUI)

You  need to learn to navigate the file system on the command line
because the [current directory]({{ site.baseurl }}/files/current-directory)
is critical for many operations. But it is also possible to navigate the file
system using a graphical user interface (GUI). All computer operating systems
with a GUI have a mechanism for this, and although each looks different, their
fundamental behaviour is the same. They have different names too:

* Linux: File Manager
* Windows: File Explorer
* Mac OS: Finder

If you're unfamiliar with [directory structures]({{ site.baseurl }}/directories),
using these applications can help you learn your way around.

## Basic features

Every file manager is different, but they all have the same basic capabilities,
which are explained here.

![example file manager]({{ site.baseurl }}/images/file-manager.svg)

Notice the following details:

* what you see in the main panel is affected by settings in the **View**
  menu:
  
  * how the files are displayed (as icons, or a list)
  * which files are shown ([hidden files]({{ site.baseurl }}/files/hidden-files))
  * whether or not [file extensions]({{ site.baseurl }}/files/extensions) are
    displayed (it's confusing if they are not)

* the sidebar displays the file system as a _tree_:

  * click on the little triangles to _expand_ or _collapse_ directories
  * if there's no triangle, there are no subdirectories to go into
  * click on a directory to go into it (the main panel will change to show
    its contents)

* the main panel shows the files (and subdirectories) within it:

  * the current directory is highlighted in the tree
  * as well as your own files, other (shared and network)
    [volumes]({{ site.baseurl }}/files/extensions) may be accessible too

* the path of the current directory is often shown too — this may be useful for
  cutting-and-pasting (and the little icon for drag-and-dropping)

* _clicking_ on an icon _selects_ it, but _double-clicking_ tells the file
  manager to attempt to open it — using whatever application it thinks is best:

  * you may be able to right-click (or Ctl-click) to get more options
  * the **File** menu will probably have more options too when an item is
    selected

Look in the **File**, **Edit** and **View** menus to see what is possible.

### Forward/back/up/home

There are usually buttons available on the the file manager too:

* **forward** and **back**<br>
  These navigate through you _history_ (so clicking back means going back to
  the directory you were looking at before this one).

* **up**<br>
  This goes up into the
  [parent directory]({{ site.baseurl }}/files/parent-directory) — every
  directory has one unless it is the root of the file system.

* **home**<br>
  If there is a home button, it will jump you straight to your user account's
  home directory (in Unix this is `~`).

Learn the keyboard shortcuts to navigate (for example, in Unix File Managers
Alt-↑ may take you to the parent directory).

## How to launch a file manager

Each operating system has different ways of launching the file manager, but
in general either:

* double-click on a directory icon
* double-click the icon to launch the app
  * on Unix and Windows, it usually looks like a tiny filing cabinet
  * on Macs, the Finder icon is a blue square with a smiley face

Pay attention to _which_ directory you've opened.

## MacOS Finder tip

If you drag-and-drop a directory icon from the Finder window into terminal, it
will drop the path of that directory onto the command line for you. In fact this
works with _any_ of the tiny file icons from the title bars of application
windows, as well as icons from the Finder.



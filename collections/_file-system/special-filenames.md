---
title: Special filenames
layout: topic
order: 115
---

Some filenames have special meaning:

| name     | meaning                                                              |
| -------- | -------------------------------------------------------------------- |
| `.`      | The [current directory]({{ site.baseurl }}/files/current-directory). |
| `..`     | The [parent directory]({{ site.baseurl }}/files/parent-directory) of any given directory. |
| `/`      | The [root directory]({{ site.baseurl }}/files/root).<br>(It's `\` on Windows).<br>By no coincidence, this is also the [path separator]({{ site.baseurl }}/files/path-separators). |

### Unix only

| name      | meaning                                                              |
| --------- | -------------------------------------------------------------------- |
| `.config`<br>`.secrets`   | Filenames beginning with `.` are [hidden files]({{ site.baseurl }}/files/hidden files) and will not normally be displayed when you ask for a directory listing. |
| `~`       | Your home directory.<br>This is the current directory when you first log in. If you make or download any files, this is where you usually save them. |
| `~olivia` | User `olivia`'s home directory (you won't necessarily have [permission]({{ site.baseurl }}/files/permissions) to look inside it). |

Most Unix systems have conventions for the name of system directories too. A
few of them are described below. It's a good idea to become familiar with these
so you can find your way about. Remember these are only conventions, so
individual systems might do things a little differently:

| name       | use                                                             |
| ---------- | --------------------------------------------------------------- |
| `/bin`     | Binary files — files that contain the instructions the machine follows for implementing commands or fundamental utilities. |
| `/dev`     | Devices — file representations of things like printers and terminals. |
| `/home`    | The directory containing each user's home directory. For example, Olivia's home directory would be `/home/olivia` (which is the [absolute file path](../absolute-paths) of `~olivia`, above). |
| `/sbin`    | System binaries, like `/bin` but with executables critical for system operation. |
| `/tmp`     | Temporary files.                                                |
| `/usr `<a href="#footnote-1"><sup>1</sup></a>     | Executables, libraries, and shared resources that are not part of the core system. |
| `/var`     | "Variable" files — files expected to change a lot.              |
| `/var/log` | System log files.                                               |
| `/var/tmp` | Temporary files.                                                |

Note that these are all conveniently expressed as
[absolute file paths](../absolute-paths): they are found in the
[root directory](../root).

<p class="footnote"><sup id="footnote-1">1</sup>
  Originally, <code class="language-plaintext highlighter-rouge">/usr</code>
  was an abbreviation for "user" because it contained the users' files, but in
  today's Unix systems that's what the
  <code class="language-plaintext highlighter-rouge">/home</code> directory is
  for. So it's more helpful to remember
  <code class="language-plaintext highlighter-rouge">/usr</code> as an
  abbreviation of "user system resources". If you install a new application,
  it probably ends up here.
</p>






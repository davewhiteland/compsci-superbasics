---
title: Anatomy of the command line
layout: topic
order: 101
---

This example shows a complex command on the command line.
Notice how the parts are _separated_ by spaces.


<object id="anatomy" data="{{ site.baseurl }}/images/command-line.svg" type="image/svg+xml"></object>
<!-- TODO: hover and onclick events so can click on diargram to the links -->

This is the anatomy of the command line:

| part     | what it does |
|----------|--------------|
|[prompt]({{ site.baseurl }}/command-line/prompt) | The prompt indicates that the computer is ready for your command. Usually the word is the name of the [current directory]({{ site.baseurl }}/command-line/current-directory/). The `$` indicates you can type here (`$` is common, but some systems use a different symbol). |
|[command]({{ site.baseurl }}/command-line/issuing-a-command) | The name of the command or program you want to execute. |
|[options]({{ site.baseurl }}/command-line/options) | Options are prefixed with hyphens (`-`) and change the _way_ the command behaves. Often a command has no options. |
|[arguments]({{ site.baseurl }}/command-line/arguments) | The arguments tell the command _what_ things you want it to operate on. Some commands don't have arguments. | 


### About _this_ command

The example in the diagram shows the 
[enter key]({{ site.baseurl}}/command-line/using-enter) being tapped twice
(which issues [no command]({{ site.baseurl}}/command-line/no-command)
— it's like a tennis player bouncing the ball a couple of times before serving),
and then issuing a `grep` command.

The `grep` command<a href="#footnote-1"><sup>1</sup></a> searches files for
patterns. This example will print out all the lines in _any_ text files
(`*.txt`) in the current directory (`notes`) that contain the word `needle`.
The search will be case-insentive (`-i`) and only full word matches are
considered (`-w`) (so "needles" or "needless" won't match, but "needle" will).

You won't remember all the options of all the commands you need (although you
will learn the ones you use the most). On Unix systems, you can look them up
using the [man (manual)]({{ site.baseurl}}/command-line/getting-information)
command.

<p><br><sup id="footnote-1">1</sup> "grep" = 
<strong>g</strong>lobally search for a <strong>r</strong>egular 
<strong>e</strong>xpression and <strong>p</strong>rint matching lines.
</p>

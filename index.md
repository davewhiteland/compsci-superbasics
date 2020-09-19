---
title: Here we go
layout: page
---

They might be basic, they might be simple, but until someone
has pointed them out to you, how would you know?

When you're starting studying Computer Science, you need to know
how to use your computer. And that doesn't just mean
clicking on things. _Anyone_ can do that.

Get on top of the superbasics!

<div class="nav color4">
  <ul>
      {% assign sorted_topics = site.topics | sort: "order" %}
      {% for topic in sorted_topics %}
        <li>
          <a href="{{ topic.url | prepend:site.baseurl }}">{{ topic.title }}</a>
        </li>
      {% endfor %} 
  </ul>
</div>
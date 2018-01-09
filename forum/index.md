---
layout: page
title: Forum
---

Welcome to the book Forum!

Links to all assignments for the course will be posted on this page, please follow the link for the description of the homework and a help forum.
For other discussion and questions, check our general forum threads.
This discussion space is intended to help students learn, communicate, and collaborate.

For information about getting started with [Disqus](https://disqus.com/) and our community guidelines, please check the [help page]({{ "/forum/help.html" | absolute_url }}).

To join the discussion, check out these treads:

## Homework assignments:

{% for item in site.assignments %}
- {{ item.due }}: [{{ item.title }}]({{ item.url | absolute_url }}) ([0 Comments]({{ item.url | absolute_url }}#disqus_thread)){% endfor %}

## General discussions:

- [General Concepts]({{ "/forum/concepts.html" | absolute_url }}) ([0 Comments]({{ "/forum/concepts.html#disqus_thread" | absolute_url }}))
- [Homework Help]({{ "/forum/homework.html" | absolute_url }}) ([0 Comments]({{ "/forum/homework.html#disqus_thread" | absolute_url }}))
- [Typos and Website Suggestions]({{ "/forum/suggestions.html" | absolute_url }}) ([0 Comments]({{ "/forum/suggestions.html#disqus_thread" | absolute_url }}))

<!-- add your disqus count script here 
<script id="dsq-count-scr" src="//example.disqus.com/count.js" async></script>
-->

---
layout: page
title: "文章归档"
permalink: /archive/
---

# 文章归档

按时间顺序列出所有文章。

{% for post in site.posts %}
## [{{ post.title }}]({{ post.url }})
**{{ post.date | date: "%Y年%m月%d日" }}** ·
分类：{% for category in post.categories %}[{{ category }}](/categories.html#{{ category | slugify }}){% unless forloop.last %}, {% endunless %}{% endfor %} ·
标签：{% for tag in post.tags %}[{{ tag }}](/tags.html#{{ tag | slugify }}){% unless forloop.last %}, {% endunless %}{% endfor %}

{{ post.excerpt | strip_html | truncatewords: 50 }}

[阅读全文]({{ post.url }}){: .btn .btn-outline }
{% endfor %}
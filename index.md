---
layout: home
title: "我的日记博客"
description: "记录生活点滴，分享思考感悟"
---

# 欢迎来到我的日记博客

这里是我记录生活、分享思考的地方。我会在这里写下每天的所见所闻、所思所想。

## 最新日记

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url }})
**{{ post.date | date: "%Y年%m月%d日" }}** · {{ post.content | strip_html | truncatewords: 30 }}

[阅读全文]({{ post.url }})
{% endfor %}

## 博客特点

- **每日记录**：坚持每天写日记
- **分类标签**：方便查找和回顾
- **支持评论**：使用Giscus评论系统
- **完全开源**：基于GitHub Pages构建

## 开始阅读

- [所有文章](/archive.html)
- [按标签浏览](/tags.html)
- [按分类浏览](/categories.html)
- [关于我](/about.html)
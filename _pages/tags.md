---
layout: page
title: "标签云"
permalink: /tags/
---

# 标签云

{% assign tags = site.tags | sort %}
{% for tag in tags %}
<a href="#{{ tag[0] | slugify }}" class="tag">{{ tag[0] }} <span class="tag-count">({{ tag[1].size }})</span></a>
{% endfor %}

<hr>

{% for tag in tags %}
<h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
<ul>
  {% for post in tag[1] %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%Y年%m月%d日" }}</small>
  </li>
  {% endfor %}
</ul>
{% endfor %}

<style>
.tag {
  display: inline-block;
  padding: 4px 12px;
  margin: 4px 8px 4px 0;
  background-color: #f1f8ff;
  border: 1px solid #c8e1ff;
  border-radius: 16px;
  color: #0366d6;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.tag:hover {
  background-color: #dbedff;
  transform: translateY(-2px);
  text-decoration: none;
}

.tag-count {
  background-color: #0366d6;
  color: white;
  border-radius: 10px;
  padding: 1px 6px;
  font-size: 12px;
  margin-left: 4px;
}

h2 {
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eaecef;
}

ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  padding: 8px 0;
  border-bottom: 1px solid #f6f8fa;
}

ul li a {
  font-size: 16px;
  color: #24292e;
  text-decoration: none;
}

ul li a:hover {
  color: #0366d6;
  text-decoration: underline;
}

ul li small {
  color: #6a737d;
  font-size: 14px;
  margin-left: 10px;
}
</style>
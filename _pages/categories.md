---
layout: page
title: "分类目录"
permalink: /categories/
---

# 分类目录

{% assign categories = site.categories | sort %}
{% for category in categories %}
<a href="#{{ category[0] | slugify }}" class="category">{{ category[0] }} <span class="category-count">({{ category[1].size }})</span></a>
{% endfor %}

<hr>

{% for category in categories %}
<h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
<ul>
  {% for post in category[1] %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%Y年%m月%d日" }}</small>
  </li>
  {% endfor %}
</ul>
{% endfor %}

<style>
.category {
  display: inline-block;
  padding: 6px 16px;
  margin: 4px 8px 4px 0;
  background-color: #f3f4f6;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  color: #374151;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.category:hover {
  background-color: #e5e7eb;
  border-color: #d1d5db;
  transform: translateY(-2px);
  text-decoration: none;
}

.category-count {
  background-color: #9ca3af;
  color: white;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 12px;
  margin-left: 6px;
  font-weight: normal;
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
  padding: 10px 0;
  border-bottom: 1px solid #f6f8fa;
}

ul li a {
  font-size: 16px;
  color: #24292e;
  text-decoration: none;
  font-weight: 500;
}

ul li a:hover {
  color: #0366d6;
  text-decoration: underline;
}

ul li small {
  color: #6a737d;
  font-size: 14px;
  margin-left: 12px;
}
</style>
---
layout: page
title: "搜索"
permalink: /search/
---

# 搜索文章

<div id="search-container">
  <input type="text" id="search-input" placeholder="输入关键词搜索..." autofocus>
  <ul id="search-results"></ul>
</div>


<div id="search-help">
  <h3>搜索提示</h3>
  <ul>
    <li>可以搜索文章标题、内容或标签</li>
    <li>支持中文关键词搜索</li>
    <li>搜索结果按相关性排序</li>
    <li>点击搜索结果查看文章</li>
  </ul>
</div>

<!-- 搜索脚本 -->
<script src="/assets/js/search-setup.js"></script>

<style>
#search-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

#search-input:focus {
  outline: none;
  border-color: #0366d6;
  box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.1);
}

#search-results {
  list-style: none;
  padding: 0;
}

#search-results li {
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #0366d6;
}

#search-results li:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
  transition: all 0.2s ease;
}

#search-results li a {
  font-size: 18px;
  font-weight: 600;
  color: #0366d6;
  text-decoration: none;
}

#search-results li a:hover {
  text-decoration: underline;
}

#search-results li small {
  color: #666;
  font-size: 14px;
  margin-top: 5px;
  display: block;
}

#search-help {
  margin-top: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

#search-help h3 {
  margin-top: 0;
  color: #333;
}

#search-help ul {
  margin-bottom: 0;
}

</style>
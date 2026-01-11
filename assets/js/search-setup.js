/**
 * Simple-Jekyll-Search 搜索功能设置
 *
 * 使用CDN版本，如需本地版本请下载：
 * https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.10.0/simple-jekyll-search.min.js
 * 保存为 assets/js/simple-jekyll-search.min.js
 */

// 动态加载Simple-Jekyll-Search
function loadSearchScript() {
  // 检查是否已加载
  if (typeof SimpleJekyllSearch !== 'undefined') {
    initSearch();
    return;
  }

  // 创建script标签加载CDN版本
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.10.0/simple-jekyll-search.min.js';
  script.integrity = 'sha512-7hLAzR0R5Q7M5FzRrZ+KmhPm/XXBIdp5fd5ZQdT1jVUzyMwZqKzQybtVqe7BpZzC5vRL09Df8dACD9MqP5Oe2Q==';
  script.crossOrigin = 'anonymous';
  script.onload = initSearch;
  script.onerror = function() {
    console.error('Failed to load SimpleJekyllSearch from CDN');
    // 尝试加载本地版本
    var localScript = document.createElement('script');
    localScript.src = '/assets/js/simple-jekyll-search.min.js';
    localScript.onload = initSearch;
    document.head.appendChild(localScript);
  };
  document.head.appendChild(script);
}

// 初始化搜索功能
function initSearch() {
  // 等待DOM加载完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSearch);
  } else {
    setupSearch();
  }
}

function setupSearch() {
  var searchInput = document.getElementById('search-input');
  var resultsContainer = document.getElementById('search-results');

  if (!searchInput || !resultsContainer) {
    return; // 不在搜索页面
  }

  SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: resultsContainer,
    json: '/search.json',
    searchResultTemplate: [
      '<li class="search-result">',
      '  <a href="{url}" class="search-result-title">{title}</a>',
      '  <div class="search-result-meta">',
      '    <span class="search-result-date">{date}</span>',
      '    <span class="search-result-tags">{tags}</span>',
      '  </div>',
      '  <p class="search-result-excerpt">{excerpt}</p>',
      '</li>'
    ].join(''),
    noResultsText: '<li class="no-results">没有找到相关结果</li>',
    limit: 20,
    fuzzy: false,
    excerpt: function(obj) {
      // 从内容生成摘要
      var content = obj.content || '';
      // 移除HTML标签，限制字数
      var text = content.replace(/<[^>]*>/g, '');
      if (text.length > 150) {
        return text.substring(0, 150) + '...';
      }
      return text;
    },
    templateMiddleware: function(prop, value, template) {
      // 处理日期格式
      if (prop === 'date') {
        if (value) {
          var date = new Date(value);
          return date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });
        }
        return '';
      }

      // 处理标签格式
      if (prop === 'tags') {
        if (value && Array.isArray(value) && value.length > 0) {
          return value.map(function(tag) {
            return '<span class="search-tag">' + tag + '</span>';
          }).join('');
        }
        return '';
      }

      return value;
    }
  });

  // 添加输入事件监听器
  searchInput.addEventListener('input', function(e) {
    var hasResults = resultsContainer.children.length > 0;
    var noResultsMsg = document.querySelector('.no-results');

    if (!hasResults && e.target.value.length > 0 && !noResultsMsg) {
      var li = document.createElement('li');
      li.className = 'no-results';
      li.textContent = '没有找到相关结果，请尝试其他关键词';
      resultsContainer.appendChild(li);
    } else if (hasResults && noResultsMsg) {
      noResultsMsg.remove();
    }
  });

  // 聚焦搜索框
  searchInput.focus();
}

// 页面加载完成后启动
if (document.readyState === 'complete') {
  loadSearchScript();
} else {
  window.addEventListener('load', loadSearchScript);
}
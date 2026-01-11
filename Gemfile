source "https://rubygems.org"

# Jekyll核心
gem "jekyll", "~> 4.3"

# GitHub Pages兼容版本
# gem "github-pages", group: :jekyll_plugins

# 主题
gem "minima", "~> 2.5"

# 插件
gem "jekyll-feed", "~> 0.12"
gem "jekyll-seo-tag", "~> 2.8"
gem "jekyll-sitemap", "~> 1.4"

# 如果需要本地预览
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# 平台特定配置（可选）
# gem "wdm", "~> 0.1.0", :platforms => [:mingw, :x64_mingw, :mswin]

# 性能优化（可选）
# gem "fastimage", "~> 2.0"  # 快速图片处理
# gem "image_optim", "~> 0.30"  # 图片优化

# Windows环境需要
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# 性能优化
gem "webrick", "~> 1.8"  # Ruby 3.0+需要
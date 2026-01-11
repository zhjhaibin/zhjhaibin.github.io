# 我的日记博客

基于GitHub Pages和Jekyll构建的个人日记博客，支持在线编辑、评论、搜索等功能。

## 功能特性

- 📝 **Markdown写作**：使用GitHub Web界面直接写日记
- 🏷️ **标签分类**：文章可添加分类和标签
- 🔍 **全文搜索**：支持中文关键词搜索
- 💬 **评论系统**：使用Giscus（基于GitHub Discussions）
- 📱 **响应式设计**：适配手机、平板、电脑
- 🌙 **暗色模式**：支持自动主题切换
- 📡 **RSS订阅**：自动生成RSS feed
- 🚀 **自动部署**：GitHub Pages自动构建

## 快速开始

### 1. 创建GitHub仓库

1. 登录GitHub，创建新仓库：
   - 仓库名：`zhjhaibin.github.io`（替换`zhjhaibin`为你的用户名）
   - 选择"Public"（公开）
   - 勾选"Add a README file"

2. 克隆仓库到本地：
   ```bash
   git clone https://github.com/zhjhaibin/zhjhaibin.github.io.git
   cd zhjhaibin.github.io
   ```

### 2. 上传博客文件

将本目录所有文件复制到仓库目录，然后推送到GitHub：

```bash
# 复制所有文件到仓库目录（注意不要复制.git目录）
cp -r /path/to/zhjhaibin-blog/* /path/to/zhjhaibin.github.io/

# 添加所有文件
git add .

# 提交更改
git commit -m "初始化博客"

# 推送到GitHub
git push origin main
```

### 3. 启用GitHub Pages

1. 访问仓库的"Settings" → "Pages"
2. 在"Source"中选择"Deploy from a branch"
3. 分支选择"main"，文件夹选择"/(root)"
4. 点击"Save"

等待几分钟，访问 `https://zhjhaibin.github.io` 查看博客。

## 在线写日记

### 通过GitHub Web界面

1. 访问仓库的 `_posts` 目录
2. 点击"Add file" → "Create new file"
3. 文件名格式：`YYYY-MM-DD-标题.md`
4. 添加Front Matter（文件开头）：
   ```yaml
   ---
   layout: post
   title: "文章标题"
   date: YYYY-MM-DD HH:MM:SS +0800
   categories: [日记, 生活]
   tags: [标签1, 标签2]
   comments: true
   ---
   ```
5. 在Front Matter下方写Markdown内容
6. 点击"Commit changes"提交

### 通过草稿功能

1. 将文章放在 `_drafts` 目录（无需日期前缀）
2. 本地预览：`jekyll serve --drafts`
3. 预览满意后移动到 `_posts` 目录并添加日期

## 功能配置

### Giscus评论系统

1. 确保仓库已启用Discussions功能
2. 访问 https://giscus.app 配置
3. 获取 `repo-id` 和 `category-id`
4. 更新 `_config.yml` 中的giscus配置

### 搜索功能

搜索功能已预配置，无需额外设置。如需下载本地搜索脚本：

```bash
# 下载Simple-Jekyll-Search
wget -O assets/js/simple-jekyll-search.min.js \
  https://cdnjs.cloudflare.com/ajax/libs/simple-jekyll-search/1.10.0/simple-jekyll-search.min.js
```

### 自定义域名

1. 在域名注册商处添加CNAME记录：
   ```
   类型: CNAME
   主机: @ 或 www
   值: zhjhaibin.github.io
   TTL: 自动
   ```

2. 在仓库根目录创建 `CNAME` 文件：
   ```bash
   echo "yourdomain.com" > CNAME
   ```

3. 推送到GitHub

4. 在GitHub Pages设置中验证域名

## 本地开发

```bash
# 安装依赖
bundle install

# 本地预览
bundle exec jekyll serve

# 带草稿预览
bundle exec jekyll serve --drafts

# 构建网站
bundle exec jekyll build
```

## 文件结构

```
.
├── _config.yml          # Jekyll配置文件
├── Gemfile              # Ruby依赖
├── index.md             # 首页
├── about.md             # 关于页面
├── search.md            # 搜索页面
├── search.json          # 搜索索引
├── 404.md               # 404页面
├── _posts/              # 文章目录
├── _drafts/             # 草稿目录
├── _pages/              # 自定义页面
├── _layouts/            # 布局模板
├── _includes/           # 可重用组件
├── assets/              # 静态资源
│   ├── css/             # 样式文件
│   ├── js/              # JavaScript文件
│   └── images/          # 图片
└── _data/               # 数据文件
```

## 主题定制

本博客使用Minima主题，可以通过以下方式定制：

1. **修改配置**：在 `_config.yml` 中调整Minima设置
2. **覆盖布局**：在 `_layouts` 中创建同名文件覆盖主题文件
3. **添加样式**：在 `assets/css/` 中添加自定义CSS

## 常见问题

### 1. 构建失败
- 检查 `_config.yml` 语法
- 确保Gemfile依赖正确
- 查看GitHub Actions日志

### 2. 评论不显示
- 确认Discussions功能已启用
- 检查giscus配置中的repo-id和category-id
- 确保文章Front Matter中 `comments: true`

### 3. 搜索无结果
- 确认 `search.json` 文件已生成
- 检查JavaScript控制台错误
- 尝试重新构建网站

## 更新日志

- 2025年1月：博客初始版本发布
- 包含基础功能：文章、搜索、评论

## 许可证

代码基于MIT许可证，文章内容版权归作者所有。

## 支持

如有问题，请：
1. 查看 [Wiki文档](https://github.com/zhjhaibin/zhjhaibin.github.io/wiki)
2. 提交 [Issue](https://github.com/zhjhaibin/zhjhaibin.github.io/issues)
3. 参与 [Discussions](https://github.com/zhjhaibin/zhjhaibin.github.io/discussions)
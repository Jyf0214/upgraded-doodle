---
title: 发布 web-dl-manager：私有化部署的离线下载工具
date: 2026-01-03 10:30:00
tags:
  - Python
  - FastAPI
  - Docker
  - Open Source
categories:
  - 项目发布
thumbnail: https://socialify.git.ci/Jyf0214/web-dl-manager/image?description=1&font=Inter&language=1&name=1&owner=1&pattern=Circuit+Board&theme=Light
---

新项目：**[web-dl-manager](https://github.com/Jyf0214/web-dl-manager)**。

这是一个专为私有化部署设计的自动化下载与云端分发管理系统。如果你不仅需要一个强大的 Web 下载器，更需要一个**安全、隐蔽且集成“抓取-压缩-上传”全流程**的解决方案，那么它就是为你准备的。

<!-- more -->

## 为什么开发 web-dl-manager？

现有的下载工具通常只关注“下载”这一步，而在实际使用中，尤其是运行在 NAS 或公网服务器上时，我们往往面临更多痛点：

1.  **暴露风险**：下载器的 Web 界面直接暴露在公网容易招致扫描和探测。
2.  **工作流割裂**：下载完图片或资源后，还需要手动压缩、分卷，再上传到网盘，步骤繁琐。
3.  **对特定协议支持不足**：通用下载器对画师平台（如 Pixiv/Twitter）或 Mega.nz 的批量抓取支持往往不够深度。

`web-dl-manager` 就是为了解决这些问题而生。

---

## ✨ 核心特性

### 1. 🛡️ 独创的双架构

这是本项目的最大亮点。系统内部采用双 FastAPI 实例运行：

*   **伪装层 (Port 5492)**：这是对外暴露的端口。未登录或非授权用户访问时，系统会自动从 GitHub 拉取一个普通的静态站点（通过 `STATIC_SITE_GIT_URL` 配置）并展示给访问者。这意味着，在路人眼中，这只是一个普通的个人博客或静态页面。
*   **核心层 (Port 6275)**：只有通过身份验证的管理员，才能“穿透”伪装，访问真正的后台管理 API，处理高权限操作。

这种反探测设计最大程度保护了你的私人工具入口。

### 2. 📥 强力的下载与归档能力

工具集成了业内最优秀的开源组件，不再只是简单的 HTTP 下载：

*   **Gallery-dl 集成**：原生支持数百个图片/视频站点（如 DeviantArt, Pixiv, Twitter）的深度爬取。
*   **Mega.nz 支持**：通过 `megadl` 协议直接抓取网盘公共链接。
*   **Zstd 极速压缩**：抛弃龟速的 zip/7z，默认采用 Facebook 开源的 **Zstandard** 算法，提供极高的压缩与解压速度。
*   **智能分卷**：自动适配云存储限制，对大文件进行智能分卷打包。

### 3. 🏗️ 现代化技术栈

*   **后端**：FastAPI (Python) 保证了高性能与异步处理能力。
*   **前端**：Bootstrap 5 + Jinja2，响应式设计，手机电脑都能用。
*   **数据库**：支持开箱即用的 SQLite，也支持生产环境的 MySQL（通过 SQLAlchemy ORM）。

---

## 🚀 快速部署

项目完全容器化，使用 Docker 即可一键启动。

**方式一：Docker CLI**

```bash
docker run -d \
  --name web-dl-manager \
  -p 5492:5492 \
  -v ./data:/data \
  -e APP_USERNAME="admin" \
  -e APP_PASSWORD="your_password" \
  ghcr.io/jyf0214/web-dl-manager:main
```

**方式二：Docker Compose (搭配 MySQL)**

```yaml
services:
  web-dl:
    image: ghcr.io/jyf0214/web-dl-manager:main
    ports:
      - "5492:5492"
    environment:
      - DATABASE_URL=mysql://user:pass@host:3306/dbname
      - APP_USERNAME=admin
      - APP_PASSWORD=secure_pass
    restart: always
```

启动后，访问 `http://ip:5492` 即可看到登录页面（或者伪装页面）。

---

## 结语

`web-dl-manager` 依然在快速开发中，我也在不断优化 UI 和增加对新站点的支持。

如果你对这个项目感兴趣，或者它正好解决了你的痛点，欢迎在 GitHub 上点一个 ⭐ Star，或者提交 Issue 帮助它变得更好！

👉 **项目地址：[https://github.com/Jyf0214/web-dl-manager](https://github.com/Jyf0214/web-dl-manager)**
```

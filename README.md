# Minecraft Forge 服务器主页

这是一个专为 Minecraft Forge 服务器设计的现代化主页，具有响应式设计、动画效果和友好的用户界面。

## ✨ 特性

- 🎨 **现代化设计** - 深色主题，渐变色彩，美观大方
- 📱 **响应式布局** - 完美支持手机、平板和电脑访问
- ⚡ **流畅动画** - 滚动动画、悬停效果、3D卡片倾斜
- 🎯 **功能齐全** - 服务器介绍、模组列表、游玩指南一应俱全
- 🔄 **易于定制** - 代码结构清晰，方便修改和扩展

## 📁 文件结构

```
Minecraft_HomePage/
├── index.html      # 主页面文件
├── styles.css      # 样式表文件
├── script.js       # JavaScript 交互文件
└── README.md       # 项目说明文档
```

## 🚀 快速开始

1. **下载文件**
   - 确保所有文件（index.html、styles.css、script.js）在同一目录下

2. **打开主页**
   - 直接双击 `index.html` 文件，用浏览器打开
   - 或者使用本地服务器（推荐）：
     ```bash
     # 使用 Python 启动本地服务器
     python -m http.server 8000
     
     # 或使用 Node.js 的 http-server
     npx http-server
     ```

3. **在线部署**
   - 可以部署到 GitHub Pages、Netlify、Vercel 等平台
   - 也可以上传到自己的网站服务器

## 🛠️ 自定义配置

### 修改服务器信息

在 `index.html` 中找到以下代码并修改：

```html
<!-- 服务器地址 -->
<span class="info-value" id="server-ip">play.example.com</span>

<!-- 服务器版本 -->
<span class="info-value">1.20.1 Forge</span>
```

### 修改联系方式

在 `index.html` 的联系我们部分修改：

```html
<div class="contact-card">
    <div class="contact-icon">💬</div>
    <h3>QQ群</h3>
    <p>123456789</p> <!-- 修改这里 -->
</div>
```

### 添加或修改模组

在 `index.html` 的模组列表部分添加或修改：

```html
<li>🔋 Industrial Craft 2 - 工业时代2</li>
<!-- 添加更多模组 -->
```

### 修改配色方案

在 `styles.css` 中修改 CSS 变量：

```css
:root {
    --primary-color: #4CAF50;      /* 主色调 */
    --secondary-color: #2196F3;    /* 次要色调 */
    --accent-green: #00ff88;       /* 强调绿色 */
    --accent-blue: #00b8ff;        /* 强调蓝色 */
    /* 可以修改为你喜欢的颜色 */
}
```

## 🎮 功能说明

### 1. 复制服务器地址
- 点击服务器地址旁的"复制"按钮可快速复制 IP
- 也可以使用快捷键 `Ctrl+C`（当聚焦在页面上时）

### 2. 响应式导航
- 在移动设备上，导航菜单会自动变为汉堡菜单
- 点击菜单项后会自动关闭菜单并平滑滚动到对应区域

### 3. 在线玩家统计
- 页面会显示当前在线玩家数（需要配置 API）
- 默认显示模拟数据，每 30 秒更新一次

### 4. 动画效果
- 滚动时卡片会自动淡入
- 鼠标悬停在卡片上会有 3D 倾斜效果
- 英雄区域有粒子背景动画

## 🔧 高级配置

### 连接服务器 API

如果你想显示真实的在线玩家数，需要修改 `script.js` 中的 `updatePlayerCount` 函数：

```javascript
function updatePlayerCount() {
    fetch('https://your-server-api.com/status')
        .then(response => response.json())
        .then(data => {
            const playerCountElement = document.getElementById('player-count');
            if (playerCountElement) {
                playerCountElement.textContent = `${data.online}/${data.max}`;
            }
        })
        .catch(err => console.error('获取玩家数失败:', err));
}
```

### 添加下载链接

在 `index.html` 中找到下载整合包按钮，修改链接：

```html
<a href="https://your-download-link.com/modpack.zip" class="btn btn-primary">
    下载整合包 (约500MB)
</a>
```

### SEO 优化

修改 `index.html` 的 meta 标签：

```html
<head>
    <meta name="description" content="加入我们的 Minecraft Forge 服务器...">
    <meta name="keywords" content="Minecraft,Forge,服务器,模组">
    <meta property="og:title" content="Minecraft Forge 服务器">
    <meta property="og:description" content="欢迎加入...">
    <meta property="og:image" content="your-image-url.jpg">
</head>
```

## 🌐 浏览器兼容性

- ✅ Chrome / Edge（推荐）
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ IE 11（部分功能不支持）

建议使用现代浏览器以获得最佳体验。

## 📝 待办事项

- [ ] 添加服务器状态实时监控
- [ ] 集成玩家排行榜
- [ ] 添加多语言支持
- [ ] 创建管理后台
- [ ] 添加评论系统

## 🤝 贡献

欢迎提出建议和改进！如果你有好的想法，请：
1. Fork 这个项目
2. 创建你的功能分支
3. 提交你的更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。你可以自由使用、修改和分发。

## 💡 提示

1. **图片资源**：建议添加服务器截图、logo 等图片让页面更丰富
2. **性能优化**：如果页面加载慢，可以考虑压缩图片和代码
3. **安全性**：不要在前端代码中暴露敏感信息
4. **备份**：定期备份你的修改，避免数据丢失

## 📞 支持

如果遇到问题或需要帮助：
- 📧 发送邮件到：admin@example.com
- 💬 加入 QQ 群：123456789
- 🎮 加入 Discord：discord.gg/example

---

**祝你的服务器运营顺利！** 🎉

*最后更新：2025年12月11日*

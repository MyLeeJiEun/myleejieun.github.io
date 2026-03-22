# 温榆河个人主页

这是一个基于 Ubuntu 桌面风格界面的 Angular 个人主页项目，当前用于承载温榆河的个人介绍、项目展示、技能信息与联系方式。

## 当前状态

- 已清理原模板中的主要个人内容
- 已保留窗口系统、桌面布局、侧边栏和应用壳子
- 已替换站点名称、邮箱、GitHub 和 About 页面主信息
- About、Projects、Skills 已整理为可继续扩写的中文初稿

## 技术栈

- Angular
- TypeScript
- Tailwind CSS
- Angular Signals
- Angular CDK

## 页面结构

- 关于：个人简介与站点定位
- 经历：教育经历或学习记录
- 技能：当前方向、站点技术与后续补充项
- 项目：已完成项目与待整理项目入口
- 联系：邮箱与 GitHub
- Terminal / VS Code / Chrome / Settings：保留为桌面式交互的一部分

## 本地运行

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm start
```

执行生产构建：

```bash
npm run build
```

## 主要修改位置

- `src/app/services/app-config.ts`：桌面应用配置、图标和外链
- `src/app/components/apps/about/`：关于页面与聚合内容
- `src/app/components/apps/projects/`：项目列表
- `src/app/components/apps/skills/`：技能页面
- `src/app/components/apps/contact/`：联系信息
- `src/app/components/apps/terminal/`：终端内展示文本

## 后续建议

- 补充正式教育经历与工作经历
- 替换项目占位项为真实项目
- 增加博客、简历下载或更多外部链接
- 根据个人风格继续调整文案与视觉细节


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects = [
    {
      name: '个人主页重构',
      company: 'myleejieun.github.io',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
      description: '基于 Ubuntu 桌面风格模板整理个人主页，清理原仓库内容，并逐步替换为自己的页面结构与信息。',
      impact: [
        '保留现有交互框架与窗口系统',
        '已替换站点名称、联系信息与主要入口',
        '后续继续补充完整的个人内容'
      ]
    },
    {
      name: '项目归档整理中',
      company: '个人项目',
      technologies: ['待补充', '待补充', '待补充'],
      description: '这里预留给后续整理的正式项目案例，可以放作品介绍、技术栈、链接和结果说明。',
      impact: [
        '建议优先补充最有代表性的 2 到 4 个项目',
        '每个项目可增加仓库地址或演示地址',
        '保持描述简洁，突出问题、方案与结果'
      ]
    }
  ];
}

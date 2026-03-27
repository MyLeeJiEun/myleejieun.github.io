export interface TimelineEntry {
  title: string;
  subtitle: string;
  period: string;
  details: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
  notes?: string[];
}

export interface ProfileProject {
  name: string;
  company: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export const profileIdentity = {
  name: '温榆河',
  shortName: '',
  title: 'C/C++ 后台开发',
  email: 'librazhao0032@gmail.com',
  phone: '',
  websiteLabel: 'zhaofangxun.linkpc.net/blog',
  websiteUrl: 'https://zhaofangxun.linkpc.net/blog',
  githubLabel: 'github.com/myleejieun',
  githubUrl: 'https://github.com/myleejieun',
  location: '中国',
};

export const profileSummary = [
  '专注于 C/C++ 后台开发，具备 Linux 平台下网络编程、并发编程与服务端工程实践经验。',
  '平台能力模块和移动端适配相关项目开发，覆盖接口封装、联调与性能优化。',
  '关注接口抽象、跨平台适配、系统稳定性与问题定位，希望持续沉淀高质量工程能力。',
];

export const educationEntries: TimelineEntry[] = [
  {
    title: 'WHPU',
    subtitle: 'CS Bachelor',
    period: '2018.09 - 2022.06',
    details: [
      '系统学习计算机基础、数据结构与算法、操作系统、网络与数据库等核心课程。',
      '在校期间持续积累 Linux、C/C++ 与软件工程相关实践能力。',
    ],
  },
];

export const workEntries: TimelineEntry[] = [
  {
    title: '',
    subtitle: 'C/C++ 开发工程师',
    period: '2024.02 - 2024.12',
    details: [
      '参与文件管理与信息检索相关功能模块。',
      '围绕 Reactor、epoll、线程池、MySQL 等技术栈完成服务端能力建设与性能优化。',
    ],
  },
  {
    title: '',
    subtitle: 'C/C++ 开发工程师',
    period: '2025.03 - 至今',
    details: [
      '参与设备管理相关子系统的接口标准化与平台适配开发。',
      '参与跨平台定位能力模块与移动端功能适配开发，负责接口封装、联调与问题修复。',
    ],
  },
];

export const projectEntries: ProfileProject[] = [
  {
    name: '',
    company: '',
    period: '2024.05 - 2024.11',
    role: 'C/C++, Linux',
    description: '覆盖文件管理、登录鉴权、文件上传下载、断点续传与秒传等核心能力。',
    technologies: ['C/C++', 'Linux', 'epoll', 'Reactor', '线程池', 'MySQL', 'mmap', 'MD5'],
    highlights: [
      '使用密码校验与 token 机制完成身份验证，支持长短命令分离，减少重复登录校验。',
      '通过 MySQL 维护虚拟文件表，降低服务端内存开销，并支持相同文件秒传。',
      '实现断点续传与 mmap 零拷贝传输，提升大文件下载体验与传输效率。',
    ],
  },
  {
    name: '',
    company: '',
    period: '2024',
    role: 'C/C++, Linux',
    description: '信息检索能力，涵盖中文分词、候选词纠错、索引构建与相似度检索等流程。',
    technologies: ['C/C++', 'CppJieba', 'tinyxml2', 'JsonCpp', '线程池', 'LRU', '余弦相似度'],
    highlights: [
      '结合 Reactor 与线程池构建高并发服务模型，减少线程切换开销并提升响应性能。',
      '实现最小编辑距离算法，根据相似度、词频和字母优先级返回更合理的候选词。',
      '基于中文分词结果建立索引与检索流程，支持更准确的中文信息召回。',
    ],
  },
  {
    name: '设备管理子系统接口标准化与平台适配',
    company: '',
    period: '2025.03 - 至今',
    role: 'C/C++, 系统平台开发',
    description: '参与设备管理相关子系统的接口标准化改造与平台适配，提升接口一致性与模块可维护性。',
    technologies: ['C/C++', '系统平台', 'IDL', 'IPC', 'Linux', '平台适配'],
    highlights: [
      '梳理原有接口并完成抽象与标准化定义，提升接口规范性和后续协作效率。',
      '基于 IDL 生成通信代码并联调 IPC 调用链路，保障跨进程参数传递的正确性与稳定性。',
      '协助解决改造过程中的编译、链接和运行时问题，提高版本集成效率。',
    ],
  },
  {
    name: '跨平台定位能力模块开发',
    company: '',
    period: '2025.03 - 至今',
    role: 'C/C++, 跨平台开发',
    description: '参与定位能力模块跨平台开发，对不同平台的位置服务进行统一封装与接口适配。',
    technologies: ['C/C++', '跨平台框架', '定位服务', 'Android', 'Linux', '跨平台适配'],
    highlights: [
      '统一抽象多平台定位能力，向上层提供一致的位置服务调用方式。',
      '处理不同平台在权限、回调机制与数据结构上的差异，提升模块可移植性。',
      '参与定位请求、结果回调和异常处理流程开发，提升多平台一致性与稳定性。',
    ],
  },
  {
    name: 'Qt for Android 移动端开发',
    company: '',
    period: '2025.03 - 至今',
    role: 'Qt, C++',
    description: '参与基于 Qt for Android 的移动端功能开发与适配，负责部分模块实现、调试与问题修复。',
    technologies: ['Qt', 'C++', 'Qt for Android', 'Android', 'JNI', '界面开发'],
    highlights: [
      '使用 Qt/C++ 实现 Android 端业务逻辑与界面交互，提升跨平台代码复用率。',
      '配合 JNI 对接 Android 原生能力，实现 Qt 层与原生层之间的数据与功能联动。',
      '协助解决构建部署、运行崩溃与界面异常问题，改善移动端兼容性与稳定性。',
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: '编程语言与 C++ 基础',
    items: ['C', 'C++', '面向对象', '泛型编程', 'C++11', 'STL', 'std::string', '智能指针'],
    notes: ['熟悉右值引用、移动语义、lambda、函数对象等常用 C++11 特性。'],
  },
  {
    title: '系统与网络编程',
    items: ['GNU/Linux', '进程管理', '线程同步', 'POSIX Socket', 'TCP/UDP', 'select', 'epoll', 'Reactor'],
    notes: ['具备 Linux 平台下多线程、多进程与 IO 多路复用相关开发经验。'],
  },
  {
    title: '数据库与中间能力',
    items: ['MySQL', 'Redis', '虚拟文件表', '事务', '持久化', '哨兵模式', '余弦相似度', '最小编辑距离'],
    notes: ['能够结合业务场景设计存储结构、缓存策略和检索流程。'],
  },
  {
    title: '平台与工具链',
    items: ['OpenHarmony', 'ArkUI-X', 'Qt for Android', 'IDL', 'IPC', 'Android', 'JNI', 'Makefile'],
    notes: ['熟悉 GCC/GDB、LLVM、Git、Vim 与 Valgrind 等常用开发调试工具。'],
  },
];

export const contactNotes = [
  '欢迎通过邮箱联系技术交流、项目合作或工作机会。',
  'GitHub 会持续更新个人项目、实验代码与站点内容。',
  '博客会逐步整理项目复盘、技术笔记和实践总结。',
];

export const terminalFiles = {
  resume: `${profileIdentity.name}\n${profileIdentity.title}\nEmail: ${profileIdentity.email}\nPhone: ${profileIdentity.phone}\nBlog: ${profileIdentity.websiteLabel}\nGitHub: ${profileIdentity.githubLabel}`,
  readme: `欢迎来到 ${profileIdentity.name} 的主页终端。\n\n这里整理了教育背景、工作经历、项目经历、技能栈与联系方式。\n\n常用命令：\n- help          查看命令列表\n- ls            查看目录内容\n- cd <dir>      切换目录\n- cat <file>    查看文件内容\n- clear         清空终端\n- pwd           查看当前路径`,
};
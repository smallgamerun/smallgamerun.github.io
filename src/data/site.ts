export type Language = "zh" | "en";

export const site = {
  name: "Xu Yixing",
  handle: "smallgamerun",
  github: "https://github.com/smallgamerun",
  avatar: "https://avatars.githubusercontent.com/u/112565099?v=4"
};

export const copy = {
  zh: {
    locale: "zh-CN",
    label: "中文",
    nav: { home: "首页", projects: "项目", blog: "博客", about: "关于" },
    eyebrow: "QUANT × AI × ENGINEERING",
    title: "把金融问题，\n变成可以运行的系统。",
    intro:
      "我是徐亦行，拥有金融工程背景，持续探索量化金融、人工智能与软件工程的交叉地带。",
    primaryCta: "查看项目",
    secondaryCta: "阅读博客",
    projectsTitle: "精选项目",
    projectsIntro: "从学习实验到可复现的工程实践，记录我如何拆解问题并构建答案。",
    postsTitle: "最新文章",
    postsIntro: "关于量化、AI、代码，以及一路上值得留下的思考。",
    allProjects: "全部项目",
    allPosts: "全部文章",
    aboutTitle: "关于我",
    aboutLead: "金融工程背景，正在量化、AI 与工程实践之间建立自己的坐标。",
    aboutBody: [
      "我关注数据如何转化为判断，以及想法如何通过代码变成可以验证、复用和迭代的系统。",
      "这个网站是我的公开工作台：项目记录做过什么，博客记录如何思考。除技术与金融之外，我也喜欢旅行、篮球、羽毛球和 popping。"
    ],
    focusTitle: "关注方向",
    focus: ["量化研究与金融数据", "机器学习与生成式 AI", "可靠、可复现的软件工程"],
    connectTitle: "保持联系",
    connectBody: "最直接的方式是在 GitHub 上查看我的工作或发起交流。",
    viewGithub: "访问 GitHub",
    projectPageTitle: "项目",
    projectPageIntro: "这里收录的是具有代表性的学习与工程实践，而不是仓库的简单镜像。",
    blogPageTitle: "博客",
    blogPageIntro: "记录正在学习的事、解决问题的方法，以及阶段性的复盘。",
    readMore: "阅读文章",
    source: "查看源码",
    role: "角色",
    year: "年份",
    stack: "技术",
    minRead: "分钟阅读",
    backToBlog: "返回博客",
    footer: "以好奇心驱动，以可验证的结果收尾。"
  },
  en: {
    locale: "en-US",
    label: "EN",
    nav: { home: "Home", projects: "Projects", blog: "Writing", about: "About" },
    eyebrow: "QUANT × AI × ENGINEERING",
    title: "Turning financial questions\ninto working systems.",
    intro:
      "I'm Xu Yixing. With a background in Financial Engineering, I explore the intersection of quantitative finance, AI, and software engineering.",
    primaryCta: "Explore projects",
    secondaryCta: "Read the blog",
    projectsTitle: "Selected projects",
    projectsIntro: "From learning experiments to reproducible engineering work—how I break down problems and build answers.",
    postsTitle: "Latest writing",
    postsIntro: "Notes on quant, AI, code, and the ideas worth carrying forward.",
    allProjects: "All projects",
    allPosts: "All posts",
    aboutTitle: "About",
    aboutLead: "A Financial Engineering background, with a growing practice across quant, AI, and engineering.",
    aboutBody: [
      "I care about how data becomes judgment, and how ideas become systems that can be tested, reused, and improved.",
      "This site is my public workbench: projects show what I build, while the blog captures how I think. Beyond finance and technology, I enjoy travelling, basketball, badminton, and popping."
    ],
    focusTitle: "Current focus",
    focus: ["Quant research and financial data", "Machine learning and generative AI", "Reliable, reproducible software engineering"],
    connectTitle: "Let's connect",
    connectBody: "The most direct way to see my work or start a conversation is through GitHub.",
    viewGithub: "Visit GitHub",
    projectPageTitle: "Projects",
    projectPageIntro: "A curated set of learning and engineering work—not an automatic mirror of every repository.",
    blogPageTitle: "Writing",
    blogPageIntro: "Notes on what I am learning, how I solve problems, and what each stage has taught me.",
    readMore: "Read article",
    source: "View source",
    role: "Role",
    year: "Year",
    stack: "Stack",
    minRead: "min read",
    backToBlog: "Back to writing",
    footer: "Driven by curiosity. Finished with evidence."
  }
} as const;

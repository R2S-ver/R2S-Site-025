import type { Language } from "./i18n";

export const translations = {
  en: {
    nav: {
      home: "HOME",
      projects: "PROJECTS",
      lab: "LAB",
      art: "ART",
      notes: "NOTES",
      about: "ABOUT",
      language: "中文",
    },

    common: {
      year: "Year",
      type: "Type",
      category: "Category",
      tools: "Tools",
      contents: "Contents",
    },

    sections: {
      lab: {
        title: "Lab",
        description: "Experiments, electronics and prototypes.",
      },

      projects: {
        title: "Projects",
        description: "Industrial design and product development.",
      },

      art: {
        title: "Art",
        description: "Illustration, visual experiments and artwork.",
      },

      notes: {
        title: "Notes",
        description: "Research, learning and technical notes.",
      },

      about: {
        title: "About",
        description: "About R2S Studio.",
      },
    },

    system: {
      status: "SYS_STATUS:",
      online: "ONLINE",
    },
  },

  zh: {
    nav: {
      home: "首页",
      projects: "项目",
      lab: "实验室",
      art: "艺术",
      notes: "笔记",
      about: "关于",
      language: "EN",
    },

    common: {
      year: "年份",
      type: "类型",
      category: "分类",
      tools: "工具",
      contents: "目录",
    },

    sections: {
      lab: {
        title: "实验室",
        description: "电子、实验与原型项目。",
      },

      projects: {
        title: "项目",
        description: "工业设计与产品开发。",
      },

      art: {
        title: "艺术",
        description: "插画、视觉实验与艺术作品。",
      },

      notes: {
        title: "笔记",
        description: "研究、学习与技术记录。",
      },

      about: {
        title: "关于",
        description: "关于 R2S Studio。",
      },
    },

    system: {
      status: "系统状态:",
      online: "在线",
    },
  },
} satisfies Record<Language, unknown>;

export function getTranslations(language: Language) {
  return translations[language];
}
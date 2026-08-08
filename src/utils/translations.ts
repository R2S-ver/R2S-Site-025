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

    language: {
      code: "TRANSLATION // UNAVAILABLE",
      unavailable: "暂无中文版本",
      description: "当前项目仅提供英文版本",
    },

    /*
    ========================
    PROJECT CARD
    ========================
    */

    card: {
      projectNode: "PRJ_NODE //",
      online: "● ONLINE",
      imageStream: "IMAGE_STREAM // ACTIVE",
      category: "CATEGORY:",
      archive: "ARCHIVE:",
    },

    /*
    ========================
    HOME / HERO
    ========================
    */

    hero: {
      title: {
        line1: "FUNCTIONAL",
        line2: "AESTHETICS",
      },

      cassette: "[ DESIGN_DATABASE // LOADED ]",

      description: {
        line1:
          "Bridge the gap between TECH and AESTHETIC by pairing artistic intuition with a research-driven mindset.",

        line2:
          "My goal is to ensure that visual elegance is always grounded in technical rigor and practical execution.",
      },

      button: "ACCESS PROJECT DATABASE →",
    },

    /*
    ========================
    HOME / FEATURED
    ========================
    */

    featured: {
      tag: "PROJECT_DATABASE // FEATURED_ARCHIVE",
      title: "Selected Projects",
      description: "> ACCESSING_DESIGN_AND_ENGINEERING_RECORDS...",
      total: "TOTAL_FILES:",
      active: "ACTIVE",
    },

    /*
    ========================
    HOME / EXPLORE
    ========================
    */

    explore: {
      about: {
        header: "MODULE_01 // PROFILE",
        title: "ABOUT",
        description: "PERSONNEL_DOSSIER",
        access: "ACCESS_MODULE →",
      },

      projects: {
        header: "MODULE_02 // WORKS",
        title: "PROJECTS",
        description: "FABRICATION_ARCHIVE",
        access: "ACCESS_DATABASE →",
      },

      art: {
        header: "MODULE_03 // VISUAL",
        title: "ART",
        description: "VISUAL_ASSET_MATRIX",
        access: "OPEN_ARCHIVE →",
      },

      notes: {
        header: "MODULE_04 // KNOWLEDGE",
        title: "NOTES",
        description: "RESEARCH_DATABASE",
        access: "LOAD_DOCUMENTS →",
      },
    },

    /*
    ========================
    HOME / LATEST
    ========================
    */

    latest: {
      header: "SYS.LOG // RECENT_ACTIVITY_STREAM",
      type: "TYPE:",
      updated: "UPDATED",
    },

    /*
    ========================
    HOME / ABOUT
    ========================
    */

    aboutPreview: {
      header: "PERSONNEL_DOSSIER // PROFILE_MODULE",
      operator: "OPERATOR",
      status: "● ACTIVE DESIGNER // MAKER",

      description: {
        line1:
          "A designer and maker exploring the connection between physical products, technology and art.",

        line2:
          "Focused on turning concepts into reality through industrial design, embedded systems and experimental prototyping.",
      },

      location: "LOCATION: ROTTERDAM // NL",
      field: "FIELD: DESIGN + TECHNOLOGY",
      access: "ACCESS FULL DOSSIER →",
    },

    /*
    ========================
    GENERAL SECTIONS
    ========================
    */

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
        title: "About R2S",
        subtitle: "I like turning ideas into reality.",

        description:
        "I explore the connection between industrial design, embedded systems and illustration.",

        dossier: {
        header: "PERSONNEL_DOSSIER // ABOUT_MODULE",
        operator: "OPERATOR",
        status: "● ACTIVE DESIGNER // MAKER",

        location: "LOCATION: ROTTERDAM // NL",
        field: "FIELD: DESIGN + TECHNOLOGY",

        focus: "CURRENT_FOCUS",
        focusText:
      "Industrial design, embedded systems, experimental prototyping and visual communication.",
        },
      },
    },

    /*
    ========================
    SYSTEM
    ========================
    */

    system: {
      status: "SYS_STATUS:",
      online: "ONLINE",
    },
  },

  /*
  ========================================================
  中文
  ========================================================
  */

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

    language: {
      code: "TRANSLATION // UNAVAILABLE",
      unavailable: "暂无英文版本",
      description: "当前项目仅提供中文版本",
    },

    /*
    ========================
    PROJECT CARD
    ========================
    */

    card: {
      projectNode: "项目节点 //",
      online: "● 在线",
      imageStream: "图像流 // ACTIVE",
      category: "分类:",
      archive: "档案:",
    },

    /*
    ========================
    HOME / HERO
    ========================
    */

    hero: {
      title: {
        line1: "FUNCTIONAL",
        line2: "AESTHETICS",
      },

      cassette: "[ 设计数据库 // 已加载 ]",

      description: {
        line1:
          "通过将艺术直觉与研究驱动的思维相结合，在技术与美学之间建立连接。",

        line2:
          "我的目标是让视觉上的优雅始终建立在严谨的技术与切实可行的执行之上。",
      },

      button: "访问项目数据库 →",
    },

    /*
    ========================
    HOME / FEATURED
    ========================
    */

    featured: {
      tag: "项目数据库 // 精选档案",
      title: "精选项目",
      description: "> 正在访问设计与工程记录...",
      total: "文件总数:",
      active: "活动",
    },

    /*
    ========================
    HOME / EXPLORE
    ========================
    */

    explore: {
      about: {
        header: "模块_01 // 个人档案",
        title: "关于",
        description: "个人资料档案",
        access: "访问模块 →",
      },

      projects: {
        header: "模块_02 // 项目",
        title: "项目",
        description: "制造与设计档案",
        access: "访问数据库 →",
      },

      art: {
        header: "模块_03 // 视觉",
        title: "艺术",
        description: "视觉资产矩阵",
        access: "打开档案 →",
      },

      notes: {
        header: "模块_04 // 知识",
        title: "笔记",
        description: "研究数据库",
        access: "加载文档 →",
      },
    },

    /*
    ========================
    HOME / LATEST
    ========================
    */

    latest: {
      header: "系统日志 // 最近活动流",
      type: "类型:",
      updated: "已更新",
    },

    /*
    ========================
    HOME / ABOUT
    ========================
    */

    aboutPreview: {
      header: "个人档案 // 资料模块",
      operator: "操作员",
      status: "● 活跃设计师 // 创作者",

      description: {
        line1:
          "一名探索实体产品、技术与艺术之间联系的设计师与创作者。",

        line2:
          "专注于通过工业设计、嵌入式系统与实验性原型，将概念转化为现实。",
      },

      location: "位置: 鹿特丹 // 荷兰",
      field: "领域: 设计 + 技术",
      access: "访问完整档案 →",
    },

    /*
    ========================
    GENERAL SECTIONS
    ========================
    */

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
        title: "关于 R2S",
        subtitle: "我喜欢将想法变成现实。",

        description:
        "我探索工业设计、嵌入式系统与插画之间的联系。",

        dossier: {
            header: "个人档案 // 关于模块",
            operator: "操作员",
            status: "● 活跃设计师 // 创作者",

            location: "位置: 鹿特丹 // 荷兰",
            field: "领域: 设计 + 技术",

            focus: "当前方向",
            focusText:
                "工业设计、嵌入式系统、实验性原型制作与视觉表达。",
            },
        }
    },

    /*
    ========================
    SYSTEM
    ========================
    */

    system: {
      status: "系统状态:",
      online: "在线",
    },
  },
} satisfies Record<Language, unknown>;

export function getTranslations(language: Language) {
  return translations[language];
}
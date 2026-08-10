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

    card: {
      projectNode: "PRJ_NODE //",
      online: "● ONLINE",
      imageStream: "IMAGE_STREAM // ACTIVE",
      category: "CATEGORY:",
      archive: "ARCHIVE:",
    },

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

    featured: {
      tag: "PROJECT_DATABASE // FEATURED_ARCHIVE",
      title: "Selected Projects",
      description: "> ACCESSING_DESIGN_AND_ENGINEERING_RECORDS...",
      total: "TOTAL_FILES:",
      active: "ACTIVE",
    },

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

    latest: {
      header: "SYS.LOG // RECENT_ACTIVITY_STREAM",
      type: "TYPE:",
      updated: "UPDATED",
    },

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

    footer: {
      system: "FOOTER_NODE // TERMINATION_SEQUENCE",
      status: "SYS_STATUS:",
      online: "ONLINE",
      identity:
        "Industrial Design × Embedded Systems × Creative Making",
      location: "LOCATION:",
      statusLabel: "STATUS:",
      operational: "OPERATIONAL",
      version: "VERSION:",
      uplink: "DATA_UPLINK",
      github: "GitHub",
      email: "Email",
      about: "About",
      copyright: "ALL CORE DATA PACKETS INTEGRATED",
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
        pageTag: "PERSONNEL_DOSSIER // PROFILE_MODULE",
        pageStatus: "● SYSTEM_ACTIVE",
        eyebrow: "R2S STUDIO // DESIGNER + MAKER + ARTIST",
        title: "About ME",
        introTitle: "BETWEEN DESIGN\nMAKING\nART",
        description:
          "I am an industrial product designer and digital artist with a strong interest in making things real.",
        introText:
          "My work sits somewhere between design, engineering and visual art. I enjoy taking an idea from a sketch or concept, researching references, developing the form, building a prototype and eventually turning it into something physical and functional.",
        identity: {
          title: "DESIGNER // MAKER // ARTIST",
          text:
            "Most comfortable somewhere between a designer and a maker; Care deeply about aesthetics, but also want to understand how things work, how they are made and how separate technologies can be combined into a complete object.",
          second:
            "Industrial design is my main professional direction, while illustration and visual creation remain an important part of who I am.",
        },
        dossier: {
          header: "PERSONNEL_DOSSIER // ABOUT_MODULE",
          operator: "OPERATOR",
          role: "INDUSTRIAL + PRODUCT DESIGNER",
          status: "● ACTIVE DESIGNER // MAKER",
          locationLabel: "LOCATION",
          location: "ROTTERDAM // NL",
          fieldLabel: "FIELD",
          field: "AESTHETICS + DESIGN + TECHNOLOGY",
          focusLabel: "CURRENT_FOCUS",
          focus:
            "Industrial design, embedded systems, electronics, prototyping, visual communication and experimental making.",
        },
        philosophy: {
          header: "PERSONAL_PROTOCOL // DESIGN_PHILOSOPHY",
          title: "STANDING ON THE SHOULDERS OF GIANTS",
          text:
            "Design is never created in isolation. I believe in learning from what already exists, studying references, understanding the work of others and combining those accumulated ideas into something new.",
          second:
            "I enjoy the process of connecting knowledge from different fields and using it to create things that I could not have made from a single discipline alone.",
          mottoLabel: "PERSONAL_MOTTO",
          motto: "FAKE IT TILL YOU MAKE IT.",
          mottoText:
            "Not pretending to already know everything, but being willing to step into unfamiliar territory, learn what is necessary and keep building until the idea becomes real.",
        },
        approach: {
          description: "Creative pipeline from idea to object.",
          research: {
            title: "RESEARCH",
            description:
              "Study references, materials, mechanisms and existing solutions before deciding how something should be made.",
          },
          concept: {
            title: "CONCEPT",
            description:
              "Use sketches, illustration, visual references and concept design to explore what an object could become.",
          },
          build: {
            title: "BUILD",
            description:
              "Turn ideas into CAD models, electronics, 3D-printed parts and physical prototypes as early as possible.",
          },
          refine: {
            title: "REFINE",
            description:
              "Test, modify and iterate until aesthetics, function, usability and manufacturability begin to work together.",
          },
        },
        workflow: {
          header: "CREATIVE_PIPELINE // IDEA_TO_OBJECT",
          concept: {
            title: "01 // CONCEPT",
            description:
              "Idea generation, sketching, illustration and visual exploration.",
          },
          design: {
            title: "02 // DESIGN",
            description:
              "Form development, CAD modelling, CMF thinking and technical research.",
          },
          prototype: {
            title: "03 // PROTOTYPE",
            description:
              "3D printing, fabrication, electronics and physical experimentation.",
          },
          system: {
            title: "04 // SYSTEM",
            description:
              "Combine hardware, software and mechanical components into something functional.",
          },
          iteration: {
            title: "05 // ITERATE",
            description:
              "Test the result, identify problems and continue improving the object.",
          },
        },
        capabilities: {
          header: "R2S_CAPABILITY_MATRIX",
          industrial: {
            title: "Industrial\nProduct Design",
            description:
              "Product development, form exploration, CAD modelling, material research, CMF and physical prototyping.",
          },
          mechanical: {
            title: "CMF Design",
            description:
              "Color, Material and Surface Finish, covering glossy, matte, metallic, plastic, leather, textured and other common surface treatments.",
          },
          electronics: {
            title: "Electronics",
            description:
              "Electrical fundamentals, electronics, Arduino, ESP32 and the integration of electronic components into physical products.",
          },
          embedded: {
            title: "Embedded Systems",
            description:
              "Exploring microcontrollers, sensors, actuators and software-driven physical interaction, with AI-assisted development as part of the workflow.",
          },
          fabrication: {
            title: "Fabrication",
            description:
              "FDM 3D printing, material testing, laser cutting, basic welding and hands-on fabrication.",
          },
          visual: {
            title: "Illustration\nVisual Design",
            description:
              "Digital illustration, concept art, poster design, visual communication and aesthetic development.",
          },
          software: {
            title: "Digital Tools",
            description:
              "SolidWorks, KeyShot, Photoshop and Clip Studio Paint, with previous experience in Blender.",
          },
          teaching: {
            title: "Teaching Art",
            description:
              "I sometimes teach beginners how to draw. Teaching helps me organise knowledge into clearer systems while revisiting and strengthening my own understanding.",
          },
        },
        journey: {
          header: "PROCESS_LOG // DEVELOPMENT_PATH",
          title:
            "TO THE GALAXY AND\u00A0BEYOND",
          nodes: {
            hardware: "START",
            design: "INTERSECTION",
            maker: "PRACTICE",
            technology: "NEXT STAGE",
          },
          text:
            "My path did not begin with industrial design. I initially explored hardware engineering, but eventually realised that I wanted a field where technical thinking and visual creativity could coexist.",
          second:
            "Industrial and product design became a natural middle ground: a discipline where form, function, materials, manufacturing and visual communication are all part of the same process.",
          third:
            "Today, I am gradually moving toward the technical side again. Electronics, embedded systems, mechanical properties, material testing and fabrication have become increasingly important parts of my learning and personal projects.",
          fourth:
            "The goal is not to become the specialist who knows every component parameter by heart. I am more interested in understanding how different technologies fit together and how they can become part of a complete, usable product.",
        },
        current: {
          header: "CURRENT_RESEARCH // 2026",
          modules: {
            design: {
              title: "COMPOSITION / GRAPHIC DESIGN / AESTHETICS",
            },
            technology: {
              title: "ELECTRONICS / EMBEDDED SYSTEMS / ELECTRICAL",
            },
            making: {
              title: "3D PRINTING / FABRICATION",
            },
            visual: {
              title: "ILLUSTRATION / CONCEPT DESIGN",
            },
            ai: {
              title: "AI-ASSISTED WORKFLOW",
            },
          },
          design:
            "Composition, graphic design, aesthetics and visual systems.",
          technology:
            "Electronics, embedded systems, Arduino, ESP32 and electrical fundamentals.",
          making:
            "3D printing, materials, fabrication and physical prototyping.",
          visual:
            "Illustration, character drawing, concept design and visual communication.",
          ai:
            "AI-assisted coding and technical workflows, using AI as an implementation tool while keeping human judgement, taste and direction at the centre.",
        },
        future: {
          header: "NEXT_ITERATION // FUTURE_DIRECTION",
          text:
            "I want industrial design to remain my main professional direction while continuing to develop as a maker and illustrator.",
          second:
            "Become increasingly capable of taking an idea all the way from concept and visual development to electronics, software, mechanical structure, sourcing and a finished physical prototype in the long term.",
          third:
            "At the same time, keep drawing and visual creation as a second identity rather than letting technical work replace it.",
        },
        closing:
          "The goal is simple: take ideas seriously enough to build them, and stay curious enough to keep making new ones...",
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

    language: {
      code: "TRANSLATION // UNAVAILABLE",
      unavailable: "暂无英文版本",
      description: "当前项目仅提供中文版本",
    },

    card: {
      projectNode: "项目节点 //",
      online: "● 在线",
      imageStream: "图像流 // ACTIVE",
      category: "分类:",
      archive: "档案:",
    },

    hero: {
      title: {
        line1: "FUNCTIONAL",
        line2: "AESTHETICS",
      },
      cassette: "[ 设计数据库 // 已加载 ]",
      description: {
        line1:
          "通过将艺术直觉与研究驱动的思维相结合，在技术与美学之间建立连接",
        line2:
          "我的目标是让视觉上的优雅始终建立在严谨的技术与切实可行的执行之上",
      },
      button: "访问项目数据库 →",
    },

    featured: {
      tag: "项目数据库 // 精选档案",
      title: "精选项目",
      description: "> 正在访问设计与工程记录...",
      total: "文件总数:",
      active: "活动",
    },

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

    latest: {
      header: "系统日志 // 最近活动流",
      type: "类型:",
      updated: "已更新",
    },

    aboutPreview: {
      header: "个人档案 // 资料模块",
      operator: "操作员",
      status: "● 活跃设计师 // 创作者",
      description: {
        line1:
          "一名探索实体产品、技术与艺术之间联系的设计师与创作者",
        line2:
          "专注于通过工业设计、嵌入式系统与实验性原型，将概念转化为现实",
      },
      location: "位置: 鹿特丹 // 荷兰",
      field: "领域: 设计 + 技术",
      access: "访问完整档案 →",
    },

    footer: {
      system: "页脚节点 // 终止序列",
      status: "系统状态:",
      online: "在线",
      identity: "工业设计 × 嵌入式系统 × 创意制造",
      location: "位置:",
      statusLabel: "状态:",
      operational: "运行中",
      version: "版本:",
      uplink: "数据上行链路",
      github: "GitHub",
      email: "邮箱",
      about: "关于",
      copyright: "所有核心数据包已整合",
    },

    sections: {
      lab: {
        title: "实验室",
        description: "电子、实验与原型项目",
      },
      projects: {
        title: "项目",
        description: "工业设计与产品开发",
      },
      art: {
        title: "艺术",
        description: "插画、视觉实验与艺术作品",
      },
      notes: {
        title: "笔记",
        description: "研究、学习与技术记录",
      },

      about: {
        pageTag: "个人档案 // 资料模块",
        pageStatus: "● 系统运行中",
        eyebrow: "R2S STUDIO // 设计师 + 创作者 + 艺术家",
        title: "关于 R2S",

        introTitle: "设计、工程与视觉艺术之间",
        description: "我的创作处于设计、工程与视觉艺术的交汇地",
        introText:
          "从一个模糊的草图或概念开始，寻找参考、研究材料与结构、发展造型、建立 3D 模型、制作原型，并最终把它变成一个看得见、摸得着，同时真正能够工作的实体",

        identity: {
          title: "DESIGNER // MAKER // ARTIST",
          text:
            "注重美感，同时也希望理解一个东西是如何工作的、如何被制造出来，以及不同领域的技术如何被组合成一个完整的产品",
          second:
            "工业及产品设计是我目前主要的职业方向，而插画、概念设计与视觉创作则是我一直保留下来的另一种身份",
        },

        dossier: {
          header: "个人档案 // 关于模块",
          operator: "操作员",
          role: "工业及产品设计师",
          status: "● 活跃设计师 // 创作者",
          locationLabel: "位置",
          location: "鹿特丹 // 荷兰",
          fieldLabel: "领域",
          field: "美学 + 设计 + 技术",
          focusLabel: "当前方向",
          focus:
            "工业产品设计、嵌入式系统、电子、电工基础、原型制作、视觉表达与实验性创作",
        },

        philosophy: {
          header: "个人准则 // 设计理念",
          title: "站在巨人\n的肩膀上",
          text:
            "设计从来不是闭门造车学习已经存在的知识，研究前人的作品，寻找优秀的参考，并把这些已经积累下来的知识与想法重新组合成自己的东西",
          second:
            "我很享受把不同领域的知识连接起来的过程一个概念可以来自绘画与视觉设计，造型可以通过 CAD 实现，结构可以通过机械知识解决，最后再通过电子系统和制造技术让它真正运行起来",
          mottoLabel: "个人信条",
          motto: "FAKE IT TILL YOU MAKE IT.",
          mottoText:
            "我并不是什么都会，也不会一开始就知道该怎么做遇到不熟悉的东西，我更愿意先去了解、去学习，再一点点尝试可能会走弯路，也可能会失败，但只要还想把它做出来，就继续往下找答案、解决问题，直到最初的想法真的变成一个看得见、摸得着的东西正所谓“假装拥有，直到你的真的成功”",
        },

        approach: {
          research: {
            title: "研究",
            description:
              "寻找参考，研究材料、结构、机制与现有解决方案，在决定如何制作之前先理解问题与限制",
          },
          concept: {
            title: "概念",
            description:
              "通过草图、绘画、插画、视觉参考与概念设计，探索一个物体可能成为的样子",
          },
          build: {
            title: "构建",
            description:
              "尽早将想法转化为 CAD 模型、电子系统、3D 打印件与实体原型",
          },
          refine: {
            title: "迭代",
            description:
              "不断测试、修改与改进，让美学、功能、使用体验与可制造性逐渐形成统一",
          },
        },

        capabilities: {
          header: "R2S 能力矩阵",
          industrial: {
            title: "工业及产品设计",
            description:
              "产品开发、造型探索、CAD 建模、材料研究、CMF 与实体原型制作",
          },
          mechanical: {
            title: "CMF 设计",
            description:
              "颜色、材料与表面处理的设计研究，涵盖高光、哑光、金属、塑料、皮革、纹理等常见材质表现与搭配",
          },
          electronics: {
            title: "电子",
            description:
              "电工基础、电子系统、Arduino、ESP32以及将电子元件整合进实体产品",
          },
          embedded: {
            title: "嵌入式系统",
            description:
              "探索微控制器、传感器、执行器与软件驱动的实体交互，并将 AI 辅助开发融入个人工作流",
          },
          fabrication: {
            title: "制造与加工",
            description:
              "FDM 3D 打印、材料测试、激光切割、基础焊接与各种实体制作实践",
          },
          visual: {
            title: "插画与视觉设计",
            description:
              "数字绘画、角色绘画、概念设计、海报设计、视觉表达与美学探索",
          },
          software: {
            title: "数字工具",
            description:
              "SolidWorks、KeyShot、Photoshop、Clip Studio Paint、DaVinci Resolve",
          },
          teaching: {
            title: "绘画教学",
            description:
              "平时也会教新手画画; 教学能够帮助我快速整理理论体系，同时重新回顾并巩固自己已经掌握的知识"
          },
        },

        journey: {
          header: "PROCESS_LOG // DEVELOPMENT_PATH",
          title: "技能树",
          nodes: {
            hardware: "起点",
            design: "交汇点",
            maker: "实践",
            technology: "下一阶段",
          },
          text:
            "我的起点并不是工业设计我最开始接触的是硬件工程，但后来发现自己更希望进入一个能够同时容纳技术思维与视觉创造的领域",
          second:
            "工业及产品设计最终成为了一个很自然的交汇点：造型、功能、材料、制造与视觉表达，都能够在同一个设计过程中发生",
          third:
            "而现在，我又在逐渐向技术方向靠近电子、嵌入式系统、机械结构、材料测试与制造，正在越来越多地进入我的学习与个人项目",
          fourth:
            "我并不希望自己成为一个需要记住每一个元件参数的纯技术专家我更感兴趣的是理解不同技术之间如何协作，以及如何把它们组合成一个完整、可使用的产品",
        },

        current: {
          header: "当前研究 // 2026",
          modules: {
            design: {
              title: "构成 / 平面设计 / 美学",
            },
            technology: {
              title: "电子 / ESP32 / 电工",
            },
            making: {
              title: "3D PRINT / FABRICATION",
            },
            visual: {
              title: "插画 / 概念设计",
            },
            ai: {
              title: "AI辅助工作流",
            },
          },
          design: "构成、平面设计、美学与视觉系统",
          technology: "电子、嵌入式系统、Arduino、ESP32 与电工基础",
          making: "3D 打印、材料、加工制造与实体原型",
          visual: "插画、角色绘画、概念设计与视觉表达",
          ai: "AI 辅助编程和代码工作流，让 AI 负责实现层面的辅助，同时把审美、判断与方向仍然掌握在人手中",
        },

        future: {
          header: "下一阶段 // 未来方向",
          text: "工业设计是主线任务，同时还有创作者与插画师这两个支线",
          second:
            "长期来看，我希望自己能够越来越完整地把一个想法从概念与视觉开发，一路做到电子、软件、机械结构、采购与制造，最终成为一个成熟的独立设计师",
          third:
            "与此同时，我也希望继续画画，让视觉创作成为自己的另一种身份，而不是让技术工作完全取代它",
        },

        closing:
          "目标其实很简单：认真对待每一个值得实现的想法，同时保持足够的好奇心，继续创造新的东西",
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
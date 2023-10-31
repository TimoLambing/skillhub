// ROLLUP_NO_REPLACE 
 const _3_collapse = "{\"parsed\":{\"_path\":\"/documentation/config/collapse\",\"_dir\":\"config\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Collapse app config\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Sidebar presentation\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The collapse layout focuses on a single sidebar with a list of menu links, ideal for smaller apps if you don't have enough content or pages to use a more complex layout like the sidebar layout.\"}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Layout features\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Navigation (expanded):\"}]},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-layout-collapse.png\",\"srcDark\":\"/img/apps/tairo-layout-collapse-dark.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Navigation (collapsed):\"}]},{\"type\":\"text\",\"value\":\"  The collapse layout can be folded into an icon sidebar. The collapse layout can have single menu links or submenu links. Clicking on a submenu link will revert the sidebar to its uncollapsed state\"},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-layout-collapse-collapsed.png\",\"srcDark\":\"/img/apps/tairo-layout-collapse-collapsed-dark.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Toolbar:\"}]},{\"type\":\"text\",\"value\":\" The toolbar is displayed at the top of the main content area. It can be used to display the current page title and a set of quick actions.\"},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-toolbar.png\",\"srcDark\":\"/img/apps/tairo-toolbar-dark.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Circular menu:\"}]},{\"type\":\"text\",\"value\":\" When scrolling down, the circular menu is displayed at the top right of the screen. It can be used to display a set of quick actions.\"},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-layout-collapse-circular-menu.png\",\"srcDark\":\"/img/apps/tairo-layout-collapse-circular-menu-dark.png\"},\"children\":[]}]}]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Collapse configuration\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"First you need to enable the collapse layout layer in the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".app/nuxt.config.ts\"}]},{\"type\":\"text\",\"value\":\" file.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineNuxtConfig({\\n  extends: [\\n    '../layers/tairo-layout-collapse',\\n    '../layers/tairo',\\n  ]\\n})\\n\",\"filename\":\".app/nuxt.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineNuxtConfig({\\n  extends: [\\n    '../layers/tairo-layout-collapse',\\n    '../layers/tairo',\\n  ]\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Then you can configure the collapse layout in the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".app/app.config.ts\"}]},{\"type\":\"text\",\"value\":\" file.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    collapse: {\\n      // collapse config\\n    },\\n  },\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    collapse: {\\n      // collapse config\\n    },\\n  },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Default configuration\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    collapse: {\\n      circularMenu: {\\n        enabled: true,\\n        tools: [],\\n      },\\n      toolbar: {\\n        enabled: true,\\n        showTitle: false,\\n        showNavBurger: false,\\n        tools: [],\\n      },\\n      navigation: {\\n        enabled: true,\\n        header: {\\n          component: '',\\n        },\\n        footer: {\\n          component: '',\\n        },\\n        items: [],\\n      },\\n    },\\n  },\\n})\\n\",\"filename\":\"layers/tairo-layout-collapse/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    collapse: {\\n      circularMenu: {\\n        enabled: true,\\n        tools: [],\\n      },\\n      toolbar: {\\n        enabled: true,\\n        showTitle: false,\\n        showNavBurger: false,\\n        tools: [],\\n      },\\n      navigation: {\\n        enabled: true,\\n        header: {\\n          component: '',\\n        },\\n        footer: {\\n          component: '',\\n        },\\n        items: [],\\n      },\\n    },\\n  },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You don't need to specify all the properties, only the ones you want to override.\"}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Tools\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To add \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"tools\"}]},{\"type\":\"text\",\"value\":\" to the toolbar or the circular menu, you have to create global components, and add them to the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"tools\"}]},{\"type\":\"text\",\"value\":\" array.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    collapse: {\\n      toolbar: {\\n        tools: [\\n          {\\n            // Use a global component\\n            component: 'DemoThemeToggle',\\n            // Define the component props, if any\\n            props: {\\n              disableTransitions: true,\\n            },\\n          },\\n        ],\\n      },\\n    },\\n  },\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    collapse: {\\n      toolbar: {\\n        tools: [\\n          {\\n            // Use a global component\\n            component: 'DemoThemeToggle',\\n            // Define the component props, if any\\n            props: {\\n              disableTransitions: true,\\n            },\\n          },\\n        ],\\n      },\\n    },\\n  },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Navigation Header\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can add a header or/and a footer to the navigation sidebar. You can use a global component or a local component.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    collapse: {\\n      navigation: {\\n        header: {\\n          component: 'DemoCollapseNavigationHeader',\\n        },\\n        footer: {\\n          component: 'DemoCollapseNavigationFooter',\\n        },\\n      },\\n    },\\n  },\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    collapse: {\\n      navigation: {\\n        header: {\\n          component: 'DemoCollapseNavigationHeader',\\n        },\\n        footer: {\\n          component: 'DemoCollapseNavigationFooter',\\n        },\\n      },\\n    },\\n  },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Navigation items\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    collapse: {\\n      navigation: {\\n        items: [\\n          {\\n            name: 'List Widgets',\\n            icon: { name: 'ph:chat-circle-duotone', class: 'w-5 h-5' },\\n            to: '/dashboards/',\\n          },\\n          {\\n            name: 'Documentation',\\n            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },\\n            activePath: '/documentation',\\n            children: [\\n              {\\n                name: 'Collapse',\\n                to: '/documentation/shuriken-ui/forms/listbox',\\n                icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },\\n              },\\n              {\\n                name: 'Collapse 2 ',\\n                to: '/documentation/shuriken-ui/forms/input',\\n                icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },\\n              },\\n            ],\\n          },\\n          {\\n            name: 'Search',\\n            icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },\\n            click: () => {\\n              const { open } = usePanels()\\n              open('search')\\n            },\\n          },\\n          {\\n            name: 'Divider',\\n            divider: true,\\n          },\\n          {\\n            name: 'Settings',\\n            icon: { name: 'ph:gear-six-duotone', class: 'w-5 h-5' },\\n            to: '/dashboards/analytics',\\n          },\\n        ],\\n      },\\n    },\\n  },\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    collapse: {\\n      navigation: {\\n        items: [\\n          {\\n            name: 'List Widgets',\\n            icon: { name: 'ph:chat-circle-duotone', class: 'w-5 h-5' },\\n            to: '/dashboards/',\\n          },\\n          {\\n            name: 'Documentation',\\n            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },\\n            activePath: '/documentation',\\n            children: [\\n              {\\n                name: 'Collapse',\\n                to: '/documentation/shuriken-ui/forms/listbox',\\n                icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },\\n              },\\n              {\\n                name: 'Collapse 2 ',\\n                to: '/documentation/shuriken-ui/forms/input',\\n                icon: { name: 'ph:sidebar-duotone', class: 'w-4 h-4' },\\n              },\\n            ],\\n          },\\n          {\\n            name: 'Search',\\n            icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },\\n            click: () => {\\n              const { open } = usePanels()\\n              open('search')\\n            },\\n          },\\n          {\\n            name: 'Divider',\\n            divider: true,\\n          },\\n          {\\n            name: 'Settings',\\n            icon: { name: 'ph:gear-six-duotone', class: 'w-5 h-5' },\\n            to: '/dashboards/analytics',\\n          },\\n        ],\\n      },\\n    },\\n  },\\n})\\n\"}]}]}]},{\"type\":\"element\",\"tag\":\"doc-component-list\",\"props\":{\"prefix\":\"TairoCollapse\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"doc-nav\",\"props\":{\"next\":\"/documentation/tailwindcss\",\"prev\":\"/documentation/config/sidebar\"},\"children\":[]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:documentation:20.config:3.collapse.md\",\"_source\":\"content\",\"_file\":\"documentation/20.config/3.collapse.md\",\"_extension\":\"md\"},\"hash\":\"Vuq9AAi7mt\"}";

export { _3_collapse as default };
//# sourceMappingURL=3.collapse.mjs.map
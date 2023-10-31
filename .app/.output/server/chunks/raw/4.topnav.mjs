// ROLLUP_NO_REPLACE 
 const _4_topnav = "{\"parsed\":{\"_path\":\"/documentation/config/topnav\",\"_dir\":\"config\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Topnav app config\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Topnav presentation\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The topnav layout focuses on a single topnavbar with a list of single links, ideal for smaller apps if you don't have enough content or pages to use a more complex layout like the sidebar or the collapse layout.\"}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Layout features\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Navigation:\"}]},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-layout-topnav.png\",\"srcDark\":\"/img/apps/tairo-layout-topnav-dark.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Workspaces:\"}]},{\"type\":\"text\",\"value\":\" The top navigation layout provides a navbar header slot that we used to add a workspace selection dropdown. You can replace it with any component of your own.\"},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-layout-topnav-workspaces.png\",\"srcDark\":\"/img/apps/tairo-layout-topnav-workspaces-dark.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Circular menu:\"}]},{\"type\":\"text\",\"value\":\" When scrolling down, the circular menu is displayed at the bottom right of the screen. It can be used to display a set of quick actions.\"},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-layout-topnav-circular-menu.png\",\"srcDark\":\"/img/apps/tairo-layout-topnav-circular-menu-dark.png\"},\"children\":[]}]}]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Topnav configuration\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"First you need to enable the topnav layout layer in the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".app/nuxt.config.ts\"}]},{\"type\":\"text\",\"value\":\" file.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineNuxtConfig({\\n  extends: [\\n    '../layers/tairo-layout-topnav',\\n    '../layers/tairo',\\n  ]\\n})\\n\",\"filename\":\".app/nuxt.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineNuxtConfig({\\n  extends: [\\n    '../layers/tairo-layout-topnav',\\n    '../layers/tairo',\\n  ]\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Then you can configure the topnav layout in the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".app/app.config.ts\"}]},{\"type\":\"text\",\"value\":\" file.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    topnav: {\\n      // topnav config\\n    },\\n  },\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    topnav: {\\n      // topnav config\\n    },\\n  },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Default configuration\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    topnav: {\\n      circularMenu: {\\n        enabled: true,\\n        tools: [],\\n      },\\n      toolbar: {\\n        enabled: true,\\n        showTitle: false,\\n        tools: [],\\n      },\\n      navigation: {\\n        enabled: true,\\n        items: [],\\n      },\\n    },\\n  },\\n})\\n\",\"filename\":\"layers/tairo-layout-topnav/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    topnav: {\\n      circularMenu: {\\n        enabled: true,\\n        tools: [],\\n      },\\n      toolbar: {\\n        enabled: true,\\n        showTitle: false,\\n        tools: [],\\n      },\\n      navigation: {\\n        enabled: true,\\n        items: [],\\n      },\\n    },\\n  },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You don't need to specify all the properties, only the ones you want to override.\"}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Tools\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To add \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"tools\"}]},{\"type\":\"text\",\"value\":\" to the toolbar or the circular menu, you have to create global components, and add them to the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"tools\"}]},{\"type\":\"text\",\"value\":\" array.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    topnav: {\\n      toolbar: {\\n        tools: [\\n          {\\n            // Use a global component\\n            component: 'DemoThemeToggle',\\n            // Define the component props, if any\\n            props: {\\n              disableTransitions: true,\\n            },\\n          },\\n        ],\\n      },\\n    },\\n  },\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    topnav: {\\n      toolbar: {\\n        tools: [\\n          {\\n            // Use a global component\\n            component: 'DemoThemeToggle',\\n            // Define the component props, if any\\n            props: {\\n              disableTransitions: true,\\n            },\\n          },\\n        ],\\n      },\\n    },\\n  },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Navigation items\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    topnav: {\\n      navigation: {\\n        items: [\\n          {\\n            name: 'Dashboard',\\n            icon: { name: 'ph:gauge-duotone', class: 'w-6 h-6' },\\n            activePath: '/dashboards/sales',\\n            to: '/dashboards/sales',\\n          },\\n          {\\n            name: 'Projects',\\n            icon: { name: 'ph:suitcase-duotone', class: 'w-6 h-6' },\\n            activePath: '/layouts/projects/project-list-3',\\n            to: '/layouts/projects/project-list-3',\\n          },\\n          {\\n            name: 'Freelancers',\\n            icon: { name: 'ph:users-duotone', class: 'w-6 h-6' },\\n            activePath: '/layouts/flex-list-1',\\n            to: '/layouts/flex-list-1',\\n          },\\n          {\\n            name: 'Files',\\n            icon: { name: 'ph:note-duotone', class: 'w-6 h-6' },\\n            activePath: '/layouts/table-list-3',\\n            to: '/layouts/table-list-3',\\n          },\\n        ],\\n      },\\n    },\\n  },\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    topnav: {\\n      navigation: {\\n        items: [\\n          {\\n            name: 'Dashboard',\\n            icon: { name: 'ph:gauge-duotone', class: 'w-6 h-6' },\\n            activePath: '/dashboards/sales',\\n            to: '/dashboards/sales',\\n          },\\n          {\\n            name: 'Projects',\\n            icon: { name: 'ph:suitcase-duotone', class: 'w-6 h-6' },\\n            activePath: '/layouts/projects/project-list-3',\\n            to: '/layouts/projects/project-list-3',\\n          },\\n          {\\n            name: 'Freelancers',\\n            icon: { name: 'ph:users-duotone', class: 'w-6 h-6' },\\n            activePath: '/layouts/flex-list-1',\\n            to: '/layouts/flex-list-1',\\n          },\\n          {\\n            name: 'Files',\\n            icon: { name: 'ph:note-duotone', class: 'w-6 h-6' },\\n            activePath: '/layouts/table-list-3',\\n            to: '/layouts/table-list-3',\\n          },\\n        ],\\n      },\\n    },\\n  },\\n})\\n\"}]}]}]},{\"type\":\"element\",\"tag\":\"doc-component-list\",\"props\":{\"prefix\":\"TairoTopnav\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"doc-nav\",\"props\":{\"next\":\"/documentation/tailwindcss\",\"prev\":\"/documentation/config/collapse\"},\"children\":[]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:documentation:20.config:4.topnav.md\",\"_source\":\"content\",\"_file\":\"documentation/20.config/4.topnav.md\",\"_extension\":\"md\"},\"hash\":\"vLJnH3BOyz\"}";

export { _4_topnav as default };
//# sourceMappingURL=4.topnav.mjs.map

// ROLLUP_NO_REPLACE 
 const _2_sidebar = "{\"parsed\":{\"_path\":\"/documentation/config/sidebar\",\"_dir\":\"config\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Sidebar app config\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Sidebar presentation\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The sidebar layout is a double sided navigation layout. It has a sidebar with a list of menu links and a subsidebar with a list of submenu links.\"}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Layout features\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Navigation Sidebar Item:\"}]},{\"type\":\"text\",\"value\":\" The icon sidebar is the first part of the double sided navigation of the sidebar layout. It displays the logo and the main navigation icon links. Those navigation items can be displayed as a link or a button that triggers an action.\"},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-layout.png\",\"srcDark\":\"/img/apps/tairo-layout-dark.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Navigation Subsidebar:\"}]},{\"type\":\"text\",\"value\":\" The subsidebar works as a submenu element for each navigation item. It's a custom component that you have to create. We provide a set of components and prebuilt variations to help you to build it.\"},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-subsidebar.png\",\"srcDark\":\"/img/apps/tairo-subsidebar-dark.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Toolbar:\"}]},{\"type\":\"text\",\"value\":\" The toolbar is displayed at the top of the main content area. It can be used to display the current page title and a set of quick actions.\"},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-toolbar.png\",\"srcDark\":\"/img/apps/tairo-toolbar-dark.png\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Circular menu:\"}]},{\"type\":\"text\",\"value\":\" When scrolling down, the circular menu is displayed at the top right of the screen. It can be used to display a set of quick actions.\"},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/tairo-circular-menu.png\",\"srcDark\":\"/img/apps/tairo-circular-menu-dark.png\"},\"children\":[]}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"If you feel the sidebar has too many items for your app, you can use a smaller option that is the \"},{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"/documentation/config/collapse\"},\"children\":[{\"type\":\"text\",\"value\":\"collapse layout\"}]},{\"type\":\"text\",\"value\":\".\"}]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Sidebar configuration\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"First you need to enable the sidebar layout layer in the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".app/nuxt.config.ts\"}]},{\"type\":\"text\",\"value\":\" file.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineNuxtConfig({\\n  extends: [\\n    '../layers/tairo-layout-sidebar',\\n    '../layers/tairo',\\n  ]\\n})\\n\",\"filename\":\".app/nuxt.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineNuxtConfig({\\n  extends: [\\n    '../layers/tairo-layout-sidebar',\\n    '../layers/tairo',\\n  ]\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Then you can configure the sidebar layout in the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\".app/app.config.ts\"}]},{\"type\":\"text\",\"value\":\" file.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    sidebar: {\\n      // sidebar config\\n    },\\n  },\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    sidebar: {\\n      // sidebar config\\n    },\\n  },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Default configuration\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    sidebar: {\\n      circularMenu: {\\n        enabled: false,\\n        tools: [],\\n      },\\n      toolbar: {\\n        enabled: true,\\n        showTitle: true,\\n        showNavBurger: false,\\n        tools: [],\\n      },\\n      navigation: {\\n        enabled: true,\\n        startOpen: true,\\n        logo: {\\n          component: 'TairoLogo',\\n          props: { class: 'text-primary-600 h-10' },\\n        },\\n        items: [],\\n      },\\n    },\\n  },\\n})\\n\",\"filename\":\"layers/tairo-layout-sidebar/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    sidebar: {\\n      circularMenu: {\\n        enabled: false,\\n        tools: [],\\n      },\\n      toolbar: {\\n        enabled: true,\\n        showTitle: true,\\n        showNavBurger: false,\\n        tools: [],\\n      },\\n      navigation: {\\n        enabled: true,\\n        startOpen: true,\\n        logo: {\\n          component: 'TairoLogo',\\n          props: { class: 'text-primary-600 h-10' },\\n        },\\n        items: [],\\n      },\\n    },\\n  },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You don't need to specify all the properties, only the ones you want to override.\"}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Tools\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To add \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"tools\"}]},{\"type\":\"text\",\"value\":\" to the toolbar or the circular menu, you have to create global components, and add them to the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"tools\"}]},{\"type\":\"text\",\"value\":\" array.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    sidebar: {\\n      toolbar: {\\n        tools: [\\n          {\\n            // Use a global component\\n            component: 'DemoThemeToggle',\\n            // Define the component props, if any\\n            props: {\\n              disableTransitions: true,\\n            },\\n          },\\n        ],\\n      },\\n    },\\n  },\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    sidebar: {\\n      toolbar: {\\n        tools: [\\n          {\\n            // Use a global component\\n            component: 'DemoThemeToggle',\\n            // Define the component props, if any\\n            props: {\\n              disableTransitions: true,\\n            },\\n          },\\n        ],\\n      },\\n    },\\n  },\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Navigation Logo\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The default configuration will display the logo in the sidebar as:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-vue\"],\"code\":\"<TairoLogo class=\\\"text-primary-600 h-10\\\" />\\n\",\"language\":\"vue\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"<TairoLogo class=\\\"text-primary-600 h-10\\\" />\\n\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"You can create a component with the same name\\nin your app to override the default logo. \"},{\"type\":\"element\",\"tag\":\"em\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"(The component must be registered as global)\"}]}]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Alternatively, you can display an image with:\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    sidebar: {\\n      navigation: {\\n        logo: {\\n          component: 'img',\\n          props: { src: '/path/in/public/logo.png' },\\n        }\\n      }\\n    }\\n  }\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    sidebar: {\\n      navigation: {\\n        logo: {\\n          component: 'img',\\n          props: { src: '/path/in/public/logo.png' },\\n        }\\n      }\\n    }\\n  }\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"doc-heading\",\"props\":{\"label\":\"Navigation Items\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"export default defineAppConfig({\\n  tairo: {\\n    sidebar: {\\n      navigation: {\\n        items: [\\n          {\\n            // Title displayed in the sidebar \\n            title: 'Dashboards',\\n            // Icon displayed in the sidebar\\n            // see https://icones.js.org/ \\n            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },\\n            // Path where the item is considered active\\n            activePath: '/dashboards',\\n            // Subsidebar global component to display \\n            // when clicking on the item\\n            subsidebar: { component: 'DemoSubsidebarDashboards' },\\n            // OR Path to navigate to when clicking on the item\\n            to: '/dashboards/messaging',\\n            // OR Custom action to trigger \\n            // when clicking on the item\\n            click: () => {\\n              alert('clicked on layouts')\\n            },\\n          },\\n        ]\\n      }\\n    }\\n  }\\n})\\n\",\"filename\":\".app/app.config.ts\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"export default defineAppConfig({\\n  tairo: {\\n    sidebar: {\\n      navigation: {\\n        items: [\\n          {\\n            // Title displayed in the sidebar \\n            title: 'Dashboards',\\n            // Icon displayed in the sidebar\\n            // see https://icones.js.org/ \\n            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },\\n            // Path where the item is considered active\\n            activePath: '/dashboards',\\n            // Subsidebar global component to display \\n            // when clicking on the item\\n            subsidebar: { component: 'DemoSubsidebarDashboards' },\\n            // OR Path to navigate to when clicking on the item\\n            to: '/dashboards/messaging',\\n            // OR Custom action to trigger \\n            // when clicking on the item\\n            click: () => {\\n              alert('clicked on layouts')\\n            },\\n          },\\n        ]\\n      }\\n    }\\n  }\\n})\\n\"}]}]}]},{\"type\":\"element\",\"tag\":\"doc-component-list\",\"props\":{\"prefix\":\"TairoSidebar\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"doc-nav\",\"props\":{\"next\":\"/documentation/config/collapse\",\"prev\":\"/documentation/config\"},\"children\":[]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:documentation:20.config:2.sidebar.md\",\"_source\":\"content\",\"_file\":\"documentation/20.config/2.sidebar.md\",\"_extension\":\"md\"},\"hash\":\"DirZpdnGsC\"}";

export { _2_sidebar as default };
//# sourceMappingURL=2.sidebar.mjs.map

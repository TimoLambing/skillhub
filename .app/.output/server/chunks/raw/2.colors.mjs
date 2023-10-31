// ROLLUP_NO_REPLACE 
 const _2_colors = "{\"parsed\":{\"_path\":\"/documentation/tailwindcss/colors\",\"_dir\":\"tailwindcss\",\"_draft\":false,\"_partial\":false,\"_locale\":\"\",\"title\":\"Colors\",\"description\":\"\",\"body\":{\"type\":\"root\",\"children\":[{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Brand your application\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"To make your application stand out, Tairo uses \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"primary\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"info\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"success\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"warning\"}]},{\"type\":\"text\",\"value\":\", \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"danger\"}]},{\"type\":\"text\",\"value\":\" and \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"muted\"}]},{\"type\":\"text\",\"value\":\" custom color shades to allow you to easily customize the look and feel of your dashboard. By default, we use predefined colors from Tailwind CSS but you can easily change them by editing the \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"tailwind.config.ts\"}]},{\"type\":\"text\",\"value\":\" file.\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"strong\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Use the customizer :\"}]},{\"type\":\"text\",\"value\":\" Open the Tairo theme customizer by clicking on the droplet icon in the sidebar. You can dynamically change the layout between the two available (more in future updates). You can change the primary color using one of the presets but also the background color, by selecting one of the available shades. The customizer is a useful tool that let's you see your brand color in action.\"},{\"type\":\"element\",\"tag\":\"doc-link-image\",\"props\":{\"src\":\"/img/apps/customizer.png\",\"srcDark\":\"/img/apps/customizer-dark.png\"},\"children\":[]}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"\"},\"children\":[]},{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"Useful resources:\"}]},{\"type\":\"element\",\"tag\":\"ul\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://tailwindcss.com/docs/customizing-colors\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"View default Tailwind CSS colors on tailwindcss.com\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://www.tailwindshades.com/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Generate shades for your custom colors with tailwindshades.com\"}]}]},{\"type\":\"element\",\"tag\":\"li\",\"props\":{},\"children\":[{\"type\":\"element\",\"tag\":\"a\",\"props\":{\"href\":\"https://www.tints.dev/\",\"rel\":[\"nofollow\"]},\"children\":[{\"type\":\"text\",\"value\":\"Generate P-3 shades for your colors with tints.dev\"}]}]}]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Primary color\",\":code\":\"false\",\":dark\":\"false\",\"demo\":\"#examples/colors/primary-color.vue\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"primary\"}]},{\"type\":\"text\",\"value\":\" color is the main color to establish brand recognition and familiarity of your application.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the primary color\\n      primary: colors.violet,\\n    }\\n  }\\n})\\n\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the primary color\\n      primary: colors.violet,\\n    }\\n  }\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"_1\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Muted color\",\":code\":\"false\",\":dark\":\"false\",\"demo\":\"#examples/colors/muted-color.vue\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"muted\"}]},{\"type\":\"text\",\"value\":\" color is used to create a contrast between the primary color, text and the background color. To make your app look good in dark mode, you should use a color that fit well with the primary color: example, if your primary color is red, you should use a warm gray color for the muted color.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the muted color\\n      muted: colors.slate,\\n    }\\n  }\\n})\\n\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the muted color\\n      muted: colors.slate,\\n    }\\n  }\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"_2\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Info color\",\":code\":\"false\",\":dark\":\"false\",\"demo\":\"#examples/colors/info-color.vue\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"info\"}]},{\"type\":\"text\",\"value\":\" color is the secondary color used to highlight important information.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the muted color\\n      info: colors.sky,\\n    }\\n  }\\n})\\n\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the muted color\\n      info: colors.sky,\\n    }\\n  }\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"_3\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Success color\",\":code\":\"false\",\":dark\":\"false\",\"demo\":\"#examples/colors/success-color.vue\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"success\"}]},{\"type\":\"text\",\"value\":\" color is the color shade used to highlight actions that have been completed successfully.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the muted color\\n      success: colors.teal,\\n    }\\n  }\\n})\\n\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the muted color\\n      success: colors.teal,\\n    }\\n  }\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"_4\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Danger color\",\":code\":\"false\",\":dark\":\"false\",\"demo\":\"#examples/colors/danger-color.vue\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"danger\"}]},{\"type\":\"text\",\"value\":\" color is the color shade used to raise attention to potentially dangerous actions or when something has gone wrong.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the muted color\\n      success: colors.rose,\\n    }\\n  }\\n})\\n\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the muted color\\n      success: colors.rose,\\n    }\\n  }\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"_5\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"doc-component-demo\",\"props\":{\"title\":\"Warning color\",\":code\":\"false\",\":dark\":\"false\",\"demo\":\"#examples/colors/warning-color.vue\"},\"children\":[{\"type\":\"element\",\"tag\":\"p\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"The \"},{\"type\":\"element\",\"tag\":\"code\",\"props\":{},\"children\":[{\"type\":\"text\",\"value\":\"warning\"}]},{\"type\":\"text\",\"value\":\" color is the color shade used to highlight actions that need to be taken.\"}]},{\"type\":\"element\",\"tag\":\"pre\",\"props\":{\"className\":[\"language-ts\"],\"code\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the muted color\\n      success: colors.amber,\\n    }\\n  }\\n})\\n\",\"language\":\"ts\",\"meta\":\"\"},\"children\":[{\"type\":\"element\",\"tag\":\"code\",\"props\":{\"__ignoreMap\":\"\"},\"children\":[{\"type\":\"text\",\"value\":\"import { withShurikenUI } from '@shuriken-ui/tailwind'\\nimport colors from 'tailwindcss/colors'\\n\\nexport default withShurikenUI({\\n  content: [],\\n  theme: {\\n    extend: {\\n      // change the muted color\\n      success: colors.amber,\\n    }\\n  }\\n})\\n\"}]}]},{\"type\":\"element\",\"tag\":\"hr\",\"props\":{\"id\":\"_6\"},\"children\":[]}]},{\"type\":\"element\",\"tag\":\"doc-nav\",\"props\":{\"next\":\"/documentation/tailwindcss/fonts\",\"prev\":\"/documentation/tailwindcss\"},\"children\":[]}],\"toc\":{\"title\":\"\",\"searchDepth\":2,\"depth\":2,\"links\":[]}},\"_type\":\"markdown\",\"_id\":\"content:documentation:30.tailwindcss:2.colors.md\",\"_source\":\"content\",\"_file\":\"documentation/30.tailwindcss/2.colors.md\",\"_extension\":\"md\"},\"hash\":\"tmUSblzhZB\"}";

export { _2_colors as default };
//# sourceMappingURL=2.colors.mjs.map

import{d as b,o as s,a0 as h,w as i,g as t,f as o,e as p,J as n,S as m,s as u,n as _,y as x}from"./entry.46c51c2c.js";import{_ as k}from"./BaseTreeSelect.3e03cbaf.js";import{_ as T}from"./DocLayoutSection.vue.6b46e4af.js";import"./BaseCheckbox.vue.f23336ab.js";import"./IconCheck.9e0e7a10.js";import"./TairoTocAnchor.vue.97c272b6.js";const B=o("div",{class:"border-muted-200 dark:border-muted-700 border-b px-8 py-6"},[o("span",null,"Your project ...")],-1),w={class:"px-8 py-6"},C={class:"text-muted-400 me-1 flex h-5 w-5 items-center justify-center"},S={class:"inline-flex items-center gap-2"},D=["data-nui-tooltip","onClick"],L=o("div",{class:"border-muted-200 dark:border-muted-700 border-b px-8 py-6"},[o("span",null,"... is merged into a unique app!")],-1),N={class:"px-8 py-6"},Y={class:"text-muted-400 me-1 flex h-5 w-5 items-center justify-center"},E={class:"inline-flex items-center gap-2"},I=["data-nui-tooltip","onClick"],z=b({__name:"DocOverviewLayers",props:{tag:{},title:{}},setup(d){const a=d,y=[{item:{name:".app/",tooltip:"Your app root folder"},open:!0,children:[{item:{name:"components/",tooltip:"Your app components"},open:!0,children:[{item:{name:"AppSearch.vue",tooltip:"Your app search component",icon:"vscode-icons:file-type-vue"}},{item:{name:"BaseInput.vue",tooltip:"Override @shuriken-ui/nuxt BaseInput",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"layouts/",tooltip:"Your layouts"},open:!0,children:[{item:{name:"default.vue",tooltip:"Define your default layout",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"pages/",tooltip:"Your pages"},open:!0,children:[{item:{name:"index.vue",tooltip:"Your home page",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"app.config.ts",tooltip:"Your app config; depends on layers",icon:"vscode-icons:file-type-typescript"}},{item:{name:"nuxt.config.ts",tooltip:"Extends layers and module config",icon:"vscode-icons:file-type-typescript"}}]},{item:{name:"layers/",tooltip:"List of extended layers in nuxt.config.ts"},open:!0,children:[{item:{name:"tairo/",color:"bg-amber-500",tooltip:"Shared base layer"},children:[{item:{name:"components/"},children:[{item:{name:"TairoModal.vue",icon:"vscode-icons:file-type-vue"}},{item:{name:"TairoError.vue",icon:"vscode-icons:file-type-vue"}},{item:{name:"Tairo...",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"composables/"},children:[{item:{name:"panels.ts",icon:"vscode-icons:file-type-typescript"}},{item:{name:"toaster.ts",icon:"vscode-icons:file-type-typescript"}}]},{item:{name:"layouts/"},children:[{item:{name:"empty.vue",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"app.vue",tooltip:"Default app wrapper component",icon:"vscode-icons:file-type-vue"}},{item:{name:"app.config.ts",tooltip:"Default app config for tairo",icon:"vscode-icons:file-type-typescript"}},{item:{name:"nuxt.schema.ts",tooltip:"Default nuxt schema for tairo",icon:"vscode-icons:file-type-typescript"}},{item:{name:"nuxt.config.ts",tooltip:"Default nuxt config for tairo",icon:"vscode-icons:file-type-typescript"}}]},{item:{name:"tairo-layout-sidebar/",color:"bg-lime-500",tooltip:"Layout layer with sidebar navigation"},children:[{item:{name:"components/"},children:[{item:{name:"TairoSidebarLayout.vue",icon:"vscode-icons:file-type-vue"}},{item:{name:"TairoSidebarNavigation.vue",icon:"vscode-icons:file-type-vue"}},{item:{name:"TairoSidebar...",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"composables/"},children:[{item:{name:"sidebar.ts",icon:"vscode-icons:file-type-typescript"}}]},{item:{name:"layouts/"},children:[{item:{name:"sidebar.vue",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"error.vue",tooltip:"Register error component using layout-sidebar",icon:"vscode-icons:file-type-vue"}},{item:{name:"app.config.ts",tooltip:"Default config for layout-sidebar",icon:"vscode-icons:file-type-typescript"}},{item:{name:"nuxt.schema.ts",tooltip:"Nuxt schema for layout-sidebar",icon:"vscode-icons:file-type-typescript"}},{item:{name:"nuxt.config.ts",tooltip:"Extra nuxt config for layout-sidebar",icon:"vscode-icons:file-type-typescript"}}]},{item:{name:"tairo-layout-collapse/",color:"bg-pink-500",tooltip:"Layout layer with collapsable navigation"},children:[{item:{name:"components/"},children:[{item:{name:"TairCollapseLayout.vue",icon:"vscode-icons:file-type-vue"}},{item:{name:"TairCollapseNavigation.vue",icon:"vscode-icons:file-type-vue"}},{item:{name:"TairCollapse...",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"composables/"},children:[{item:{name:"collapse.ts",icon:"vscode-icons:file-type-typescript"}}]},{item:{name:"layouts/"},children:[{item:{name:"collapse.vue",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"error.vue",tooltip:"Register error component using layout-collapse",icon:"vscode-icons:file-type-vue"}},{item:{name:"app.config.ts",tooltip:"Specific config for layout-collapse",icon:"vscode-icons:file-type-typescript"}},{item:{name:"nuxt.schema.ts",tooltip:"Specific nuxt schema for layout-collapse",icon:"vscode-icons:file-type-typescript"}},{item:{name:"nuxt.config.ts",tooltip:"Extra nuxt config for layout-collapse",icon:"vscode-icons:file-type-typescript"}}]},{item:{name:"@shuriken-ui/nuxt",color:"bg-purple-500",tooltip:"Open-source shuriken-ui layer"},children:[{item:{name:"components/"},children:[{item:{name:"BaseInput.vue",icon:"vscode-icons:file-type-vue"}},{item:{name:"BaseButton.vue",icon:"vscode-icons:file-type-vue"}},{item:{name:"Base...",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"composables/"},children:[{item:{name:"file-preview.ts",icon:"vscode-icons:file-type-typescript"}},{item:{name:"scrollspy.ts",icon:"vscode-icons:file-type-typescript"}}]},{item:{name:"app.config.ts",tooltip:"Default config for shuriken-ui",icon:"vscode-icons:file-type-typescript"}},{item:{name:"nuxt.schema.ts",tooltip:"Nuxt schema for shuriken-ui",icon:"vscode-icons:file-type-typescript"}},{item:{name:"nuxt.config.ts",tooltip:"Extra nuxt config for shuriken-ui",icon:"vscode-icons:file-type-typescript"}}]}]}],f=[{item:{name:"components/"},open:!0,children:[{item:{name:"AppSearch.vue",tooltip:"from your app layer",icon:"vscode-icons:file-type-vue"}},{item:{name:"BaseButton.vue",icon:"vscode-icons:file-type-vue",color:"bg-purple-500",tooltip:"from @shuriken-ui/nuxt layer"}},{item:{name:"BaseInput.vue",tooltip:"from your app layer",icon:"vscode-icons:file-type-vue"}},{item:{name:"TairoModal.vue",icon:"vscode-icons:file-type-vue",color:"bg-amber-500",tooltip:"from tairo layer"}},{item:{name:"TairoError.vue",icon:"vscode-icons:file-type-vue",color:"bg-amber-500",tooltip:"from tairo layer"}},{item:{name:"TairoSidebarLayout.vue",icon:"vscode-icons:file-type-vue",color:"bg-lime-500",tooltip:"from tairo-layout-sidebar layer"}},{item:{name:"TairoSidebarNavigation.vue",icon:"vscode-icons:file-type-vue",color:"bg-lime-500",tooltip:"from tairo-layout-sidebar layer"}},{item:{name:"TairCollapseLayout.vue",icon:"vscode-icons:file-type-vue",color:"bg-pink-500",tooltip:"from tairo-layout-collapse layer"}},{item:{name:"TairCollapseNavigation.vue",icon:"vscode-icons:file-type-vue",color:"bg-pink-500",tooltip:"from tairo-layout-collapse layer"}}]},{item:{name:"layouts/"},children:[{item:{name:"empty.vue",tooltip:"from tairo layer",icon:"vscode-icons:file-type-vue",color:"bg-amber-500"}},{item:{name:"sidebar.vue",tooltip:"from tairo-layout-sidebar layer",icon:"vscode-icons:file-type-vue",color:"bg-lime-500"}},{item:{name:"collapse.vue",tooltip:"from tairo-layout-collapse layer",icon:"vscode-icons:file-type-vue",color:"bg-pink-500"}},{item:{name:"default.vue",tooltip:"from your app layer",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"composables/"},children:[{item:{name:"panels.ts",tooltip:"from tairo layer",icon:"vscode-icons:file-type-typescript",color:"bg-amber-500"}},{item:{name:"toaster.ts",tooltip:"from tairo layer",icon:"vscode-icons:file-type-typescript",color:"bg-amber-500"}},{item:{name:"sidebar.ts",tooltip:"from tairo-layout-sidebar layer",icon:"vscode-icons:file-type-typescript",color:"bg-lime-500"}},{item:{name:"collapse.ts",tooltip:"from tairo-layout-collapse layer",icon:"vscode-icons:file-type-typescript",color:"bg-pink-500"}},{item:{name:"file-preview.ts",tooltip:"from @shuriken-ui/nuxt layer",icon:"vscode-icons:file-type-typescript",color:"bg-purple-500"}},{item:{name:"scrollspy.ts",tooltip:"from @shuriken-ui/nuxt layer",icon:"vscode-icons:file-type-typescript",color:"bg-purple-500"}}]},{item:{name:"pages/"},open:!0,children:[{item:{name:"index.vue",tooltip:"from your app layer",icon:"vscode-icons:file-type-vue"}}]},{item:{name:"app.vue",tooltip:"from tairo layer",icon:"vscode-icons:file-type-vue"}},{item:{name:"error.vue",tooltip:"depends on extends order in nuxt.config.ts",icon:"vscode-icons:file-type-vue"}},{item:{name:"app.config.ts",tooltip:"merged from all layers",icon:"vscode-icons:file-type-typescript"}},{item:{name:"nuxt.config.ts",tooltip:"merged from all layers",icon:"vscode-icons:file-type-typescript"}}];return(j,O)=>{const l=_,r=k,v=x,g=T;return s(),h(g,{title:a.title,tag:a.tag},{default:i(()=>[t(v,{class:"divide-muted-200 dark:divide-muted-700 grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0"},{default:i(()=>[o("div",null,[B,o("div",w,[t(r,{children:y,treeline:"",icons:{open:"clarity:folder-open-line",closed:"clarity:folder-line",item:"clarity:file-line",empty:"clarity:alert-line"},classes:{treeline:"border-muted-300 dark:border-muted-700"}},{"item-icon":i(({child:e})=>[o("span",C,[t(l,{name:e?.item?.icon,class:"h-4 w-4"},null,8,["name"])])]),"item-label":i(({child:e,toggle:c})=>[o("span",S,[e?.item?.color?(s(),p("span",{key:0,class:n(["inline-block h-2 w-2 rounded-sm",e?.item?.color])},null,2)):m("",!0),o("span",{"data-nui-tooltip":e?.item?.tooltip,"data-nui-tooltip-position":"right",class:n([e?.children?"cursor-pointer":"cursor-default",e?.item?.tooltip?"cursor-help pe-2":"cursor-default"]),onClick:c},u(e?.item?.name),11,D)])]),_:1})])]),o("div",null,[L,o("div",N,[t(r,{children:f,treeline:"",icons:{open:"clarity:folder-open-line",closed:"clarity:folder-line",item:"clarity:file-line",empty:"clarity:alert-line"},classes:{treeline:"border-muted-300 dark:border-muted-700"}},{"item-icon":i(({child:e})=>[o("span",Y,[t(l,{name:e?.item?.icon,class:"h-4 w-4"},null,8,["name"])])]),"item-label":i(({child:e,toggle:c})=>[o("span",E,[e?.item?.color?(s(),p("span",{key:0,class:n(["inline-block h-2 w-2 rounded-sm",e?.item?.color])},null,2)):m("",!0),o("span",{"data-nui-tooltip":e?.item?.tooltip,"data-nui-tooltip-position":"right",class:n([e?.children?"cursor-pointer":"cursor-default",e?.item?.tooltip?"cursor-help pe-2":"cursor-default"]),onClick:c},u(e?.item?.name),11,I)])]),_:1})])])]),_:1})]),_:1},8,["title","tag"])}}});export{z as default};

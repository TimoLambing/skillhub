import { l as _export_sfc, r as __nuxt_component_0$2 } from '../server.mjs';
import { _ as _sfc_main$1 } from './BaseProse-1777d29c.mjs';
import { useSSRContext, defineComponent, shallowRef, ref, computed, watchEffect, unref, mergeProps, withCtx, createVNode } from 'vue';
import { u as useColorMode } from './composables-f7cb2fae.mjs';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypeShikiji from 'rehype-shikiji';
import remarkGFM from 'remark-gfm';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { unified } from 'unified';
import { ssrRenderComponent } from 'vue/server-renderer';

let processor;
function getMarkdownProcessors(themes = {}, langs = []) {
  if (processor) {
    return processor;
  }
  processor = createProcessor({
    langs,
    themes
  });
  return processor;
}
async function createProcessor(options) {
  return unified().use(remarkParse).use(remarkGFM).use(remark2rehype, { allowDangerousHtml: true }).use(rehypeShikiji, options).use(rehypeRaw).use(rehypeSanitize, {
    ...defaultSchema,
    attributes: {
      ...defaultSchema.attributes,
      pre: [
        ...defaultSchema.attributes?.pre || [],
        ["className"],
        ["style"]
      ],
      code: [
        ...defaultSchema.attributes?.code || [],
        ["className"],
        ["style"]
      ],
      i: [...defaultSchema.attributes?.i || [], ["className"]],
      span: [
        ...defaultSchema.attributes?.span || [],
        ["className"],
        ["style"]
      ]
    }
  }).use(rehypeExternalLinks, {
    rel: ["noopener noreferrer"],
    target: "_blank"
  }).use(rehypeStringify);
}
const light = {
  "name": "cssninja-light-theme",
  "base": "vs",
  "colors": {
    "focusBorder": "#00000000",
    "foreground": "#475569",
    "descriptionForeground": "#47556990",
    "errorForeground": "#0369a1",
    "textLink.foreground": "#1c6b48",
    "textLink.activeForeground": "#1c6b48",
    "textBlockQuote.background": "#f8fafc",
    "textBlockQuote.border": "#f0f0f0",
    "textCodeBlock.background": "#f8fafc",
    "textPreformat.foreground": "#586069",
    "textSeparator.foreground": "#d1d5da",
    "button.background": "#1c6b48",
    "button.foreground": "#f8fafc",
    "button.hoverBackground": "#1c6b48",
    "checkbox.background": "#f7f7f7",
    "checkbox.border": "#d1d5da",
    "dropdown.background": "#f8fafc",
    "dropdown.border": "#f0f0f0",
    "dropdown.foreground": "#475569",
    "dropdown.listBackground": "#f7f7f7",
    "input.background": "#f7f7f7",
    "input.border": "#f0f0f0",
    "input.foreground": "#475569",
    "input.placeholderForeground": "#47556990",
    "inputOption.activeBackground": "#47556950",
    "badge.foreground": "#f8fafc",
    "badge.background": "#47556990",
    "progressBar.background": "#1c6b48",
    "titleBar.activeForeground": "#4e4f47",
    "titleBar.activeBackground": "#f8fafc",
    "titleBar.inactiveForeground": "#6a737d",
    "titleBar.inactiveBackground": "#f8fafc",
    "titleBar.border": "#f7f7f7",
    "activityBar.foreground": "#475569",
    "activityBar.inactiveForeground": "#47556950",
    "activityBar.background": "#f8fafc",
    "activityBarBadge.foreground": "#f8fafc",
    "activityBarBadge.background": "#4e4f47",
    "activityBar.activeBorder": "#1c6b48",
    "activityBar.border": "#f0f0f0",
    "sideBar.foreground": "#4e4f47",
    "sideBar.background": "#f8fafc",
    "sideBar.border": "#f0f0f0",
    "sideBarTitle.foreground": "#475569",
    "sideBarSectionHeader.foreground": "#475569",
    "sideBarSectionHeader.background": "#f8fafc",
    "sideBarSectionHeader.border": "#f0f0f0",
    "list.hoverForeground": "#475569",
    "list.inactiveSelectionForeground": "#475569",
    "list.activeSelectionForeground": "#475569",
    "list.hoverBackground": "#f7f7f7",
    "list.inactiveSelectionBackground": "#f7f7f7",
    "list.activeSelectionBackground": "#f7f7f7",
    "list.inactiveFocusBackground": "#f8fafc",
    "list.focusBackground": "#f7f7f7",
    "tree.indentGuidesStroke": "#e1e4e8",
    "notificationCenterHeader.foreground": "#6a737d",
    "notificationCenterHeader.background": "#f8fafc",
    "notifications.foreground": "#475569",
    "notifications.background": "#f8fafc",
    "notifications.border": "#f0f0f0",
    "notificationsErrorIcon.foreground": "#0369a1",
    "notificationsWarningIcon.foreground": "#a65e2b",
    "notificationsInfoIcon.foreground": "#296aa3",
    "pickerGroup.border": "#e1e4e8",
    "pickerGroup.foreground": "#475569",
    "quickInput.background": "#f8fafc",
    "quickInput.foreground": "#475569",
    "statusBar.foreground": "#4e4f47",
    "statusBar.background": "#f8fafc",
    "statusBar.border": "#f0f0f0",
    "statusBar.noFolderBackground": "#f8fafc",
    "statusBar.debuggingBackground": "#f7f7f7",
    "statusBar.debuggingForeground": "#4e4f47",
    "statusBarItem.prominentBackground": "#f7f7f7",
    "editorGroupHeader.tabsBackground": "#f8fafc",
    "editorGroupHeader.tabsBorder": "#f0f0f0",
    "editorGroup.border": "#f0f0f0",
    "tab.activeForeground": "#475569",
    "tab.inactiveForeground": "#6a737d",
    "tab.inactiveBackground": "#f8fafc",
    "tab.activeBackground": "#f8fafc",
    "tab.hoverBackground": "#f7f7f7",
    "tab.unfocusedHoverBackground": "#f8fafc",
    "tab.border": "#f0f0f0",
    "tab.unfocusedActiveBorderTop": "#f0f0f0",
    "tab.activeBorder": "#f0f0f0",
    "tab.unfocusedActiveBorder": "#f0f0f0",
    "tab.activeBorderTop": "#47556990",
    "breadcrumb.foreground": "#6a737d",
    "breadcrumb.focusForeground": "#475569",
    "breadcrumb.background": "#f7f7f7",
    "breadcrumb.activeSelectionForeground": "#22222215",
    "breadcrumbPicker.background": "#f8fafc",
    "editor.foreground": "#475569",
    "editor.background": "#f8fafc",
    "editorWidget.background": "#f8fafc",
    "editor.foldBackground": "#22222210",
    "editor.lineHighlightBackground": "#f7f7f7",
    "editorLineNumber.foreground": "#47556950",
    "editorLineNumber.activeForeground": "#4e4f47",
    "editorIndentGuide.background": "#00000015",
    "editorIndentGuide.activeBackground": "#00000030",
    "editorWhitespace.foreground": "#00000015",
    "editor.findMatchBackground": "#e6cc7744",
    "editor.findMatchHighlightBackground": "#e6cc7766",
    "editor.inactiveSelectionBackground": "#22222208",
    "editor.selectionBackground": "#22222215",
    "editor.selectionHighlightBackground": "#22222208",
    "editor.wordHighlightBackground": "#1c6b4805",
    "editor.wordHighlightStrongBackground": "#1c6b4810",
    "editorBracketMatch.background": "#1c6b4820",
    "diffEditor.insertedTextBackground": "#1c6b4815",
    "diffEditor.removedTextBackground": "#0369a110",
    "scrollbar.shadow": "#6a737d33",
    "scrollbarSlider.background": "#47556910",
    "scrollbarSlider.hoverBackground": "#47556950",
    "scrollbarSlider.activeBackground": "#47556950",
    "editorOverviewRuler.border": "#fff",
    "panel.background": "#f8fafc",
    "panel.border": "#f0f0f0",
    "panelTitle.activeBorder": "#1c6b48",
    "panelTitle.activeForeground": "#475569",
    "panelTitle.inactiveForeground": "#6a737d",
    "panelInput.border": "#e1e4e8",
    "terminal.foreground": "#475569",
    "terminal.selectionBackground": "#22222215",
    "terminal.ansiBrightBlack": "#aaaaaa",
    "terminal.ansiBrightBlue": "#296aa3",
    "terminal.ansiBrightCyan": "#2993a3",
    "terminal.ansiBrightGreen": "#a855f7",
    "terminal.ansiBrightMagenta": "#a13865",
    "terminal.ansiBrightRed": "#0369a1",
    "terminal.ansiBrightWhite": "#dddddd",
    "terminal.ansiBrightYellow": "#bda437",
    "terminal.ansiBlack": "#121212",
    "terminal.ansiBlue": "#296aa3",
    "terminal.ansiCyan": "#2993a3",
    "terminal.ansiGreen": "#a855f7",
    "terminal.ansiMagenta": "#a13865",
    "terminal.ansiRed": "#0369a1",
    "terminal.ansiWhite": "#dbd7caee",
    "terminal.ansiYellow": "#bda437",
    "gitDecoration.addedResourceForeground": "#a855f7",
    "gitDecoration.modifiedResourceForeground": "#296aa3",
    "gitDecoration.deletedResourceForeground": "#0369a1",
    "gitDecoration.untrackedResourceForeground": "#2993a3",
    "gitDecoration.ignoredResourceForeground": "#47556950",
    "gitDecoration.conflictingResourceForeground": "#a65e2b",
    "gitDecoration.submoduleResourceForeground": "#47556990",
    "editorGutter.modifiedBackground": "#296aa3",
    "editorGutter.addedBackground": "#a855f7",
    "editorGutter.deletedBackground": "#0369a1",
    "editorBracketHighlight.foreground1": "#2993a3",
    "editorBracketHighlight.foreground2": "#a855f7",
    "editorBracketHighlight.foreground3": "#a65e2b",
    "editorBracketHighlight.foreground4": "#a13865",
    "editorBracketHighlight.foreground5": "#bda437",
    "editorBracketHighlight.foreground6": "#296aa3",
    "debugToolBar.background": "#f8fafc",
    "editor.stackFrameHighlightBackground": "#fffbdd",
    "editor.focusedStackFrameHighlightBackground": "#fff5b1",
    "peekViewEditor.background": "#f8fafc",
    "peekViewResult.background": "#f8fafc",
    "settings.headerForeground": "#475569",
    "settings.modifiedItemIndicator": "#1c6b48",
    "welcomePage.buttonBackground": "#f6f8fa",
    "welcomePage.buttonHoverBackground": "#e1e4e8",
    "problemsErrorIcon.foreground": "#0369a1",
    "problemsWarningIcon.foreground": "#a65e2b",
    "problemsInfoIcon.foreground": "#296aa3",
    "editorError.foreground": "#0369a1",
    "editorWarning.foreground": "#a65e2b",
    "editorInfo.foreground": "#296aa3",
    "editorHint.foreground": "#a855f7",
    "editorGutter.commentRangeForeground": "#47556950",
    "editorGutter.foldingControlForeground": "#47556990",
    "editorInlayHint.foreground": "#999999",
    "editorInlayHint.background": "#00000000",
    "editorStickyScroll.background": "#f7f7f7",
    "editorStickyScrollHover.background": "#f7f7f7"
  },
  "semanticHighlighting": true,
  "semanticTokenColors": {
    "namespace": "#b05a78",
    "property": "#64748b",
    "interface": "#2e8f82",
    "type": "#2e8f82",
    "class": "#5a6aa6"
  },
  "tokenColors": [
    {
      "scope": ["comment", "punctuation.definition.comment", "string.comment"],
      "settings": {
        "foreground": "#a0ada0"
      }
    },
    {
      "scope": [
        "delimiter.bracket",
        "delimiter",
        "invalid.illegal.character-not-allowed-here.html",
        "keyword.operator.rest",
        "keyword.operator.spread",
        "keyword.operator.type.annotation",
        "keyword.operator.relational.ts",
        "meta.brace",
        "meta.tag.block.any.html",
        "meta.tag.inline.any.html",
        "meta.tag.structure.input.void.html",
        "meta.type.annotation",
        "storage.type.function.arrow",
        "keyword.operator.type",
        "meta.objectliteral.ts",
        "punctuation"
      ],
      "settings": {
        "foreground": "#999999"
      }
    },
    {
      "scope": [
        "constant",
        "entity.name.constant",
        "variable.language",
        "meta.definition.variable"
      ],
      "settings": {
        "foreground": "#a65e2b"
      }
    },
    {
      "scope": ["entity", "entity.name"],
      "settings": {
        "foreground": "#0ea5e9"
      }
    },
    {
      "scope": "variable.parameter.function",
      "settings": {
        "foreground": "#475569"
      }
    },
    {
      "scope": ["entity.name.tag", "tag.html"],
      "settings": {
        "foreground": "#a855f7"
      }
    },
    {
      "scope": "entity.name.function",
      "settings": {
        "foreground": "#0ea5e9"
      }
    },
    {
      "scope": ["keyword", "storage.type.class.jsdoc"],
      "settings": {
        "foreground": "#a855f7"
      }
    },
    {
      "scope": [
        "storage",
        "storage.type",
        "support.type.builtin",
        "constant.language.undefined",
        "constant.language.null"
      ],
      "settings": {
        "foreground": "#0369a1"
      }
    },
    {
      "scope": ["storage.modifier.package", "storage.modifier.import", "storage.type.java"],
      "settings": {
        "foreground": "#475569"
      }
    },
    {
      "scope": ["string", "string punctuation.section.embedded source", "attribute.value"],
      "settings": {
        "foreground": "#F283BA"
      }
    },
    {
      "scope": ["punctuation.definition.string", "punctuation.support.type.property-name"],
      "settings": {
        "foreground": "#F283BA99"
      }
    },
    {
      "scope": "support",
      "settings": {
        "foreground": "#64748b"
      }
    },
    {
      "scope": [
        "property",
        "meta.property-name",
        "meta.object-literal.key",
        "entity.name.tag.yaml",
        "attribute.name"
      ],
      "settings": {
        "foreground": "#64748b"
      }
    },
    {
      "scope": [
        "entity.other.attribute-name",
        "invalid.deprecated.entity.other.attribute-name.html"
      ],
      "settings": {
        "foreground": "#EC4899"
      }
    },
    {
      "scope": ["variable", "identifier"],
      "settings": {
        "foreground": "#EC4899"
      }
    },
    {
      "scope": ["support.type.primitive", "entity.name.type"],
      "settings": {
        "foreground": "#0d9488"
      }
    },
    {
      "scope": "namespace",
      "settings": {
        "foreground": "#b05a78"
      }
    },
    {
      "scope": ["keyword.operator", "meta.var.expr.ts"],
      "settings": {
        "foreground": "#0369a1"
      }
    },
    {
      "scope": "invalid.broken",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ea910c"
      }
    },
    {
      "scope": "invalid.deprecated",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ea910c"
      }
    },
    {
      "scope": "invalid.illegal",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ea910c"
      }
    },
    {
      "scope": "invalid.unimplemented",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#ea910c"
      }
    },
    {
      "scope": "carriage-return",
      "settings": {
        "fontStyle": "italic underline",
        "background": "#d73a49",
        "foreground": "#fafbfc",
        "content": "^M"
      }
    },
    {
      "scope": "message.error",
      "settings": {
        "foreground": "#ea910c"
      }
    },
    {
      "scope": "string variable",
      "settings": {
        "foreground": "#F283BA"
      }
    },
    {
      "scope": ["source.regexp", "string.regexp"],
      "settings": {
        "foreground": "#ab5e3f"
      }
    },
    {
      "scope": [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition"
      ],
      "settings": {
        "foreground": "#F283BA"
      }
    },
    {
      "scope": "string.regexp constant.character.escape",
      "settings": {
        "foreground": "#bda437"
      }
    },
    {
      "scope": ["support.constant"],
      "settings": {
        "foreground": "#a65e2b"
      }
    },
    {
      "scope": ["constant.numeric", "number"],
      "settings": {
        "foreground": "#2f798a"
      }
    },
    {
      "scope": ["keyword.other.unit"],
      "settings": {
        "foreground": "#0369a1"
      }
    },
    {
      "scope": ["constant.language.boolean", "constant.language"],
      "settings": {
        "foreground": "#a855f7"
      }
    },
    {
      "scope": "meta.module-reference",
      "settings": {
        "foreground": "#1c6b48"
      }
    },
    {
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": "#a65e2b"
      }
    },
    {
      "scope": ["markup.heading", "markup.heading entity.name"],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#1c6b48"
      }
    },
    {
      "scope": "markup.quote",
      "settings": {
        "foreground": "#2e8f82"
      }
    },
    {
      "scope": "markup.italic",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#475569"
      }
    },
    {
      "scope": "markup.bold",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#475569"
      }
    },
    {
      "scope": "markup.raw",
      "settings": {
        "foreground": "#1c6b48"
      }
    },
    {
      "scope": ["markup.deleted", "meta.diff.header.from-file", "punctuation.definition.deleted"],
      "settings": {
        "background": "#ffeef0",
        "foreground": "#ea910c"
      }
    },
    {
      "scope": ["markup.inserted", "meta.diff.header.to-file", "punctuation.definition.inserted"],
      "settings": {
        "background": "#f0fff4",
        "foreground": "#22863a"
      }
    },
    {
      "scope": ["markup.changed", "punctuation.definition.changed"],
      "settings": {
        "background": "#ffebda",
        "foreground": "#e36209"
      }
    },
    {
      "scope": ["markup.ignored", "markup.untracked"],
      "settings": {
        "foreground": "#f6f8fa",
        "background": "#005cc5"
      }
    },
    {
      "scope": "meta.diff.range",
      "settings": {
        "foreground": "#6f42c1",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "meta.diff.header",
      "settings": {
        "foreground": "#005cc5"
      }
    },
    {
      "scope": "meta.separator",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#005cc5"
      }
    },
    {
      "scope": "meta.output",
      "settings": {
        "foreground": "#005cc5"
      }
    },
    {
      "scope": [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote"
      ],
      "settings": {
        "foreground": "#586069"
      }
    },
    {
      "scope": "brackethighlighter.unmatched",
      "settings": {
        "foreground": "#ea910c"
      }
    },
    {
      "scope": [
        "constant.other.reference.link",
        "string.other.link",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown"
      ],
      "settings": {
        "foreground": "#F283BA"
      }
    },
    {
      "scope": ["markup.underline.link.markdown"],
      "settings": {
        "foreground": "#47556990",
        "fontStyle": "underline"
      }
    },
    {
      "scope": ["type.identifier"],
      "settings": {
        "foreground": "#5a6aa6"
      }
    },
    {
      "scope": ["entity.other.attribute-name.html.vue"],
      "settings": {
        "foreground": "#0ea5e9"
      }
    },
    {
      "scope": ["invalid.illegal.unrecognized-tag.html"],
      "settings": {
        "fontStyle": "normal"
      }
    }
  ],
  "rules": [
    {
      "token": "comment",
      "foreground": "a0ada0"
    },
    {
      "token": "punctuation.definition.comment",
      "foreground": "a0ada0"
    },
    {
      "token": "string.comment",
      "foreground": "a0ada0"
    },
    {
      "token": "delimiter.bracket",
      "foreground": "999999"
    },
    {
      "token": "delimiter",
      "foreground": "999999"
    },
    {
      "token": "invalid.illegal.character-not-allowed-here.html",
      "foreground": "999999"
    },
    {
      "token": "keyword.operator.rest",
      "foreground": "999999"
    },
    {
      "token": "keyword.operator.spread",
      "foreground": "999999"
    },
    {
      "token": "keyword.operator.type.annotation",
      "foreground": "999999"
    },
    {
      "token": "keyword.operator.relational.ts",
      "foreground": "999999"
    },
    {
      "token": "meta.brace",
      "foreground": "999999"
    },
    {
      "token": "meta.tag.block.any.html",
      "foreground": "999999"
    },
    {
      "token": "meta.tag.inline.any.html",
      "foreground": "999999"
    },
    {
      "token": "meta.tag.structure.input.void.html",
      "foreground": "999999"
    },
    {
      "token": "meta.type.annotation",
      "foreground": "999999"
    },
    {
      "token": "storage.type.function.arrow",
      "foreground": "999999"
    },
    {
      "token": "keyword.operator.type",
      "foreground": "999999"
    },
    {
      "token": "meta.objectliteral.ts",
      "foreground": "999999"
    },
    {
      "token": "punctuation",
      "foreground": "999999"
    },
    {
      "token": "constant",
      "foreground": "a65e2b"
    },
    {
      "token": "entity.name.constant",
      "foreground": "a65e2b"
    },
    {
      "token": "variable.language",
      "foreground": "a65e2b"
    },
    {
      "token": "meta.definition.variable",
      "foreground": "a65e2b"
    },
    {
      "token": "entity",
      "foreground": "59873a"
    },
    {
      "token": "entity.name",
      "foreground": "59873a"
    },
    {
      "token": "variable.parameter.function",
      "foreground": "393a34"
    },
    {
      "token": "entity.name.tag",
      "foreground": "1e754f"
    },
    {
      "token": "tag.html",
      "foreground": "1e754f"
    },
    {
      "token": "entity.name.function",
      "foreground": "59873a"
    },
    {
      "token": "keyword",
      "foreground": "1e754f"
    },
    {
      "token": "storage.type.class.jsdoc",
      "foreground": "1e754f"
    },
    {
      "token": "storage",
      "foreground": "ab5959"
    },
    {
      "token": "storage.type",
      "foreground": "ab5959"
    },
    {
      "token": "support.type.builtin",
      "foreground": "ab5959"
    },
    {
      "token": "constant.language.undefined",
      "foreground": "ab5959"
    },
    {
      "token": "constant.language.null",
      "foreground": "ab5959"
    },
    {
      "token": "storage.modifier.package",
      "foreground": "393a34"
    },
    {
      "token": "storage.modifier.import",
      "foreground": "393a34"
    },
    {
      "token": "storage.type.java",
      "foreground": "393a34"
    },
    {
      "token": "string",
      "foreground": "b56959"
    },
    {
      "token": "string punctuation.section.embedded source",
      "foreground": "b56959"
    },
    {
      "token": "attribute.value",
      "foreground": "b56959"
    },
    {
      "token": "punctuation.definition.string",
      "foreground": "b5695999"
    },
    {
      "token": "punctuation.support.type.property-name",
      "foreground": "b5695999"
    },
    {
      "token": "support",
      "foreground": "998418"
    },
    {
      "token": "property",
      "foreground": "998418"
    },
    {
      "token": "meta.property-name",
      "foreground": "998418"
    },
    {
      "token": "meta.object-literal.key",
      "foreground": "998418"
    },
    {
      "token": "entity.name.tag.yaml",
      "foreground": "998418"
    },
    {
      "token": "attribute.name",
      "foreground": "998418"
    },
    {
      "token": "entity.other.attribute-name",
      "foreground": "b07d48"
    },
    {
      "token": "invalid.deprecated.entity.other.attribute-name.html",
      "foreground": "b07d48"
    },
    {
      "token": "variable",
      "foreground": "b07d48"
    },
    {
      "token": "identifier",
      "foreground": "b07d48"
    },
    {
      "token": "support.type.primitive",
      "foreground": "2e808f"
    },
    {
      "token": "entity.name.type",
      "foreground": "2e808f"
    },
    {
      "token": "namespace",
      "foreground": "b05a78"
    },
    {
      "token": "keyword.operator",
      "foreground": "ab5959"
    },
    {
      "token": "meta.var.expr.ts",
      "foreground": "ab5959"
    },
    {
      "token": "invalid.broken",
      "foreground": "b31d28"
    },
    {
      "token": "invalid.deprecated",
      "foreground": "b31d28"
    },
    {
      "token": "invalid.illegal",
      "foreground": "b31d28"
    },
    {
      "token": "invalid.unimplemented",
      "foreground": "b31d28"
    },
    {
      "token": "carriage-return",
      "foreground": "fafbfc"
    },
    {
      "token": "message.error",
      "foreground": "b31d28"
    },
    {
      "token": "string variable",
      "foreground": "b56959"
    },
    {
      "token": "source.regexp",
      "foreground": "ab5e3f"
    },
    {
      "token": "string.regexp",
      "foreground": "ab5e3f"
    },
    {
      "token": "string.regexp.character-class",
      "foreground": "b56959"
    },
    {
      "token": "string.regexp constant.character.escape",
      "foreground": "b56959"
    },
    {
      "token": "string.regexp source.ruby.embedded",
      "foreground": "b56959"
    },
    {
      "token": "string.regexp string.regexp.arbitrary-repitition",
      "foreground": "b56959"
    },
    {
      "token": "string.regexp constant.character.escape",
      "foreground": "bda437"
    },
    {
      "token": "support.constant",
      "foreground": "a65e2b"
    },
    {
      "token": "constant.numeric",
      "foreground": "2f798a"
    },
    {
      "token": "number",
      "foreground": "2f798a"
    },
    {
      "token": "keyword.other.unit",
      "foreground": "ab5959"
    },
    {
      "token": "constant.language.boolean",
      "foreground": "1e754f"
    },
    {
      "token": "constant.language",
      "foreground": "1e754f"
    },
    {
      "token": "meta.module-reference",
      "foreground": "1c6b48"
    },
    {
      "token": "punctuation.definition.list.begin.markdown",
      "foreground": "a65e2b"
    },
    {
      "token": "markup.heading",
      "foreground": "1c6b48"
    },
    {
      "token": "markup.heading entity.name",
      "foreground": "1c6b48"
    },
    {
      "token": "markup.quote",
      "foreground": "2e8f82"
    },
    {
      "token": "markup.italic",
      "foreground": "393a34"
    },
    {
      "token": "markup.bold",
      "foreground": "393a34"
    },
    {
      "token": "markup.raw",
      "foreground": "1c6b48"
    },
    {
      "token": "markup.deleted",
      "foreground": "b31d28"
    },
    {
      "token": "meta.diff.header.from-file",
      "foreground": "b31d28"
    },
    {
      "token": "punctuation.definition.deleted",
      "foreground": "b31d28"
    },
    {
      "token": "markup.inserted",
      "foreground": "22863a"
    },
    {
      "token": "meta.diff.header.to-file",
      "foreground": "22863a"
    },
    {
      "token": "punctuation.definition.inserted",
      "foreground": "22863a"
    },
    {
      "token": "markup.changed",
      "foreground": "e36209"
    },
    {
      "token": "punctuation.definition.changed",
      "foreground": "e36209"
    },
    {
      "token": "markup.ignored",
      "foreground": "f6f8fa"
    },
    {
      "token": "markup.untracked",
      "foreground": "f6f8fa"
    },
    {
      "token": "meta.diff.range",
      "foreground": "6f42c1"
    },
    {
      "token": "meta.diff.header",
      "foreground": "005cc5"
    },
    {
      "token": "meta.separator",
      "foreground": "005cc5"
    },
    {
      "token": "meta.output",
      "foreground": "005cc5"
    },
    {
      "token": "brackethighlighter.tag",
      "foreground": "586069"
    },
    {
      "token": "brackethighlighter.curly",
      "foreground": "586069"
    },
    {
      "token": "brackethighlighter.round",
      "foreground": "586069"
    },
    {
      "token": "brackethighlighter.square",
      "foreground": "586069"
    },
    {
      "token": "brackethighlighter.angle",
      "foreground": "586069"
    },
    {
      "token": "brackethighlighter.quote",
      "foreground": "586069"
    },
    {
      "token": "brackethighlighter.unmatched",
      "foreground": "b31d28"
    },
    {
      "token": "constant.other.reference.link",
      "foreground": "b56959"
    },
    {
      "token": "string.other.link",
      "foreground": "b56959"
    },
    {
      "token": "punctuation.definition.string.begin.markdown",
      "foreground": "b56959"
    },
    {
      "token": "punctuation.definition.string.end.markdown",
      "foreground": "b56959"
    },
    {
      "token": "markup.underline.link.markdown",
      "foreground": "393a3490"
    },
    {
      "token": "type.identifier",
      "foreground": "5a6aa6"
    },
    {
      "token": "entity.other.attribute-name.html.vue",
      "foreground": "59873a"
    },
    {
      "token": "invalid.illegal.unrecognized-tag.html"
    }
  ]
};
const dark = {
  name: "cssninja-dark-theme",
  base: "vs-dark",
  colors: {
    focusBorder: "#00000000",
    foreground: "#dbd7caee",
    descriptionForeground: "#dedcd590",
    errorForeground: "#7dd3fc",
    "textLink.foreground": "#a78bfa",
    "textLink.activeForeground": "#a78bfa",
    "textBlockQuote.background": "#020617",
    "textBlockQuote.border": "#191919",
    "textCodeBlock.background": "#020617",
    "textPreformat.foreground": "#d1d5da",
    "textSeparator.foreground": "#586069",
    "button.background": "#a78bfa",
    "button.foreground": "#020617",
    "button.hoverBackground": "#a78bfa",
    "checkbox.background": "#181818",
    "checkbox.border": "#2f363d",
    "dropdown.background": "#020617",
    "dropdown.border": "#191919",
    "dropdown.foreground": "#dbd7caee",
    "dropdown.listBackground": "#181818",
    "input.background": "#181818",
    "input.border": "#191919",
    "input.foreground": "#dbd7caee",
    "input.placeholderForeground": "#dedcd590",
    "inputOption.activeBackground": "#dedcd530",
    "badge.foreground": "#020617",
    "badge.background": "#dedcd590",
    "progressBar.background": "#a78bfa",
    "titleBar.activeForeground": "#bfbaaa",
    "titleBar.activeBackground": "#020617",
    "titleBar.inactiveForeground": "#959da5",
    "titleBar.inactiveBackground": "#020617",
    "titleBar.border": "#181818",
    "activityBar.foreground": "#dbd7caee",
    "activityBar.inactiveForeground": "#dedcd530",
    "activityBar.background": "#020617",
    "activityBarBadge.foreground": "#020617",
    "activityBarBadge.background": "#bfbaaa",
    "activityBar.activeBorder": "#a78bfa",
    "activityBar.border": "#191919",
    "sideBar.foreground": "#bfbaaa",
    "sideBar.background": "#020617",
    "sideBar.border": "#191919",
    "sideBarTitle.foreground": "#dbd7caee",
    "sideBarSectionHeader.foreground": "#dbd7caee",
    "sideBarSectionHeader.background": "#020617",
    "sideBarSectionHeader.border": "#191919",
    "list.hoverForeground": "#dbd7caee",
    "list.inactiveSelectionForeground": "#dbd7caee",
    "list.activeSelectionForeground": "#dbd7caee",
    "list.hoverBackground": "#181818",
    "list.inactiveSelectionBackground": "#181818",
    "list.activeSelectionBackground": "#181818",
    "list.inactiveFocusBackground": "#020617",
    "list.focusBackground": "#181818",
    "tree.indentGuidesStroke": "#2f363d",
    "notificationCenterHeader.foreground": "#959da5",
    "notificationCenterHeader.background": "#020617",
    "notifications.foreground": "#dbd7caee",
    "notifications.background": "#020617",
    "notifications.border": "#191919",
    "notificationsErrorIcon.foreground": "#7dd3fc",
    "notificationsWarningIcon.foreground": "#d4976c",
    "notificationsInfoIcon.foreground": "#6394bf",
    "pickerGroup.border": "#444d56",
    "pickerGroup.foreground": "#dbd7caee",
    "quickInput.background": "#020617",
    "quickInput.foreground": "#dbd7caee",
    "statusBar.foreground": "#bfbaaa",
    "statusBar.background": "#020617",
    "statusBar.border": "#191919",
    "statusBar.noFolderBackground": "#020617",
    "statusBar.debuggingBackground": "#181818",
    "statusBar.debuggingForeground": "#bfbaaa",
    "statusBarItem.prominentBackground": "#181818",
    "editorGroupHeader.tabsBackground": "#020617",
    "editorGroupHeader.tabsBorder": "#191919",
    "editorGroup.border": "#191919",
    "tab.activeForeground": "#dbd7caee",
    "tab.inactiveForeground": "#959da5",
    "tab.inactiveBackground": "#020617",
    "tab.activeBackground": "#020617",
    "tab.hoverBackground": "#181818",
    "tab.unfocusedHoverBackground": "#020617",
    "tab.border": "#191919",
    "tab.unfocusedActiveBorderTop": "#191919",
    "tab.activeBorder": "#191919",
    "tab.unfocusedActiveBorder": "#191919",
    "tab.activeBorderTop": "#dedcd590",
    "breadcrumb.foreground": "#959da5",
    "breadcrumb.focusForeground": "#dbd7caee",
    "breadcrumb.background": "#181818",
    "breadcrumb.activeSelectionForeground": "#eeeeee15",
    "breadcrumbPicker.background": "#020617",
    "editor.foreground": "#dbd7caee",
    "editor.background": "#020617",
    "editorWidget.background": "#020617",
    "editor.foldBackground": "#eeeeee10",
    "editor.lineHighlightBackground": "#181818",
    "editorLineNumber.foreground": "#dedcd530",
    "editorLineNumber.activeForeground": "#bfbaaa",
    "editorIndentGuide.background": "#ffffff15",
    "editorIndentGuide.activeBackground": "#ffffff30",
    "editorWhitespace.foreground": "#ffffff15",
    "editor.findMatchBackground": "#e6cc7722",
    "editor.findMatchHighlightBackground": "#e6cc7744",
    "editor.inactiveSelectionBackground": "#eeeeee08",
    "editor.selectionBackground": "#eeeeee15",
    "editor.selectionHighlightBackground": "#eeeeee08",
    "editor.wordHighlightBackground": "#1c6b4805",
    "editor.wordHighlightStrongBackground": "#1c6b4810",
    "editorBracketMatch.background": "#a78bfa20",
    "diffEditor.insertedTextBackground": "#a78bfa22",
    "diffEditor.removedTextBackground": "#ab595922",
    "scrollbar.shadow": "#0000",
    "scrollbarSlider.background": "#dedcd510",
    "scrollbarSlider.hoverBackground": "#dedcd530",
    "scrollbarSlider.activeBackground": "#dedcd530",
    "editorOverviewRuler.border": "#111",
    "panel.background": "#020617",
    "panel.border": "#191919",
    "panelTitle.activeBorder": "#a78bfa",
    "panelTitle.activeForeground": "#dbd7caee",
    "panelTitle.inactiveForeground": "#959da5",
    "panelInput.border": "#2f363d",
    "terminal.foreground": "#dbd7caee",
    "terminal.selectionBackground": "#eeeeee15",
    "terminal.ansiBrightBlack": "#777777",
    "terminal.ansiBrightBlue": "#6394bf",
    "terminal.ansiBrightCyan": "#5eaab5",
    "terminal.ansiBrightGreen": "#a78bfa",
    "terminal.ansiBrightMagenta": "#d9739f",
    "terminal.ansiBrightRed": "#7dd3fc",
    "terminal.ansiBrightWhite": "#ffffff",
    "terminal.ansiBrightYellow": "#e6cc77",
    "terminal.ansiBlack": "#393a34",
    "terminal.ansiBlue": "#6394bf",
    "terminal.ansiCyan": "#5eaab5",
    "terminal.ansiGreen": "#a78bfa",
    "terminal.ansiMagenta": "#d9739f",
    "terminal.ansiRed": "#7dd3fc",
    "terminal.ansiWhite": "#dbd7caee",
    "terminal.ansiYellow": "#e6cc77",
    "gitDecoration.addedResourceForeground": "#a78bfa",
    "gitDecoration.modifiedResourceForeground": "#6394bf",
    "gitDecoration.deletedResourceForeground": "#7dd3fc",
    "gitDecoration.untrackedResourceForeground": "#5eaab5",
    "gitDecoration.ignoredResourceForeground": "#dedcd530",
    "gitDecoration.conflictingResourceForeground": "#d4976c",
    "gitDecoration.submoduleResourceForeground": "#dedcd590",
    "editorGutter.modifiedBackground": "#6394bf",
    "editorGutter.addedBackground": "#a78bfa",
    "editorGutter.deletedBackground": "#7dd3fc",
    "editorBracketHighlight.foreground1": "#5eaab5",
    "editorBracketHighlight.foreground2": "#a78bfa",
    "editorBracketHighlight.foreground3": "#d4976c",
    "editorBracketHighlight.foreground4": "#d9739f",
    "editorBracketHighlight.foreground5": "#e6cc77",
    "editorBracketHighlight.foreground6": "#6394bf",
    "debugToolBar.background": "#020617",
    "editor.stackFrameHighlightBackground": "#a707",
    "editor.focusedStackFrameHighlightBackground": "#b808",
    "peekViewEditor.matchHighlightBackground": "#ffd33d33",
    "peekViewResult.matchHighlightBackground": "#ffd33d33",
    "peekViewEditor.background": "#020617",
    "peekViewResult.background": "#020617",
    "settings.headerForeground": "#dbd7caee",
    "settings.modifiedItemIndicator": "#a78bfa",
    "welcomePage.buttonBackground": "#2f363d",
    "welcomePage.buttonHoverBackground": "#444d56",
    "problemsErrorIcon.foreground": "#7dd3fc",
    "problemsWarningIcon.foreground": "#d4976c",
    "problemsInfoIcon.foreground": "#6394bf",
    "editorError.foreground": "#7dd3fc",
    "editorWarning.foreground": "#d4976c",
    "editorInfo.foreground": "#6394bf",
    "editorHint.foreground": "#a78bfa",
    "editorGutter.commentRangeForeground": "#dedcd530",
    "editorGutter.foldingControlForeground": "#dedcd590",
    "editorInlayHint.foreground": "#666666",
    "editorInlayHint.background": "#00000000",
    "editorStickyScroll.background": "#181818",
    "editorStickyScrollHover.background": "#181818"
  },
  semanticHighlighting: true,
  semanticTokenColors: {
    namespace: "#db889a",
    property: "#94a3b8",
    interface: "#5DA994",
    type: "#5DA994",
    class: "#6893BF"
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: "#64748b"
      }
    },
    {
      scope: [
        "delimiter.bracket",
        "delimiter",
        "invalid.illegal.character-not-allowed-here.html",
        "keyword.operator.rest",
        "keyword.operator.spread",
        "keyword.operator.type.annotation",
        "keyword.operator.relational.ts",
        "meta.brace",
        "meta.tag.block.any.html",
        "meta.tag.inline.any.html",
        "meta.tag.structure.input.void.html",
        "meta.type.annotation",
        "storage.type.function.arrow",
        "keyword.operator.type",
        "meta.objectliteral.ts",
        "punctuation"
      ],
      settings: {
        foreground: "#666666"
      }
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.language",
        "meta.definition.variable"
      ],
      settings: {
        foreground: "#c99076"
      }
    },
    {
      scope: ["entity", "entity.name"],
      settings: {
        foreground: "#0ea5e9"
      }
    },
    {
      scope: "variable.parameter.function",
      settings: {
        foreground: "#dbd7caee"
      }
    },
    {
      scope: ["entity.name.tag", "tag.html"],
      settings: {
        foreground: "#a78bfa"
      }
    },
    {
      scope: "entity.name.function",
      settings: {
        foreground: "#0ea5e9"
      }
    },
    {
      scope: ["keyword", "storage.type.class.jsdoc"],
      settings: {
        foreground: "#a78bfa"
      }
    },
    {
      scope: [
        "storage",
        "storage.type",
        "support.type.builtin",
        "constant.language.undefined",
        "constant.language.null"
      ],
      settings: {
        foreground: "#7dd3fc"
      }
    },
    {
      scope: [
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java"
      ],
      settings: {
        foreground: "#dbd7caee"
      }
    },
    {
      scope: [
        "string",
        "string punctuation.section.embedded source",
        "attribute.value"
      ],
      settings: {
        foreground: "#E879F9DE"
      }
    },
    {
      scope: [
        "punctuation.definition.string",
        "punctuation.support.type.property-name"
      ],
      settings: {
        foreground: "#E879F9DE"
      }
    },
    {
      scope: "support",
      settings: {
        foreground: "#94a3b8"
      }
    },
    {
      scope: [
        "property",
        "meta.property-name",
        "meta.object-literal.key",
        "entity.name.tag.yaml",
        "attribute.name"
      ],
      settings: {
        foreground: "#94a3b8"
      }
    },
    {
      scope: [
        "entity.other.attribute-name",
        "invalid.deprecated.entity.other.attribute-name.html"
      ],
      settings: {
        foreground: "#e879f9"
      }
    },
    {
      scope: ["variable", "identifier"],
      settings: {
        foreground: "#e879f9"
      }
    },
    {
      scope: ["support.type.primitive", "entity.name.type"],
      settings: {
        foreground: "#5da9a7"
      }
    },
    {
      scope: "namespace",
      settings: {
        foreground: "#db889a"
      }
    },
    {
      scope: ["keyword.operator", "meta.var.expr.ts"],
      settings: {
        foreground: "#7dd3fc"
      }
    },
    {
      scope: "invalid.broken",
      settings: {
        fontStyle: "italic",
        foreground: "#fbbf24"
      }
    },
    {
      scope: "invalid.deprecated",
      settings: {
        fontStyle: "italic",
        foreground: "#fbbf24"
      }
    },
    {
      scope: "invalid.illegal",
      settings: {
        fontStyle: "italic",
        foreground: "#fbbf24"
      }
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        fontStyle: "italic",
        foreground: "#fbbf24"
      }
    },
    {
      scope: "carriage-return",
      settings: {
        fontStyle: "italic underline",
        background: "#f97583",
        foreground: "#24292e",
        content: "^M"
      }
    },
    {
      scope: "message.error",
      settings: {
        foreground: "#fbbf24"
      }
    },
    {
      scope: "string variable",
      settings: {
        foreground: "#E879F9DE"
      }
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: {
        foreground: "#c4704f"
      }
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition"
      ],
      settings: {
        foreground: "#E879F9DE"
      }
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        foreground: "#e6cc77"
      }
    },
    {
      scope: ["support.constant"],
      settings: {
        foreground: "#c99076"
      }
    },
    {
      scope: ["constant.numeric", "number"],
      settings: {
        foreground: "#4C9A91"
      }
    },
    {
      scope: ["keyword.other.unit"],
      settings: {
        foreground: "#7dd3fc"
      }
    },
    {
      scope: ["constant.language.boolean", "constant.language"],
      settings: {
        foreground: "#a78bfa"
      }
    },
    {
      scope: "meta.module-reference",
      settings: {
        foreground: "#a78bfa"
      }
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#d4976c"
      }
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: {
        fontStyle: "bold",
        foreground: "#a78bfa"
      }
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: "#5DA994"
      }
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground: "#dbd7caee"
      }
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: "#dbd7caee"
      }
    },
    {
      scope: "markup.raw",
      settings: {
        foreground: "#a78bfa"
      }
    },
    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted"
      ],
      settings: {
        background: "#86181d",
        foreground: "#fbbf24"
      }
    },
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted"
      ],
      settings: {
        background: "#144620",
        foreground: "#85e89d"
      }
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
      settings: {
        background: "#c24e00",
        foreground: "#ffab70"
      }
    },
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: {
        foreground: "#2f363d",
        background: "#79b8ff"
      }
    },
    {
      scope: "meta.diff.range",
      settings: {
        foreground: "#b392f0",
        fontStyle: "bold"
      }
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: "meta.separator",
      settings: {
        fontStyle: "bold",
        foreground: "#79b8ff"
      }
    },
    {
      scope: "meta.output",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote"
      ],
      settings: {
        foreground: "#d1d5da"
      }
    },
    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: "#fbbf24"
      }
    },
    {
      scope: [
        "constant.other.reference.link",
        "string.other.link",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown"
      ],
      settings: {
        foreground: "#E879F9DE"
      }
    },
    {
      scope: ["markup.underline.link.markdown"],
      settings: {
        foreground: "#dedcd590",
        fontStyle: "underline"
      }
    },
    {
      scope: ["type.identifier"],
      settings: {
        foreground: "#6893BF"
      }
    },
    {
      scope: ["entity.other.attribute-name.html.vue"],
      settings: {
        foreground: "#0ea5e9"
      }
    },
    {
      scope: ["invalid.illegal.unrecognized-tag.html"],
      settings: {
        fontStyle: "normal"
      }
    }
  ],
  rules: [
    {
      token: "comment",
      foreground: "64748b"
    },
    {
      token: "punctuation.definition.comment",
      foreground: "64748b"
    },
    {
      token: "string.comment",
      foreground: "64748b"
    },
    {
      token: "delimiter.bracket",
      foreground: "666666"
    },
    {
      token: "delimiter",
      foreground: "666666"
    },
    {
      token: "invalid.illegal.character-not-allowed-here.html",
      foreground: "666666"
    },
    {
      token: "keyword.operator.rest",
      foreground: "666666"
    },
    {
      token: "keyword.operator.spread",
      foreground: "666666"
    },
    {
      token: "keyword.operator.type.annotation",
      foreground: "666666"
    },
    {
      token: "keyword.operator.relational.ts",
      foreground: "666666"
    },
    {
      token: "meta.brace",
      foreground: "666666"
    },
    {
      token: "meta.tag.block.any.html",
      foreground: "666666"
    },
    {
      token: "meta.tag.inline.any.html",
      foreground: "666666"
    },
    {
      token: "meta.tag.structure.input.void.html",
      foreground: "666666"
    },
    {
      token: "meta.type.annotation",
      foreground: "666666"
    },
    {
      token: "storage.type.function.arrow",
      foreground: "666666"
    },
    {
      token: "keyword.operator.type",
      foreground: "666666"
    },
    {
      token: "meta.objectliteral.ts",
      foreground: "666666"
    },
    {
      token: "punctuation",
      foreground: "666666"
    },
    {
      token: "constant",
      foreground: "c99076"
    },
    {
      token: "entity.name.constant",
      foreground: "c99076"
    },
    {
      token: "variable.language",
      foreground: "c99076"
    },
    {
      token: "meta.definition.variable",
      foreground: "c99076"
    },
    {
      token: "entity",
      foreground: "0ea5e9"
    },
    {
      token: "entity.name",
      foreground: "0ea5e9"
    },
    {
      token: "variable.parameter.function",
      foreground: "dbd7caee"
    },
    {
      token: "entity.name.tag",
      foreground: "a78bfa"
    },
    {
      token: "tag.html",
      foreground: "a78bfa"
    },
    {
      token: "entity.name.function",
      foreground: "0ea5e9"
    },
    {
      token: "keyword",
      foreground: "a78bfa"
    },
    {
      token: "storage.type.class.jsdoc",
      foreground: "a78bfa"
    },
    {
      token: "storage",
      foreground: "7dd3fc"
    },
    {
      token: "storage.type",
      foreground: "7dd3fc"
    },
    {
      token: "support.type.builtin",
      foreground: "7dd3fc"
    },
    {
      token: "constant.language.undefined",
      foreground: "7dd3fc"
    },
    {
      token: "constant.language.null",
      foreground: "7dd3fc"
    },
    {
      token: "storage.modifier.package",
      foreground: "dbd7caee"
    },
    {
      token: "storage.modifier.import",
      foreground: "dbd7caee"
    },
    {
      token: "storage.type.java",
      foreground: "dbd7caee"
    },
    {
      token: "string",
      foreground: "E879F9DE"
    },
    {
      token: "string punctuation.section.embedded source",
      foreground: "E879F9DE"
    },
    {
      token: "attribute.value",
      foreground: "E879F9DE"
    },
    {
      token: "punctuation.definition.string",
      foreground: "E879F9DE"
    },
    {
      token: "punctuation.support.type.property-name",
      foreground: "E879F9DE"
    },
    {
      token: "support",
      foreground: "94a3b8"
    },
    {
      token: "property",
      foreground: "94a3b8"
    },
    {
      token: "meta.property-name",
      foreground: "94a3b8"
    },
    {
      token: "meta.object-literal.key",
      foreground: "94a3b8"
    },
    {
      token: "entity.name.tag.yaml",
      foreground: "94a3b8"
    },
    {
      token: "attribute.name",
      foreground: "94a3b8"
    },
    {
      token: "entity.other.attribute-name",
      foreground: "e879f9"
    },
    {
      token: "invalid.deprecated.entity.other.attribute-name.html",
      foreground: "e879f9"
    },
    {
      token: "variable",
      foreground: "e879f9"
    },
    {
      token: "identifier",
      foreground: "e879f9"
    },
    {
      token: "support.type.primitive",
      foreground: "5da9a7"
    },
    {
      token: "entity.name.type",
      foreground: "5da9a7"
    },
    {
      token: "namespace",
      foreground: "db889a"
    },
    {
      token: "keyword.operator",
      foreground: "7dd3fc"
    },
    {
      token: "meta.var.expr.ts",
      foreground: "7dd3fc"
    },
    {
      token: "invalid.broken",
      foreground: "fbbf24"
    },
    {
      token: "invalid.deprecated",
      foreground: "fbbf24"
    },
    {
      token: "invalid.illegal",
      foreground: "fbbf24"
    },
    {
      token: "invalid.unimplemented",
      foreground: "fbbf24"
    },
    {
      token: "carriage-return",
      foreground: "24292e"
    },
    {
      token: "message.error",
      foreground: "fbbf24"
    },
    {
      token: "string variable",
      foreground: "E879F9DE"
    },
    {
      token: "source.regexp",
      foreground: "c4704f"
    },
    {
      token: "string.regexp",
      foreground: "c4704f"
    },
    {
      token: "string.regexp.character-class",
      foreground: "E879F9DE"
    },
    {
      token: "string.regexp constant.character.escape",
      foreground: "E879F9DE"
    },
    {
      token: "string.regexp source.ruby.embedded",
      foreground: "E879F9DE"
    },
    {
      token: "string.regexp string.regexp.arbitrary-repitition",
      foreground: "E879F9DE"
    },
    {
      token: "string.regexp constant.character.escape",
      foreground: "e6cc77"
    },
    {
      token: "support.constant",
      foreground: "c99076"
    },
    {
      token: "constant.numeric",
      foreground: "4C9A91"
    },
    {
      token: "number",
      foreground: "4C9A91"
    },
    {
      token: "keyword.other.unit",
      foreground: "7dd3fc"
    },
    {
      token: "constant.language.boolean",
      foreground: "a78bfa"
    },
    {
      token: "constant.language",
      foreground: "a78bfa"
    },
    {
      token: "meta.module-reference",
      foreground: "a78bfa"
    },
    {
      token: "punctuation.definition.list.begin.markdown",
      foreground: "d4976c"
    },
    {
      token: "markup.heading",
      foreground: "a78bfa"
    },
    {
      token: "markup.heading entity.name",
      foreground: "a78bfa"
    },
    {
      token: "markup.quote",
      foreground: "5DA994"
    },
    {
      token: "markup.italic",
      foreground: "dbd7caee"
    },
    {
      token: "markup.bold",
      foreground: "dbd7caee"
    },
    {
      token: "markup.raw",
      foreground: "a78bfa"
    },
    {
      token: "markup.deleted",
      foreground: "fbbf24"
    },
    {
      token: "meta.diff.header.from-file",
      foreground: "fbbf24"
    },
    {
      token: "punctuation.definition.deleted",
      foreground: "fbbf24"
    },
    {
      token: "markup.inserted",
      foreground: "85e89d"
    },
    {
      token: "meta.diff.header.to-file",
      foreground: "85e89d"
    },
    {
      token: "punctuation.definition.inserted",
      foreground: "85e89d"
    },
    {
      token: "markup.changed",
      foreground: "ffab70"
    },
    {
      token: "punctuation.definition.changed",
      foreground: "ffab70"
    },
    {
      token: "markup.ignored",
      foreground: "2f363d"
    },
    {
      token: "markup.untracked",
      foreground: "2f363d"
    },
    {
      token: "meta.diff.range",
      foreground: "b392f0"
    },
    {
      token: "meta.diff.header",
      foreground: "79b8ff"
    },
    {
      token: "meta.separator",
      foreground: "79b8ff"
    },
    {
      token: "meta.output",
      foreground: "79b8ff"
    },
    {
      token: "brackethighlighter.tag",
      foreground: "d1d5da"
    },
    {
      token: "brackethighlighter.curly",
      foreground: "d1d5da"
    },
    {
      token: "brackethighlighter.round",
      foreground: "d1d5da"
    },
    {
      token: "brackethighlighter.square",
      foreground: "d1d5da"
    },
    {
      token: "brackethighlighter.angle",
      foreground: "d1d5da"
    },
    {
      token: "brackethighlighter.quote",
      foreground: "d1d5da"
    },
    {
      token: "brackethighlighter.unmatched",
      foreground: "fbbf24"
    },
    {
      token: "constant.other.reference.link",
      foreground: "E879F9DE"
    },
    {
      token: "string.other.link",
      foreground: "E879F9DE"
    },
    {
      token: "punctuation.definition.string.begin.markdown",
      foreground: "E879F9DE"
    },
    {
      token: "punctuation.definition.string.end.markdown",
      foreground: "E879F9DE"
    },
    {
      token: "markup.underline.link.markdown",
      foreground: "dedcd590"
    },
    {
      token: "type.identifier",
      foreground: "6893BF"
    },
    {
      token: "entity.other.attribute-name.html.vue",
      foreground: "0ea5e9"
    },
    {
      token: "invalid.illegal.unrecognized-tag.html"
    }
  ]
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddonMarkdownRemark",
  __ssrInlineRender: true,
  props: {
    source: {},
    size: { default: "base" },
    mode: { default: void 0 },
    themes: { default: () => ({
      light,
      dark
    }) },
    langs: { default: () => ["html", "vue", "bash", "dockerfile", "json", "yaml", "markdown"] },
    lines: { type: Boolean, default: true },
    fullwidth: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const processor2 = shallowRef();
    const colorMode = useColorMode();
    const loaded = ref(false);
    const htmlContent = ref("");
    const isDark = computed({
      get() {
        return colorMode.value === "dark";
      },
      set(value) {
        if (value) {
          colorMode.preference = "dark";
        } else {
          colorMode.preference = "light";
        }
      }
    });
    computed(() => {
      if (props.mode !== void 0)
        return props.mode;
      return isDark.value ? "dark" : "light";
    });
    const proseSize = computed(() => {
      switch (props.size) {
        case "sm":
          return "prose-sm";
        case "lg":
          return "prose-lg";
        case "xl":
          return "prose-xl";
        case "2xl":
          return "prose-2xl";
        case "base":
        default:
          return "prose-base";
      }
    });
    watchEffect(async () => {
      if (processor2.value)
        return;
      processor2.value = await getMarkdownProcessors(props.themes, props.langs);
    });
    watchEffect(async () => {
      let source = props.source;
      if (!source || !processor2.value || htmlContent.value)
        return;
      const vfile = await processor2.value.process(source);
      htmlContent.value = vfile.toString();
      loaded.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BasePlaceload = __nuxt_component_0$2;
      const _component_BaseProse = _sfc_main$1;
      if (!unref(loaded)) {
        _push(ssrRenderComponent(_component_BasePlaceload, mergeProps({ class: "h-24 w-full rounded" }, _attrs), null, _parent));
      } else {
        _push(ssrRenderComponent(_component_BaseProse, mergeProps({
          class: [
            unref(proseSize),
            "markdown",
            props.lines ? "with-line-number" : "",
            props.fullwidth ? "max-w-none" : ""
          ]
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-c07f481a${_scopeId}>${unref(htmlContent)}</div>`);
            } else {
              return [
                createVNode("div", { innerHTML: unref(htmlContent) }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AddonMarkdownRemark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c07f481a"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=AddonMarkdownRemark-e2bad1bc.mjs.map

import { _ as _sfc_main$1 } from './BaseProse-1777d29c.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { l as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki-es';
import 'consola/core';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vee-validate/zod';
import 'vee-validate';
import 'zod';
import '@headlessui/vue';
import '@vue/shared';
import 'chroma-js';
import 'tailwindcss/colors.js';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BaseProse = _sfc_main$1;
  _push(ssrRenderComponent(_component_BaseProse, mergeProps({
    shape: "rounded",
    class: "prose-md"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1${_scopeId}>Typography plugin</h1><p class="lead"${_scopeId}> Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS. </p><p${_scopeId}> By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you <em${_scopeId}>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive. </p><p${_scopeId}>We get lots of complaints about it actually, with people regularly asking us things like:</p><blockquote${_scopeId}><p${_scopeId}> Why is Tailwind removing the default styles on my <code${_scopeId}>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too? </p></blockquote><p${_scopeId}> We hear you, but we&#39;re not convinced that simply disabling our base styles is what you really want. You don&#39;t want to have to remove annoying margins every time you use a <code${_scopeId}>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either \u2014 you want them to look <em${_scopeId}>awesome</em> , not awful. </p><p${_scopeId}> The <code${_scopeId}>@tailwindcss/typography</code> plugin is our attempt to give you what you <em${_scopeId}>actually</em> want, without any of the downsides of doing something stupid like disabling our base styles. </p><p${_scopeId}> It adds a new <code${_scopeId}>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document: </p><pre${_scopeId}><code class="language-html"${_scopeId}>&lt;article class=&quot;prose&quot;&gt;
  &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
  &lt;p&gt;
  For years parents have espoused the health benefits of eating garlic bread with cheese to their
  children, with the food earning such an iconic status in our culture that kids will often dress
  up as warm, cheesy loaf for Halloween.
  &lt;/p&gt;
  &lt;p&gt;
  But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
  springing up around the country.
  &lt;/p&gt;
  &lt;!-- ... --&gt;
  &lt;/article&gt;
  </code></pre><p${_scopeId}> For more information about how to use the plugin and the features it includes, <a href="https://github.com/tailwindcss/typography/blob/master/README.md"${_scopeId}> read the documentation </a> . </p><hr${_scopeId}><h2${_scopeId}>What to expect from here on out</h2><p${_scopeId}> What follows from here is just a bunch of absolute nonsense I&#39;ve written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like <strong${_scopeId}>bold text</strong> , unordered lists, ordered lists, code blocks, block quotes, <em${_scopeId}>and even italics</em> . </p><p${_scopeId}>It&#39;s important to cover all of these use cases for a few reasons:</p><ol${_scopeId}><li${_scopeId}>We want everything to look good out of the box.</li><li${_scopeId}>Really just the first reason, that&#39;s the whole point of the plugin.</li><li${_scopeId}> Here&#39;s a third pretend reason though a list with three items looks more realistic than a list with two items. </li></ol><p${_scopeId}>Now we&#39;re going to try out another header style.</p><h3${_scopeId}>Typography should be easy</h3><p${_scopeId}> So that&#39;s a header for you \u2014 with any luck if we&#39;ve done our job correctly that will look pretty reasonable. </p><p${_scopeId}>Something a wise person once told me about typography is:</p><blockquote${_scopeId}><p${_scopeId}> Typography is pretty important if you don&#39;t want your stuff to look like trash. Make it good then it won&#39;t be bad. </p></blockquote><p${_scopeId}>It&#39;s probably important that images look okay here by default as well:</p><figure${_scopeId}><img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt=""${_scopeId}><figcaption${_scopeId}> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </figcaption></figure><p${_scopeId}> Now I&#39;m going to show you an example of an unordered list to make sure that looks good, too: </p><ul${_scopeId}><li${_scopeId}>So here is the first item in this list.</li><li${_scopeId}>In this example we&#39;re keeping the items short.</li><li${_scopeId}>Later, we&#39;ll use longer, more complex list items.</li></ul><p${_scopeId}>And that&#39;s the end of this section.</p><h2${_scopeId}>What if we stack headings?</h2><h3${_scopeId}>We should make sure that looks good, too.</h3><p${_scopeId}> Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be. </p><h3${_scopeId}>When a heading comes after a paragraph \u2026</h3><p${_scopeId}> When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let&#39;s see what a more complex list would look like. </p><ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>I often do this thing where list items have headings.</strong></p><p${_scopeId}> For some reason I think this looks cool which is unfortunate because it&#39;s pretty annoying to get the styles right. </p><p${_scopeId}> I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn&#39;t write this way. </p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>Since this is a list, I need at least two items.</strong></p><p${_scopeId}> I explained what I&#39;m doing already in the previous list item, but a list wouldn&#39;t be a list if it only had one item, and we really want this to look realistic. That&#39;s why I&#39;ve added this second list item so I actually have something to look at when writing the styles. </p></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>It&#39;s not a bad idea to add a third item either.</strong></p><p${_scopeId}> I think it probably would&#39;ve been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it. </p></li></ul><p${_scopeId}> After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading. </p><h2${_scopeId}>Code should look okay by default.</h2><p${_scopeId}> I think most people are going to use <a href="https://highlightjs.org/"${_scopeId}>highlight.js</a> or <a href="https://prismjs.com/"${_scopeId}>Prism</a> or something if they want to style their code blocks but it wouldn&#39;t hurt to make them look <em${_scopeId}>okay</em> out of the box, even with no syntax highlighting. </p><p${_scopeId}> Here&#39;s what a default <code${_scopeId}>tailwind.config.ts</code> file looks like at the time of writing: </p><pre${_scopeId}><code class="language-js"${_scopeId}>module.exports = {
  purge: [],
  theme: {
  extend: {},
  },
  variants: {},
  plugins: [],
  }
  </code></pre><p${_scopeId}>Hopefully that looks good enough to you.</p><h3${_scopeId}>What about nested lists?</h3><p${_scopeId}> Nested lists basically always look bad which is why editors like Medium don&#39;t even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work. </p><ol${_scopeId}><li${_scopeId}><strong${_scopeId}>Nested lists are rarely a good idea.</strong><ul${_scopeId}><li${_scopeId}> You might feel like you are being really &quot;organized&quot; or something but you are just creating a gross shape on the screen that is hard to read. </li><li${_scopeId}>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li><li${_scopeId}>Nesting tons of folders in your source code is also not helpful.</li></ul></li><li${_scopeId}><strong${_scopeId}>Since we need to have more items, here&#39;s another one.</strong><ul${_scopeId}><li${_scopeId}>I&#39;m not sure if we&#39;ll bother styling more than two levels deep.</li><li${_scopeId}>Two is already too much, three is guaranteed to be a bad idea.</li><li${_scopeId}>If you nest four levels deep you belong in prison.</li></ul></li><li${_scopeId}><strong${_scopeId}>Two items isn&#39;t really a list, three is good though.</strong><ul${_scopeId}><li${_scopeId}>Again please don&#39;t nest lists if you want people to actually read your content.</li><li${_scopeId}>Nobody wants to look at this.</li><li${_scopeId}>I&#39;m upset that we even have to bother styling this.</li></ul></li></ol><p${_scopeId}> The most annoying thing about lists in Markdown is that <code${_scopeId}>&lt;li&gt;</code> elements aren&#39;t given a child <code${_scopeId}>&lt;p&gt;</code> tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too. </p><ul${_scopeId}><li${_scopeId}><p${_scopeId}><strong${_scopeId}>For example, here&#39;s another nested list.</strong></p><p${_scopeId}>But this time with a second paragraph.</p><ul${_scopeId}><li${_scopeId}> These list items won&#39;t have <code${_scopeId}>&lt;p&gt;</code> tags </li><li${_scopeId}>Because they are only one line each</li></ul></li><li${_scopeId}><p${_scopeId}><strong${_scopeId}>But in this second top-level list item, they will.</strong></p><p${_scopeId}>This is especially annoying because of the spacing on this paragraph.</p><ul${_scopeId}><li${_scopeId}><p${_scopeId}> As you can see here, because I&#39;ve added a second line, this list item now has a <code${_scopeId}>&lt;p&gt;</code> tag. </p><p${_scopeId}>This is the second line I&#39;m talking about by the way.</p></li><li${_scopeId}><p${_scopeId}>Finally here&#39;s another list item so it&#39;s more like a list.</p></li></ul></li><li${_scopeId}><p${_scopeId}>A closing list item, but with no nested list, because why not?</p></li></ul><p${_scopeId}>And finally a sentence to close off this section.</p><h2${_scopeId}>There are other elements we need to style</h2><p${_scopeId}> I almost forgot to mention links, like <a href="https://tailwindcss.com"${_scopeId}>this link to the Tailwind CSS website</a> . We almost made them blue but that&#39;s so yesterday, so we went with dark gray, feels edgier. </p><p${_scopeId}>We even included table styles, check it out:</p><table${_scopeId}><thead${_scopeId}><tr${_scopeId}><th${_scopeId}>Wrestler</th><th${_scopeId}>Origin</th><th${_scopeId}>Finisher</th></tr></thead><tbody${_scopeId}><tr${_scopeId}><td${_scopeId}>Bret &quot;The Hitman&quot; Hart</td><td${_scopeId}>Calgary, AB</td><td${_scopeId}>Sharpshooter</td></tr><tr${_scopeId}><td${_scopeId}>Stone Cold Steve Austin</td><td${_scopeId}>Austin, TX</td><td${_scopeId}>Stone Cold Stunner</td></tr><tr${_scopeId}><td${_scopeId}>Randy Savage</td><td${_scopeId}>Sarasota, FL</td><td${_scopeId}>Elbow Drop</td></tr><tr${_scopeId}><td${_scopeId}>Vader</td><td${_scopeId}>Boulder, CO</td><td${_scopeId}>Vader Bomb</td></tr><tr${_scopeId}><td${_scopeId}>Razor Ramon</td><td${_scopeId}>Chuluota, FL</td><td${_scopeId}>Razor&#39;s Edge</td></tr></tbody></table><p${_scopeId}> We also need to make sure inline code looks good, like if I wanted to talk about <code${_scopeId}>&lt;span&gt;</code> elements or tell you the good news about <code${_scopeId}>@tailwindcss/typography</code> . </p><h3${_scopeId}> Sometimes I even use <code${_scopeId}>code</code> in headings </h3><p${_scopeId}> Even though it&#39;s probably a bad idea, and historically I&#39;ve had a hard time making it look good. This <em${_scopeId}>&quot;wrap the code blocks in backticks&quot;</em> trick works pretty well though really. </p><p${_scopeId}> Another thing I&#39;ve done in the past is put a <code${_scopeId}>code</code> tag inside of a link, like if I wanted to tell you about the <a href="https://github.com/tailwindcss/docs"${_scopeId}><code${_scopeId}>tailwindcss/docs</code></a> repository. I don&#39;t love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it. </p><h4${_scopeId}> We haven&#39;t used an <code${_scopeId}>h4</code> yet </h4><p${_scopeId}> But now we have. Please don&#39;t use <code${_scopeId}>h5</code> or <code${_scopeId}>h6</code> in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a <code${_scopeId}>before</code> pseudo-element to scream at you if you use an <code${_scopeId}>h5</code> or <code${_scopeId}>h6</code> . </p><p${_scopeId}> We don&#39;t style them at all out of the box because <code${_scopeId}>h4</code> elements are already so small that they are the same size as the body copy. What are we supposed to do with an <code${_scopeId}>h5</code> , make it <em${_scopeId}>smaller</em> than the body copy? No thanks. </p><h3${_scopeId}>We still need to think about stacked headings though.</h3><h4${_scopeId}> Let&#39;s make sure we don&#39;t screw that up with <code${_scopeId}>h4</code> elements, either. </h4><p${_scopeId}> Phew, with any luck we have styled the headings above this text and they look pretty good. </p><p${_scopeId}> Let&#39;s add a closing paragraph here so things end with a decently sized block of text. I can&#39;t explain why I want things to end that way but I have to assume it&#39;s because I think things will look weird or unbalanced if there is a heading too close to the end of the document. </p><p${_scopeId}> What I&#39;ve written here is probably long enough, but adding this final sentence can&#39;t hurt. </p>`);
      } else {
        return [
          createVNode("h1", null, "Typography plugin"),
          createVNode("p", { class: "lead" }, " Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS. "),
          createVNode("p", null, [
            createTextVNode(" By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you "),
            createVNode("em", null, "really are"),
            createTextVNode(" just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive. ")
          ]),
          createVNode("p", null, "We get lots of complaints about it actually, with people regularly asking us things like:"),
          createVNode("blockquote", null, [
            createVNode("p", null, [
              createTextVNode(" Why is Tailwind removing the default styles on my "),
              createVNode("code", null, "h1"),
              createTextVNode(" elements? How do I disable this? What do you mean I lose all the other base styles too? ")
            ])
          ]),
          createVNode("p", null, [
            createTextVNode(" We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a "),
            createVNode("code", null, "p"),
            createTextVNode(" element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either \u2014 you want them to look "),
            createVNode("em", null, "awesome"),
            createTextVNode(" , not awful. ")
          ]),
          createVNode("p", null, [
            createTextVNode(" The "),
            createVNode("code", null, "@tailwindcss/typography"),
            createTextVNode(" plugin is our attempt to give you what you "),
            createVNode("em", null, "actually"),
            createTextVNode(" want, without any of the downsides of doing something stupid like disabling our base styles. ")
          ]),
          createVNode("p", null, [
            createTextVNode(" It adds a new "),
            createVNode("code", null, "prose"),
            createTextVNode(" class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document: ")
          ]),
          createVNode("pre", null, [
            createVNode("code", { class: "language-html" }, '<article class="prose">\n  <h1>Garlic bread with cheese: What the science tells us</h1>\n  <p>\n  For years parents have espoused the health benefits of eating garlic bread with cheese to their\n  children, with the food earning such an iconic status in our culture that kids will often dress\n  up as warm, cheesy loaf for Halloween.\n  </p>\n  <p>\n  But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases\n  springing up around the country.\n  </p>\n  <!-- ... -->\n  </article>\n  ')
          ]),
          createVNode("p", null, [
            createTextVNode(" For more information about how to use the plugin and the features it includes, "),
            createVNode("a", { href: "https://github.com/tailwindcss/typography/blob/master/README.md" }, " read the documentation "),
            createTextVNode(" . ")
          ]),
          createVNode("hr"),
          createVNode("h2", null, "What to expect from here on out"),
          createVNode("p", null, [
            createTextVNode(" What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like "),
            createVNode("strong", null, "bold text"),
            createTextVNode(" , unordered lists, ordered lists, code blocks, block quotes, "),
            createVNode("em", null, "and even italics"),
            createTextVNode(" . ")
          ]),
          createVNode("p", null, "It's important to cover all of these use cases for a few reasons:"),
          createVNode("ol", null, [
            createVNode("li", null, "We want everything to look good out of the box."),
            createVNode("li", null, "Really just the first reason, that's the whole point of the plugin."),
            createVNode("li", null, " Here's a third pretend reason though a list with three items looks more realistic than a list with two items. ")
          ]),
          createVNode("p", null, "Now we're going to try out another header style."),
          createVNode("h3", null, "Typography should be easy"),
          createVNode("p", null, " So that's a header for you \u2014 with any luck if we've done our job correctly that will look pretty reasonable. "),
          createVNode("p", null, "Something a wise person once told me about typography is:"),
          createVNode("blockquote", null, [
            createVNode("p", null, " Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad. ")
          ]),
          createVNode("p", null, "It's probably important that images look okay here by default as well:"),
          createVNode("figure", null, [
            createVNode("img", {
              src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
              alt: ""
            }),
            createVNode("figcaption", null, " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ")
          ]),
          createVNode("p", null, " Now I'm going to show you an example of an unordered list to make sure that looks good, too: "),
          createVNode("ul", null, [
            createVNode("li", null, "So here is the first item in this list."),
            createVNode("li", null, "In this example we're keeping the items short."),
            createVNode("li", null, "Later, we'll use longer, more complex list items.")
          ]),
          createVNode("p", null, "And that's the end of this section."),
          createVNode("h2", null, "What if we stack headings?"),
          createVNode("h3", null, "We should make sure that looks good, too."),
          createVNode("p", null, " Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be. "),
          createVNode("h3", null, "When a heading comes after a paragraph \u2026"),
          createVNode("p", null, " When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like. "),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "I often do this thing where list items have headings.")
              ]),
              createVNode("p", null, " For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right. "),
              createVNode("p", null, " I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way. ")
            ]),
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "Since this is a list, I need at least two items.")
              ]),
              createVNode("p", null, " I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles. ")
            ]),
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "It's not a bad idea to add a third item either.")
              ]),
              createVNode("p", null, " I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it. ")
            ])
          ]),
          createVNode("p", null, " After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading. "),
          createVNode("h2", null, "Code should look okay by default."),
          createVNode("p", null, [
            createTextVNode(" I think most people are going to use "),
            createVNode("a", { href: "https://highlightjs.org/" }, "highlight.js"),
            createTextVNode(" or "),
            createVNode("a", { href: "https://prismjs.com/" }, "Prism"),
            createTextVNode(" or something if they want to style their code blocks but it wouldn't hurt to make them look "),
            createVNode("em", null, "okay"),
            createTextVNode(" out of the box, even with no syntax highlighting. ")
          ]),
          createVNode("p", null, [
            createTextVNode(" Here's what a default "),
            createVNode("code", null, "tailwind.config.ts"),
            createTextVNode(" file looks like at the time of writing: ")
          ]),
          createVNode("pre", null, [
            createVNode("code", { class: "language-js" }, "module.exports = {\n  purge: [],\n  theme: {\n  extend: {},\n  },\n  variants: {},\n  plugins: [],\n  }\n  ")
          ]),
          createVNode("p", null, "Hopefully that looks good enough to you."),
          createVNode("h3", null, "What about nested lists?"),
          createVNode("p", null, " Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work. "),
          createVNode("ol", null, [
            createVNode("li", null, [
              createVNode("strong", null, "Nested lists are rarely a good idea."),
              createVNode("ul", null, [
                createVNode("li", null, ' You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read. '),
                createVNode("li", null, "Nested navigation in UIs is a bad idea too, keep things as flat as possible."),
                createVNode("li", null, "Nesting tons of folders in your source code is also not helpful.")
              ])
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "Since we need to have more items, here's another one."),
              createVNode("ul", null, [
                createVNode("li", null, "I'm not sure if we'll bother styling more than two levels deep."),
                createVNode("li", null, "Two is already too much, three is guaranteed to be a bad idea."),
                createVNode("li", null, "If you nest four levels deep you belong in prison.")
              ])
            ]),
            createVNode("li", null, [
              createVNode("strong", null, "Two items isn't really a list, three is good though."),
              createVNode("ul", null, [
                createVNode("li", null, "Again please don't nest lists if you want people to actually read your content."),
                createVNode("li", null, "Nobody wants to look at this."),
                createVNode("li", null, "I'm upset that we even have to bother styling this.")
              ])
            ])
          ]),
          createVNode("p", null, [
            createTextVNode(" The most annoying thing about lists in Markdown is that "),
            createVNode("code", null, "<li>"),
            createTextVNode(" elements aren't given a child "),
            createVNode("code", null, "<p>"),
            createTextVNode(" tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too. ")
          ]),
          createVNode("ul", null, [
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "For example, here's another nested list.")
              ]),
              createVNode("p", null, "But this time with a second paragraph."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createTextVNode(" These list items won't have "),
                  createVNode("code", null, "<p>"),
                  createTextVNode(" tags ")
                ]),
                createVNode("li", null, "Because they are only one line each")
              ])
            ]),
            createVNode("li", null, [
              createVNode("p", null, [
                createVNode("strong", null, "But in this second top-level list item, they will.")
              ]),
              createVNode("p", null, "This is especially annoying because of the spacing on this paragraph."),
              createVNode("ul", null, [
                createVNode("li", null, [
                  createVNode("p", null, [
                    createTextVNode(" As you can see here, because I've added a second line, this list item now has a "),
                    createVNode("code", null, "<p>"),
                    createTextVNode(" tag. ")
                  ]),
                  createVNode("p", null, "This is the second line I'm talking about by the way.")
                ]),
                createVNode("li", null, [
                  createVNode("p", null, "Finally here's another list item so it's more like a list.")
                ])
              ])
            ]),
            createVNode("li", null, [
              createVNode("p", null, "A closing list item, but with no nested list, because why not?")
            ])
          ]),
          createVNode("p", null, "And finally a sentence to close off this section."),
          createVNode("h2", null, "There are other elements we need to style"),
          createVNode("p", null, [
            createTextVNode(" I almost forgot to mention links, like "),
            createVNode("a", { href: "https://tailwindcss.com" }, "this link to the Tailwind CSS website"),
            createTextVNode(" . We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier. ")
          ]),
          createVNode("p", null, "We even included table styles, check it out:"),
          createVNode("table", null, [
            createVNode("thead", null, [
              createVNode("tr", null, [
                createVNode("th", null, "Wrestler"),
                createVNode("th", null, "Origin"),
                createVNode("th", null, "Finisher")
              ])
            ]),
            createVNode("tbody", null, [
              createVNode("tr", null, [
                createVNode("td", null, 'Bret "The Hitman" Hart'),
                createVNode("td", null, "Calgary, AB"),
                createVNode("td", null, "Sharpshooter")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "Stone Cold Steve Austin"),
                createVNode("td", null, "Austin, TX"),
                createVNode("td", null, "Stone Cold Stunner")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "Randy Savage"),
                createVNode("td", null, "Sarasota, FL"),
                createVNode("td", null, "Elbow Drop")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "Vader"),
                createVNode("td", null, "Boulder, CO"),
                createVNode("td", null, "Vader Bomb")
              ]),
              createVNode("tr", null, [
                createVNode("td", null, "Razor Ramon"),
                createVNode("td", null, "Chuluota, FL"),
                createVNode("td", null, "Razor's Edge")
              ])
            ])
          ]),
          createVNode("p", null, [
            createTextVNode(" We also need to make sure inline code looks good, like if I wanted to talk about "),
            createVNode("code", null, "<span>"),
            createTextVNode(" elements or tell you the good news about "),
            createVNode("code", null, "@tailwindcss/typography"),
            createTextVNode(" . ")
          ]),
          createVNode("h3", null, [
            createTextVNode(" Sometimes I even use "),
            createVNode("code", null, "code"),
            createTextVNode(" in headings ")
          ]),
          createVNode("p", null, [
            createTextVNode(" Even though it's probably a bad idea, and historically I've had a hard time making it look good. This "),
            createVNode("em", null, '"wrap the code blocks in backticks"'),
            createTextVNode(" trick works pretty well though really. ")
          ]),
          createVNode("p", null, [
            createTextVNode(" Another thing I've done in the past is put a "),
            createVNode("code", null, "code"),
            createTextVNode(" tag inside of a link, like if I wanted to tell you about the "),
            createVNode("a", { href: "https://github.com/tailwindcss/docs" }, [
              createVNode("code", null, "tailwindcss/docs")
            ]),
            createTextVNode(" repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it. ")
          ]),
          createVNode("h4", null, [
            createTextVNode(" We haven't used an "),
            createVNode("code", null, "h4"),
            createTextVNode(" yet ")
          ]),
          createVNode("p", null, [
            createTextVNode(" But now we have. Please don't use "),
            createVNode("code", null, "h5"),
            createTextVNode(" or "),
            createVNode("code", null, "h6"),
            createTextVNode(" in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a "),
            createVNode("code", null, "before"),
            createTextVNode(" pseudo-element to scream at you if you use an "),
            createVNode("code", null, "h5"),
            createTextVNode(" or "),
            createVNode("code", null, "h6"),
            createTextVNode(" . ")
          ]),
          createVNode("p", null, [
            createTextVNode(" We don't style them at all out of the box because "),
            createVNode("code", null, "h4"),
            createTextVNode(" elements are already so small that they are the same size as the body copy. What are we supposed to do with an "),
            createVNode("code", null, "h5"),
            createTextVNode(" , make it "),
            createVNode("em", null, "smaller"),
            createTextVNode(" than the body copy? No thanks. ")
          ]),
          createVNode("h3", null, "We still need to think about stacked headings though."),
          createVNode("h4", null, [
            createTextVNode(" Let's make sure we don't screw that up with "),
            createVNode("code", null, "h4"),
            createTextVNode(" elements, either. ")
          ]),
          createVNode("p", null, " Phew, with any luck we have styled the headings above this text and they look pretty good. "),
          createVNode("p", null, " Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document. "),
          createVNode("p", null, " What I've written here is probably long enough, but adding this final sentence can't hurt. ")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../layers/documentation/examples/typography/prose.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const prose = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { prose as default };
//# sourceMappingURL=prose-e859f9f0.mjs.map

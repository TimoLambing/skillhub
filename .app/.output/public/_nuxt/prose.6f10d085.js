import{_ as l}from"./BaseProse.vue.551aed24.js";import{E as n,o as s,a0 as a,w as i,f as e,h as t}from"./entry.adb22a9c.js";const h={},u=e("h1",null,"Typography plugin",-1),r=e("p",{class:"lead"}," Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS. ",-1),d=e("p",null,[t(" By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you "),e("em",null,"really are"),t(" just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive. ")],-1),c=e("p",null,"We get lots of complaints about it actually, with people regularly asking us things like:",-1),p=e("blockquote",null,[e("p",null,[t(" Why is Tailwind removing the default styles on my "),e("code",null,"h1"),t(" elements? How do I disable this? What do you mean I lose all the other base styles too? ")])],-1),g=e("p",null,[t(" We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a "),e("code",null,"p"),t(" element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look "),e("em",null,"awesome"),t(" , not awful. ")],-1),y=e("p",null,[t(" The "),e("code",null,"@tailwindcss/typography"),t(" plugin is our attempt to give you what you "),e("em",null,"actually"),t(" want, without any of the downsides of doing something stupid like disabling our base styles. ")],-1),m=e("p",null,[t(" It adds a new "),e("code",null,"prose"),t(" class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document: ")],-1),w=e("pre",null,[e("code",{class:"language-html"},`<article class="prose">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
  For years parents have espoused the health benefits of eating garlic bread with cheese to their
  children, with the food earning such an iconic status in our culture that kids will often dress
  up as warm, cheesy loaf for Halloween.
  </p>
  <p>
  But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
  springing up around the country.
  </p>
  <!-- ... -->
  </article>
  `)],-1),b=e("p",null,[t(" For more information about how to use the plugin and the features it includes, "),e("a",{href:"https://github.com/tailwindcss/typography/blob/master/README.md"}," read the documentation "),t(" . ")],-1),_=e("hr",null,null,-1),f=e("h2",null,"What to expect from here on out",-1),k=e("p",null,[t(" What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like "),e("strong",null,"bold text"),t(" , unordered lists, ordered lists, code blocks, block quotes, "),e("em",null,"and even italics"),t(" . ")],-1),v=e("p",null,"It's important to cover all of these use cases for a few reasons:",-1),I=e("ol",null,[e("li",null,"We want everything to look good out of the box."),e("li",null,"Really just the first reason, that's the whole point of the plugin."),e("li",null," Here's a third pretend reason though a list with three items looks more realistic than a list with two items. ")],-1),x=e("p",null,"Now we're going to try out another header style.",-1),T=e("h3",null,"Typography should be easy",-1),W=e("p",null," So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable. ",-1),S=e("p",null,"Something a wise person once told me about typography is:",-1),B=e("blockquote",null,[e("p",null," Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad. ")],-1),j=e("p",null,"It's probably important that images look okay here by default as well:",-1),A=e("figure",null,[e("img",{src:"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",alt:""}),e("figcaption",null," Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ")],-1),C=e("p",null," Now I'm going to show you an example of an unordered list to make sure that looks good, too: ",-1),N=e("ul",null,[e("li",null,"So here is the first item in this list."),e("li",null,"In this example we're keeping the items short."),e("li",null,"Later, we'll use longer, more complex list items.")],-1),H=e("p",null,"And that's the end of this section.",-1),F=e("h2",null,"What if we stack headings?",-1),L=e("h3",null,"We should make sure that looks good, too.",-1),M=e("p",null," Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be. ",-1),E=e("h3",null,"When a heading comes after a paragraph …",-1),q=e("p",null," When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like. ",-1),z=e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"I often do this thing where list items have headings.")]),e("p",null," For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right. "),e("p",null," I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way. ")]),e("li",null,[e("p",null,[e("strong",null,"Since this is a list, I need at least two items.")]),e("p",null," I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles. ")]),e("li",null,[e("p",null,[e("strong",null,"It's not a bad idea to add a third item either.")]),e("p",null," I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it. ")])],-1),R=e("p",null," After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading. ",-1),P=e("h2",null,"Code should look okay by default.",-1),U=e("p",null,[t(" I think most people are going to use "),e("a",{href:"https://highlightjs.org/"},"highlight.js"),t(" or "),e("a",{href:"https://prismjs.com/"},"Prism"),t(" or something if they want to style their code blocks but it wouldn't hurt to make them look "),e("em",null,"okay"),t(" out of the box, even with no syntax highlighting. ")],-1),V=e("p",null,[t(" Here's what a default "),e("code",null,"tailwind.config.ts"),t(" file looks like at the time of writing: ")],-1),D=e("pre",null,[e("code",{class:"language-js"},`module.exports = {
  purge: [],
  theme: {
  extend: {},
  },
  variants: {},
  plugins: [],
  }
  `)],-1),O=e("p",null,"Hopefully that looks good enough to you.",-1),Y=e("h3",null,"What about nested lists?",-1),G=e("p",null," Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work. ",-1),J=e("ol",null,[e("li",null,[e("strong",null,"Nested lists are rarely a good idea."),e("ul",null,[e("li",null,' You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read. '),e("li",null,"Nested navigation in UIs is a bad idea too, keep things as flat as possible."),e("li",null,"Nesting tons of folders in your source code is also not helpful.")])]),e("li",null,[e("strong",null,"Since we need to have more items, here's another one."),e("ul",null,[e("li",null,"I'm not sure if we'll bother styling more than two levels deep."),e("li",null,"Two is already too much, three is guaranteed to be a bad idea."),e("li",null,"If you nest four levels deep you belong in prison.")])]),e("li",null,[e("strong",null,"Two items isn't really a list, three is good though."),e("ul",null,[e("li",null,"Again please don't nest lists if you want people to actually read your content."),e("li",null,"Nobody wants to look at this."),e("li",null,"I'm upset that we even have to bother styling this.")])])],-1),Q=e("p",null,[t(" The most annoying thing about lists in Markdown is that "),e("code",null,"<li>"),t(" elements aren't given a child "),e("code",null,"<p>"),t(" tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too. ")],-1),X=e("ul",null,[e("li",null,[e("p",null,[e("strong",null,"For example, here's another nested list.")]),e("p",null,"But this time with a second paragraph."),e("ul",null,[e("li",null,[t(" These list items won't have "),e("code",null,"<p>"),t(" tags ")]),e("li",null,"Because they are only one line each")])]),e("li",null,[e("p",null,[e("strong",null,"But in this second top-level list item, they will.")]),e("p",null,"This is especially annoying because of the spacing on this paragraph."),e("ul",null,[e("li",null,[e("p",null,[t(" As you can see here, because I've added a second line, this list item now has a "),e("code",null,"<p>"),t(" tag. ")]),e("p",null,"This is the second line I'm talking about by the way.")]),e("li",null,[e("p",null,"Finally here's another list item so it's more like a list.")])])]),e("li",null,[e("p",null,"A closing list item, but with no nested list, because why not?")])],-1),$=e("p",null,"And finally a sentence to close off this section.",-1),K=e("h2",null,"There are other elements we need to style",-1),Z=e("p",null,[t(" I almost forgot to mention links, like "),e("a",{href:"https://tailwindcss.com"},"this link to the Tailwind CSS website"),t(" . We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier. ")],-1),ee=e("p",null,"We even included table styles, check it out:",-1),te=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Wrestler"),e("th",null,"Origin"),e("th",null,"Finisher")])]),e("tbody",null,[e("tr",null,[e("td",null,'Bret "The Hitman" Hart'),e("td",null,"Calgary, AB"),e("td",null,"Sharpshooter")]),e("tr",null,[e("td",null,"Stone Cold Steve Austin"),e("td",null,"Austin, TX"),e("td",null,"Stone Cold Stunner")]),e("tr",null,[e("td",null,"Randy Savage"),e("td",null,"Sarasota, FL"),e("td",null,"Elbow Drop")]),e("tr",null,[e("td",null,"Vader"),e("td",null,"Boulder, CO"),e("td",null,"Vader Bomb")]),e("tr",null,[e("td",null,"Razor Ramon"),e("td",null,"Chuluota, FL"),e("td",null,"Razor's Edge")])])],-1),oe=e("p",null,[t(" We also need to make sure inline code looks good, like if I wanted to talk about "),e("code",null,"<span>"),t(" elements or tell you the good news about "),e("code",null,"@tailwindcss/typography"),t(" . ")],-1),le=e("h3",null,[t(" Sometimes I even use "),e("code",null,"code"),t(" in headings ")],-1),ne=e("p",null,[t(" Even though it's probably a bad idea, and historically I've had a hard time making it look good. This "),e("em",null,'"wrap the code blocks in backticks"'),t(" trick works pretty well though really. ")],-1),se=e("p",null,[t(" Another thing I've done in the past is put a "),e("code",null,"code"),t(" tag inside of a link, like if I wanted to tell you about the "),e("a",{href:"https://github.com/tailwindcss/docs"},[e("code",null,"tailwindcss/docs")]),t(" repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it. ")],-1),ae=e("h4",null,[t(" We haven't used an "),e("code",null,"h4"),t(" yet ")],-1),ie=e("p",null,[t(" But now we have. Please don't use "),e("code",null,"h5"),t(" or "),e("code",null,"h6"),t(" in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a "),e("code",null,"before"),t(" pseudo-element to scream at you if you use an "),e("code",null,"h5"),t(" or "),e("code",null,"h6"),t(" . ")],-1),he=e("p",null,[t(" We don't style them at all out of the box because "),e("code",null,"h4"),t(" elements are already so small that they are the same size as the body copy. What are we supposed to do with an "),e("code",null,"h5"),t(" , make it "),e("em",null,"smaller"),t(" than the body copy? No thanks. ")],-1),ue=e("h3",null,"We still need to think about stacked headings though.",-1),re=e("h4",null,[t(" Let's make sure we don't screw that up with "),e("code",null,"h4"),t(" elements, either. ")],-1),de=e("p",null," Phew, with any luck we have styled the headings above this text and they look pretty good. ",-1),ce=e("p",null," Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document. ",-1),pe=e("p",null," What I've written here is probably long enough, but adding this final sentence can't hurt. ",-1);function ge(ye,me){const o=l;return s(),a(o,{shape:"rounded",class:"prose-md"},{default:i(()=>[u,r,d,c,p,g,y,m,w,b,_,f,k,v,I,x,T,W,S,B,j,A,C,N,H,F,L,M,E,q,z,R,P,U,V,D,O,Y,G,J,Q,X,$,K,Z,ee,te,oe,le,ne,se,ae,ie,he,ue,re,de,ce,pe]),_:1})}const _e=n(h,[["render",ge]]);export{_e as default};

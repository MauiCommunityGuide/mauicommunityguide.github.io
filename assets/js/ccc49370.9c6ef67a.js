"use strict";(self.webpackChunkxamarin_community_guide=self.webpackChunkxamarin_community_guide||[]).push([[103],{5533:function(e,t,a){a.d(t,{Z:function(){return N}});var r=a(7294),n=a(6010),l=a(8878),o=a(1217),i="sidebar_2ahu",c="sidebarItemTitle_2hhb",s="sidebarItemList_2xAf",m="sidebarItem_2UVv",u="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",p=a(910);function g({sidebar:e}){return 0===e.items.length?null:r.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},e.title),r.createElement("ul",{className:s},e.items.map((e=>r.createElement("li",{key:e.permalink,className:m},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))))))}var f=a(3214),b=Object.defineProperty,v=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,_=(e,t,a)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var N=function(e){const t=e,{sidebar:a,toc:o,children:i}=t,c=((e,t)=>{var a={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&v)for(var r of v(e))t.indexOf(r)<0&&E.call(e,r)&&(a[r]=e[r]);return a})(t,["sidebar","toc","children"]),s=a&&a.items.length>0;return r.createElement(l.Z,((e,t)=>{for(var a in t||(t={}))h.call(t,a)&&_(e,a,t[a]);if(v)for(var a of v(t))E.call(t,a)&&_(e,a,t[a]);return e})({},c),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(g,{sidebar:a})),r.createElement("main",{className:(0,n.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),o&&r.createElement("div",{className:"col col--2"},r.createElement(f.Z,{toc:o})))))}},9710:function(e,t,a){a.d(t,{Z:function(){return T}});var r=a(7294),n=a(6010),l=a(3905),o=a(910),i=a(1217),c=a(5026),s=a(6648),m=a(5784),u=a(5477),d="blogPostTitle_GeHD",p="blogPostData_291c",g="blogPostDetailsFull_3kfx",f=a(2942),b="image_1yU8";var v=function({author:e}){const{name:t,title:a,url:n,imageURL:l}=e;return r.createElement("div",{className:"avatar margin-bottom--sm"},l&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:b,src:l,alt:t})),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},h="authorCol_1R69",E=Object.defineProperty,_=Object.defineProperties,N=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&k(e,a,t[a]);if(y)for(var a of y(t))Z.call(t,a)&&k(e,a,t[a]);return e};function w({authors:e,assets:t}){return 0===e.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},e.map(((e,a)=>{var l,o,i;return r.createElement("div",{className:(0,n.Z)("col col--6",h),key:a},r.createElement(v,{author:(o=O({},e),i={imageURL:null!=(l=t.authorsImageUrls[a])?l:e.imageURL},_(o,N(i)))}))})))}var T=function(e){var t;const a=function(){const{selectMessage:e}=(0,s.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:b}=(0,c.C)(),{children:v,frontMatter:h,assets:E,metadata:_,truncated:N,isBlogPostPage:y=!1}=e,{date:P,formattedDate:Z,permalink:k,tags:O,readingTime:T,title:I,editUrl:x,authors:L}=_,C=null!=(t=E.image)?t:h.image;return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=y?"h1":"h2";return r.createElement("header",null,r.createElement(e,{className:d,itemProp:"headline"},y?I:r.createElement(i.Z,{itemProp:"url",to:k},I)),r.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:P,itemProp:"datePublished"},Z),void 0!==T&&r.createElement(r.Fragment,null," \xb7 ",a(T))),r.createElement(w,{authors:L,assets:E}))})(),C&&r.createElement("meta",{itemProp:"image",content:b(C,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:m.Z},v)),(O.length>0||N)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[g]:y})},O.length>0&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":!y})},r.createElement(f.Z,{tags:O})),y&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:x})),!y&&N&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(i.Z,{to:_.permalink,"aria-label":`Read more about ${I}`},r.createElement("b",null,r.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1455:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(7294),n=a(3730),l=a(5533),o=a(9710),i=a(910),c=a(1217);var s=function(e){const{nextItem:t,prevItem:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(c.Z,{className:"pagination-nav__link",to:a.permalink},r.createElement("div",{className:"pagination-nav__sublabel"},r.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.createElement(c.Z,{className:"pagination-nav__link",to:t.permalink},r.createElement("div",{className:"pagination-nav__sublabel"},r.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(6648);var u=function(e){var t;const{content:a,sidebar:i}=e,{frontMatter:c,assets:u,metadata:d}=a,{title:p,description:g,nextItem:f,prevItem:b,date:v,tags:h,authors:E}=d,{hide_table_of_contents:_,keywords:N}=c,y=null!=(t=u.image)?t:c.image;return r.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:i,toc:!_&&a.toc?a.toc:void 0},r.createElement(n.Z,{title:p,description:g,keywords:N,image:y},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:v}),E.some((e=>e.url))&&r.createElement("meta",{property:"article:author",content:E.map((e=>e.url)).filter(Boolean).join(",")}),h.length>0&&r.createElement("meta",{property:"article:tag",content:h.map((e=>e.label)).join(",")})),r.createElement(o.Z,{frontMatter:c,assets:u,metadata:d,isBlogPostPage:!0},r.createElement(a,null)),(f||b)&&r.createElement(s,{nextItem:f,prevItem:b}))}},5477:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=a(910),l=a(6010),o="iconEdit_2_ui",i=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var d=e=>{var t=e,{className:a}=t,n=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a})(t,["className"]);return r.createElement("svg",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(c)for(var a of c(t))m.call(t,a)&&u(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(o,a),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function p({editUrl:e}){return r.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},r.createElement(d,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},3214:function(e,t,a){a.d(t,{r:function(){return p},Z:function(){return g}});var r=a(7294),n=a(6010),l=a(6648);function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function i({anchorTopOffset:e}){var t;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=a.find((t=>o(t).top>=e));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(t=a[a.indexOf(r)-1])?t:null}return a[a.length-1]}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.LU)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){const t=(0,r.useRef)(void 0),a=c();(0,r.useEffect)((()=>{const{linkClassName:r,linkActiveClassName:n}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=i({anchorTopOffset:a.current}),o=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){var r;a?(t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(n)),e.classList.add(n),t.current=e):e.classList.remove(n)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E";const u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function p({toc:e,isChild:t}){return e.length?r.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(p,{isChild:!0,toc:e.children}))))):null}var g=function({toc:e}){return s(d),r.createElement("div",{className:(0,n.Z)(m,"thin-scrollbar")},r.createElement(p,{toc:e}))}},837:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(6010),l=a(1217),o="tag_1Okp",i="tagRegular_3MiF",c="tagWithCount_1HU1";var s=function(e){const{permalink:t,name:a,count:s}=e;return r.createElement(l.Z,{href:t,className:(0,n.Z)(o,{[i]:!s,[c]:s})},a,s&&r.createElement("span",null,s))}},2942:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(6010),l=a(910),o=a(837),i="tags_2ga9",c="tag_11ep";function s({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(i,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:c},r.createElement(o.Z,{name:e,permalink:t}))))))}}}]);
"use strict";(self.webpackChunkxamarin_community_guide=self.webpackChunkxamarin_community_guide||[]).push([[918],{7861:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var n=a(7294),r=a(6010),l=a(3204),i=a(4603),o=a(1217),s=a(910);var c=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(o.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=a(1368),m=a(190),u=Object.defineProperty,p=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const h={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function E(e){const t=h[e.versionMetadata.banner];return n.createElement(t,((e,t)=>{for(var a in t||(t={}))v.call(t,a)&&f(e,a,t[a]);if(p)for(var a of p(t))b.call(t,a)&&f(e,a,t[a]);return e})({},e))}function g({versionLabel:e,to:t,onClick:a}){return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(o.Z,{to:t,onClick:a},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function y({versionMetadata:e}){const{siteConfig:{title:t}}=(0,d.Z)(),{pluginId:a}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,m.J)(a),{latestDocSuggestion:i,latestVersionSuggestion:o}=(0,l.Jo)(a),s=null!=i?i:(c=o).docs.find((e=>e.id===c.mainDocId));var c;return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(E,{siteTitle:t,versionMetadata:e})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:o.label,to:s.path,onClick:()=>r(o.name)})))}var _=function({versionMetadata:e}){return"none"===e.banner?n.createElement(n.Fragment,null):n.createElement(y,{versionMetadata:e})},N=a(3730);function O({lastUpdatedAt:e,formattedLastUpdatedAt:t}){return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*e).toISOString()},t))}}," on {date}")}function L({lastUpdatedBy:e}){return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,e)}}," by {user}")}function w({lastUpdatedAt:e,formattedLastUpdatedAt:t,lastUpdatedBy:a}){return n.createElement(n.Fragment,null,n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:e&&t?n.createElement(O,{lastUpdatedAt:e,formattedLastUpdatedAt:t}):"",byUser:a?n.createElement(L,{lastUpdatedBy:a}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(3214),Z="tocCollapsible_1PrD",T="tocCollapsibleButton_2O1e",U="tocCollapsibleContent_2Ydz",C="tocCollapsibleExpanded_3GYr";function P({toc:e,className:t}){const{collapsed:a,toggleCollapsed:l}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,r.Z)(Z,{[C]:!a},t)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",T),onClick:l},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:U,collapsed:a},n.createElement(k.r,{toc:e})))}var j=a(5477),x=a(186),A="docItemContainer_33ec",I="lastUpdated_3DPF",B="docItemCol_3FnS",S="tocMobile_3Hoh",M=Object.defineProperty,D=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,F=(e,t,a)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var R=function(e){const{content:t,versionMetadata:a}=e,{metadata:o,frontMatter:s}=t,{image:d,keywords:m,hide_title:u,hide_table_of_contents:p}=s,{description:v,title:b,editUrl:f,lastUpdatedAt:h,formattedLastUpdatedAt:E,lastUpdatedBy:g}=o,{pluginId:y}=(0,l.gA)({failfast:!0}),O=(0,l.gB)(y).length>1,L=!u&&void 0===t.contentTitle,Z=(0,i.Z)(),T=!p&&t.toc&&t.toc.length>0,U=T&&("desktop"===Z||"ssr"===Z);return n.createElement(n.Fragment,null,n.createElement(N.Z,((e,t)=>{for(var a in t||(t={}))V.call(t,a)&&F(e,a,t[a]);if(D)for(var a of D(t))z.call(t,a)&&F(e,a,t[a]);return e})({},{title:b,description:v,keywords:m,image:d})),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",{[B]:!p})},n.createElement(_,{versionMetadata:a}),n.createElement("div",{className:A},n.createElement("article",null,O&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",a.label),T&&n.createElement(P,{toc:t.toc,className:S}),n.createElement("div",{className:"markdown"},L&&n.createElement(x.N,null,b),n.createElement(t,null)),(f||h||g)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},f&&n.createElement(j.Z,{editUrl:f})),n.createElement("div",{className:(0,r.Z)("col",I)},(h||g)&&n.createElement(w,{lastUpdatedAt:h,formattedLastUpdatedAt:E,lastUpdatedBy:g})))),n.createElement(c,{metadata:o}))),U&&n.createElement("div",{className:"col col--3"},n.createElement(k.Z,{toc:t.toc}))))}},5477:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(910),l=a(6010),i="iconEdit_2_ui",o=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var u=e=>{var t=e,{className:a}=t,r=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(t,["className"]);return n.createElement("svg",((e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(s)for(var a of s(t))d.call(t,a)&&m(e,a,t[a]);return e})({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(i,a),"aria-hidden":"true"},r),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function p({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},n.createElement(u,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},186:function(e,t,a){a.d(t,{N:function(){return E},Z:function(){return g}});var n=a(7294),r=a(6010),l=a(910),i=a(190),o="enhancedAnchor_2LWZ",s="h1Heading_27L5",c=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&b(e,a,t[a]);if(u)for(var a of u(t))v.call(t,a)&&b(e,a,t[a]);return e},h=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&v.call(e,n)&&(a[n]=e[n]);return a};const E=function(e){var t,a=h(e,[]);return n.createElement("header",null,n.createElement("h1",(t=f({},a),d(t,m({id:void 0,className:s}))),a.children))};var g=e=>{return"h1"===e?E:(t=e,function(e){var a=e,{id:s}=a,c=h(a,["id"]);const{navbar:{hideOnScroll:d}}=(0,i.LU)();return s?n.createElement(t,f({},c),n.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,r.Z)("anchor",{[o]:!d}),id:s}),c.children,n.createElement("a",{className:"hash-link",href:`#${s}`,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):n.createElement(t,f({},c))});var t}},3214:function(e,t,a){a.d(t,{r:function(){return s},Z:function(){return c}});var n=a(7294),r=a(6010);var l=function(e,t,a){const[r,l]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,i=!1;const o=document.getElementsByClassName(e);for(;a<o.length&&!i;){const e=o[a],{href:s}=e,c=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===c&&(r&&r.classList.remove(t),e.classList.add(t),l(e),i=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E";const o="table-of-contents__link";function s({toc:e,isChild:t}){return e.length?n.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:o,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children}))))):null}var c=function({toc:e}){return l(o,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(s,{toc:e}))}}}]);
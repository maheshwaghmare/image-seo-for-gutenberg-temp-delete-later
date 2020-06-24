!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){e.exports=wp.editPost},function(e,t){e.exports=wp.components},function(e,t){e.exports=wp.i18n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(4)},function(e,t,n){"use strict";var a=n(5),r=(n.n(a),n(6)),s=(n.n(r),n(7)),o=(n.n(s),n(8)),l=(n.n(o),n(0)),i=(n.n(l),n(9)),c=(n.n(i),n(1)),m=(n.n(c),n(2)),g=(n.n(m),n(10)),u=(n.n(g),function(e){var t=e.SEOPluginName,n=e.focusKeywordItems,a=e.haveAnyFocusKeywords;return"no"===ImageSEOForGutenbergVars.isRankMathActive&&"no"===ImageSEOForGutenbergVars.isYoastActive?"":!1===a?"":wp.element.createElement("div",{className:"image-seo-for-gutenberg-seo-keywords"},wp.element.createElement("div",{className:"image-seo-for-gutenberg-section-heading"},Object(m.sprintf)(Object(m.__)("Focus Keywords (%s)","image-seo-for-gutenberg"),t)),wp.element.createElement("ol",{className:"seo-ready-images-keywords"},n))}),p=function(e){var t=e.items;return wp.element.createElement("div",{className:"image-seo-for-gutenberg-list-of-images"},wp.element.createElement("div",{className:"image-seo-for-gutenberg-section-heading"},Object(m.__)("List of all images","image-seo-for-gutenberg")),wp.element.createElement("div",{className:"seo-ready-images-list"},t))},b=function(e){var t=e.allImagesCount,n=e.missingAltClass,a=e.missingCaptionClass,r=e.missingAltText,s=e.missingCaptionText;return wp.element.createElement("div",{className:"image-seo-for-gutenberg-images-summery"},wp.element.createElement("p",null,wp.element.createElement("b",null,Object(m.__)("Total","image-seo-for-gutenberg"),": "),Object(m.sprintf)(Object(m._n)("%d image found.","%d images found.",t,"image-seo-for-gutenberg"),t)),wp.element.createElement("ul",{className:"image-seo-for-gutenberg-categories-list"},wp.element.createElement("li",null,wp.element.createElement("b",null,Object(m.__)("Alt:","image-seo-for-gutenberg")," "),wp.element.createElement("span",{className:n},r)),wp.element.createElement("li",null,wp.element.createElement("b",null,Object(m.__)("Caption:","image-seo-for-gutenberg")," "),wp.element.createElement("span",{className:a},s))))},f=function(e){if(!e.count)return wp.element.createElement(s.Fragment,null,wp.element.createElement("p",{className:"no-images-found"},Object(m.__)("No images found.","image-seo-for-gutenberg")),wp.element.createElement("p",null,Object(m.__)("Read more the")," ",wp.element.createElement(c.ExternalLink,{href:"https://maheshwaghmare.com/doc/image-seo-for-gutenberg/"},Object(m.__)("importance of images"))));var t=[],n=!1,a="",r=Object(i.select)("core/block-editor").getBlocks(),o=r.filter(function(e){return"core/image"===e.name});"yes"===ImageSEOForGutenbergVars.isRankMathActive?(a="Rankmath",t=Object(i.select)("core/editor").getEditedPostAttribute("meta").rank_math_focus_keyword):"yes"===ImageSEOForGutenbergVars.isYoastActive&&(a="Yoast",t=Object(i.select)("core/editor").getEditedPostAttribute("meta")._yoast_wpseo_focuskw);var l="";Object(g.isEmpty)(t)||(n=!0,t=t.split(","),l=t.map(function(e){var t=0;return o.map(function(n,a){var r=n.attributes.alt,s=r.split(e).length-1||0;t+=s}),wp.element.createElement("li",null,e," ",wp.element.createElement("i",null,"(",t,")"))}));var f=Object(i.useDispatch)("core/block-editor"),d=f.updateBlockAttributes,w=0,E=0,_=o.length||0;o.forEach(function(e,t){e.attributes.alt||w++,e.attributes.caption||E++});var O=o.map(function(e,a){var r=e.attributes.url||"";if(r){var s=Object(g.last)(r.split("/")),o=e.attributes.alt,l=e.attributes.caption,i="",u=0,p=[];return Object(g.isEmpty)(o)?i="panel-fail":(i=Object(g.isEmpty)(o)?"panel-average":"panel-success",n&&t&&(t.map(function(e){var t=o.split(e).length-1||0;u+=t,t&&p.push(e)}),i=u?"panel-success":"panel-average")),s=s||r,wp.element.createElement(c.PanelBody,{initialOpen:!1,className:i,title:a+1+") "+s},wp.element.createElement("img",{src:r}),wp.element.createElement("p",null,wp.element.createElement("label",{class:"components-base-control__label"},Object(m.__)("Caption")),wp.element.createElement("textarea",{class:"components-textarea-control__input",rows:"1",onChange:function(t){return d(e.clientId,{caption:t.target.value})}},l)),wp.element.createElement("p",null,wp.element.createElement("label",{class:"components-base-control__label"},Object(m.__)("Alt text (alternative text)")),wp.element.createElement("textarea",{class:"components-textarea-control__input",rows:"4",onChange:function(t){return d(e.clientId,{alt:t.target.value})}},o),!Object(g.isEmpty)(p)||"yes"!==ImageSEOForGutenbergVars.isRankMathActive&&"yes"!==ImageSEOForGutenbergVars.isYoastActive?Object(m.sprintf)(Object(m.__)("Used keywords: %s","image-seo-for-gutenberg"),p.join(",")):Object(m.__)("No focus keyword.","image-seo-for-gutenberg")))}}),j=E?Object(m.sprintf)(Object(m._n)("Missing from %d image.","Missing from %d images.",E,"image-seo-for-gutenberg"),E):Object(m.__)("All Good."),v=E?"average":"success",y=w?Object(m.sprintf)(Object(m._n)("Missing from %d image.","Missing from %d images.",w,"image-seo-for-gutenberg"),w):Object(m.__)("All Good.","image-seo-for-gutenberg"),h=w?"fail":"success";return wp.element.createElement("div",null,wp.element.createElement(b,{allImagesCount:_,missingAltClass:h,missingCaptionClass:v,missingAltText:y,missingCaptionText:j}),wp.element.createElement(u,{SEOPluginName:a,focusKeywordItems:l,haveAnyFocusKeywords:n}),wp.element.createElement(p,{items:O}))},d=function(e){var t=Object(i.select)("core/block-editor").getBlocks(),n=t.filter(function(e){return"core/image"===e.name}),a=n.length||0;return wp.element.createElement(l.PluginSidebar,{name:"image-seo-for-gutenberg",title:Object(m.__)("Image SEO","image-seo-for-gutenberg")},wp.element.createElement("div",{className:"seo-ready-images-summery"},wp.element.createElement(f,{count:a})))};Object(i.withSelect)(function(e,t){t.rootClientId;return{blocks:e("core/block-editor").getBlocks()}})(d);Object(o.registerPlugin)("image-seo-for-gutenberg",{render:d,icon:wp.element.createElement("span",{className:"image-seo-for-gutenberg-icon-wrapper"},wp.element.createElement("span",{className:"dashicons dashicons-format-image"}),wp.element.createElement("span",{className:"image-seo-for-gutenberg-icon-title"},Object(m.__)("SEO","image-seo-for-gutenberg")))})},function(e,t){},function(e,t){},function(e,t){e.exports=wp.element},function(e,t){e.exports=wp.plugins},function(e,t){e.exports=wp.data},function(e,t){e.exports=lodash}]);
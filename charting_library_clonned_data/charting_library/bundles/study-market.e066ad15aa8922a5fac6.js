(window.webpackJsonp=window.webpackJsonp||[]).push([["study-market"],{"++0f":function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentcolor" stroke-width="1.3" d="M12 9l5 5-5 5"/></svg>'},"+EG+":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var i=n("mrSG"),r=n("q1tI"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i.c)(t,e),t.prototype.shouldComponentUpdate=function(){return!1},t.prototype.render=function(){return r.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})},t}(r.Component),o=r.createContext(null)},"+l/S":function(e,t,n){},"0NLZ":function(e,t,n){e.exports={container:"container-V40c9xRz"}},"2A9e":function(e){e.exports=JSON.parse('{"button":"button-1iktpaT1","content":"content-2PGssb8d","noOutline":"noOutline-d9Yp4qvi","appearance-default":"appearance-default-dMjF_2Hu","intent-primary":"intent-primary-1-IOYcbg","intent-success":"intent-success-25a4XZXM","intent-default":"intent-default-2ZbSqQDs","intent-warning":"intent-warning-24j5HMi0","intent-danger":"intent-danger-1EETHCla","appearance-stroke":"appearance-stroke-12lxiUSM","appearance-text":"appearance-text-DqKJVT3U","appearance-inverse":"appearance-inverse-r1Y2JQg_","size-s":"size-s-3mait84m","size-m":"size-m-2G7L7Qat","size-l":"size-l-2NEs9_xt","size-p":"size-p-3D4rn3v0","full-width":"full-width-1wU8ljjC","with-icon":"with-icon-yumghDr-","icon":"icon-1grlgNdV"}')},"2x13":function(e,t,n){e.exports={wrapper:"wrapper-1S1BAxTC",container:"container-2mBp3oqG",tab:"tab-1EqAs-Lb",active:"active-3u5zV0YP",title:"title-1SrCEkqk",icon:"icon-2RKetbyG",titleText:"titleText-QNKMAlbN",nested:"nested-H6CeL6Wc",isTablet:"isTablet-2Pl3hVJ9",isMobile:"isMobile-2OnSZ08h"}},"8Rai":function(e,t,n){"use strict";var i=n("q1tI"),r=function(e,t){var n=void 0===t?{}:t,i=n.bubbles,r=void 0!==i&&i,a=n.cancelable,o=void 0!==a&&a,c=n.detail,s=void 0===c?null:c;try{return new window.CustomEvent(e,{bubbles:r,cancelable:o,detail:s})}catch(u){var l=document.createEvent("CustomEvent");return l.initCustomEvent(e,r,o,s),l}},a=n("R5JZ");function o(e){var t=e.click,n=e.mouseDown,o=e.touchEnd,c=e.touchStart,s=e.handler,l=e.reference,u=e.ownerDocument,d=void 0===u?document:u,p=Object(i.useRef)(null),h=Object(i.useRef)(new r("timestamp").timeStamp);return Object(i.useLayoutEffect)((function(){var e={click:t,mouseDown:n,touchEnd:o,touchStart:c},i=l?l.current:p.current;return Object(a.a)(h.current,i,s,d,e)}),[t,n,o,c,s]),l||p}n.d(t,"a",(function(){return o}))},"9DSJ":function(e,t,n){e.exports={"tablet-small-breakpoint":"screen and (max-width: 419px)",dialog:"dialog-12W2lAaB",dialogLibrary:"dialogLibrary-11wUWBuU",listContainer:"listContainer-313-x-WK",scroll:"scroll-3Eu9HUkX",sidebarContainer:"sidebarContainer-1lfmvpaZ",backButton:"backButton-C9cNFJsB",noContentBlock:"noContentBlock-Ly1pGn6p"}},AiMB:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),
n.d(t,"b",(function(){return u}));var i=n("mrSG"),r=n("q1tI"),a=n("i8i4"),o=n("e3/o"),c=n("jAh7"),s=n("+EG+"),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._uuid=Object(o.guid)(),t}return Object(i.c)(t,e),t.prototype.componentWillUnmount=function(){this._manager().removeWindow(this._uuid)},t.prototype.render=function(){var e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return e.style.top=this.props.top||"",e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"",a.createPortal(r.createElement(u.Provider,{value:this},this.props.children),e)},t.prototype.moveToTop=function(){this._manager().moveToTop(this._uuid)},t.prototype._manager=function(){return null===this.context?Object(c.getRootOverlapManager)():this.context},t.contextType=s.b,t}(r.PureComponent),u=r.createContext(null)},An2S:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return f}));var i=n("mrSG"),r=n("q1tI"),a=n.n(r),o=n("TSYQ"),c=n.n(o),s=n("Iivm"),l=n("++0f"),u=n("2x13");function d(e){return{isMobile:"mobile"===e,isTablet:"tablet"===e}}function p(e){var t=e.mode,n=e.className,r=Object(i.e)(e,["mode","className"]),o=d(t),s=o.isMobile,l=o.isTablet,p=c()(u.container,l&&u.isTablet,s&&u.isMobile,n);return a.a.createElement("div",Object(i.a)({},r,{className:p,"data-role":"dialog-sidebar"}))}function h(e){return a.a.createElement("div",Object(i.a)({className:u.wrapper},e))}function f(e){var t=e.mode,n=e.title,r=e.icon,o=e.isActive,p=e.onClick,h=Object(i.e)(e,["mode","title","icon","isActive","onClick"]),f=d(t),m=f.isMobile,v=f.isTablet;return a.a.createElement("div",Object(i.a)({},h,{className:c()(u.tab,v&&u.isTablet,m&&u.isMobile,o&&u.active),onClick:p}),a.a.createElement(s.a,{className:u.icon,icon:r}),!v&&a.a.createElement("span",{className:u.title},a.a.createElement("span",{className:u.titleText},n),m&&a.a.createElement(s.a,{className:u.nested,icon:l})))}},Iivm:function(e,t,n){"use strict";var i=n("mrSG"),r=n("q1tI");const a=r.forwardRef((e,t)=>{const{icon:n=""}=e,a=Object(i.e)(e,["icon"]);return r.createElement("span",Object.assign({},a,{ref:t,dangerouslySetInnerHTML:{__html:n}}))});n.d(t,"a",(function(){return a}))},PMRz:function(e,t,n){e.exports={"tablet-small-breakpoint":"screen and (max-width: 419px)",container:"container-1e-eHKCj",selected:"selected-ObuRahJa",disabled:"disabled-3lywlGlv",favorite:"favorite-PSp_jkxl",actions:"actions-29vlkAXU",highlighted:"highlighted-3YDl6jC6",light:"light-2HF6Zxxl","highlight-animation-theme-light":"highlight-animation-theme-light-1TIZ6Gga",dark:"dark-1FO6oC-E","highlight-animation-theme-dark":"highlight-animation-theme-dark-3xWPfm4R",main:"main-34wD0nIh",paddingLeft:"paddingLeft-1urwbIqx",isMobile:"isMobile-2aXWDdT8",isActive:"isActive-2O3vI4me",author:"author-3sD2DZRV",likes:"likes-17ztM5mP"}},PSOE:function(e,t,n){e.exports={highlighted:"highlighted-3Ob1jr_R"}},cu5P:function(e,t,n){e.exports={
title:"title-34aDs39w",disabled:"disabled-17IgfIYd",icon:"icon-2hTCJTIH",locked:"locked-20ljjQkW",open:"open-19XeUlGJ",actionIcon:"actionIcon-3jB28-_s",selected:"selected-lKkvzAlt",codeIcon:"codeIcon-1DtZ78WN"}},iYOJ:function(e,t,n){e.exports={title:"title-34kQlbrM",small:"small-vZQvMj9o",normal:"normal-2Xipsjws",large:"large-3RKX3yN_"}},idtP:function(e,t,n){e.exports={container:"container-1nR_bX0y",image:"image-1upzSf_2",title:"title-3EHABq-W",description:"description-3sR4j2iN"}},jPOK:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("q1tI"),r=n("TSYQ"),a=n("Owlf");n("SzKR");function o(e){var t=r("tv-spinner","tv-spinner--shown","tv-spinner--size_"+(e.size||a.a));return i.createElement("div",{className:t,style:e.style,role:"progressbar"},i.createElement("div",{className:"tv-spinner__spinner-layer"},i.createElement("div",{className:"tv-spinner__background tv-spinner__width_element"}),i.createElement("div",{className:"tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--left"}),i.createElement("div",{className:"tv-spinner__circle-clipper tv-spinner__width_element tv-spinner__circle-clipper--right"})))}},mwqF:function(e,t,n){"use strict";var i=n("mrSG"),r=n("q1tI"),a=n("TSYQ");function o(e,t){const{intent:n="primary",size:i="m",appearance:r="default",useFullWidth:o=!1,tabIndex:c=0,icon:s,className:l}=t;return a(l,e.button,e["size-"+i],e["intent-"+n],e["appearance-"+r],o&&e["full-width"],-1===c&&e.noOutline,s&&"s"!==i&&e["with-icon"])}var c=n("2A9e");n("+l/S");function s(e){const{className:t,intent:n,size:s,appearance:l,disabled:u,useFullWidth:d,reference:p,icon:h,children:f,tabIndex:m}=e,v=Object(i.e)(e,["className","intent","size","appearance","disabled","useFullWidth","reference","icon","children","tabIndex"]),b=o(c,{intent:n,size:s,appearance:l,disabled:u,useFullWidth:d,tabIndex:m,icon:h});return r.createElement("button",Object.assign({className:a(b,t),disabled:u,ref:p,tabIndex:m},v),h&&"s"!==s&&r.createElement("span",{className:c.icon},h),r.createElement("span",{className:c.content},f))}n.d(t,"a",(function(){return s}))},vbTm:function(e,t,n){e.exports={container:"container-2xksDfDy"}},vqb8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("q1tI"),r=function(e){var t="watchedValue"in e?e.watchedValue:void 0,n="defaultValue"in e?e.defaultValue:e.watchedValue.value(),r=Object(i.useState)(t?t.value():n),a=r[0],o=r[1];return Object(i.useEffect)((function(){if(t){o(t.value());var e=function(e){return o(e)};return t.subscribe(e),function(){return t.unsubscribe(e)}}return function(){}}),[t]),a}},zbLM:function(e,t,n){"use strict";n.r(t);var i=n("mrSG"),r=n("q1tI"),a=n.n(r),o=n("i8i4"),c=n.n(o),s=n("YFKU"),l=n("mMWL"),u=(n("+GxX"),n("CW80")),d=n("0YCj"),p=n.n(d),h=n("Kxc7");function f(e,t){return void 0===t&&(t=!0),e.filter((function(e){var n=!!t||!function(e){return e.isStrategy}(e);return function(e){0;return!e.isHidden||!1}(e)&&n}))}function m(e){var t={};return e.forEach((function(e){var n=e.packageName;n in t?t[n].push(e):t[n]=[e]})),t}
function v(e,t){var n=e.title.toLowerCase(),i=t.title.toLowerCase();return n<i?-1:n>i?1:0}var b={earning:new RegExp("EPS"),earnings:new RegExp("EPS"),"trailing twelve months":new RegExp("TTM")};function g(e){var t,n=e.id,i=e.description,r=e.shortDescription,a=e.description_localized,o=e.is_hidden_study,c=e.version,l=h.enabled("graying_disabled_tools_enabled")&&(null===(t=window.ChartApiInstance)||void 0===t?void 0:t.studiesAccessController.isToolGrayed(r));return{id:n,title:a||Object(s.t)(i,{context:"study"}),shortDescription:r,shortTitle:r,isStrategy:p.a.isScriptStrategy(e),isHidden:o,descriptor:{type:"java",studyId:e.id},packageName:p.a.getPackageName(n),isGrayed:l,version:c}}var y=n("TSYQ"),_=n.n(y),E=n("jPOK"),O=n("g89m"),x=n("qFKp"),j=n("QHWU"),w=n("An2S"),S=n("0NLZ");function C(e){var t=e.reference,n=e.className,r=Object(i.e)(e,["reference","className"]);return a.a.createElement("div",Object(i.a)({ref:t,className:_()(S.container,n)},r,{"data-role":"dialog-content"}))}var N=n("cu5P");function k(e){var t=e.children,n=e.className,i=e.disabled;return a.a.createElement("span",{className:_()(N.title,i&&N.disabled,n)},t)}var I=a.a.createContext(null);function R(e){return e.replace(/[!-/[-^{-}]/g,"\\$&")}var P=n("PSOE");function T(e){var t=e.queryString,n=e.rules,i=e.text,o=e.className,c=Object(r.useMemo)((function(){return function(e,t,n){var i=[];return e&&n?(n.forEach((function(e){var n=e.fullMatch,r=e.re,a=e.reserveRe;n.lastIndex=0,r.lastIndex=0;var o=n.exec(t),c=o||r.exec(t)||a&&a.exec(t);if(e.fuzzyHighlight=!o,c)if(e.fuzzyHighlight)for(var s=c.index,l=1;l<c.length;l++){var u=c[l],d=c[l].length;if(l%2){var p=u.startsWith(" ")||u.startsWith("/")||u.startsWith("-");i[p?s+1:s]=!0}s+=d}else for(var h=0;h<c[0].length;h++)i[c.index+h]=!0})),i):i}(t,i,n)}),[t,n,i]);return a.a.createElement(r.Fragment,null,c.length?i.split("").map((function(e,t){return a.a.createElement(r.Fragment,{key:t},c[t]?a.a.createElement("span",{className:y(P.highlighted,o)},e):a.a.createElement("span",null,e))})):i)}var D=n("vqb8"),M=n("oiZD"),z=n("zM7N"),F=n("pr86"),q=n("/3z9"),W=n("PMRz");function L(e){var t=Object(r.useContext)(I),n=e.style,i=e.layoutMode,o=e.item,c=e.query,s=e.regExpRules,l=e.isSelected,u=e.isHighlighted,d=e.reference,p=e.onClick,h=(e.renderActions,o.isFavorite),f=(o.isStrategy,o.isLocked,o.public),m=void 0!==h,v=A(p,o),b=Object(r.useCallback)((function(e){return e.stopPropagation()}),[]),g=(null==t?void 0:t.toggleFavorite)?A(t.toggleFavorite,o):void 0,y=x.CheckMobile.any()&&W.isMobile,E=Object(D.a)({watchedValue:M.watchedTheme})===z.a.Dark?W.dark:W.light,O=_()(W.container,o.isGrayed&&W.disabled,l&&W.selected,u&&W.highlighted,u&&E);return a.a.createElement("div",{ref:d,className:O,onClick:v,style:n,"data-role":"list-item","data-disabled":o.isGrayed,"data-title":o.title,"data-id":o.id},a.a.createElement("div",{className:_()(W.main,!m&&W.paddingLeft)},m&&a.a.createElement(F.a,{className:_()(W.favorite,h&&W.isActive,y),isFilled:h,onClick:g}),a.a.createElement(k,{disabled:o.isGrayed},a.a.createElement(T,{queryString:c,rules:s,
text:o.title})),!1),f&&a.a.createElement("a",{href:f.authorLink,className:W.author,target:"_blank",onClick:b},f.authorName),"mobile"!==i&&f&&a.a.createElement("span",{className:W.likes},f.likesCount),!1)}function A(e,t){return function(n){var i=0===Object(q.modifiersFromEvent)(n)&&0===n.button;!n.defaultPrevented&&e&&i&&(n.preventDefault(),e(t))}}var G=n("iYOJ");function K(e){var t=e.title,n=e.type,i=e.className;return a.a.createElement("h3",{className:_()(G.title,"Small"===n&&G.small,"Normal"===n&&G.normal,"Large"===n&&G.large,i)},t)}var B=n("vbTm");function H(e){var t=e.style,n=e.children;return a.a.createElement("div",{style:t,className:B.container},n)}var J=n("Iivm"),V=n("mwqF"),Y=n("idtP");function Q(e){var t=e.className,n=e.icon,i=e.title,r=e.description,o=e.buttonText,c=e.buttonAction;return a.a.createElement("div",{className:_()(Y.container,t)},n&&a.a.createElement(J.a,{icon:n,className:Y.image}),i&&a.a.createElement("h3",{className:Y.title},i),r&&a.a.createElement("p",{className:Y.description},r),o&&c&&a.a.createElement(V.a,{onClick:c},o))}function U(e){var t=Object(r.useState)(null),n=t[0],i=t[1];function a(e){return e.findIndex((function(e){return(null==n?void 0:n.id)===e.id}))}return[n,i,function(){i(function(){var t,i=a(e),r=i===e.length-1;return null===n||-1===i?null!==(t=e[0])&&void 0!==t?t:null:r?e[i]:e[i+1]}())},function(){i(function(){var t,i=a(e);return null===n||0===i||-1===i?null!==(t=e[0])&&void 0!==t?t:null:e[i-1]}())}]}var Z=n("9DSJ");function X(e){var t=e.reference,n=e.data,i=e.isOpened,o=e.onClose,c=e.applyStudy,l=Object(r.useState)(""),u=l[0],d=l[1],p=Object(r.useMemo)((function(){return function(e,t){var n=[],i=e.toLowerCase(),r=e.split("").map((function(e,t){return"("+(0!==t?"[/\\s-]"+R(e):R(e))+")"})).join("(.*?)")+"(.*)";return n.push({fullMatch:new RegExp("("+R(e)+")","i"),re:new RegExp("^"+r,"i"),reserveRe:new RegExp(r,"i"),fuzzyHighlight:!0}),t&&t.hasOwnProperty(i)&&n.push({fullMatch:t[i],re:t[i],fuzzyHighlight:!1}),n}(u,b)}),[u]),h=Object(r.useMemo)((function(){return u?function(e){var t=e.data,n=e.rules,i=e.queryString,r=e.isPreventedFromFiltering,a=e.primaryKey,o=e.secondaryKey,c=void 0===o?a:o,s=e.optionalPrimaryKey;return t.map((function(e){var t,r=s&&e[s]?e[s]:e[a],o=e[c],l=0;return n.forEach((function(e){var n,a,c,s,u=e.re,d=e.fullMatch;return u.lastIndex=0,r.toLowerCase()===i.toLowerCase()?(l=3,void(t=null===(n=r.match(d))||void 0===n?void 0:n.index)):d.test(r)?(l=2,void(t=null===(a=r.match(d))||void 0===a?void 0:a.index)):d.test(o)?(l=1,void(t=null===(c=r.match(d))||void 0===c?void 0:c.index)):void(u.test(o)&&(l=1,t=null===(s=r.match(u))||void 0===s?void 0:s.index))})),{matchPriority:l,matchIndex:t,item:e}})).filter((function(e){return r||e.matchPriority})).sort((function(e,t){if(e.matchPriority<t.matchPriority)return 1;if(e.matchPriority>t.matchPriority)return-1;if(e.matchPriority===t.matchPriority){if(void 0===e.matchIndex||void 0===t.matchIndex)return 0;if(e.matchIndex>t.matchIndex)return 1;if(e.matchIndex<t.matchIndex)return-1}return 0})).map((function(e){return e.item
}))}({data:n,rules:p,queryString:u,primaryKey:"shortDescription",secondaryKey:"title",optionalPrimaryKey:"shortTitle"}):n}),[u,p,n]),f=function(e,t,n,i){var a=0,o=Object(r.useState)(null),c=o[0],s=o[1],l=Object(r.useRef)(null),u=Object(r.useRef)(null),d=U(t),p=d[0],h=d[1],f=d[2],m=d[3],v=Object(r.useRef)(null);return Object(r.useEffect)((function(){e?b(0):h(null)}),[e]),Object(r.useEffect)((function(){void 0!==i&&(b(0),h(null))}),[i]),Object(r.useEffect)((function(){return c&&(a=setTimeout((function(){s(null)}),1500)),function(){clearInterval(a)}}),[c]),{highlightedItem:c,scrollContainerRef:l,selectedNodeReference:u,selectedItem:p,searchInputRef:v,onClickStudy:function(e){if(!n)return;n(e),h(e),s(e)},handleKeyDown:function(e){var t=function(e,t){if(null===e.current||null===t.current)return[0,0];var n=e.current.getBoundingClientRect(),i=t.current.getBoundingClientRect(),r=n.height,a=n.top-i.top,o=n.bottom-i.bottom+r<0?0:r,c=a-r>0?0:r,s=t.current.scrollTop;return[s-c,s+o]}(u,l),i=t[0],r=t[1];40===Object(q.hashFromEvent)(e)&&(e.preventDefault(),f(),b(r));38===Object(q.hashFromEvent)(e)&&(e.preventDefault(),m(),b(i));if(13===Object(q.hashFromEvent)(e)&&p){if(!n)return;n(p),s(p)}}};function b(e){null!==l.current&&l.current.scrollTo&&l.current.scrollTo(0,e)}}(i,h,c),m=f.highlightedItem,v=f.selectedItem,g=f.selectedNodeReference,y=f.scrollContainerRef,S=f.searchInputRef,N=f.onClickStudy,k=f.handleKeyDown,I=""===u&&!h.length;return Object(r.useEffect)((function(){var e;i||d(""),x.CheckMobile.any()||null===(e=S.current)||void 0===e||e.focus()}),[i]),a.a.createElement(O.a,{isOpened:i,onClose:o,onClickOutside:o,className:_()(Z.dialogLibrary),render:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j.a,{reference:S,placeholder:Object(s.t)("Search"),onChange:P,onFocus:T}),a.a.createElement(w.c,null,a.a.createElement(C,{reference:y,className:Z.scroll},I?a.a.createElement(E.a,null):h.length?a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null,a.a.createElement(K,{title:Object(s.t)("Script name")})),h.map((function(e){var t=(null==v?void 0:v.id)===e.id;return a.a.createElement(L,{key:e.id,item:e,onClick:function(){return N(e)},query:u,regExpRules:p,reference:t?g:void 0,isSelected:(null==v?void 0:v.id)===e.id,isHighlighted:(null==m?void 0:m.id)===e.id})}))):a.a.createElement(Q,{className:Z.noContentBlock,description:Object(s.t)("No indicators matched your criteria.")}))))},title:Object(s.t)("Indicators"),dataName:"indicators-dialog",onKeyDown:k,ref:t});function P(e){d(e.target.value)}function T(){var e;u.length>0&&(null===(e=S.current)||void 0===e||e.select())}}var $=n("FQhm"),ee=n("hY0g"),te=n.n(ee),ne=function(){function e(e){this._searchInputRef=a.a.createRef(),this._dialog=a.a.createRef(),this._visibility=new te.a(!1),this._container=document.createElement("div"),this._isForceRender=!1,this._parentSource=null,this._isDestroyed=!1,this._chartWidgetCollection=e}return e.prototype.isDestroyed=function(){return this._isDestroyed},e.prototype.visible=function(){return this._visibility.readonly()},
e.prototype.updateUserStudies=function(){},e.prototype.resetAllStudies=function(){},e.prototype.updateFavorites=function(){},e.prototype.open=function(e){this._parentSource=null!=e?e:null,this._setProps({isOpened:!0}),this._visibility.setValue(!0),$.emit("indicators_dialog")},e.prototype.show=function(){this.open()},e.prototype.hide=function(){this._parentSource=null,this._setProps({isOpened:!1}),this._visibility.setValue(!1)},e.prototype.destroy=function(){this._isDestroyed=!0,c.a.unmountComponentAtNode(this._container)},e.prototype._shouldPreventRender=function(){return this._isDestroyed||!this._isForceRender&&!this._getProps().value().isOpened},e.prototype._getRenderData=function(){return{props:this._getProps().value(),container:this._getContainer()}},e.prototype._applyStudy=function(e){var t,n,r=this;e.isGrayed?$.emit("onGrayedObjectClicked",{type:"study",name:e.shortDescription}):(x.CheckMobile.any()||null===(t=this._searchInputRef.current)||void 0===t||t.select(),function(e,t,n){return Object(i.b)(this,void 0,void 0,(function(){var r,a,o;return Object(i.d)(this,(function(i){return"java"===(r=t.descriptor).type&&null!==(a=Object(u.tryFindStudyLineToolNameByStudyId)(r.studyId))?(l.tool.setValue(a),[2,null]):(o=e.activeChartWidget.value())?[2,o.insertStudy(t.descriptor,n,t.shortDescription)]:[2,null]}))}))}(this._chartWidgetCollection,e,null!==(n=this._parentSource)&&void 0!==n?n:void 0).then((function(){var e;x.CheckMobile.any()||null===(e=r._searchInputRef.current)||void 0===e||e.focus()})))},e.prototype._setProps=function(e){var t=this._getProps().value(),n=t.isOpened;this._isForceRender=n&&"isOpened"in e&&!e.isOpened;var r=Object(i.a)(Object(i.a)({},t),e);this._getProps().setValue(r)},e.prototype._requestBuiltInJavaStudies=function(){return this._chartWidgetCollection.activeChartWidget.value().metaInfoRepository().findAllJavaStudies()},e.prototype._focus=function(){var e;this._getProps().value().isOpened&&(null===(e=this._dialog.current)||void 0===e||e.focus())},e.prototype._getContainer=function(){return this._container},e.prototype._getDialog=function(){return this._dialog},e}();n.d(t,"IndicatorsLibraryContainer",(function(){return ie}));var ie=function(e){function t(t,n){var i=e.call(this,t)||this;return i._studies={},i._options={onWidget:!1},i._getStudies=function(e){return i._studies[e]||[]},n&&(i._options=n),i._props=new te.a({data:[],applyStudy:i._applyStudy.bind(i),isOpened:!1,reference:i._getDialog(),onClose:i.hide.bind(i)}),i._getProps().subscribe(i._render.bind(i)),i._init(),i}return Object(i.c)(t,e),t.prototype._getProps=function(){return this._props},t.prototype._init=function(){return Object(i.b)(this,void 0,void 0,(function(){var e,t,n,r;return Object(i.d)(this,(function(a){switch(a.label){case 0:return[4,this._requestBuiltInJavaStudies()];case 1:return e=a.sent(),this._studies=m(f(e.map(g))),[3,3];case 2:t=a.sent().pineBuiltInStudies,n=m(f(t.map(mapPineStudy),!1)),this._studies=Object(i.a)(Object(i.a)({},this._studies),n),a.label=3;case 3:
return r=Object(i.f)(this._getStudies("tv-basicstudies"),this._getStudies("Script$STD")).filter((function(e){return!e.isStrategy})).sort(v),this._setProps({data:r}),[2]}}))}))},t.prototype._render=function(){if(!this._shouldPreventRender()){var e=this._getRenderData(),t=e.props,n=e.container;c.a.render(a.a.createElement(X,Object(i.a)({},t)),n)}},t}(ne)}}]);
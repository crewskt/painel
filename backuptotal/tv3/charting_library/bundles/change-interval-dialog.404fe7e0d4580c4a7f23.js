(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[2077,959,6437],{497754:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},981193:e=>{e.exports={container:"container-Mtq7m9Yl","intent-default":"intent-default-Mtq7m9Yl",focused:"focused-Mtq7m9Yl",readonly:"readonly-Mtq7m9Yl",disabled:"disabled-Mtq7m9Yl","with-highlight":"with-highlight-Mtq7m9Yl",grouped:"grouped-Mtq7m9Yl","adjust-position":"adjust-position-Mtq7m9Yl","first-row":"first-row-Mtq7m9Yl","first-col":"first-col-Mtq7m9Yl",stretch:"stretch-Mtq7m9Yl","font-size-medium":"font-size-medium-Mtq7m9Yl","font-size-large":"font-size-large-Mtq7m9Yl","no-corner-top-left":"no-corner-top-left-Mtq7m9Yl","no-corner-top-right":"no-corner-top-right-Mtq7m9Yl","no-corner-bottom-right":"no-corner-bottom-right-Mtq7m9Yl","no-corner-bottom-left":"no-corner-bottom-left-Mtq7m9Yl","size-small":"size-small-Mtq7m9Yl","size-medium":"size-medium-Mtq7m9Yl","size-large":"size-large-Mtq7m9Yl","intent-success":"intent-success-Mtq7m9Yl","intent-warning":"intent-warning-Mtq7m9Yl","intent-danger":"intent-danger-Mtq7m9Yl","intent-primary":"intent-primary-Mtq7m9Yl","border-none":"border-none-Mtq7m9Yl","border-thin":"border-thin-Mtq7m9Yl","border-thick":"border-thick-Mtq7m9Yl",highlight:"highlight-Mtq7m9Yl",shown:"shown-Mtq7m9Yl"}},484684:e=>{e.exports={"inner-slot":"inner-slot-yJbunXPO",interactive:"interactive-yJbunXPO",icon:"icon-yJbunXPO","inner-middle-slot":"inner-middle-slot-yJbunXPO","before-slot":"before-slot-yJbunXPO","after-slot":"after-slot-yJbunXPO"}},358089:e=>{e.exports={input:"input-oiYdY6I4","with-start-slot":"with-start-slot-oiYdY6I4","with-end-slot":"with-end-slot-oiYdY6I4"}},380327:(e,t,n)=>{"use strict";n.d(t,{ControlGroupContext:()=>r});const r=n(50959).createContext({isGrouped:!1,cellState:{isTop:!0,isRight:!0,isBottom:!0,isLeft:!0}})},331774:(e,t,n)=>{"use strict";function r(e){let t=0;return e.isTop&&e.isLeft||(t+=1),e.isTop&&e.isRight||(t+=2),e.isBottom&&e.isLeft||(t+=8),e.isBottom&&e.isRight||(t+=4),t}n.d(t,{getGroupCellRemoveRoundBorders:()=>r})},34735:(e,t,n)=>{"use strict";n.d(t,{ControlSkeleton:()=>y,InputClasses:()=>h});var r=n(50959),o=n(497754),i=n(650151),a=n(525388),s=n(800417),l=n(380327),u=n(331774);var c=n(981193),d=n.n(c);function f(e){let t="";return 0!==e&&(1&e&&(t=o(t,d()["no-corner-top-left"])),2&e&&(t=o(t,d()["no-corner-top-right"])),4&e&&(t=o(t,d()["no-corner-bottom-right"])),8&e&&(t=o(t,d()["no-corner-bottom-left"]))),t}function m(e,t,n,r){const{removeRoundBorder:i,className:a,intent:s="default",borderStyle:l="thin",size:c,highlight:m,disabled:p,readonly:h,stretch:g,noReadonlyStyles:v,isFocused:y}=e,b=f(null!=i?i:(0,
u.getGroupCellRemoveRoundBorders)(n));return o(d().container,d()[`intent-${s}`],d()[`border-${l}`],c&&d()[`size-${c}`],b,m&&d()["with-highlight"],p&&d().disabled,h&&!v&&d().readonly,y&&d().focused,g&&d().stretch,t&&d().grouped,!r&&d()["adjust-position"],n.isTop&&d()["first-row"],n.isLeft&&d()["first-col"],a)}function p(e,t){const{highlight:n,highlightRemoveRoundBorder:r}=e;if(!n)return d().highlight;const i=f(null!=r?r:(0,u.getGroupCellRemoveRoundBorders)(t));return o(d().highlight,d().shown,i)}const h={FontSizeMedium:(0,i.ensureDefined)(d()["font-size-medium"]),FontSizeLarge:(0,i.ensureDefined)(d()["font-size-large"])},g={passive:!1};function v(e,t){const{style:n,id:o,role:i,onFocus:u,onBlur:c,onMouseOver:d,onMouseOut:f,onMouseDown:h,onMouseUp:v,onKeyDown:y,onClick:b,tabIndex:M,startSlot:D,middleSlot:S,endSlot:k,onWheel:H,onWheelNoPassive:w=null}=e,{isGrouped:_,cellState:C,disablePositionAdjustment:E=!1}=(0,r.useContext)(l.ControlGroupContext),W=function(e,t=null,n){const o=(0,r.useRef)(null),i=(0,r.useRef)(null),a=(0,r.useCallback)((()=>{if(null===o.current||null===i.current)return;const[e,t,n]=i.current;null!==t&&o.current.addEventListener(e,t,n)}),[]),s=(0,r.useCallback)((()=>{if(null===o.current||null===i.current)return;const[e,t,n]=i.current;null!==t&&o.current.removeEventListener(e,t,n)}),[]),l=(0,r.useCallback)((e=>{s(),o.current=e,a()}),[]);return(0,r.useEffect)((()=>(i.current=[e,t,n],a(),s)),[e,t,n]),l}("wheel",w,g);return r.createElement("span",{style:n,id:o,role:i,className:m(e,_,C,E),tabIndex:M,ref:(0,a.useMergedRefs)([t,W]),onFocus:u,onBlur:c,onMouseOver:d,onMouseOut:f,onMouseDown:h,onMouseUp:v,onKeyDown:y,onClick:b,onWheel:H,...(0,s.filterDataProps)(e),...(0,s.filterAriaProps)(e)},D,S,k,r.createElement("span",{className:p(e,C)}))}v.displayName="ControlSkeleton";const y=r.forwardRef(v)},102691:(e,t,n)=>{"use strict";n.d(t,{BeforeSlot:()=>s,StartSlot:()=>l,MiddleSlot:()=>u,EndSlot:()=>c,AfterSlot:()=>d});var r=n(50959),o=n(497754),i=n(484684),a=n.n(i);function s(e){const{className:t,children:n}=e;return r.createElement("span",{className:o(a()["before-slot"],t)},n)}function l(e){const{className:t,interactive:n=!0,icon:i=!1,children:s}=e;return r.createElement("span",{className:o(a()["inner-slot"],n&&a().interactive,i&&a().icon,t)},s)}function u(e){const{className:t,children:n}=e;return r.createElement("span",{className:o(a()["inner-slot"],a()["inner-middle-slot"],t)},n)}function c(e){const{className:t,interactive:n=!0,icon:i=!1,children:s}=e;return r.createElement("span",{className:o(a()["inner-slot"],n&&a().interactive,i&&a().icon,t)},s)}function d(e){const{className:t,children:n}=e;return r.createElement("span",{className:o(a()["after-slot"],t)},n)}},654936:(e,t,n)=>{"use strict";n.d(t,{Input:()=>v,InputControl:()=>y});var r=n(50959),o=n(497754),i=n(800417),a=n(269842),s=n(1811),l=n(525388),u=n(21778),c=n(383836),d=n(603548),f=n(34735),m=n(102691),p=n(358089),h=n.n(p);function g(e){return!(0,i.isAriaAttribute)(e)&&!(0,i.isDataAttribute)(e)}function v(e){
const{id:t,title:n,role:a,tabIndex:s,placeholder:l,name:u,type:c,value:d,defaultValue:p,draggable:v,autoComplete:y,autoFocus:b,maxLength:M,min:D,max:S,step:k,pattern:H,inputMode:w,onSelect:_,onFocus:C,onBlur:E,onKeyDown:W,onKeyUp:x,onKeyPress:O,onChange:I,onDragStart:N,size:R="medium",className:T,inputClassName:z,disabled:q,readonly:P,containerTabIndex:j,startSlot:B,endSlot:L,reference:Y,containerReference:A,onContainerFocus:F,...$}=e,U=(0,i.filterProps)($,g),V={...(0,i.filterAriaProps)($),...(0,i.filterDataProps)($),id:t,title:n,role:a,tabIndex:s,placeholder:l,name:u,type:c,value:d,defaultValue:p,draggable:v,autoComplete:y,autoFocus:b,maxLength:M,min:D,max:S,step:k,pattern:H,inputMode:w,onSelect:_,onFocus:C,onBlur:E,onKeyDown:W,onKeyUp:x,onKeyPress:O,onChange:I,onDragStart:N};return r.createElement(f.ControlSkeleton,{...U,disabled:q,readonly:P,tabIndex:j,className:o(h().container,T),size:R,ref:A,onFocus:F,startSlot:B,middleSlot:r.createElement(m.MiddleSlot,null,r.createElement("input",{...V,className:o(h().input,z,B&&h()["with-start-slot"],L&&h()["with-end-slot"]),disabled:q,readOnly:P,ref:Y})),endSlot:L})}function y(e){e=(0,u.useControl)(e);const{disabled:t,autoSelectOnFocus:n,tabIndex:o=0,onFocus:i,onBlur:f,reference:m,containerReference:p=null}=e,h=(0,r.useRef)(null),g=(0,r.useRef)(null),[y,b]=(0,c.useFocus)(),M=t?void 0:y?-1:o,D=t?void 0:y?o:-1,{isMouseDown:S,handleMouseDown:k,handleMouseUp:H}=(0,d.useIsMouseDown)(),w=(0,a.createSafeMulticastEventHandler)(b.onFocus,(function(e){n&&!S.current&&(0,s.selectAllContent)(e.currentTarget)}),i),_=(0,a.createSafeMulticastEventHandler)(b.onBlur,f),C=(0,r.useCallback)((e=>{h.current=e,m&&("function"==typeof m&&m(e),"object"==typeof m&&(m.current=e))}),[h,m]);return r.createElement(v,{...e,isFocused:y,containerTabIndex:M,tabIndex:D,onContainerFocus:function(e){g.current===e.target&&null!==h.current&&h.current.focus()},onFocus:w,onBlur:_,reference:C,containerReference:(0,l.useMergedRefs)([g,p]),onMouseDown:k,onMouseUp:H})}},21778:(e,t,n)=>{"use strict";n.d(t,{useControl:()=>i});var r=n(269842),o=n(383836);function i(e){const{onFocus:t,onBlur:n,intent:i,highlight:a,disabled:s}=e,[l,u]=(0,o.useFocus)(void 0,s),c=(0,r.createSafeMulticastEventHandler)(s?void 0:u.onFocus,t),d=(0,r.createSafeMulticastEventHandler)(s?void 0:u.onBlur,n);return{...e,intent:i||(l?"primary":"default"),highlight:null!=a?a:l,onFocus:c,onBlur:d}}},383836:(e,t,n)=>{"use strict";n.d(t,{useFocus:()=>o});var r=n(50959);function o(e,t){const[n,o]=(0,r.useState)(!1);(0,r.useEffect)((()=>{t&&n&&o(!1)}),[t,n]);const i={onFocus:(0,r.useCallback)((function(t){void 0!==e&&e.current!==t.target||o(!0)}),[e]),onBlur:(0,r.useCallback)((function(t){void 0!==e&&e.current!==t.target||o(!1)}),[e])};return[n,i]}},603548:(e,t,n)=>{"use strict";n.d(t,{useIsMouseDown:()=>o});var r=n(50959);function o(){const e=(0,r.useRef)(!1),t=(0,r.useCallback)((()=>{e.current=!0}),[e]),n=(0,r.useCallback)((()=>{e.current=!1}),[e]);return{isMouseDown:e,handleMouseDown:t,handleMouseUp:n}}},525388:(e,t,n)=>{"use strict";n.d(t,{
useMergedRefs:()=>i});var r=n(50959),o=n(273388);function i(e){return(0,r.useCallback)((0,o.mergeRefs)(e),e)}},72571:(e,t,n)=>{"use strict";n.d(t,{Icon:()=>o});var r=n(50959);const o=r.forwardRef(((e,t)=>{const{icon:n="",...o}=e;return r.createElement("span",{...o,ref:t,dangerouslySetInnerHTML:{__html:n}})}))},800417:(e,t,n)=>{"use strict";function r(e){return i(e,a)}function o(e){return i(e,s)}function i(e,t){const n=Object.entries(e).filter(t),r={};for(const[e,t]of n)r[e]=t;return r}function a(e){const[t,n]=e;return 0===t.indexOf("data-")&&"string"==typeof n}function s(e){return 0===e[0].indexOf("aria-")}n.d(t,{filterDataProps:()=>r,filterAriaProps:()=>o,filterProps:()=>i,isDataAttribute:()=>a,isAriaAttribute:()=>s})},1811:(e,t,n)=>{"use strict";function r(e){null!==e&&e.setSelectionRange(0,e.value.length)}n.d(t,{selectAllContent:()=>r})},273388:(e,t,n)=>{"use strict";function r(e){return t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}function o(e){return r([e])}n.d(t,{mergeRefs:()=>r,isomorphicRef:()=>o})},269842:(e,t,n)=>{"use strict";function r(...e){return t=>{for(const n of e)void 0!==n&&n(t)}}n.d(t,{createSafeMulticastEventHandler:()=>r})},621709:(e,t,n)=>{"use strict";function r(e,t,n,r,o){function i(o){if(e>o.timeStamp)return;const i=o.target;void 0!==n&&null!==t&&null!==i&&i.ownerDocument===r&&(t.contains(i)||n(o))}return o.click&&r.addEventListener("click",i,!1),o.mouseDown&&r.addEventListener("mousedown",i,!1),o.touchEnd&&r.addEventListener("touchend",i,!1),o.touchStart&&r.addEventListener("touchstart",i,!1),()=>{r.removeEventListener("click",i,!1),r.removeEventListener("mousedown",i,!1),r.removeEventListener("touchend",i,!1),r.removeEventListener("touchstart",i,!1)}}n.d(t,{addOutsideEventListener:()=>r})},285089:(e,t,n)=>{"use strict";n.d(t,{setFixedBodyState:()=>l});var r=n(735922);const o=()=>!window.matchMedia("screen and (min-width: 768px)").matches,i=()=>!window.matchMedia("screen and (min-width: 1280px)").matches;let a=0,s=!1;function l(e){const{body:t}=document,n=t.querySelector(".widgetbar-wrap");if(e&&1==++a){const e=(0,r.getCSSProperty)(t,"overflow"),o=(0,r.getCSSPropertyNumericValue)(t,"padding-right");"hidden"!==e.toLowerCase()&&t.scrollHeight>t.offsetHeight&&((0,r.setStyle)(n,"right",`${(0,r.getScrollbarWidth)()}px`),t.style.paddingRight=`${o+(0,r.getScrollbarWidth)()}px`,s=!0),t.classList.add("i-no-scroll")}else if(!e&&a>0&&0==--a&&(t.classList.remove("i-no-scroll"),s)){(0,r.setStyle)(n,"right","0px");let e=0;e=n?(l=(0,r.getContentWidth)(n),o()?0:i()?46:Math.min(Math.max(l,46),450)):0,t.scrollHeight<=t.clientHeight&&(e-=(0,r.getScrollbarWidth)()),t.style.paddingRight=(e<0?0:e)+"px",s=!1}var l}},63192:(e,t,n)=>{"use strict";n.d(t,{DialogsOpenerManager:()=>r,dialogsOpenerManager:()=>o});class r{constructor(){this._storage=new Map}setAsOpened(e,t){this._storage.set(e,t)}setAsClosed(e){this._storage.delete(e)}isOpened(e){return this._storage.has(e)}getDialogPayload(e){return this._storage.get(e)}}const o=new r},961174:(e,t,n)=>{"use strict";n.d(t,{useOutsideEvent:()=>i
});var r=n(50959),o=n(621709);function i(e){const{click:t,mouseDown:n,touchEnd:i,touchStart:a,handler:s,reference:l,ownerDocument:u=document}=e,c=(0,r.useRef)(null),d=(0,r.useRef)(new CustomEvent("timestamp").timeStamp);return(0,r.useLayoutEffect)((()=>{const e={click:t,mouseDown:n,touchEnd:i,touchStart:a},r=l?l.current:c.current;return(0,o.addOutsideEventListener)(d.current,r,s,u,e)}),[t,n,i,a,s]),l||c}},763212:(e,t,n)=>{"use strict";n.d(t,{OverlapManager:()=>i,getRootOverlapManager:()=>s});var r=n(650151);class o{constructor(){this._storage=[]}add(e){this._storage.push(e)}remove(e){this._storage=this._storage.filter((t=>e!==t))}has(e){return this._storage.includes(e)}getItems(){return this._storage}}class i{constructor(e=document){this._storage=new o,this._windows=new Map,this._index=0,this._document=e,this._container=e.createDocumentFragment()}setContainer(e){const t=this._container,n=null===e?this._document.createDocumentFragment():e;!function(e,t){Array.from(e.childNodes).forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&t.appendChild(e)}))}(t,n),this._container=n}registerWindow(e){this._storage.has(e)||this._storage.add(e)}ensureWindow(e,t={position:"fixed",direction:"normal"}){const n=this._windows.get(e);if(void 0!==n)return n;this.registerWindow(e);const r=this._document.createElement("div");if(r.style.position=t.position,r.style.zIndex=this._index.toString(),r.dataset.id=e,void 0!==t.index){const e=this._container.childNodes.length;if(t.index>=e)this._container.appendChild(r);else if(t.index<=0)this._container.insertBefore(r,this._container.firstChild);else{const e=this._container.childNodes[t.index];this._container.insertBefore(r,e)}}else"reverse"===t.direction?this._container.insertBefore(r,this._container.firstChild):this._container.appendChild(r);return this._windows.set(e,r),++this._index,r}unregisterWindow(e){this._storage.remove(e);const t=this._windows.get(e);void 0!==t&&(null!==t.parentElement&&t.parentElement.removeChild(t),this._windows.delete(e))}getZindex(e){const t=this.ensureWindow(e);return parseInt(t.style.zIndex||"0")}moveToTop(e){if(this.getZindex(e)!==this._index){this.ensureWindow(e).style.zIndex=(++this._index).toString()}}removeWindow(e){this.unregisterWindow(e)}}const a=new WeakMap;function s(e=document){const t=e.getElementById("overlap-manager-root");if(null!==t)return(0,r.ensureDefined)(a.get(t));{const t=new i(e),n=function(e){const t=e.createElement("div");return t.style.position="absolute",t.style.zIndex=150..toString(),t.style.top="0px",t.style.left="0px",t.id="overlap-manager-root",t}(e);return a.set(n,t),t.setContainer(n),e.body.appendChild(n),t}}},8361:(e,t,n)=>{"use strict";n.d(t,{Portal:()=>l,PortalContext:()=>u});var r=n(50959),o=n(500962),i=n(220863),a=n(763212),s=n(753327);class l extends r.PureComponent{constructor(){super(...arguments),this._uuid=(0,i.guid)()}componentWillUnmount(){this._manager().removeWindow(this._uuid)}render(){const e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return e.style.top=this.props.top||"",
e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"",o.createPortal(r.createElement(u.Provider,{value:this},this.props.children),e)}moveToTop(){this._manager().moveToTop(this._uuid)}_manager(){return null===this.context?(0,a.getRootOverlapManager)():this.context}}l.contextType=s.SlotContext;const u=r.createContext(null)},753327:(e,t,n)=>{"use strict";n.d(t,{Slot:()=>o,SlotContext:()=>i});var r=n(50959);class o extends r.Component{shouldComponentUpdate(){return!1}render(){return r.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})}}const i=r.createContext(null)},695257:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),m=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var M=b.prototype=new y;M.constructor=b,h(M,v.prototype),M.isPureReactComponent=!0;var D=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},H={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,o)&&!H.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function W(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===i?"."+E(l,0):i,D(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),W(a,t,o,"",(function(e){return e
}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",D(e))for(var u=0;u<e.length;u++){var c=i+E(s=e[u],u);l+=W(s,t,o,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=W(s=s.value,t,o,c=i+E(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function x(e,t,n){if(null==e)return e;var r=[],o=0;return W(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},N={transition:null},R={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:N,ReactCurrentOwner:k};t.Children={map:x,forEach:function(e,t,n){x(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)S.call(t,u)&&!H.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=function(){
throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},50959:(e,t,n)=>{"use strict";e.exports=n(695257)},878618:e=>{e.exports={dialog:"dialog-PgBQq9Tl",dialogInner:"dialogInner-PgBQq9Tl",titleWrapper:"titleWrapper-PgBQq9Tl",title:"title-PgBQq9Tl",infoHint:"infoHint-PgBQq9Tl",form:"form-PgBQq9Tl",inputWrapper:"inputWrapper-PgBQq9Tl",input:"input-PgBQq9Tl",hint:"hint-PgBQq9Tl",error:"error-PgBQq9Tl"}},664856:(e,t,n)=>{"use strict";n.r(t),n.d(t,{showChangeIntervalDialog:()=>S});var r=n(50959),o=n(500962),i=n(497754),a=n.n(i),s=n(509806),l=n(654936),u=n(34735),c=n(688401),d=n(40766),f=n(72571),m=n(785508);const p=s.t(null,void 0,n(252143)),h=s.t(null,void 0,n(135668));function g(e){const{className:t,isSecondsEnabled:n}=e;return r.createElement(f.Icon,{icon:m,className:a()("apply-common-tooltip",t),title:n?h:p})}var v=n(382213),y=n(638273);var b=n(878618);function M(e){const{initVal:t,selectOnInit:o,onClose:i}=e,f=(0,r.useRef)(null),[m,p]=(0,r.useState)(t.toUpperCase()),h=(0,r.useMemo)((()=>(0,v.parseIntervalValue)(m)),[m]),M=function(e,t){return(0,r.useMemo)((()=>{if(t.error||!(0,v.intervalIsSupported)(e))return!1;const n=y.Interval.normalize(e);return null!==n&&(0,v.isResolutionMultiplierValid)(n)}),[e,t])}(m,h),D=(0,r.useMemo)((()=>{if(!M)return null;const e=h.qty+(h.unit||"");return(0,v.getTranslatedResolutionModel)(e).hint}),[M,h]);return(0,r.useLayoutEffect)((()=>{var e,t;o?null===(e=f.current)||void 0===e||e.select():null===(t=f.current)||void 0===t||t.focus()}),[o]),r.createElement(d.PopupDialog,{className:b.dialog,"data-dialog-name":"change-interval-dialog",isOpened:!0,onClickOutside:i,onFocus:function(){var e;null===(e=f.current)||void 0===e||e.focus()},onKeyDown:function(e){27===e.keyCode&&(null==i||i())}},r.createElement("div",{className:b.dialogInner},r.createElement("div",{className:b.titleWrapper},r.createElement("div",{className:b.title},s.t(null,void 0,n(699374))),r.createElement(g,{className:b.infoHint,isSecondsEnabled:(0,v.isSecondsEnabled)()})),r.createElement("form",{className:b.form,onSubmit:function(e){e.preventDefault()
;const t=c.linking.interval.value(),n=y.Interval.normalize(m);n&&t!==n&&M&&(r=n,(0,v.setLastUsedResolution)(r),c.linking.interval.setValue(r));var r;null==i||i()}},r.createElement(l.InputControl,{className:a()(b.inputWrapper,u.InputClasses.FontSizeLarge),inputClassName:b.input,type:"text",size:"large",reference:f,value:m,maxLength:8,intent:M?void 0:"danger",onChange:function(e){const{value:t}=e.target;p(t.toUpperCase())}})),M?r.createElement("div",{className:b.hint},D):r.createElement("div",{className:a()(b.hint,b.error)},s.t(null,void 0,n(972572)))))}var D=n(63192);function S(e){if(D.dialogsOpenerManager.isOpened("ChangeIntervalDialog")||D.dialogsOpenerManager.isOpened("SymbolSearch"))return;const t=document.createElement("div"),{initVal:n,selectOnInit:i,onClose:a}=e,s=r.createElement(M,{initVal:n,selectOnInit:i,onClose:function(){o.unmountComponentAtNode(t),D.dialogsOpenerManager.setAsClosed("ChangeIntervalDialog"),null==a||a()}});o.render(s,t),D.dialogsOpenerManager.setAsOpened("ChangeIntervalDialog")}},785508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>'},972572:e=>{e.exports={ar:["لا يمكن تطبيقه"],ca_ES:["No aplicable"],cs:["Nelze použít"],de:["Nicht anwendbar"],el:["Μη εφαρμόσιμο"],en:"Not applicable",es:["No aplicable"],fa:["غیر قابل قبول"],fr:["Non applicable"],he_IL:["בלתי קביל"],hu_HU:["Nem alkalmazható"],id_ID:["Tidak dapat diterapkan"],it:["Non applicabile"],ja:["適用できません"],ko:["쓸 수 없음"],ms_MY:["Tidak berkenaan"],nl_NL:["Niet van toepassingen"],pl:["Nie dotyczy"],pt:["Não aplicável"],ro:"Not applicable",ru:["Не поддерживается"],sv:["Ej applicerbar"],th:["ไม่สามารถใช้ได้"],tr:["Uygun Değil"],vi:["Không áp dụng được"],zh:["不适用"],zh_TW:["不適用"]}},252143:e=>{e.exports={ar:["اكتب رقم الفاصل الزمني للرسم البياني لدقيقة (مثلا أكتب رقم 5 إذا كان الرسم البياني لخمس دقائق). أو أكتب رقم وإضافة حرف بعد ك حرف الـ H (للساعة)، و حرف الـ D (لليوم)، و حرف الـW (للأسبوع)، و حرف الـ M (للشهر) مثلاً (D أو 2H)."],ca_ES:["Escriviu el número d'interval per a gràfics de minuts (és a dir, 5 si serà un gràfic de cinc minuts). O número més lletra per a H (per hora), D (diari), S (setmanal), M (mensual) intervals (es a dir, D o 2H)."],cs:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",de:["Geben Sie die Intervall-Nummer für Minuten-Charts ein (z.B. 5, wenn es sich um einen Fünf-Minuten-Chart handelt). Oder Zahl plus Buchstabe für H (stündlich), D (täglich), W (wöchentlich), M (monatlich) Intervalle (d.h. D oder 2H)"],el:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
en:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",es:["Escriba el número de intervalo para gráficos de minutos (es decir, 5 si va a ser un gráfico de cinco minutos). O número más letra para H (por hora), D (diario), S (semanal), M (mensual) intervalos (es decir, D o 2H)"],fa:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",fr:["Tapez le numéro d'intervalle pour les diagrammes de minutes (c'est-à-dire 5 si le graphique doit être de cinq minutes). Ou un nombre plus une lettre pour les intervalles H (horaires), D (journaliers), W (hebdomadaires), M (mensuels) (c'est-à-dire D ou 2H)"],he_IL:["הקלד את מספר האינטרוול  לגרף דקה (כלומר, 5 במידה וזה גרף חמש דקות). או מספר פלוס אות H (לשעה), D (יום), W (שבוע) M (חודש) אינטרוולים. (כלומר D ליום או 2H ל2שעות)"],hu_HU:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",id_ID:["Ketik angka interval untuk chart menit (cth: 5 untuk chart lima menit). Atau tanda plus untuk interval H (Jam), D (Harian), W (Mingguan), M (Bulanan) (cth: D atau 2H)."],it:["Scrivi il numero di minuti del timeframe desiderato (ad esempio, scrivi 5 se vuoi il grafico a 5 minuti). Altrimenti aggiungi la lettera per gli altri timeframe: 'H' per l'orario, 'D' per il giornaliero, 'W' per il settimanale, 'M' per il mensile (ad esempio, puoi scrivere 'D' o '2H')"],ja:["分足チャートの分数を入力します（5分足チャートの場合であれば5）。他の時間足の場合には、時間の数値に続けて文字（H (時間)、D (日)、W (週)、M (月)）を入力して下さい（例．D や 2H）。"],ko:["분 차트에 대한 인터벌 숫자를 타이핑하십시오 (보기: 5분 차트는 5). 또는 숫자와 함께 H (시간), D(날), W(주), M(달) 인터벌값을 넣으십시오 (보기: D 또는 2H)"],ms_MY:["Masukkan angka selang masa untuk carta minit (contohnya seperti 5 jika anda perlukan carta 5 minit). Atau nombor dengan abjad untuk J (Jam), H (Harian), M (Mingguan), B (Bulanan) (contoh H atau 2j)"],nl_NL:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",pl:["Wprowadź wybraną wartość liczbową interwału dla wykresów minutowych (np. wartość 5 dla wykresu o interwale 5 minutowym) bądź wartość liczbową i/lub jedną z liter: H (interwał godzinny), D (dzienny), W (tygodniowy), M (miesięczny), czyli np. D, 2H, itd."],pt:["Digite o número de intervalo para gráficos de minutos (ou seja, cinco para um gráfico de cinco minutos). Ou número mais a letra para os intervalos H (Por hora), D (Diário), S (Semanal), M (Mensal) (ou seja, D ou 2H)"],ro:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
ru:["Введите нужное число для минутных графиков (например, 5 если нужен 5-минутный график), или число и букву для соответствующих интервалов: H (часы), D (дни), W (недели), M (месяцы), например, D или 2H"],sv:["Skriv intervallnumret för minutdiagram (dvs 5 om det ska vara ett femminuters diagram). Eller nummer plus bokstav för H (Timmars), D (Dag), W (Vecko), M (Månads) intervaller (dvs D eller 2H)"],th:["พิมพ์ช่วงเวลาในหน่วยของชาร์ตนาที (ตัวอย่างเช่น พิมพ์ 5 ก็จะแสดงชาร์ตราย 5 นาที) หรือ ตัวเลขตามด้วยอักษร H สำหรับช่วงเวลา (รายชั่วโมง) D (รายวัน) W (รายสัปดาห์) M (รายเดือน) (เช่น D หรือ 2H)"],tr:["Dakika grafikleri için aralık sayısını girin (örn beş dakikalık grafik için 5). Veya sayı artı; saat için H harfi (saatlik), D (günlük), W(haftalık), M (aylık) aralıklarını kullanın(örn D veya 2H gibi)"],vi:["Nhập số khoảng thời gian cho biểu đồ phút (ví dụ 5 nếu đó sẽ là biểu đồ năm phút). Hoặc số cộng cho chữ H (Hàng giờ), D (Hàng ngày), W (Hàng tuần), M (Hàng tháng) (ví dụ D hoặc 2H)"],zh:["在分钟图表上输入时间周期数值（即5代表5分钟的图表）。或H（小时）、D（日）、W（周）、M（月）时间周期（即D或2H）的数字加字母。"],zh_TW:["鍵入分鐘圖表的間隔時間 (如果是五分鐘圖表，則為5)。或數字加字母 H (小時)、D (日)、W (週)、M (月) 的間隔時間 (即D或2H)"]}},135668:e=>{e.exports={ar:['اكتب رقم الإطار الزمني للرسوم البيانية بالدقائق (مثلاً: 5 إذا كان إطار الرسم البياني هو 5 دقائق). أو رقم مع حروف للأطر الزمنية الأخرى: حرف "ث" للرسم البياني بإطار 1 ثانية (15 "ث" للرسم البياني 15 ثانية، إلخ)، و"س" (ساعة)، و"ي" (يوم)، و"أ" (أسبوعي)، و"ش" (شهر) (مثلاً: "ي" أو "2س")'],ca_ES:["Introduïu el número de l'interval per als gràfics de minuts (per exemple, 5 si és un gràfic de cinc minuts). També podeu introduir un número més una lletra per aconseguir diferents intervals: S per a un gràfic d'un segon (15S correspon a un gràfic de 15 segons); H (hores), W (setmanes) o M (mesos). A continuació teniu un exemple: 1D o 2H."],cs:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",de:["Geben Sie die Intervallnummer für Minuten-Charts ein (d.h. 5, wenn es sich um ein Fünf-Minuten-Chart handeln soll). Oder Nummer und Buchstabe für andere Intervalle: S für 1-Sekunden-Chart (15S für 15-Sekunden-Chart, etc.), H (stündliche), D (tägliche), W (wöchentliche), M (monatliche) Intervalle (z.B. D oder 2H)"],el:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",en:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
es:["Introduzca el número del intervalo para los gráficos de minutos (por ejemplo, 5 si va a ser un gráfico de cinco minutos). También puede introducir un número, más una letra, para conseguir diferentes intervalos: S para un gráfico de 1 segundo (15S corresponde a un gráfico de 15 segundos); H (horas), W (semanas) o M (meses). A continuación se muestra un ejemplo: 1D o 2H."],fa:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",fr:["Tapez le numéro d'intervalle pour les graphiques en minutes (c'est-à-dire 5 s'il s'agit d'un graphique de cinq minutes). Ou un chiffre plus une lettre pour les autres intervalles: S pour 1 seconde (15S pour 15 secondes, etc.), H (horaire), D (quotidien), W (hebdomadaire), M (mensuel) (c.-à-d. D ou 2H)"],he_IL:["הקלד את מספר האינטרוול עבור גרפי דקות (כלומר 5 אם זה יהיה גרף של חמש דקות). או מספר אותיות במרווחי זמן אחרים: S בגרף שניה (15S לגרף 15 שניות וכו'), H (שעה), D (יומי), W (שבועי), M (חודשי) באינטרוולים (כלומר D או 2H)"],hu_HU:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",id_ID:["Ketik angka interval untuk chart menit (cth: 5 untuk chart lima menit). Atau angka dengan huruf untuk interval lainnya: S untuk chart 1 detik (15S untuk chart 15 detik, dsb), H (Jam), D (Harian), W (Mingguan), M (Bulanan) (cth: D atau 2H)."],it:["Scrivi il numero di minuti del timeframe desiderato (ad esempio, scrivi 5 se vuoi il grafico a 5 minuti). Altrimenti aggiungi la lettera per gli altri timeframe: 'S' per i secondi, 'H' per l'orario, 'D' per il giornaliero, 'W' per il settimanale, 'M' per il mensile (ad esempio, puoi scrivere '15S', '1D' o '2H')"],ja:["分足チャートの分数を入力します（例．5分足チャートの場合であれば5）。他の時間足の場合には、時間の数値に続けて時間足を表す文字を入力して下さい: 秒足チャート (15Sは15秒チャート), H (時間), D (日), W (週), M (月)、（例．D や 2H）。"],ko:["분 차트에 대한 인터벌 숫자를 타이핑하십시오 (보기: 5분 차트는 5). 또는 숫자와 함께 S (1초, 15초는 15S 등),  H (시간), D(날), W(주), M(달) 인터벌값을 넣으십시오 (보기: D 또는 2H)"],ms_MY:["Taipkan nombor selang masa untuk carta minit (i.e. 5 jika ia merupakan carta lima minit). Atau kombinasi nombor dengan huruf bagi selang lain: selang masa s untuk carta 1 saat (15s untuk carta 15 saat, dll.), j (Jam), H (Harian), M (Mingguan), B (Bulanan) (contohnya H atau 2j)"],nl_NL:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
pl:["Wpisz numer interwału dla wykresów minutowych (np. 5, jeśli ma to być wykres pięciominutowy). Lub numer plus litera dla innych interwałów: S dla wykresu jednosekundowego (15S dla wykresu 15-sekundowego itd.) H (Godzinowy), D (dzienny), W (tygodniowy), M (miesięczny) (np. D lub 2H)"],pt:["Digite o número do intervalo para gráficos de minutos (ou seja, 5 se for um gráfico de cinco minutos). Ou número mais letra para outros intervalos: S para 1 segundo (15S para 15 segundos, etc.), H (Para Hora), D (Diário), W (Semanal), M (Mensal) intervalos (ou seja, D ou 2H)"],ro:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",ru:["Введите нужное число для минутных графиков (например, 5, если нужен 5-минутный график). Или число и букву для других интервалов: S для 1-секундного графика (15S для 15-секундного и т. д.), H (часы), D (дни), W (недели), M (месяцы). Например, D или 2H"],sv:["Ange intervallnumret för minutdiagram (t.ex. 5 om det är ett femminutersdiagram). Eller så anger du nummer och bokstav för andra intervall: S för 1-sekundsdiagram (15S för 15-sekundersdiagram osv.), H (varje timme), D (varje dag), W (varje vecka), M (varje månad) intervaller (t.ex. D eller 2H)"],th:["พิมพ์ตัวเลขช่วงเวลาสำหรับชาร์ตรายนาที (ตัวอย่าง 5 ถ้าต้องการชาร์ตรายห้านาที) หรือตัวเลขบวกตัวอักษรสำหรับช่วงเวลาอื่นๆ: S สำหรับชาร์ตราย 1 วินาที (15S สำหรับชาร์ตราย 15 วินาที เป็นต้น) H (รายชั่วโมง) D (รายวัน) W (รายสัปดาห์) M (รายเดือน) (ตัวอย่าง D หรือ 2H)"],tr:["Dakika grafiği için aralık numarasını yazın (yani, beş dakikalık bir grafik olacaksa 5). Veya diğer aralıklar için sayı ve sayının yanında harf: 1 saniye grafik için s (15 saniye grafik için 15s, vb.), S (Saatlik), G (Günlük), H (Haftalık), A (Aylık) aralıkları (yani G veya 2S)"],vi:["Nhập số khoảng cho các biểu đồ phút (tức là 5 nếu nó sẽ là biểu đồ năm phút). Hoặc số cộng chữ cái cho các khoảng thời gian khác: S cho biểu đồ 1 giây (15S cho biểu đồ 15 giây, v.v.), H (Hàng giờ), D (Hàng ngày), W (Hàng tuần), M (Hàng tháng) (tức là D hoặc 2H)"],zh:["在分钟图表上输入时间周期数值（即5代表5分钟的图表）。或H（小时）、D（日）、W（周）、M（月）时间周期（即D或2H）的数字加字母。"],zh_TW:["鍵入分鐘圖表的間隔時間(如果是五分鐘圖表，則輸入5)。或其他間隔的數字加字母：S為1秒圖表(15S為15秒圖表等)、H(小時)、D(日)、W(週)、M(月)間隔時間(即D或2H)"]}}}]);
(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[1584],{259142:function(e,t){var o,n,r;n=[t],o=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var o=!1;if("undefined"!=typeof window){var n={get passive(){o=!0}};window.addEventListener("testPassive",null,n),window.removeEventListener("testPassive",null,n)}var r="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],s=!1,l=-1,a=void 0,c=void 0,u=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},d=function(e){var t=e||window.event;return!!u(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},h=function(){setTimeout((function(){void 0!==c&&(document.body.style.paddingRight=c,c=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)}))};e.disableBodyScroll=function(e,n){if(r){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!i.some((function(t){return t.targetElement===e}))){var h={targetElement:e,options:n||{}};i=[].concat(t(i),[h]),e.ontouchstart=function(e){1===e.targetTouches.length&&(l=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var o,n,r,i;1===t.targetTouches.length&&(n=e,i=(o=t).targetTouches[0].clientY-l,!u(o.target)&&(n&&0===n.scrollTop&&0<i||(r=n)&&r.scrollHeight-r.scrollTop<=r.clientHeight&&i<0?d(o):o.stopPropagation()))},s||(document.addEventListener("touchmove",d,o?{passive:!1}:void 0),s=!0)}}else{p=n,setTimeout((function(){if(void 0===c){var e=!!p&&!0===p.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(c=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}));var m={targetElement:e,options:n||{}};i=[].concat(t(i),[m])}var p},e.clearAllBodyScrollLocks=function(){r?(i.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),s&&(document.removeEventListener("touchmove",d,o?{passive:!1}:void 0),s=!1),i=[],l=-1):(h(),i=[])},e.enableBodyScroll=function(e){if(r){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,i=i.filter((function(t){return t.targetElement!==e})),s&&0===i.length&&(document.removeEventListener("touchmove",d,o?{passive:!1}:void 0),s=!1)}else 1===i.length&&i[0].targetElement===e?(h(),i=[]):i=i.filter((function(t){return t.targetElement!==e}))}},void 0===(r="function"==typeof o?o.apply(t,n):o)||(e.exports=r)},945966:e=>{e.exports={"default-drawer-min-top-distance":"100px",wrap:"wrap-yBUNQyVA",positionBottom:"positionBottom-yBUNQyVA",backdrop:"backdrop-yBUNQyVA",drawer:"drawer-yBUNQyVA",
positionLeft:"positionLeft-yBUNQyVA"}},409790:e=>{e.exports={menuWrap:"menuWrap-biWYdsXC",isMeasuring:"isMeasuring-biWYdsXC",scrollWrap:"scrollWrap-biWYdsXC",momentumBased:"momentumBased-biWYdsXC",menuBox:"menuBox-biWYdsXC",isHidden:"isHidden-biWYdsXC"}},163694:(e,t,o)=>{"use strict";o.d(t,{DrawerManager:()=>i,DrawerContext:()=>s});var n=o(50959),r=o(285089);class i extends n.PureComponent{constructor(e){super(e),this._isBodyFixed=!1,this._addDrawer=e=>{this.setState((t=>({stack:[...t.stack,e]})))},this._removeDrawer=e=>{this.setState((t=>({stack:t.stack.filter((t=>t!==e))})))},this.state={stack:[]}}componentDidUpdate(e,t){!t.stack.length&&this.state.stack.length&&((0,r.setFixedBodyState)(!0),this._isBodyFixed=!0),t.stack.length&&!this.state.stack.length&&this._isBodyFixed&&((0,r.setFixedBodyState)(!1),this._isBodyFixed=!1)}componentWillUnmount(){this.state.stack.length&&this._isBodyFixed&&(0,r.setFixedBodyState)(!1)}render(){return n.createElement(s.Provider,{value:{addDrawer:this._addDrawer,removeDrawer:this._removeDrawer,currentDrawer:this.state.stack.length?this.state.stack[this.state.stack.length-1]:null}},this.props.children)}}const s=n.createContext(null)},759339:(e,t,o)=>{"use strict";o.d(t,{Drawer:()=>h});var n=o(50959),r=o(650151),i=o(497754),s=o(220863),l=o(8361),a=o(163694),c=o(28466),u=o(742554),d=o(945966);function h(e){const{position:t="Bottom",onClose:o,children:h,className:m,theme:p=d}=e,v=(0,r.ensureNotNull)((0,n.useContext)(a.DrawerContext)),[f]=(0,n.useState)((()=>(0,s.randomHash)())),_=(0,n.useRef)(null),g=(0,n.useContext)(c.CloseDelegateContext);return(0,n.useLayoutEffect)((()=>((0,r.ensureNotNull)(_.current).focus({preventScroll:!0}),g.subscribe(v,o),v.addDrawer(f),()=>{v.removeDrawer(f),g.unsubscribe(v,o)})),[]),n.createElement(l.Portal,null,n.createElement("div",{className:i(d.wrap,d[`position${t}`])},f===v.currentDrawer&&n.createElement("div",{className:d.backdrop,onClick:o}),n.createElement(u.TouchScrollContainer,{className:i(d.drawer,p.drawer,d[`position${t}`],m),tabIndex:-1,ref:_,"data-name":e["data-name"]},h)))}},230553:(e,t,o)=>{"use strict";o.d(t,{MenuContext:()=>n});const n=o(50959).createContext(null)},510618:(e,t,o)=>{"use strict";o.d(t,{DEFAULT_MENU_THEME:()=>f,Menu:()=>_});var n=o(50959),r=o(497754),i=o.n(r),s=o(650151),l=o(218954),a=o(260845),c=o(753327),u=o(370981),d=o(763212),h=o(411589),m=o(694488),p=o(230553),v=o(409790);const f=v;class _ extends n.PureComponent{constructor(e){super(e),this._containerRef=null,this._scrollWrapRef=null,this._raf=null,this._scrollRaf=null,this._scrollTimeout=void 0,this._manager=new d.OverlapManager,this._hotkeys=null,this._scroll=0,this._handleContainerRef=e=>{this._containerRef=e,this.props.reference&&("function"==typeof this.props.reference&&this.props.reference(e),"object"==typeof this.props.reference&&(this.props.reference.current=e))},this._handleScrollWrapRef=e=>{this._scrollWrapRef=e,"function"==typeof this.props.scrollWrapReference&&this.props.scrollWrapReference(e),
"object"==typeof this.props.scrollWrapReference&&(this.props.scrollWrapReference.current=e)},this._handleMeasure=({callback:e,forceRecalcPosition:t}={})=>{var o,n,r,i,a,c,u,d,h,m,p,v;if(this.state.isMeasureValid&&!t)return;const{position:f}=this.props,_=(0,s.ensureNotNull)(this._containerRef);let g=_.getBoundingClientRect();const y=document.documentElement.clientHeight,w=document.documentElement.clientWidth,b=null!==(o=this.props.closeOnScrollOutsideOffset)&&void 0!==o?o:0;let S=y-0-b;const C=g.height>S;if(C){(0,s.ensureNotNull)(this._scrollWrapRef).style.overflowY="scroll",g=_.getBoundingClientRect()}const{width:x,height:E}=g,k="function"==typeof f?f(x,E,y):f,M=null!==(r=null===(n=null==k?void 0:k.indentFromWindow)||void 0===n?void 0:n.left)&&void 0!==r?r:0,R=w-(null!==(i=k.overrideWidth)&&void 0!==i?i:x)-(null!==(c=null===(a=null==k?void 0:k.indentFromWindow)||void 0===a?void 0:a.right)&&void 0!==c?c:0),N=(0,l.clamp)(k.x,M,Math.max(M,R)),W=(null!==(d=null===(u=null==k?void 0:k.indentFromWindow)||void 0===u?void 0:u.top)&&void 0!==d?d:0)+b,B=y-(null!==(h=k.overrideHeight)&&void 0!==h?h:E)-(null!==(p=null===(m=null==k?void 0:k.indentFromWindow)||void 0===m?void 0:m.bottom)&&void 0!==p?p:0);let T=(0,l.clamp)(k.y,W,Math.max(W,B));if(k.forbidCorrectYCoord&&T<k.y&&(S-=k.y-T,T=k.y),t&&void 0!==this.props.closeOnScrollOutsideOffset&&k.y<=this.props.closeOnScrollOutsideOffset)return void this._handleGlobalClose(!0);const D=null!==(v=k.overrideHeight)&&void 0!==v?v:C?S:void 0;this.setState({appearingMenuHeight:t?this.state.appearingMenuHeight:D,appearingMenuWidth:t?this.state.appearingMenuWidth:k.overrideWidth,appearingPosition:{x:N,y:T},isMeasureValid:!0},(()=>{this._restoreScrollPosition(),e&&e()}))},this._restoreScrollPosition=()=>{const e=document.activeElement,t=(0,s.ensureNotNull)(this._containerRef);if(null!==e&&t.contains(e))try{e.scrollIntoView()}catch(e){}else(0,s.ensureNotNull)(this._scrollWrapRef).scrollTop=this._scroll},this._resizeForced=()=>{this.setState({appearingMenuHeight:void 0,appearingMenuWidth:void 0,appearingPosition:void 0,isMeasureValid:void 0})},this._resize=()=>{null===this._raf&&(this._raf=requestAnimationFrame((()=>{this.setState({appearingMenuHeight:void 0,appearingMenuWidth:void 0,appearingPosition:void 0,isMeasureValid:void 0}),this._raf=null})))},this._handleGlobalClose=e=>{this.props.onClose(e)},this._handleSlot=e=>{this._manager.setContainer(e)},this._handleScroll=()=>{this._scroll=(0,s.ensureNotNull)(this._scrollWrapRef).scrollTop},this._handleScrollOutsideEnd=()=>{clearTimeout(this._scrollTimeout),this._scrollTimeout=setTimeout((()=>{this._handleMeasure({forceRecalcPosition:!0})}),80)},this._handleScrollOutside=e=>{e.target!==this._scrollWrapRef&&(this._handleScrollOutsideEnd(),null===this._scrollRaf&&(this._scrollRaf=requestAnimationFrame((()=>{this._handleMeasure({forceRecalcPosition:!0}),this._scrollRaf=null}))))},this.state={}}componentDidMount(){this._handleMeasure({callback:this.props.onOpen});const{customCloseDelegate:e=u.globalCloseDelegate}=this.props
;e.subscribe(this,this._handleGlobalClose),window.addEventListener("resize",this._resize);const t=null!==this.context;this._hotkeys||t||(this._hotkeys=h.createGroup({desc:"Popup menu"}),this._hotkeys.add({desc:"Close",hotkey:27,handler:()=>{this.props.onKeyboardClose&&this.props.onKeyboardClose(),this._handleGlobalClose()}})),this.props.repositionOnScroll&&window.addEventListener("scroll",this._handleScrollOutside,{capture:!0})}componentDidUpdate(){this._handleMeasure()}componentWillUnmount(){const{customCloseDelegate:e=u.globalCloseDelegate}=this.props;e.unsubscribe(this,this._handleGlobalClose),window.removeEventListener("resize",this._resize),window.removeEventListener("scroll",this._handleScrollOutside,{capture:!0}),this._hotkeys&&(this._hotkeys.destroy(),this._hotkeys=null),null!==this._raf&&(cancelAnimationFrame(this._raf),this._raf=null),null!==this._scrollRaf&&(cancelAnimationFrame(this._scrollRaf),this._scrollRaf=null),this._scrollTimeout&&clearTimeout(this._scrollTimeout)}render(){const{id:e,role:t,"aria-label":o,"aria-labelledby":r,"aria-activedescendant":s,"aria-hidden":l,children:u,minWidth:d,theme:h=v,className:f,maxHeight:_,onMouseOver:y,onMouseOut:w,onKeyDown:b,onFocus:S,onBlur:C}=this.props,{appearingMenuHeight:x,appearingMenuWidth:E,appearingPosition:k,isMeasureValid:M}=this.state;return n.createElement(p.MenuContext.Provider,{value:this},n.createElement(m.SubmenuHandler,null,n.createElement(c.SlotContext.Provider,{value:this._manager},n.createElement("div",{id:e,role:t,"aria-label":o,"aria-labelledby":r,"aria-activedescendant":s,"aria-hidden":l,className:i()(f,h.menuWrap,!M&&h.isMeasuring),style:{height:x,left:k&&k.x,minWidth:d,position:"fixed",top:k&&k.y,width:E},"data-name":this.props["data-name"],ref:this._handleContainerRef,onScrollCapture:this.props.onScroll,onContextMenu:a.preventDefaultForContextMenu,tabIndex:this.props.tabIndex,onMouseOver:y,onMouseOut:w,onKeyDown:b,onFocus:S,onBlur:C},n.createElement("div",{className:i()(h.scrollWrap,!this.props.noMomentumBasedScroll&&h.momentumBased),style:{overflowY:void 0!==x?"scroll":"auto",maxHeight:_},onScrollCapture:this._handleScroll,ref:this._handleScrollWrapRef},n.createElement(g,{className:h.menuBox},u)))),n.createElement(c.Slot,{reference:this._handleSlot})))}update(e){e?this._resizeForced():this._resize()}}function g(e){const t=(0,s.ensureNotNull)((0,n.useContext)(m.SubmenuContext)),o=n.useRef(null);return n.createElement("div",{ref:o,className:e.className,onMouseOver:function(e){if(!(null!==t.current&&e.target instanceof Node&&(n=e.target,null===(r=o.current)||void 0===r?void 0:r.contains(n))))return;var n,r;t.isSubmenuNode(e.target)||t.setCurrent(null)},"data-name":"menu-inner"},e.children)}_.contextType=m.SubmenuContext},28466:(e,t,o)=>{"use strict";o.d(t,{CloseDelegateContext:()=>i});var n=o(50959),r=o(370981);const i=n.createContext(r.globalCloseDelegate)},694488:(e,t,o)=>{"use strict";o.d(t,{SubmenuContext:()=>r,SubmenuHandler:()=>i});var n=o(50959);const r=n.createContext(null);function i(e){const[t,o]=(0,n.useState)(null),i=(0,
n.useRef)(null),s=(0,n.useRef)(new Map);return(0,n.useEffect)((()=>()=>{null!==i.current&&clearTimeout(i.current)}),[]),n.createElement(r.Provider,{value:{current:t,setCurrent:function(e){null!==i.current&&(clearTimeout(i.current),i.current=null);null===t?o(e):i.current=setTimeout((()=>{i.current=null,o(e)}),100)},registerSubmenu:function(e,t){return s.current.set(e,t),()=>{s.current.delete(e)}},isSubmenuNode:function(e){return Array.from(s.current.values()).some((t=>t(e)))}}},e.children)}},742554:(e,t,o)=>{"use strict";o.d(t,{TouchScrollContainer:()=>l});var n=o(50959),r=o(259142),i=o(650151),s=o(601227);const l=(0,n.forwardRef)(((e,t)=>{const{children:o,...i}=e,l=(0,n.useRef)(null);return(0,n.useImperativeHandle)(t,(()=>l.current)),(0,n.useLayoutEffect)((()=>{if(s.CheckMobile.iOS())return null!==l.current&&(0,r.disableBodyScroll)(l.current,{allowTouchMove:a(l)}),()=>{null!==l.current&&(0,r.enableBodyScroll)(l.current)}}),[]),n.createElement("div",{ref:l,...i},o)}));function a(e){return t=>{const o=(0,i.ensureNotNull)(e.current),n=document.activeElement;return!o.contains(t)||null!==n&&o.contains(n)&&n.contains(t)}}},322528:(e,t,o)=>{"use strict";o.r(t),o.d(t,{ContextMenuRenderer:()=>a});var n=o(50959),r=o(500962),i=o(820883),s=o(561626),l=o(753327);class a{constructor(e,t,o,r){this._root=document.createElement("div"),this._isShown=!1,this._manager=null,this._props={isOpened:!1,items:e,position:{x:0,y:0},menuStatName:t.statName,mode:t.mode,"data-name":t["data-name"]},this._onDestroy=o,this._onShow=r,this._activeElement=document.activeElement,this._returnFocus=t.returnFocus,this._takeFocus=t.takeFocus,this._menuElementRef=n.createRef(),this._doNotCloseOn=t.doNotCloseOn,t.manager&&(this._manager=t.manager)}show(e){this._onShow&&this._onShow(),this._isShown=!0,this._render({...this._props,position:(t,o,n)=>{var r,i,l;e.touches&&e.touches.length>0&&(e={clientX:e.touches[0].clientX,clientY:e.touches[0].clientY});let a;switch(null!==(r=e.attachToXBy)&&void 0!==r?r:(0,s.isRtl)()?"right":"left"){case"left":a=e.clientX;break;case"right":a=e.clientX-t}let c,u=null!==(i=e.attachToYBy)&&void 0!==i?i:"auto",d=e.clientY;if("auto-strict"===u){const t=d+(null!==(l=e.boxHeight)&&void 0!==l?l:0);n<t+o?u="bottom":(u="top",d=t)}switch(u){case"top":c=Math.min(o,n-d);break;case"bottom":d-=Math.min(o,d),c=0===d?e.clientY:void 0}return{x:a,y:d,overrideHeight:c}},isOpened:!0,onClose:()=>{this.hide(),this._unmount()},doNotCloseOn:this._doNotCloseOn,takeFocus:this._takeFocus,menuElementReference:this._menuElementRef})}hide(){this._isShown=!1,this._render({...this._props,isOpened:!1})}isShown(){return this._isShown}_unmount(){this._isShown=!1,r.unmountComponentAtNode(this._root),this._onDestroy&&this._onDestroy(),this._returnFocus&&this._activeElement instanceof HTMLElement&&this._activeElement.focus({preventScroll:!0})}_render(e){r.render(n.createElement(l.SlotContext.Provider,{value:this._manager},n.createElement(i.OverlapContextMenu,{...e})),this._root)}}},214665:e=>{
e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><path d="M.6 1.4l1.4-1.4 8 8-8 8-1.4-1.4 6.389-6.532-6.389-6.668z"/></svg>'},44629:e=>{e.exports={ar:["اضف إلى القائمة التفضيلات"],ca_ES:["Afegeix a preferits"],cs:["Přidat do oblíbených"],de:["Zu Favoriten hinzufügen"],el:["Προσθήκη στα αγαπημένα"],en:"Add to favorites",es:["Añadir a favoritos"],fa:["افزودن به موارد مورد علاقه"],fr:["Ajouter aux favoris"],he_IL:["הוסף למועדפים"],hu_HU:["Hozzáadás kedvencekhez"],id_ID:["Tambah ke daftar favorit"],it:["Aggiungi ai preferiti"],ja:["お気に入りに追加"],ko:["즐겨찾기에 넣기"],ms_MY:["Tambah kepada kegemaran"],nl_NL:["Voeg toe aan favorieten"],pl:["Dodaj do ulubionych"],pt:["Adicionar aos favoritos"],ro:"Add to favorites",ru:["Добавить в избранное"],sv:["Lägg till som favorit"],th:["เพิ่มลงรายการโปรด"],tr:["Favorilere ekle"],vi:["Thêm vào mục yêu thích"],zh:["添加到收藏"],zh_TW:["加入收藏"]}},572482:e=>{e.exports={ar:["حذف من القائمة المفضلة"],ca_ES:["Treure de preferits"],cs:["Odebrat z oblíbených"],de:["Aus Favoriten entfernen"],el:["Διαγραφή απο τα αγαπημένα"],en:"Remove from favorites",es:["Quitar de favoritos"],fa:["حذف از موارد مورد علاقه"],fr:["Retirer des favoris"],he_IL:["הסר ממועדפים"],hu_HU:["Eltávolít kedvencek közül"],id_ID:["Hilangkan dari favorit"],it:["Rimuovi dai preferiti"],ja:["お気に入りから削除"],ko:["즐겨찾기지움"],ms_MY:["Keluarkan dari kegemaran"],nl_NL:["Verwijder van favorieten"],pl:["Usuń z ulubionych"],pt:["Remover dos favoritos"],ro:"Remove from favorites",ru:["Удалить из предпочтений"],sv:["Ta bort från favoriter"],th:["ลบออกจากรายการโปรด"],tr:["Favorilerimden çıkar"],vi:["Loại bỏ khỏi mục yêu thích"],zh:["从收藏中移除"],zh_TW:["從收藏移除"]}}}]);
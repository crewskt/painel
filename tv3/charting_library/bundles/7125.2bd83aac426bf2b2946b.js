(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[7125],{981193:e=>{e.exports={container:"container-Mtq7m9Yl","intent-default":"intent-default-Mtq7m9Yl",focused:"focused-Mtq7m9Yl",readonly:"readonly-Mtq7m9Yl",disabled:"disabled-Mtq7m9Yl","with-highlight":"with-highlight-Mtq7m9Yl",grouped:"grouped-Mtq7m9Yl","adjust-position":"adjust-position-Mtq7m9Yl","first-row":"first-row-Mtq7m9Yl","first-col":"first-col-Mtq7m9Yl",stretch:"stretch-Mtq7m9Yl","font-size-medium":"font-size-medium-Mtq7m9Yl","font-size-large":"font-size-large-Mtq7m9Yl","no-corner-top-left":"no-corner-top-left-Mtq7m9Yl","no-corner-top-right":"no-corner-top-right-Mtq7m9Yl","no-corner-bottom-right":"no-corner-bottom-right-Mtq7m9Yl","no-corner-bottom-left":"no-corner-bottom-left-Mtq7m9Yl","size-small":"size-small-Mtq7m9Yl","size-medium":"size-medium-Mtq7m9Yl","size-large":"size-large-Mtq7m9Yl","intent-success":"intent-success-Mtq7m9Yl","intent-warning":"intent-warning-Mtq7m9Yl","intent-danger":"intent-danger-Mtq7m9Yl","intent-primary":"intent-primary-Mtq7m9Yl","border-none":"border-none-Mtq7m9Yl","border-thin":"border-thin-Mtq7m9Yl","border-thick":"border-thick-Mtq7m9Yl",highlight:"highlight-Mtq7m9Yl",shown:"shown-Mtq7m9Yl"}},484684:e=>{e.exports={"inner-slot":"inner-slot-yJbunXPO",interactive:"interactive-yJbunXPO",icon:"icon-yJbunXPO","inner-middle-slot":"inner-middle-slot-yJbunXPO","before-slot":"before-slot-yJbunXPO","after-slot":"after-slot-yJbunXPO"}},358089:e=>{e.exports={input:"input-oiYdY6I4","with-start-slot":"with-start-slot-oiYdY6I4","with-end-slot":"with-end-slot-oiYdY6I4"}},524530:e=>{e.exports={innerLabel:"innerLabel-ycB0ofZi"}},607856:e=>{e.exports={controlWrapper:"controlWrapper-I6SkDSuu",hidden:"hidden-I6SkDSuu",control:"control-I6SkDSuu",controlIncrease:"controlIncrease-I6SkDSuu",controlDecrease:"controlDecrease-I6SkDSuu",controlIcon:"controlIcon-I6SkDSuu",title:"title-I6SkDSuu"}},789220:e=>{e.exports={errors:"errors-nQUDfTUB",show:"show-nQUDfTUB",error:"error-nQUDfTUB"}},196373:e=>{e.exports={"error-icon":"error-icon-ROs2cmJ2","intent-danger":"intent-danger-ROs2cmJ2","intent-warning":"intent-warning-ROs2cmJ2"}},739941:e=>{e.exports={"static-messages":"static-messages-u1qnKSIb",errors:"errors-u1qnKSIb",warnings:"warnings-u1qnKSIb","success-mesages":"success-mesages-u1qnKSIb","input-description":"input-description-u1qnKSIb",message:"message-u1qnKSIb"}},380327:(e,t,n)=>{"use strict";n.d(t,{ControlGroupContext:()=>s});const s=n(50959).createContext({isGrouped:!1,cellState:{isTop:!0,isRight:!0,isBottom:!0,isLeft:!0}})},331774:(e,t,n)=>{"use strict";function s(e){let t=0;return e.isTop&&e.isLeft||(t+=1),e.isTop&&e.isRight||(t+=2),e.isBottom&&e.isLeft||(t+=8),e.isBottom&&e.isRight||(t+=4),t}n.d(t,{getGroupCellRemoveRoundBorders:()=>s})},34735:(e,t,n)=>{"use strict";n.d(t,{ControlSkeleton:()=>b,InputClasses:()=>g});var s=n(50959),r=n(497754),o=n(650151),a=n(525388),i=n(800417),l=n(380327),c=n(331774);var u=n(981193),h=n.n(u);function d(e){let t="";return 0!==e&&(1&e&&(t=r(t,h()["no-corner-top-left"])),
2&e&&(t=r(t,h()["no-corner-top-right"])),4&e&&(t=r(t,h()["no-corner-bottom-right"])),8&e&&(t=r(t,h()["no-corner-bottom-left"]))),t}function p(e,t,n,s){const{removeRoundBorder:o,className:a,intent:i="default",borderStyle:l="thin",size:u,highlight:p,disabled:m,readonly:g,stretch:f,noReadonlyStyles:v,isFocused:b}=e,S=d(null!=o?o:(0,c.getGroupCellRemoveRoundBorders)(n));return r(h().container,h()[`intent-${i}`],h()[`border-${l}`],u&&h()[`size-${u}`],S,p&&h()["with-highlight"],m&&h().disabled,g&&!v&&h().readonly,b&&h().focused,f&&h().stretch,t&&h().grouped,!s&&h()["adjust-position"],n.isTop&&h()["first-row"],n.isLeft&&h()["first-col"],a)}function m(e,t){const{highlight:n,highlightRemoveRoundBorder:s}=e;if(!n)return h().highlight;const o=d(null!=s?s:(0,c.getGroupCellRemoveRoundBorders)(t));return r(h().highlight,h().shown,o)}const g={FontSizeMedium:(0,o.ensureDefined)(h()["font-size-medium"]),FontSizeLarge:(0,o.ensureDefined)(h()["font-size-large"])},f={passive:!1};function v(e,t){const{style:n,id:r,role:o,onFocus:c,onBlur:u,onMouseOver:h,onMouseOut:d,onMouseDown:g,onMouseUp:v,onKeyDown:b,onClick:S,tabIndex:w,startSlot:M,middleSlot:C,endSlot:y,onWheel:E,onWheelNoPassive:R=null}=e,{isGrouped:I,cellState:F,disablePositionAdjustment:B=!1}=(0,s.useContext)(l.ControlGroupContext),k=function(e,t=null,n){const r=(0,s.useRef)(null),o=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{if(null===r.current||null===o.current)return;const[e,t,n]=o.current;null!==t&&r.current.addEventListener(e,t,n)}),[]),i=(0,s.useCallback)((()=>{if(null===r.current||null===o.current)return;const[e,t,n]=o.current;null!==t&&r.current.removeEventListener(e,t,n)}),[]),l=(0,s.useCallback)((e=>{i(),r.current=e,a()}),[]);return(0,s.useEffect)((()=>(o.current=[e,t,n],a(),i)),[e,t,n]),l}("wheel",R,f);return s.createElement("span",{style:n,id:r,role:o,className:p(e,I,F,B),tabIndex:w,ref:(0,a.useMergedRefs)([t,k]),onFocus:c,onBlur:u,onMouseOver:h,onMouseOut:d,onMouseDown:g,onMouseUp:v,onKeyDown:b,onClick:S,onWheel:E,...(0,i.filterDataProps)(e),...(0,i.filterAriaProps)(e)},M,C,y,s.createElement("span",{className:m(e,F)}))}v.displayName="ControlSkeleton";const b=s.forwardRef(v)},102691:(e,t,n)=>{"use strict";n.d(t,{BeforeSlot:()=>i,StartSlot:()=>l,MiddleSlot:()=>c,EndSlot:()=>u,AfterSlot:()=>h});var s=n(50959),r=n(497754),o=n(484684),a=n.n(o);function i(e){const{className:t,children:n}=e;return s.createElement("span",{className:r(a()["before-slot"],t)},n)}function l(e){const{className:t,interactive:n=!0,icon:o=!1,children:i}=e;return s.createElement("span",{className:r(a()["inner-slot"],n&&a().interactive,o&&a().icon,t)},i)}function c(e){const{className:t,children:n}=e;return s.createElement("span",{className:r(a()["inner-slot"],a()["inner-middle-slot"],t)},n)}function u(e){const{className:t,interactive:n=!0,icon:o=!1,children:i}=e;return s.createElement("span",{className:r(a()["inner-slot"],n&&a().interactive,o&&a().icon,t)},i)}function h(e){const{className:t,children:n}=e;return s.createElement("span",{className:r(a()["after-slot"],t)},n)}},654936:(e,t,n)=>{
"use strict";n.d(t,{Input:()=>v,InputControl:()=>b});var s=n(50959),r=n(497754),o=n(800417),a=n(269842),i=n(1811),l=n(525388),c=n(21778),u=n(383836),h=n(603548),d=n(34735),p=n(102691),m=n(358089),g=n.n(m);function f(e){return!(0,o.isAriaAttribute)(e)&&!(0,o.isDataAttribute)(e)}function v(e){const{id:t,title:n,role:a,tabIndex:i,placeholder:l,name:c,type:u,value:h,defaultValue:m,draggable:v,autoComplete:b,autoFocus:S,maxLength:w,min:M,max:C,step:y,pattern:E,inputMode:R,onSelect:I,onFocus:F,onBlur:B,onKeyDown:k,onKeyUp:A,onKeyPress:D,onChange:x,onDragStart:N,size:P="medium",className:z,inputClassName:O,disabled:Y,readonly:V,containerTabIndex:_,startSlot:W,endSlot:q,reference:T,containerReference:L,onContainerFocus:H,...K}=e,U=(0,o.filterProps)(K,f),J={...(0,o.filterAriaProps)(K),...(0,o.filterDataProps)(K),id:t,title:n,role:a,tabIndex:i,placeholder:l,name:c,type:u,value:h,defaultValue:m,draggable:v,autoComplete:b,autoFocus:S,maxLength:w,min:M,max:C,step:y,pattern:E,inputMode:R,onSelect:I,onFocus:F,onBlur:B,onKeyDown:k,onKeyUp:A,onKeyPress:D,onChange:x,onDragStart:N};return s.createElement(d.ControlSkeleton,{...U,disabled:Y,readonly:V,tabIndex:_,className:r(g().container,z),size:P,ref:L,onFocus:H,startSlot:W,middleSlot:s.createElement(p.MiddleSlot,null,s.createElement("input",{...J,className:r(g().input,O,W&&g()["with-start-slot"],q&&g()["with-end-slot"]),disabled:Y,readOnly:V,ref:T})),endSlot:q})}function b(e){e=(0,c.useControl)(e);const{disabled:t,autoSelectOnFocus:n,tabIndex:r=0,onFocus:o,onBlur:d,reference:p,containerReference:m=null}=e,g=(0,s.useRef)(null),f=(0,s.useRef)(null),[b,S]=(0,u.useFocus)(),w=t?void 0:b?-1:r,M=t?void 0:b?r:-1,{isMouseDown:C,handleMouseDown:y,handleMouseUp:E}=(0,h.useIsMouseDown)(),R=(0,a.createSafeMulticastEventHandler)(S.onFocus,(function(e){n&&!C.current&&(0,i.selectAllContent)(e.currentTarget)}),o),I=(0,a.createSafeMulticastEventHandler)(S.onBlur,d),F=(0,s.useCallback)((e=>{g.current=e,p&&("function"==typeof p&&p(e),"object"==typeof p&&(p.current=e))}),[g,p]);return s.createElement(v,{...e,isFocused:b,containerTabIndex:w,tabIndex:M,onContainerFocus:function(e){f.current===e.target&&null!==g.current&&g.current.focus()},onFocus:R,onBlur:I,reference:F,containerReference:(0,l.useMergedRefs)([f,m]),onMouseDown:y,onMouseUp:E})}},21778:(e,t,n)=>{"use strict";n.d(t,{useControl:()=>o});var s=n(269842),r=n(383836);function o(e){const{onFocus:t,onBlur:n,intent:o,highlight:a,disabled:i}=e,[l,c]=(0,r.useFocus)(void 0,i),u=(0,s.createSafeMulticastEventHandler)(i?void 0:c.onFocus,t),h=(0,s.createSafeMulticastEventHandler)(i?void 0:c.onBlur,n);return{...e,intent:o||(l?"primary":"default"),highlight:null!=a?a:l,onFocus:u,onBlur:h}}},383836:(e,t,n)=>{"use strict";n.d(t,{useFocus:()=>r});var s=n(50959);function r(e,t){const[n,r]=(0,s.useState)(!1);(0,s.useEffect)((()=>{t&&n&&r(!1)}),[t,n]);const o={onFocus:(0,s.useCallback)((function(t){void 0!==e&&e.current!==t.target||r(!0)}),[e]),onBlur:(0,s.useCallback)((function(t){void 0!==e&&e.current!==t.target||r(!1)}),[e])};return[n,o]}},603548:(e,t,n)=>{
"use strict";n.d(t,{useIsMouseDown:()=>r});var s=n(50959);function r(){const e=(0,s.useRef)(!1),t=(0,s.useCallback)((()=>{e.current=!0}),[e]),n=(0,s.useCallback)((()=>{e.current=!1}),[e]);return{isMouseDown:e,handleMouseDown:t,handleMouseUp:n}}},525388:(e,t,n)=>{"use strict";n.d(t,{useMergedRefs:()=>o});var s=n(50959),r=n(273388);function o(e){return(0,s.useCallback)((0,r.mergeRefs)(e),e)}},1811:(e,t,n)=>{"use strict";function s(e){null!==e&&e.setSelectionRange(0,e.value.length)}n.d(t,{selectAllContent:()=>s})},269842:(e,t,n)=>{"use strict";function s(...e){return t=>{for(const n of e)void 0!==n&&n(t)}}n.d(t,{createSafeMulticastEventHandler:()=>s})},794087:(e,t,n)=>{"use strict";n.d(t,{InputWithError:()=>p});var s=n(50959),r=n(497754),o=n(34735),a=n(102691),i=n(481476),l=n(961428),c=n(579184),u=n(524530);const h={large:o.InputClasses.FontSizeLarge,medium:o.InputClasses.FontSizeMedium},d={attachment:c.anchors.top.attachment,targetAttachment:c.anchors.top.targetAttachment,attachmentOffsetY:-4};function p(e){const{className:t,inputClassName:n,stretch:o=!0,errorMessage:c,fontSizeStyle:p="large",endSlot:m,button:g,error:f,warning:v,innerLabel:b,inputReference:S,children:w,...M}=e,C=f&&void 0!==c?[c]:void 0,y=v&&void 0!==c?[c]:void 0,E=r(u.inputContainer,h[p],t),R=b?s.createElement(a.StartSlot,{className:u.innerLabel,interactive:!1},b):void 0,I=m||g||w?s.createElement(a.EndSlot,null,m,g,w):void 0;return s.createElement(i.FormInput,{...M,className:E,inputClassName:n,errors:C,warnings:y,hasErrors:f,hasWarnings:v,messagesPosition:l.MessagesPosition.Attached,customErrorsAttachment:d,messagesRoot:"document",inheritMessagesWidthFromTarget:!0,disableMessagesRtlStyles:!0,iconHidden:!0,stretch:o,reference:S,startSlot:R,endSlot:I})}},576805:(e,t,n)=>{"use strict";n.d(t,{NumberInputView:()=>w});var s=n(50959),r=n(972535),o=n(794087),a=n(525388),i=n(497754),l=n(509806),c=n(72571),u=n(260845),h=n(100578),d=n(607856);function p(e){const t=i(d.control,d.controlIncrease),r=i(d.control,d.controlDecrease);return s.createElement(s.Fragment,null,void 0!==e.title&&s.createElement("div",{className:d.title},e.title),s.createElement("div",{className:d.controlWrapper},(e.defaultButtonsVisible||e.title)&&s.createElement(s.Fragment,null,s.createElement("button",{type:"button",tabIndex:-1,"aria-label":l.t(null,void 0,n(146812)),className:t,onClick:e.increaseValue,onMouseDown:u.preventDefault},s.createElement(c.Icon,{icon:h,className:d.controlIcon})),s.createElement("button",{type:"button",tabIndex:-1,"aria-label":l.t(null,void 0,n(756095)),className:r,onClick:e.decreaseValue,onMouseDown:u.preventDefault},s.createElement(c.Icon,{icon:h,className:d.controlIcon})))))}var m=n(921258),g=n(383836),f=n(269842),v=n(180185);const b=[38],S=[40];function w(e){const[t,n]=(0,m.useHover)(),[i,l]=(0,g.useFocus)(),c=(0,s.useRef)(null),u=(0,f.createSafeMulticastEventHandler)(l.onFocus,e.onFocus),h=(0,f.createSafeMulticastEventHandler)(l.onBlur,e.onBlur),d=(0,s.useCallback)((t=>{!e.disabled&&i&&(t.preventDefault(),
t.deltaY<0?e.onValueByStepChange(1):e.onValueByStepChange(-1))}),[i,e.disabled,e.onValueByStepChange]);return s.createElement(o.InputWithError,{...n,id:e.id,name:e.name,pattern:e.pattern,borderStyle:e.borderStyle,fontSizeStyle:e.fontSizeStyle,value:e.value,className:e.className,inputClassName:e.inputClassName,button:function(){const{button:n,forceShowControls:o,disabled:a,title:l}=e,c=!a&&!r.mobiletouch&&(o||i||t);return a?void 0:s.createElement(s.Fragment,null,null!=n?n:s.createElement(p,{increaseValue:w,decreaseValue:M,defaultButtonsVisible:c,title:l}))}(),disabled:e.disabled,placeholder:e.placeholder,innerLabel:e.innerLabel,endSlot:e.endSlot,containerReference:(0,a.useMergedRefs)([c,e.containerReference]),inputReference:e.inputReference,inputMode:e.inputMode,type:e.type,warning:e.warning,error:e.error,errorMessage:e.errorMessage,onClick:e.onClick,onFocus:u,onBlur:h,onChange:e.onValueChange,onKeyDown:function(t){if(e.disabled||0!==(0,v.modifiersFromEvent)(t.nativeEvent))return;let n=b,s=S;e.controlDecKeyCodes&&(s=s.concat(e.controlDecKeyCodes));e.controlIncKeyCodes&&(n=n.concat(e.controlIncKeyCodes));(s.includes(t.keyCode)||n.includes(t.keyCode))&&(t.preventDefault(),e.onValueByStepChange(s.includes(t.keyCode)?-1:1));e.onKeyDown&&e.onKeyDown(t)},onWheelNoPassive:d,stretch:e.stretch,intent:e.intent,highlight:e.highlight,highlightRemoveRoundBorder:e.highlightRemoveRoundBorder,autoSelectOnFocus:e.autoSelectOnFocus,"data-property-id":e["data-name"]});function w(){var t;e.disabled||(null===(t=c.current)||void 0===t||t.focus(),e.onValueByStepChange(1))}function M(){var t;e.disabled||(null===(t=c.current)||void 0===t||t.focus(),e.onValueByStepChange(-1))}}},587125:(e,t,n)=>{"use strict";n.d(t,{NumberInput:()=>g});var s=n(50959),r=n(509806),o=n(960521),a=n(601227),i=n(576805),l=n(699958),c=n(66568),u=n(218954);const h=r.t(null,void 0,n(535563)),d=new l.SplitThousandsFormatter,p=/^-?[0-9]*$/,m=9e15;class g extends s.PureComponent{constructor(e){super(e),this._onFocus=e=>{this.setState({focused:!0}),this.props.onFocus&&this.props.onFocus(e)},this._onBlur=e=>{this.setState({focused:!1}),!1!==this.props.shouldApplyValueOnBlur&&(this.setState({displayValue:f(this.props,this.props.value)}),this.props.errorHandler&&this.props.errorHandler(!1)),this.props.onBlur&&this.props.onBlur(e)},this._onValueChange=e=>{const t=e.target.value;if(void 0!==this.props.onEmptyString&&""===t&&this.props.onEmptyString(),"integer"===this.props.mode&&!p.test(t))return;const n=v(t,this.props.formatter),s=n.res?this._checkValueBoundaries(n.value):{isPassed:!1,msg:void 0},r=n.res&&!s.isPassed,o=n.res&&n.suggest&&!this.state.focused?n.suggest:t,a=r&&s.msg?s.msg:h;this.setState({displayValue:o,errorMsg:a}),n.res&&s.isPassed&&this.props.onValueChange(n.value,"input"),this.props.errorHandler&&this.props.errorHandler(!n.res||r)},this._onValueByStepChange=e=>{const{roundByStep:t=!0,step:n=1,uiStep:s,min:r=n,formatter:a}=this.props,i=v(this.state.displayValue,a),l=null!=s?s:n;let c=n;if(i.res){const s=new o.Big(i.value),a=s.minus(r).mod(n);let u=s.plus(e*l)
;!a.eq(0)&&t&&(u=u.plus((e>0?0:1)*l).minus(a)),c=u.toNumber()}const{isPassed:u,clampedValue:h}=this._checkValueBoundaries(c);c=u?c:h,this.setState({displayValue:f(this.props,c)}),this.props.onValueChange(c,"step"),this.props.errorHandler&&this.props.errorHandler(!1)};const{value:t}=e;this.state={value:t,displayValue:f(e,t),focused:!1,errorMsg:h}}render(){var e;return s.createElement(i.NumberInputView,{id:this.props.id,inputMode:null!==(e=this.props.inputMode)&&void 0!==e?e:a.CheckMobile.iOS()?void 0:"numeric",borderStyle:this.props.borderStyle,fontSizeStyle:this.props.fontSizeStyle,value:this.state.displayValue,forceShowControls:this.props.forceShowControls,className:this.props.className,inputClassName:this.props.inputClassName,button:this.props.button,placeholder:this.props.placeholder,innerLabel:this.props.innerLabel,endSlot:this.props.endSlot,disabled:this.props.disabled,warning:this.props.warning,error:this.props.error,errorMessage:this.props.errorMessage||this.state.errorMsg,onValueChange:this._onValueChange,onValueByStepChange:this._onValueByStepChange,containerReference:this.props.containerReference,inputReference:this.props.inputReference,onClick:this.props.onClick,onFocus:this._onFocus,onBlur:this._onBlur,onKeyDown:this.props.onKeyDown,controlDecKeyCodes:this.props.controlDecKeyCodes,controlIncKeyCodes:this.props.controlIncKeyCodes,title:this.props.title,intent:this.props.intent,highlight:this.props.highlight,highlightRemoveRoundBorder:this.props.highlightRemoveRoundBorder,stretch:this.props.stretch,autoSelectOnFocus:!a.CheckMobile.any()})}getClampedValue(){const{min:e=-1/0,max:t=m}=this.props,n=v(this.state.displayValue,this.props.formatter);return n.res?(0,u.clamp)(n.value,e,t):null}static getDerivedStateFromProps(e,t){const{alwaysUpdateValueFromProps:n,value:s}=e;return t.focused&&!n||t.value===s?null:{value:s,displayValue:f(e,s)}}_checkValueBoundaries(e){var t,s,o,a;const{min:i=-1/0,max:l=m}=this.props,c=function(e,t,n){const s=e>=t,r=e<=n;return{passMin:s,passMax:r,pass:s&&r,clamped:(0,u.clamp)(e,t,n)}}(e,i,l);let h;return c.passMax||(h=null!==(s=null===(t=this.props.boundariesErrorMessages)||void 0===t?void 0:t.greaterThanMax)&&void 0!==s?s:r.t(null,{replace:{max:String(l)}},n(602607))),c.passMin||(h=null!==(a=null===(o=this.props.boundariesErrorMessages)||void 0===o?void 0:o.lessThanMin)&&void 0!==a?a:r.t(null,{replace:{min:String(i)}},n(53669))),{isPassed:c.pass,msg:h,clampedValue:c.clamped}}}function f(e,t){const{useFormatter:n=!0,formatter:s,mode:r}=e;return n&&"integer"!==r?function(e,t=d){return null!==e?t.format(e):""}(t,s):function(e){if(null===e)return"";return c.NumericFormatter.formatNoE(e)}(t)}function v(e,t=d){return t.parse?t.parse(e):{res:!1,error:"Formatter does not support parse"}}},579184:(e,t,n)=>{"use strict";n.d(t,{anchors:()=>r,makeAnchorable:()=>o});var s=n(50959);const r={bottom:{attachment:{horizontal:"left",vertical:"top"},targetAttachment:{horizontal:"left",vertical:"bottom"}},top:{attachment:{horizontal:"left",vertical:"bottom"},targetAttachment:{horizontal:"left",
vertical:"top"}},topRight:{attachment:{horizontal:"right",vertical:"bottom"},targetAttachment:{horizontal:"right",vertical:"top"}},bottomRight:{attachment:{horizontal:"right",vertical:"top"},targetAttachment:{horizontal:"right",vertical:"bottom"}}};function o(e){var t;return(t=class extends s.PureComponent{render(){const{anchor:t="bottom"}=this.props;return s.createElement(e,{...this.props,attachment:r[t].attachment,targetAttachment:r[t].targetAttachment})}}).displayName="Anchorable Component",t}},841037:(e,t,n)=>{"use strict";n.d(t,{makeAttachable:()=>o});var s=n(50959),r=n(500962);function o(e){var t;return(t=class extends s.PureComponent{constructor(e){super(e),this._getComponentInstance=e=>{this._instance=e},this._throttleCalcProps=()=>{requestAnimationFrame((()=>this.setState(this._calcProps(this.props))))},this.state=this._getStateFromProps()}componentDidMount(){this._instanceElem=r.findDOMNode(this._instance),this.props.attachOnce||this._subscribe(),this.setState(this._calcProps(this.props))}componentDidUpdate(e){e.children===this.props.children&&e.top===this.props.top&&e.left===this.props.left&&e.width===this.props.width||this.setState(this._getStateFromProps(),(()=>this.setState(this._calcProps(this.props))))}render(){return s.createElement("div",{style:{position:"absolute",width:"100%",top:0,left:0}},s.createElement(e,{...this.props,ref:this._getComponentInstance,top:this.state.top,bottom:void 0!==this.state.bottom?this.state.bottom:"auto",right:void 0!==this.state.right?this.state.right:"auto",left:this.state.left,width:this.state.width,maxWidth:this.state.maxWidth},this.props.children))}componentWillUnmount(){this._unsubsribe()}_getStateFromProps(){return{bottom:this.props.bottom,left:this.props.left,right:this.props.right,top:void 0!==this.props.top?this.props.top:-1e4,width:this.props.inheritWidthFromTarget?this.props.target&&this.props.target.getBoundingClientRect().width:this.props.width,maxWidth:this.props.inheritMaxWidthFromTarget&&this.props.target&&this.props.target.getBoundingClientRect().width}}_calcProps(e){if(e.target&&e.attachment&&e.targetAttachment){const t=this._calcTargetProps(e.target,e.attachment,e.targetAttachment);if(null===t)return{};const{width:n,inheritWidthFromTarget:s=!0,inheritMaxWidthFromTarget:r=!1}=this.props,o={width:s?t.width:n,maxWidth:r?t.width:void 0};switch(e.attachment.vertical){case"bottom":case"middle":o.top=t.y;break;default:o[e.attachment.vertical]=t.y}switch(e.attachment.horizontal){case"right":case"center":o.left=t.x;break;default:o[e.attachment.horizontal]=t.x}return o}return{}}_calcTargetProps(e,t,n){const s=e.getBoundingClientRect(),r=this._instanceElem.getBoundingClientRect(),o="parent"===this.props.root?this._getCoordsRelToParentEl(e,s):this._getCoordsRelToDocument(s);if(null===o)return null;const a=this._getDimensions(r),i=this._getDimensions(s).width;let l=0,c=0;switch(t.vertical){case"top":c=o[n.vertical];break;case"bottom":c=o[n.vertical]-a.height;break;case"middle":c=o[n.vertical]-a.height/2}switch(t.horizontal){case"left":l=o[n.horizontal];break
;case"right":l=o[n.horizontal]-a.width;break;case"center":l=o[n.horizontal]-a.width/2}return"number"==typeof this.props.attachmentOffsetY&&(c+=this.props.attachmentOffsetY),"number"==typeof this.props.attachmentOffsetX&&(l+=this.props.attachmentOffsetX),{x:l,y:c,width:i}}_getCoordsRelToDocument(e){const t=pageYOffset,n=pageXOffset,s=e.top+t,r=e.bottom+t,o=e.left+n;return{top:s,bottom:r,left:o,right:e.right+n,middle:(s+e.height)/2,center:o+e.width/2}}_getCoordsRelToParentEl(e,t){const n=e.offsetParent;if(null===n)return null;const s=n.scrollTop,r=n.scrollLeft,o=e.offsetTop+s,a=e.offsetLeft+r,i=t.width+a;return{top:o,bottom:t.height+o,left:a,right:i,middle:(o+t.height)/2,center:(a+t.width)/2}}_getDimensions(e){return{height:e.height,width:e.width}}_subscribe(){"document"===this.props.root&&(window.addEventListener("scroll",this._throttleCalcProps,!0),window.addEventListener("resize",this._throttleCalcProps))}_unsubsribe(){window.removeEventListener("scroll",this._throttleCalcProps,!0),window.removeEventListener("resize",this._throttleCalcProps)}}).displayName="Attachable Component",t}},921258:(e,t,n)=>{"use strict";n.d(t,{hoverMouseEventFilter:()=>o,useAccurateHover:()=>a,useHover:()=>r});var s=n(50959);function r(){const[e,t]=(0,s.useState)(!1);return[e,{onMouseOver:function(e){o(e)&&t(!0)},onMouseOut:function(e){o(e)&&t(!1)}}]}function o(e){return!e.currentTarget.contains(e.relatedTarget)}function a(e){const[t,n]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const t=t=>{if(null===e.current)return;const s=e.current.contains(t.target);n(s)};return document.addEventListener("mouseover",t),()=>document.removeEventListener("mouseover",t)}),[]),t}},481476:(e,t,n)=>{"use strict";n.d(t,{FormInput:()=>c});var s=n(50959),r=n(654936),o=n(961428),a=n(102691),i=n(269842),l=n(525388);function c(e){var t;const{intent:n,onFocus:c,onBlur:u,onMouseOver:h,onMouseOut:d,containerReference:p=null,endSlot:m,hasErrors:g,hasWarnings:f,hasSuccessMessages:v,errors:b,warnings:S,successMessages:w,alwaysShowAttachedErrors:M,iconHidden:C,messagesPosition:y,messagesAttachment:E,customErrorsAttachment:R,messagesRoot:I,inheritMessagesWidthFromTarget:F,disableMessagesRtlStyles:B,"aria-required":k,"aria-invalid":A,inputDescription:D,...x}=e,N=(0,o.useControlValidationLayout)({hasErrors:g,hasWarnings:f,hasSuccessMessages:v,errors:b,warnings:S,successMessages:w,alwaysShowAttachedErrors:M,iconHidden:C,messagesPosition:y,messagesAttachment:E,customErrorsAttachment:R,messagesRoot:I,inheritMessagesWidthFromTarget:F,disableMessagesRtlStyles:B,inputDescription:D}),P=(0,i.createSafeMulticastEventHandler)(c,N.onFocus),z=(0,i.createSafeMulticastEventHandler)(u,N.onBlur),O=(0,i.createSafeMulticastEventHandler)(h,N.onMouseOver),Y=(0,i.createSafeMulticastEventHandler)(d,N.onMouseOut);return s.createElement(s.Fragment,null,s.createElement(r.InputControl,{...x,intent:null!==(t=N.intent)&&void 0!==t?t:n,onFocus:P,onBlur:z,onMouseOver:O,onMouseOut:Y,containerReference:(0,l.useMergedRefs)([p,N.containerReference]),
endSlot:s.createElement(s.Fragment,null,N.icon&&s.createElement(a.EndSlot,{icon:!0},N.icon),m),"aria-required":k,"aria-invalid":A,"aria-describedby":N.ariaIds}),N.renderedErrors)}},961428:(e,t,n)=>{"use strict";n.d(t,{MessagesPosition:()=>w,useControlValidationLayout:()=>k});var s=n(50959),r=n(497754),o=n(383836),a=n(921258),i=n(102691),l=n(579184),c=n(874485),u=n(841037),h=n(789220),d=n(561626);class p extends s.PureComponent{render(){const{children:e=[],show:t=!1,customErrorClass:n,disableRtlStyles:o,messageIdCallback:a}=this.props,i=r(h.errors,{[h.show]:t},n),l=e.map(((e,t)=>s.createElement(g,{key:t,messageIdCallback:a},e)));let c={position:"absolute",top:this.props.top,width:this.props.width,height:this.props.height,bottom:void 0!==this.props.bottom?this.props.bottom:"100%",right:void 0!==this.props.right?this.props.right:0,left:this.props.left,zIndex:this.props.zIndex,maxWidth:this.props.maxWidth};if((0,d.isRtl)()&&!o){const{left:e,right:t}=c;c={...c,left:t,right:e}}return s.createElement("div",{style:c,className:i},l)}}const m=(0,c.makeOverlapable)((0,u.makeAttachable)(p));function g(e){const{children:t,messageIdCallback:n,...r}=e,o=s.useId();return s.useEffect((()=>{n&&n(o)}),[o]),s.createElement("div",{...r,className:h.error,id:o},t)}var f=n(72571),v=n(616658),b=n(196373);function S(e){const{intent:t="danger"}=e;return s.createElement(f.Icon,{icon:v,className:r(b["error-icon"],b[`intent-${t}`])})}var w,M,C=n(739941);!function(e){e[e.Attached=0]="Attached",e[e.Static=1]="Static",e[e.Hidden=2]="Hidden"}(w||(w={})),function(e){e.Top="top",e.Bottom="bottom"}(M||(M={}));const y={top:{attachment:l.anchors.topRight.attachment,targetAttachment:l.anchors.topRight.targetAttachment,attachmentOffsetY:-4},bottom:{attachment:l.anchors.bottomRight.attachment,targetAttachment:l.anchors.bottomRight.targetAttachment,attachmentOffsetY:4}};function E(e){const{isOpened:t,target:n,errorAttachment:r=M.Top,customErrorsAttachment:o,root:a="parent",inheritWidthFromTarget:i=!1,disableRtlStyles:l,children:c,messageIdCallback:u}=e,{attachment:h,targetAttachment:d,attachmentOffsetY:p}=null!=o?o:y[r];return s.createElement(m,{isOpened:t,target:n,root:a,inheritWidthFromTarget:i,attachment:h,targetAttachment:d,attachmentOffsetY:p,disableRtlStyles:l,messageIdCallback:u,inheritMaxWidthFromTarget:!0,show:!0},c)}function R(e,t){return Boolean(e)&&void 0!==t&&t.length>0}function I(e,t,n){return e===w.Attached&&R(t,n)}function F(e,t,n){return e===w.Static&&R(t,n)}function B(e,t,n){const{hasErrors:s,hasWarnings:r,hasSuccessMessages:o,alwaysShowAttachedErrors:a,iconHidden:i,errors:l,warnings:c,successMessages:u,messagesPosition:h=w.Static}=e,d=I(h,s,l),p=I(h,r,c),m=d&&(t||n||Boolean(a)),g=!m&&p&&(t||n),f=F(h,s,l),v=!f&&F(h,r,c),b=!f&&!v&&F(h,o,u),S=!i&&Boolean(s),M=!i&&!S&&Boolean(r),C=function(e,t,n){return Boolean(n)?"success":Boolean(e)?"danger":Boolean(t)?"warning":void 0}(s,r,o);return{hasAttachedErrorMessages:d,hasAttachedWarningMessages:p,showAttachedErrorMessages:m,showAttachedWarningMessages:g,showStaticErrorMessages:f,
showStaticWarningMessages:v,showStaticSuccessMessages:b,showErrorIcon:S,showWarningIcon:M,intent:C}}function k(e){var t,n,l,c;const{errors:u,warnings:h,successMessages:d,messagesAttachment:p,customErrorsAttachment:m,messagesRoot:g,inheritMessagesWidthFromTarget:f,disableMessagesRtlStyles:v,inputDescription:b}=e,[w,M]=(0,o.useFocus)(),[y,R]=(0,a.useHover)(),I=(0,s.useRef)(null),F=(0,s.useRef)(""),k=(0,s.useRef)([]),D=e=>{e&&k.current.push(e)};s.useEffect((()=>(F.current=k.current.join(" "),()=>{k.current=[],F.current=""})),[k.current]);const{hasAttachedErrorMessages:x,hasAttachedWarningMessages:N,showAttachedErrorMessages:P,showAttachedWarningMessages:z,showStaticErrorMessages:O,showStaticWarningMessages:Y,showStaticSuccessMessages:V,showErrorIcon:_,showWarningIcon:W,intent:q}=B(e,w,y),T=_||W?s.createElement(S,{intent:_?"danger":"warning"}):void 0,L=x?s.createElement(E,{errorAttachment:p,customErrorsAttachment:m,isOpened:P,target:I.current,root:g,inheritWidthFromTarget:f,disableRtlStyles:v,children:u,messageIdCallback:D}):void 0,H=N?s.createElement(E,{errorAttachment:p,isOpened:z,target:I.current,root:g,inheritWidthFromTarget:f,disableRtlStyles:v,children:h,messageIdCallback:D}):void 0,K=O?s.createElement(i.AfterSlot,{className:r(C["static-messages"],C.errors)},null==u?void 0:u.map(((e,t)=>s.createElement(A,{key:t,messageIdCallback:D},e)))):void 0,U=Y?s.createElement(i.AfterSlot,{className:r(C["static-messages"],C.warnings)},null==h?void 0:h.map(((e,t)=>s.createElement(A,{key:t,messageIdCallback:D},e)))):void 0,J=V?s.createElement(i.AfterSlot,{className:r(C["static-messages"],C["success-mesages"])},null==d?void 0:d.map(((e,t)=>s.createElement(A,{key:t,messageIdCallback:D},e)))):void 0,X=!O&&!Y&&!V&&b?s.createElement(i.AfterSlot,{className:r(C["static-messages"],C["input-description"])},s.createElement(A,{messageIdCallback:D},b)):void 0,G=null!==(c=null!==(l=null!==(n=null!==(t=null!=L?L:H)&&void 0!==t?t:K)&&void 0!==n?n:U)&&void 0!==l?l:J)&&void 0!==c?c:X;return{ariaIds:F.current,icon:T,renderedErrors:G,containerReference:I,intent:q,...M,...R}}function A(e){const{children:t,messageIdCallback:n,...r}=e,o=s.useId();return s.useEffect((()=>{n(o)}),[o]),s.createElement("span",{...r,className:C.message,id:o},t)}},100578:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'},616658:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8 15c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm0 1c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm-1-12c0-.552.448-1 1-1s1 .448 1 1v4c0 .552-.448 1-1 1s-1-.448-1-1v-4zm1 7c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/></svg>'}}]);
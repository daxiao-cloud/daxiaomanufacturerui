(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7509:function(e,n,t){"use strict";t.d(n,{t:function(){return O}});var r=t(7294),i=t(2125),o=t(1755),a=t(975);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}var c=function(e){var n=l({},e);return r.createElement(a.x,l({as:"nav",flex:!1,gap:"medium"},n))},s=t(846),u=t(9517),d=function(e){var n=e.theme.pagination.button&&e.theme.pagination.button.size&&e.theme.pagination.button.size[e.size||"medium"];return n?{content:{fontSize:n.font&&n.font.size,lineHeight:n.font&&n.font.height},container:{height:n.height,minWidth:n.width}}:""},f=(0,i.default)(s.z).withConfig({displayName:"StyledPageControl__StyledPaginationButton",componentId:"sc-1vlfaez-0"})(["> svg{margin:0 auto;}",";"],(function(e){return d(e).content})),p=i.default.div.withConfig({displayName:"StyledPageControl__StyledContainer",componentId:"sc-1vlfaez-1"})(["display:flex;align-items:center;justify-content:center;max-width:100%;",";",";"],(function(e){return d(e).container}),(function(e){return e.theme.pagination.control&&e.theme.pagination.control.extend})),m=(0,i.default)(u.x).withConfig({displayName:"StyledPageControl__StyledSeparator",componentId:"sc-1vlfaez-2"})(["font-weight:bold;",";",";"],(function(e){return"font-size: "+(d(e).content&&d(e).content.fontSize)}),(function(e){return"line-height: "+(d(e).content&&d(e).content.lineHeight)})),h=["control","separator","size"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}var g=function(e){var n=e.control,t=e.separator,o=e.size,a=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,h),l=(0,r.useContext)(i.ThemeContext),c=o||"medium";return r.createElement(p,{as:"li",size:c},t?r.createElement(m,{size:c},"\u2026"):r.createElement(f,v({a11yTitle:"Go to page "+n,fill:!0,kind:l.pagination.button,label:n,size:c},a)))};var x={},b=["a11yTitle","aria-label","numberItems","numberEdgePages","numberMiddlePages","onChange","page","size","step"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}var j=(0,i.default)(a.x).withConfig({displayName:"Pagination__StyledPaginationContainer",componentId:"sc-rnlw6m-0"})(["",""],(function(e){return e.theme.pagination.container&&e.theme.pagination.container.extend})),w=function(e,n){for(var t=[],r=e;r<=n;r+=1)t.push(r);return t},O=(0,r.forwardRef)((function(e,n){var t=e.a11yTitle,l=e["aria-label"],s=e.numberItems,u=e.numberEdgePages,d=void 0===u?1:u,f=e.numberMiddlePages,p=void 0===f?3:f,m=e.onChange,h=e.page,v=e.size,x=e.step,O=void 0===x?10:x,k=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,b),E=(0,r.useContext)(i.ThemeContext)||o.l.theme,M=Math.ceil(s/O),C=(0,r.useState)(Math.min(h,M)||1),z=C[0],P=C[1];(0,r.useEffect)((function(){P(h||1)}),[h]);var I,S,_=w(1,Math.min(d,M)),T=w(Math.max(M-d+1,d+1),M);p<1?(I=1,console.warn('Property "numberMiddlePages" should not be < 1. One middle page button will be shown. Set "numberMiddlePages" >= 1 to remove this warning.')):I=p,S=I%2?Math.min(z-Math.floor(I/2),M-d-I):Math.min(z-Math.floor(I/2)+1,M-d-I);var N=Math.max(S,d+2),D=Math.min(Math.max(z+Math.floor(I/2),d+I+1),T.length>0?T[0]-2:M-1),A=w(N,D),K=[];N>d+2?K=["more-prev"]:d+1<M-d&&(K=[d+1]);var B=[];D<M-d-1?B=["more-next"]:M-d>d&&(B=[M-d]);var G=function(e,n){if(P(n),m){e.persist();var t=e;t.page=n;var r=function(e){var n=O*(e-1);return{startIndex:n,endIndex:n+O}}(n),i=r.startIndex,o=r.endIndex;t.startIndex=i,t.endIndex=o,m(t)}},W=E.pagination.icons.next,R=E.pagination.icons.previous,F=E.pagination.icons.color,L={next:{"aria-disabled":z===M?"true":void 0,disabled:z===M||!s,icon:r.createElement(W,{color:F}),onClick:function(e){G(e,z+1)},label:void 0},previous:{"aria-disabled":1===z?"true":void 0,disabled:1===z||!s,icon:r.createElement(R,{color:F}),onClick:function(e){G(e,z-1)},label:void 0}},q=["previous"].concat(_,K,A,B,T,["next"]);return q=q.map((function(e){return y({active:e===z,a11yTitle:"number"===typeof e?"Go to page "+e:"Go to "+e+" page","aria-current":e===z?"page":void 0,control:e,onClick:function(n){G(n,e)},separator:"more-prev"===e||"more-next"===e},L[e])})),r.createElement(j,y({},E.pagination.container,k),r.createElement(c,{a11yTitle:l||t||"Pagination Navigation",ref:n},r.createElement(a.x,y({as:"ul"},E.pagination.controls),q.map((function(e,n){return r.createElement(g,y({key:n,size:v},e))})))))}));O.displayName="Pagination",O.propTypes=x},823:function(e,n,t){"use strict";t.d(n,{h:function(){return l},k:function(){return a}});var r=t(7294),i=["data","page","step"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}var a=function(e,n){var t;return"number"===typeof e?t=Math.ceil((e+1)/n):"object"===typeof e&&"page"in e&&(t=e.page),t},l=function(e){var n=e.data,t=e.page,a=e.step,l=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,i),c=n?Math.ceil(n.length/a):0,s=(0,r.useState)(Math.min(t,c)||1),u=s[0],d=s[1];u>c&&(null==n?void 0:n.length)>0&&d(Math.max(c,1));var f=a*(u-1),p=f+a;return[(0,r.useMemo)((function(){return Array.isArray(n)?n.slice(f,p):[]}),[n,f,p]),o({numberItems:n&&n.length,onChange:function(e){return d(e.page)},page:u,step:a},l)]}},9294:function(e,n,t){"use strict";t.d(n,{e:function(){return x}});var r=t(4052),i=t(975),o=t(6717),a=t(5893);function l({content:e}){return(0,a.jsx)(i.x,{border:"between",gap:"small",fill:!0,children:e})}var c=t(1194),s=t(846),u=t(7045),d=t(8560),f=t(3572),p=t(8288),m=t(5224),h=t(1664),v=t.n(h);function g(){return(0,a.jsxs)(c.h,{background:"brand",pad:"small",children:[(0,a.jsx)(i.x,{direction:"row",gap:"medium",align:"center",children:(0,a.jsx)(v(),{href:"/",children:(0,a.jsx)(s.z,{plain:!0,icon:(0,a.jsx)(f.A,{}),label:"\u5927\u6653\u8bbe\u5907\u5236\u9020\u5546\u5e73\u53f0"})})}),(0,a.jsx)(u.P,{options:["\u7b80\u4f53\u4e2d\u6587","English"],value:"\u7b80\u4f53\u4e2d\u6587"}),(0,a.jsx)(d.v,{label:(0,a.jsx)(p.n,{}),items:[{label:"\u9000\u51fa\u767b\u5f55",icon:(0,a.jsx)(m.R,{}),gap:"small"}]})]})}function x(e){return function(){return(0,a.jsx)(r.p,{full:!0,theme:o.Nw,children:(0,a.jsxs)(i.x,{fill:!0,children:[(0,a.jsx)(g,{}),(0,a.jsx)(l,{content:e})]})})}}},6983:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Y}});var r=t(975),i=t(5009),o=t(9019),a=t(211),l=t(5327),c=t(7610),s=t(8769),u=t(846),d=t(7294),f=t(2125),p=t(5017),m=t(9170),h=t(7509),v=t(9517),g=t(363),x=t(6808),b=t(7187),y=t(823),j=t(7921),w=t(5697),O=t.n(w);var k=["none","xxsmall","xsmall","small","medium","large","xlarge"],E=["horizontal","vertical","top","bottom","left","right","start","end"],M={};E.forEach((function(e){M[e]=O().oneOf(k)}));O().bool,O().oneOf(E),O().shape({color:O().oneOfType([O().string,O().shape({dark:O().string,light:O().string})]),side:O().oneOf(E),size:O().oneOfType([O().oneOf(k),O().string])});var C={},z=["a11yTitle","aria-label","action","as","background","border","children","data","defaultItemProps","disabled","focus","itemKey","itemProps","onActive","onClickItem","onKeyDown","onMore","onOrder","pad","paginate","primaryKey","secondaryKey","show","step"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},P.apply(this,arguments)}var I=f.default.ul.withConfig({displayName:"List__StyledList",componentId:"sc-130gdqg-0"})(["list-style:none;"," padding:0;"," &:focus{","}","}","}"],(function(e){return!e.margin&&"margin: 0;"}),g.$G,(function(e){return e.tabIndex>=0&&(0,g.jq)({forceOutline:!0,skipSvgChildren:!0})}),(function(e){return e.itemFocus&&(0,g.jq)({forceOutline:!0,skipSvgChildren:!0})}),(function(e){return e.theme.list&&e.theme.list.extend})),S=(0,f.default)(r.x).withConfig({displayName:"List__StyledItem",componentId:"sc-130gdqg-1"})([""," "," &:focus{","}"," &:hover{","}",""],(function(e){return e.onClick&&!e.isDisabled&&"cursor: pointer;"}),(function(e){return e.draggable&&!e.isDisabled&&"cursor: move;"}),(0,g.GA)({forceOutline:!0,skipSvgChildren:!0}),(function(e){var n,t,r;if(e.isDisabled&&null!=(n=e.theme.list)&&null!=(t=n.item)&&t.disabled){var i=e.theme.list.item.disabled,o=i.color,a=i.cursor;r={color:(0,x.ut)(o,e.theme),cursor:a}}return r}),(function(e){return e.isDisabled&&"background-color: unset;"}),(function(e){return e.theme.list&&e.theme.list.item&&e.theme.list.item.extend})),_=(0,f.default)(r.x).withConfig({displayName:"List__StyledContainer",componentId:"sc-130gdqg-2"})(["",";"],(function(e){return e.theme.list&&e.theme.list.container&&e.theme.list.container.extend})),T=function(e,n,t){return"function"===typeof t?t(e,n):e[t]},N=function(e,n,t){var r=e.slice(0),i=r[n];if(n<t)for(var o=n;o<t;o+=1)r[o]=r[o+1];else for(var a=n;a>t;a-=1)r[a]=r[a-1];return r[t]=i,r},D=function(e,n,t){return"string"===typeof t?t:"string"===typeof e?e:n},A=function(e,n,t){var r=function(e,n,t){var r;return t&&(r="function"===typeof t?t(e,n):T(e,n,t)),r}(e,n,t);return D(e,n,r)},K=d.forwardRef((function(e,n){var t=e.a11yTitle,i=e["aria-label"],o=e.action,a=e.as,l=e.background,c=e.border,s=e.children,g=e.data,x=e.defaultItemProps,w=e.disabled,O=(e.focus,e.itemKey),k=e.itemProps,E=e.onActive,M=e.onClickItem,C=e.onKeyDown,K=e.onMore,B=e.onOrder,G=e.pad,W=e.paginate,R=e.primaryKey,F=e.secondaryKey,L=e.show,q=e.step,H=void 0===q?W?50:void 0:q,V=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,z),X=(0,b.t)(n),U=(0,d.useContext)(f.ThemeContext),$=(0,d.useState)(),J=$[0],Q=$[1],Y=(0,d.useState)(),Z=Y[0],ee=Y[1],ne=function(e){Q(e),E&&M&&e!==J&&E(e)},te=(0,d.useState)(),re=te[0],ie=te[1],oe=(0,d.useState)(),ae=oe[0],le=oe[1],ce=(0,y.h)(P({data:g,page:(0,y.k)(L,H),step:H},W)),se=ce[0],ue=ce[1],de=W?_:d.Fragment,fe=W?P({},U.list.container):void 0,pe=(0,d.useState)(),me=pe[0],he=pe[1],ve=(0,d.useRef)(),ge=(0,j.z$)(),xe={role:M||B?"listbox":"list"};if(J>=0){var be;if(B){var ye=J%2?"MoveDown":"MoveUp",je=Math.trunc(J/2);be=""+A(g[je],je,R)+ye}else M&&(be=A(g[J],J,R));xe["aria-activedescendant"]=be}return d.createElement(de,fe,d.createElement(m.N,{onEnter:(M||B)&&J>=0?function(e){if(B){var n=Math.trunc(J/2);J%2?(B(N(g,n,n+1)),ne(Math.min(J+2,2*g.length-2))):(B(N(g,n,n-1)),ne(Math.max(J-2,1)))}else if(null!=w&&w.includes("function"===typeof O?O(g[J]):g[J]))e.preventDefault();else if(M){e.persist();var t=e;t.item=g[J],t.index=J,M(t),ge({type:"listItemClick",element:X.current,event:t,item:g[J],index:J})}}:void 0,onUp:(M||B)&&J?function(){var e=B?1:0;ne(Math.max(J-1,e))}:void 0,onDown:(M||B)&&g&&g.length?function(){var e=B?1:0,n=B?2*g.length-2:g.length-1;ne(J>=e?Math.min(J+1,n):e)}:void 0,onKeyDown:C},d.createElement(I,P({"aria-label":i||t,ref:X,as:a||"ul",itemFocus:re,tabIndex:M||B?0:void 0,onFocus:function(){return ne(J||0===J?J:Z)},onBlur:function(){ee(J),ne(void 0)}},xe,V),d.createElement(p.v,{items:W?se:me||g,onMore:K,show:W?void 0:L,step:H,renderMarker:function(e){return d.createElement(r.x,{as:"li",flex:!1},e)}},(function(e,n){var t,i,a={};s?t=s(e,n,M?{active:J===n}:void 0):R?("function"===typeof R?t=i=R(e,n):(i=T(e,n,R),t=d.createElement(v.x,{key:"p",weight:"bold"},i)),F&&(t="function"===typeof F?[t,F(e,n)]:[t,d.createElement(v.x,{key:"s"},T(e,n,F))],a={direction:"row",align:"center",justify:"between",gap:"medium"})):t="object"===typeof e?e[Object.keys(e)[0]]:e,O&&(i="function"===typeof O?O(e):T(e,n,O));var f,p=O?i:D(e,n,i);w&&("object"!==typeof e||O||console.error("Warning: Missing prop itemKey. Prop disabled requires itemKey to be specified when data is of type 'object'."),f=null==w?void 0:w.includes(p)),o&&(t=[d.createElement(r.x,{align:"start",key:"actionContainer"+n},t),o(e,n)],a={direction:"row",align:F?"start":"center",justify:"between",gap:"medium"});var m=l||U.list.item.background;!B&&J===n||ae===n?m=U.global.hover.background:Array.isArray(m)&&(m=m[n%m.length]);var h,b,y,j,E=void 0!==c?c:U.list.item.border;if("horizontal"===E&&n&&(E="bottom"),M&&!B&&(h={role:"option",tabIndex:-1,active:J===n,onClick:function(t){if(f)t.preventDefault();else{t.persist();var r=t;r.item=e,r.index=n,M(r),X.current.focus(),ge({type:"listItemClick",element:X.current,event:r,item:e,index:n})}},onMouseOver:function(){return ne(n)},onMouseOut:function(){return ne(void 0)},onFocus:function(){ne(n),ie(!0)},onBlur:function(){ne(void 0),ie(!1)}}),B){b={draggable:!0,onDragStart:function(e){e.dataTransfer.setData("text/plain",""),e.dataTransfer.effectAllowed="move",le(n),ne(void 0)},onDragEnd:function(){le(void 0),he(void 0)},onDragOver:function(e){void 0!==ae&&(e.preventDefault(),ae!==n&&(e.dataTransfer.dropEffect="move",he(N(me||g,ae,n)),le(n)))},onDrop:function(){me&&B(me)},ref:ae===n?ve:void 0};var C=U.list.icons.up,z=U.list.icons.down;y=d.createElement(r.x,{direction:"row",align:"center",justify:"end"},d.createElement(u.z,{id:p+"MoveUp",a11yTitle:n+1+" "+p+" move up",icon:d.createElement(C,null),hoverIndicator:!0,focusIndicator:!1,disabled:!n,active:J===2*n,onClick:function(e){e.stopPropagation(),B(N(g,n,n-1))},tabIndex:-1,onMouseOver:function(){return ne(2*n)},onMouseOut:function(){return ne(void 0)},onFocus:function(){ne(2*n),ie(!0)},onBlur:function(){ne(void 0),ie(!1)}}),d.createElement(u.z,{id:p+"MoveDown",a11yTitle:n+1+" "+p+" move down",icon:d.createElement(z,null),hoverIndicator:!0,focusIndicator:!1,disabled:n>=g.length-1,active:J===2*n+1,onClick:function(e){e.stopPropagation(),B(N(g,n,n+1))},tabIndex:-1,onMouseOver:function(){return ne(2*n+1)},onMouseOut:function(){return ne(void 0)},onFocus:function(){ne(2*n+1),ie(!0)},onBlur:function(){ne(void 0),ie(!1)}})),a={direction:"row",align:x&&x.align||"center",gap:"medium"},t=d.createElement(r.x,{flex:!0},t)}return f&&(j={"aria-disabled":!0},M&&(j=P({},j,{"aria-selected":!1}))),k&&k[n]&&(a=P({},a,k[n])),d.createElement(S,P({key:p,tag:"li",background:m,border:E,isDisabled:f,flex:!1,pad:G||U.list.item.pad},x,a,h,b,j),B&&d.createElement(v.x,null,n+1),t,y)})))),W&&g.length>H&&se&&se.length?d.createElement(h.t,P({alignSelf:"end"},ue)):null)}));K.displayName="List",K.propTypes=C;var B=t(962);function G(){return G=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},G.apply(this,arguments)}var W=(0,d.forwardRef)((function(e,n){return d.createElement(B.x,G({ref:n,viewBox:"0 0 24 24",a11yTitle:"Add"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M12 22V2M2 12h20"}))}));function R(){return R=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},R.apply(this,arguments)}W.displayName="Add";var F=(0,d.forwardRef)((function(e,n){return d.createElement(B.x,R({ref:n,viewBox:"0 0 24 24",a11yTitle:"Apps"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M19 5h2V3h-2v2zm-8 0h2V3h-2v2zM3 5h2V3H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2z"}))}));function L(){return L=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},L.apply(this,arguments)}F.displayName="Apps";var q=(0,d.forwardRef)((function(e,n){return d.createElement(B.x,L({ref:n,viewBox:"0 0 24 24",a11yTitle:"Configure"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M16 15c4.009-.065 7-3.033 7-7 0-3.012-.997-2.015-2-1-.991.98-3 3-3 3l-4-4s2.02-2.009 3-3c1.015-1.003 1.015-2-1-2-3.967 0-6.947 2.991-7 7 .042.976 0 3 0 3-1.885 1.897-4.34 4.353-6 6-2.932 2.944 1.056 6.932 4 4 1.65-1.662 4.113-4.125 6-6 0 0 2.024-.042 3 0z"}))}));function H(){return H=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},H.apply(this,arguments)}q.displayName="Configure";var V=(0,d.forwardRef)((function(e,n){return d.createElement(B.x,H({ref:n,viewBox:"0 0 24 24",a11yTitle:"LinkNext"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M2 12h20m-9-9 9 9-9 9"}))}));V.displayName="LinkNext";var X=t(1664),U=t.n(X),$=t(5893);const J=[{name:"deviceGroup0",appid:"12341234",desc:"\u91d1\u4e4c1\u53f7"},{name:"deviceGroup1",appid:"12341234",desc:"\u91d1\u4e4c2\u53f7"},{name:"deviceGroup2",appid:"12341234",desc:"\u91d1\u4e4c3\u53f7"}];function Q(){const{0:e,1:n}=(0,d.useState)();return(0,$.jsxs)(r.x,{margin:"small",overflow:"auto",children:[e&&(0,$.jsx)(i.m,{position:"top",onClickOutside:()=>n(!1),children:(0,$.jsx)(o.l,{children:(0,$.jsxs)(r.x,{width:"medium",gap:"small",margin:"medium",children:[(0,$.jsxs)(r.x,{direction:"row",align:"center",gap:"small",children:[(0,$.jsx)(W,{size:"large"}),(0,$.jsx)(a.X,{children:"\u6dfb\u52a0\u8bbe\u5907\u7ec4"})]}),(0,$.jsx)(l.W,{label:"\u8bbe\u5907\u7ec4\u540d",children:(0,$.jsx)(c.o,{})}),(0,$.jsx)(l.W,{label:"\u8bbe\u5907\u7ec4\u63cf\u8ff0",children:(0,$.jsx)(s.K,{})}),(0,$.jsx)(l.W,{label:"\u914d\u989d",children:(0,$.jsx)(c.o,{placeholder:100})}),(0,$.jsxs)(r.x,{direction:"row",gap:"small",justify:"center",children:[(0,$.jsx)(u.z,{primary:!0,label:"\u786e\u5b9a",onClick:()=>n(!1)}),(0,$.jsx)(u.z,{label:"\u53d6\u6d88",onClick:()=>n(!1)})]})]})})}),(0,$.jsxs)(r.x,{direction:"row",align:"center",justify:"between",flex:!1,children:[(0,$.jsx)(a.X,{children:"\u8bbe\u5907\u7ec4\u5217\u8868"}),(0,$.jsx)(u.z,{primary:!0,label:"\u6dfb\u52a0\u8bbe\u5907\u7ec4",icon:(0,$.jsx)(W,{}),onClick:()=>n(!0)})]}),(0,$.jsx)(K,{data:J,children:e=>(0,$.jsxs)(r.x,{direction:"row",gap:"small",align:"center",children:[(0,$.jsxs)(r.x,{direction:"row",gap:"small",align:"center",width:"medium",children:[(0,$.jsx)(F,{}),(0,$.jsx)(v.x,{weight:"bold",children:e.name})]}),(0,$.jsx)(r.x,{flex:!0,children:(0,$.jsx)(v.x,{children:e.desc})}),(0,$.jsxs)(r.x,{direction:"row",gap:"small",align:"center",children:[(0,$.jsx)(U(),{href:"/deviceGroupSetting",children:(0,$.jsx)(u.z,{icon:(0,$.jsx)(q,{})})}),(0,$.jsx)(U(),{href:"/deviceDevices",children:(0,$.jsx)(u.z,{icon:(0,$.jsx)(V,{})})})]})]})})]})}var Y=(0,t(9294).e)((0,$.jsx)(Q,{}))},5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6983)}])}},function(e){e.O(0,[774,357,414,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
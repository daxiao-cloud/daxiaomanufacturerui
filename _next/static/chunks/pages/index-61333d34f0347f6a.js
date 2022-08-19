(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7509:function(e,n,t){"use strict";t.d(n,{t:function(){return O}});var r=t(7294),i=t(2125),o=t(1755),a=t(975);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}var c=function(e){var n=l({},e);return r.createElement(a.x,l({as:"nav",flex:!1,gap:"medium"},n))},s=t(846),u=t(9517),d=function(e){var n=e.theme.pagination.button&&e.theme.pagination.button.size&&e.theme.pagination.button.size[e.size||"medium"];return n?{content:{fontSize:n.font&&n.font.size,lineHeight:n.font&&n.font.height},container:{height:n.height,minWidth:n.width}}:""},f=(0,i.default)(s.z).withConfig({displayName:"StyledPageControl__StyledPaginationButton",componentId:"sc-1vlfaez-0"})(["> svg{margin:0 auto;}",";"],(function(e){return d(e).content})),p=i.default.div.withConfig({displayName:"StyledPageControl__StyledContainer",componentId:"sc-1vlfaez-1"})(["display:flex;align-items:center;justify-content:center;max-width:100%;",";",";"],(function(e){return d(e).container}),(function(e){return e.theme.pagination.control&&e.theme.pagination.control.extend})),m=(0,i.default)(u.x).withConfig({displayName:"StyledPageControl__StyledSeparator",componentId:"sc-1vlfaez-2"})(["font-weight:bold;",";",";"],(function(e){return"font-size: "+(d(e).content&&d(e).content.fontSize)}),(function(e){return"line-height: "+(d(e).content&&d(e).content.lineHeight)})),h=["control","separator","size"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}var g=function(e){var n=e.control,t=e.separator,o=e.size,a=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,h),l=(0,r.useContext)(i.ThemeContext),c=o||"medium";return r.createElement(p,{as:"li",size:c},t?r.createElement(m,{size:c},"\u2026"):r.createElement(f,v({a11yTitle:"Go to page "+n,fill:!0,kind:l.pagination.button,label:n,size:c},a)))};var x={},b=["a11yTitle","aria-label","numberItems","numberEdgePages","numberMiddlePages","onChange","page","size","step"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}var j=(0,i.default)(a.x).withConfig({displayName:"Pagination__StyledPaginationContainer",componentId:"sc-rnlw6m-0"})(["",""],(function(e){return e.theme.pagination.container&&e.theme.pagination.container.extend})),w=function(e,n){for(var t=[],r=e;r<=n;r+=1)t.push(r);return t},O=(0,r.forwardRef)((function(e,n){var t=e.a11yTitle,l=e["aria-label"],s=e.numberItems,u=e.numberEdgePages,d=void 0===u?1:u,f=e.numberMiddlePages,p=void 0===f?3:f,m=e.onChange,h=e.page,v=e.size,x=e.step,O=void 0===x?10:x,k=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,b),E=(0,r.useContext)(i.ThemeContext)||o.l.theme,M=Math.ceil(s/O),C=(0,r.useState)(Math.min(h,M)||1),z=C[0],P=C[1];(0,r.useEffect)((function(){P(h||1)}),[h]);var I,S,_=w(1,Math.min(d,M)),T=w(Math.max(M-d+1,d+1),M);p<1?(I=1,console.warn('Property "numberMiddlePages" should not be < 1. One middle page button will be shown. Set "numberMiddlePages" >= 1 to remove this warning.')):I=p,S=I%2?Math.min(z-Math.floor(I/2),M-d-I):Math.min(z-Math.floor(I/2)+1,M-d-I);var N=Math.max(S,d+2),D=Math.min(Math.max(z+Math.floor(I/2),d+I+1),T.length>0?T[0]-2:M-1),A=w(N,D),K=[];N>d+2?K=["more-prev"]:d+1<M-d&&(K=[d+1]);var B=[];D<M-d-1?B=["more-next"]:M-d>d&&(B=[M-d]);var G=function(e,n){if(P(n),m){e.persist();var t=e;t.page=n;var r=function(e){var n=O*(e-1);return{startIndex:n,endIndex:n+O}}(n),i=r.startIndex,o=r.endIndex;t.startIndex=i,t.endIndex=o,m(t)}},R=E.pagination.icons.next,W=E.pagination.icons.previous,F=E.pagination.icons.color,L={next:{"aria-disabled":z===M?"true":void 0,disabled:z===M||!s,icon:r.createElement(R,{color:F}),onClick:function(e){G(e,z+1)},label:void 0},previous:{"aria-disabled":1===z?"true":void 0,disabled:1===z||!s,icon:r.createElement(W,{color:F}),onClick:function(e){G(e,z-1)},label:void 0}},q=["previous"].concat(_,K,A,B,T,["next"]);return q=q.map((function(e){return y({active:e===z,a11yTitle:"number"===typeof e?"Go to page "+e:"Go to "+e+" page","aria-current":e===z?"page":void 0,control:e,onClick:function(n){G(n,e)},separator:"more-prev"===e||"more-next"===e},L[e])})),r.createElement(j,y({},E.pagination.container,k),r.createElement(c,{a11yTitle:l||t||"Pagination Navigation",ref:n},r.createElement(a.x,y({as:"ul"},E.pagination.controls),q.map((function(e,n){return r.createElement(g,y({key:n,size:v},e))})))))}));O.displayName="Pagination",O.propTypes=x},823:function(e,n,t){"use strict";t.d(n,{h:function(){return l},k:function(){return a}});var r=t(7294),i=["data","page","step"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}var a=function(e,n){var t;return"number"===typeof e?t=Math.ceil((e+1)/n):"object"===typeof e&&"page"in e&&(t=e.page),t},l=function(e){var n=e.data,t=e.page,a=e.step,l=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,i),c=n?Math.ceil(n.length/a):0,s=(0,r.useState)(Math.min(t,c)||1),u=s[0],d=s[1];u>c&&(null==n?void 0:n.length)>0&&d(Math.max(c,1));var f=a*(u-1),p=f+a;return[(0,r.useMemo)((function(){return Array.isArray(n)?n.slice(f,p):[]}),[n,f,p]),o({numberItems:n&&n.length,onChange:function(e){return d(e.page)},page:u,step:a},l)]}},9294:function(e,n,t){"use strict";t.d(n,{e:function(){return x}});var r=t(4052),i=t(975),o=t(6717),a=t(5893);function l({content:e}){return(0,a.jsx)(i.x,{border:"between",gap:"small",fill:!0,children:e})}var c=t(1194),s=t(846),u=t(7045),d=t(8560),f=t(3572),p=t(8288),m=t(5224),h=t(1664),v=t.n(h);function g(){return(0,a.jsxs)(c.h,{background:"brand",pad:"small",children:[(0,a.jsx)(i.x,{direction:"row",gap:"medium",align:"center",children:(0,a.jsx)(v(),{href:"/",children:(0,a.jsx)(s.z,{plain:!0,icon:(0,a.jsx)(f.A,{}),label:"\u5927\u6653\u8bbe\u5907\u5236\u9020\u5546\u5e73\u53f0"})})}),(0,a.jsx)(u.P,{options:["\u7b80\u4f53\u4e2d\u6587","English"],value:"\u7b80\u4f53\u4e2d\u6587"}),(0,a.jsx)(d.v,{label:(0,a.jsx)(p.n,{}),items:[{label:"\u9000\u51fa\u767b\u5f55",icon:(0,a.jsx)(m.R,{}),gap:"small"}]})]})}function x(e){return function(){return(0,a.jsx)(r.p,{full:!0,theme:o.Nw,children:(0,a.jsxs)(i.x,{fill:!0,children:[(0,a.jsx)(g,{}),(0,a.jsx)(l,{content:e})]})})}}},6983:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Q}});var r=t(975),i=t(5009),o=t(9019),a=t(211),l=t(5327),c=t(7610),s=t(8769),u=t(846),d=t(7294),f=t(2125),p=t(5017),m=t(9170),h=t(7509),v=t(9517),g=t(363),x=t(6808),b=t(7187),y=t(823),j=t(5697),w=t.n(j);var O=["none","xxsmall","xsmall","small","medium","large","xlarge"],k=["horizontal","vertical","top","bottom","left","right","start","end"],E={};k.forEach((function(e){E[e]=w().oneOf(O)}));w().bool,w().oneOf(k),w().shape({color:w().oneOfType([w().string,w().shape({dark:w().string,light:w().string})]),side:w().oneOf(k),size:w().oneOfType([w().oneOf(O),w().string])});var M={},C=["a11yTitle","aria-label","action","as","background","border","children","data","defaultItemProps","disabled","focus","itemKey","itemProps","onActive","onClickItem","onKeyDown","onMore","onOrder","pad","paginate","primaryKey","secondaryKey","show","step"];function z(){return z=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},z.apply(this,arguments)}var P=f.default.ul.withConfig({displayName:"List__StyledList",componentId:"sc-130gdqg-0"})(["list-style:none;"," padding:0;"," &:focus{","}","}","}"],(function(e){return!e.margin&&"margin: 0;"}),g.$G,(function(e){return e.tabIndex>=0&&(0,g.jq)({forceOutline:!0,skipSvgChildren:!0})}),(function(e){return e.itemFocus&&(0,g.jq)({forceOutline:!0,skipSvgChildren:!0})}),(function(e){return e.theme.list&&e.theme.list.extend})),I=(0,f.default)(r.x).withConfig({displayName:"List__StyledItem",componentId:"sc-130gdqg-1"})([""," "," &:focus{","}"," &:hover{","}",""],(function(e){return e.onClick&&!e.isDisabled&&"cursor: pointer;"}),(function(e){return e.draggable&&!e.isDisabled&&"cursor: move;"}),(0,g.GA)({forceOutline:!0,skipSvgChildren:!0}),(function(e){var n,t,r;if(e.isDisabled&&null!=(n=e.theme.list)&&null!=(t=n.item)&&t.disabled){var i=e.theme.list.item.disabled,o=i.color,a=i.cursor;r={color:(0,x.ut)(o,e.theme),cursor:a}}return r}),(function(e){return e.isDisabled&&"background-color: unset;"}),(function(e){return e.theme.list&&e.theme.list.item&&e.theme.list.item.extend})),S=(0,f.default)(r.x).withConfig({displayName:"List__StyledContainer",componentId:"sc-130gdqg-2"})(["",";"],(function(e){return e.theme.list&&e.theme.list.container&&e.theme.list.container.extend})),_=function(e,n,t){return"function"===typeof t?t(e,n):e[t]},T=function(e,n,t){var r=e.slice(0),i=r[n];if(n<t)for(var o=n;o<t;o+=1)r[o]=r[o+1];else for(var a=n;a>t;a-=1)r[a]=r[a-1];return r[t]=i,r},N=function(e,n,t){return"string"===typeof t?t:"string"===typeof e?e:n},D=function(e,n,t){var r=function(e,n,t){var r;return t&&(r="function"===typeof t?t(e,n):_(e,n,t)),r}(e,n,t);return N(e,n,r)},A=d.forwardRef((function(e,n){var t=e.a11yTitle,i=e["aria-label"],o=e.action,a=e.as,l=e.background,c=e.border,s=e.children,g=e.data,x=e.defaultItemProps,j=e.disabled,w=(e.focus,e.itemKey),O=e.itemProps,k=e.onActive,E=e.onClickItem,M=e.onKeyDown,A=e.onMore,K=e.onOrder,B=e.pad,G=e.paginate,R=e.primaryKey,W=e.secondaryKey,F=e.show,L=e.step,q=void 0===L?G?50:void 0:L,H=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,C),V=(0,b.t)(n),X=(0,d.useContext)(f.ThemeContext),U=(0,d.useState)(),$=U[0],J=U[1],Q=(0,d.useState)(),Y=Q[0],Z=Q[1],ee=function(e){J(e),k&&E&&e!==$&&k(e)},ne=(0,d.useState)(),te=ne[0],re=ne[1],ie=(0,d.useState)(),oe=ie[0],ae=ie[1],le=(0,y.h)(z({data:g,page:(0,y.k)(F,q),step:q},G)),ce=le[0],se=le[1],ue=G?S:d.Fragment,de=G?z({},X.list.container):void 0,fe=(0,d.useState)(),pe=fe[0],me=fe[1],he=(0,d.useRef)(),ve={role:E||K?"listbox":"list"};if($>=0){var ge;if(K){var xe=$%2?"MoveDown":"MoveUp",be=Math.trunc($/2);ge=""+D(g[be],be,R)+xe}else E&&(ge=D(g[$],$,R));ve["aria-activedescendant"]=ge}return d.createElement(ue,de,d.createElement(m.N,{onEnter:(E||K)&&$>=0?function(e){if(K){var n=Math.trunc($/2);$%2?(K(T(g,n,n+1)),ee(Math.min($+2,2*g.length-2))):(K(T(g,n,n-1)),ee(Math.max($-2,1)))}else if(null!=j&&j.includes("function"===typeof w?w(g[$]):g[$]))e.preventDefault();else if(E){e.persist();var t=e;t.item=g[$],t.index=$,E(t)}}:void 0,onUp:(E||K)&&$?function(){var e=K?1:0;ee(Math.max($-1,e))}:void 0,onDown:(E||K)&&g&&g.length?function(){var e=K?1:0,n=K?2*g.length-2:g.length-1;ee($>=e?Math.min($+1,n):e)}:void 0,onKeyDown:M},d.createElement(P,z({"aria-label":i||t,ref:V,as:a||"ul",itemFocus:te,tabIndex:E||K?0:void 0,onFocus:function(){return ee($||0===$?$:Y)},onBlur:function(){Z($),ee(void 0)}},ve,H),d.createElement(p.v,{items:G?ce:pe||g,onMore:A,show:G?void 0:F,step:q,renderMarker:function(e){return d.createElement(r.x,{as:"li",flex:!1},e)}},(function(e,n){var t,i,a={};s?t=s(e,n,E?{active:$===n}:void 0):R?("function"===typeof R?t=i=R(e,n):(i=_(e,n,R),t=d.createElement(v.x,{key:"p",weight:"bold"},i)),W&&(t="function"===typeof W?[t,W(e,n)]:[t,d.createElement(v.x,{key:"s"},_(e,n,W))],a={direction:"row",align:"center",justify:"between",gap:"medium"})):t="object"===typeof e?e[Object.keys(e)[0]]:e,w&&(i="function"===typeof w?w(e):_(e,n,w));var f,p=w?i:N(e,n,i);j&&("object"!==typeof e||w||console.error("Warning: Missing prop itemKey. Prop disabled requires itemKey to be specified when data is of type 'object'."),f=null==j?void 0:j.includes(p)),o&&(t=[d.createElement(r.x,{align:"start",key:"actionContainer"+n},t),o(e,n)],a={direction:"row",align:W?"start":"center",justify:"between",gap:"medium"});var m=l||X.list.item.background;!K&&$===n||oe===n?m=X.global.hover.background:Array.isArray(m)&&(m=m[n%m.length]);var h,b,y,k,M=void 0!==c?c:X.list.item.border;if("horizontal"===M&&n&&(M="bottom"),E&&!K&&(h={role:"option",tabIndex:-1,active:$===n,onClick:function(t){if(f)t.preventDefault();else{t.persist();var r=t;r.item=e,r.index=n,E(r),V.current.focus()}},onMouseOver:function(){return ee(n)},onMouseOut:function(){return ee(void 0)},onFocus:function(){ee(n),re(!0)},onBlur:function(){ee(void 0),re(!1)}}),K){b={draggable:!0,onDragStart:function(e){e.dataTransfer.setData("text/plain",""),e.dataTransfer.effectAllowed="move",ae(n),ee(void 0)},onDragEnd:function(){ae(void 0),me(void 0)},onDragOver:function(e){void 0!==oe&&(e.preventDefault(),oe!==n&&(e.dataTransfer.dropEffect="move",me(T(pe||g,oe,n)),ae(n)))},onDrop:function(){pe&&K(pe)},ref:oe===n?he:void 0};var C=X.list.icons.up,P=X.list.icons.down;y=d.createElement(r.x,{direction:"row",align:"center",justify:"end"},d.createElement(u.z,{id:p+"MoveUp",a11yTitle:n+1+" "+p+" move up",icon:d.createElement(C,null),hoverIndicator:!0,focusIndicator:!1,disabled:!n,active:$===2*n,onClick:function(e){e.stopPropagation(),K(T(g,n,n-1))},tabIndex:-1,onMouseOver:function(){return ee(2*n)},onMouseOut:function(){return ee(void 0)},onFocus:function(){ee(2*n),re(!0)},onBlur:function(){ee(void 0),re(!1)}}),d.createElement(u.z,{id:p+"MoveDown",a11yTitle:n+1+" "+p+" move down",icon:d.createElement(P,null),hoverIndicator:!0,focusIndicator:!1,disabled:n>=g.length-1,active:$===2*n+1,onClick:function(e){e.stopPropagation(),K(T(g,n,n+1))},tabIndex:-1,onMouseOver:function(){return ee(2*n+1)},onMouseOut:function(){return ee(void 0)},onFocus:function(){ee(2*n+1),re(!0)},onBlur:function(){ee(void 0),re(!1)}})),a={direction:"row",align:x&&x.align||"center",gap:"medium"},t=d.createElement(r.x,{flex:!0},t)}return f&&(k={"aria-disabled":!0},E&&(k=z({},k,{"aria-selected":!1}))),O&&O[n]&&(a=z({},a,O[n])),d.createElement(I,z({key:p,tag:"li",background:m,border:M,isDisabled:f,flex:!1,pad:B||X.list.item.pad},x,a,h,b,k),K&&d.createElement(v.x,null,n+1),t,y)})))),G&&g.length>q&&ce&&ce.length?d.createElement(h.t,z({alignSelf:"end"},se)):null)}));A.displayName="List",A.propTypes=M;var K=t(962);function B(){return B=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},B.apply(this,arguments)}var G=(0,d.forwardRef)((function(e,n){return d.createElement(K.x,B({ref:n,viewBox:"0 0 24 24",a11yTitle:"Add"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M12 22V2M2 12h20"}))}));function R(){return R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},R.apply(this,arguments)}G.displayName="Add";var W=(0,d.forwardRef)((function(e,n){return d.createElement(K.x,R({ref:n,viewBox:"0 0 24 24",a11yTitle:"Apps"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M19 5h2V3h-2v2zm-8 0h2V3h-2v2zM3 5h2V3H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2z"}))}));function F(){return F=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},F.apply(this,arguments)}W.displayName="Apps";var L=(0,d.forwardRef)((function(e,n){return d.createElement(K.x,F({ref:n,viewBox:"0 0 24 24",a11yTitle:"Configure"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M16 15c4.009-.065 7-3.033 7-7 0-3.012-.997-2.015-2-1-.991.98-3 3-3 3l-4-4s2.02-2.009 3-3c1.015-1.003 1.015-2-1-2-3.967 0-6.947 2.991-7 7 .042.976 0 3 0 3-1.885 1.897-4.34 4.353-6 6-2.932 2.944 1.056 6.932 4 4 1.65-1.662 4.113-4.125 6-6 0 0 2.024-.042 3 0z"}))}));function q(){return q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},q.apply(this,arguments)}L.displayName="Configure";var H=(0,d.forwardRef)((function(e,n){return d.createElement(K.x,q({ref:n,viewBox:"0 0 24 24",a11yTitle:"LinkNext"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M2 12h20m-9-9 9 9-9 9"}))}));H.displayName="LinkNext";var V=t(1664),X=t.n(V),U=t(5893);const $=[{name:"deviceGroup0",appid:"12341234",desc:"\u91d1\u4e4c1\u53f7"},{name:"deviceGroup1",appid:"12341234",desc:"\u91d1\u4e4c2\u53f7"},{name:"deviceGroup2",appid:"12341234",desc:"\u91d1\u4e4c3\u53f7"}];function J(){const{0:e,1:n}=(0,d.useState)();return(0,U.jsxs)(r.x,{margin:"small",overflow:"auto",children:[e&&(0,U.jsx)(i.m,{position:"top",onClickOutside:()=>n(!1),children:(0,U.jsx)(o.l,{children:(0,U.jsxs)(r.x,{width:"medium",gap:"small",margin:"medium",children:[(0,U.jsxs)(r.x,{direction:"row",align:"center",gap:"small",children:[(0,U.jsx)(G,{size:"large"}),(0,U.jsx)(a.X,{children:"\u6dfb\u52a0\u8bbe\u5907\u7ec4"})]}),(0,U.jsx)(l.W,{label:"\u8bbe\u5907\u7ec4\u540d",children:(0,U.jsx)(c.o,{})}),(0,U.jsx)(l.W,{label:"\u8bbe\u5907\u7ec4\u63cf\u8ff0",children:(0,U.jsx)(s.K,{})}),(0,U.jsxs)(r.x,{direction:"row",gap:"small",justify:"center",children:[(0,U.jsx)(u.z,{primary:!0,label:"\u786e\u5b9a",onClick:()=>n(!1)}),(0,U.jsx)(u.z,{label:"\u53d6\u6d88",onClick:()=>n(!1)})]})]})})}),(0,U.jsxs)(r.x,{direction:"row",align:"center",justify:"between",flex:!1,children:[(0,U.jsx)(a.X,{children:"\u8bbe\u5907\u7ec4\u5217\u8868"}),(0,U.jsx)(u.z,{primary:!0,label:"\u6dfb\u52a0\u8bbe\u5907\u7ec4",icon:(0,U.jsx)(G,{}),onClick:()=>n(!0)})]}),(0,U.jsx)(A,{data:$,children:e=>(0,U.jsxs)(r.x,{direction:"row",gap:"small",align:"center",children:[(0,U.jsxs)(r.x,{direction:"row",gap:"small",align:"center",width:"medium",children:[(0,U.jsx)(W,{}),(0,U.jsx)(v.x,{weight:"bold",children:e.name})]}),(0,U.jsx)(r.x,{flex:!0,children:(0,U.jsx)(v.x,{children:e.desc})}),(0,U.jsxs)(r.x,{direction:"row",gap:"small",align:"center",children:[(0,U.jsx)(X(),{href:"/deviceGroupSetting",children:(0,U.jsx)(u.z,{icon:(0,U.jsx)(L,{})})}),(0,U.jsx)(X(),{href:"/deviceDevices",children:(0,U.jsx)(u.z,{icon:(0,U.jsx)(H,{})})})]})]})})]})}var Q=(0,t(9294).e)((0,U.jsx)(J,{}))},5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6983)}])}},function(e){e.O(0,[774,357,414,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7509:function(e,n,t){"use strict";t.d(n,{t:function(){return O}});var i=t(7294),r=t(2125),o=t(1755),a=t(975);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},l.apply(this,arguments)}var c=function(e){var n=l({},e);return i.createElement(a.x,l({as:"nav",flex:!1,gap:"medium"},n))},s=t(846),u=t(9517),d=function(e){var n=e.theme.pagination.button&&e.theme.pagination.button.size&&e.theme.pagination.button.size[e.size||"medium"];return n?{content:{fontSize:n.font&&n.font.size,lineHeight:n.font&&n.font.height},container:{height:n.height,minWidth:n.width}}:""},f=(0,r.default)(s.z).withConfig({displayName:"StyledPageControl__StyledPaginationButton",componentId:"sc-1vlfaez-0"})(["> svg{margin:0 auto;}",";"],(function(e){return d(e).content})),p=r.default.div.withConfig({displayName:"StyledPageControl__StyledContainer",componentId:"sc-1vlfaez-1"})(["display:flex;align-items:center;justify-content:center;max-width:100%;",";",";"],(function(e){return d(e).container}),(function(e){return e.theme.pagination.control&&e.theme.pagination.control.extend})),m=(0,r.default)(u.x).withConfig({displayName:"StyledPageControl__StyledSeparator",componentId:"sc-1vlfaez-2"})(["font-weight:bold;",";",";"],(function(e){return"font-size: "+(d(e).content&&d(e).content.fontSize)}),(function(e){return"line-height: "+(d(e).content&&d(e).content.lineHeight)})),h=["control","separator","size"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},v.apply(this,arguments)}var g=function(e){var n=e.control,t=e.separator,o=e.size,a=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,h),l=(0,i.useContext)(r.ThemeContext),c=o||"medium";return i.createElement(p,{as:"li",size:c},t?i.createElement(m,{size:c},"\u2026"):i.createElement(f,v({a11yTitle:"Go to page "+n,fill:!0,kind:l.pagination.button,label:n,size:c},a)))};var x={},b=["a11yTitle","aria-label","numberItems","numberEdgePages","numberMiddlePages","onChange","page","size","step"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},y.apply(this,arguments)}var j=(0,r.default)(a.x).withConfig({displayName:"Pagination__StyledPaginationContainer",componentId:"sc-rnlw6m-0"})(["",""],(function(e){return e.theme.pagination.container&&e.theme.pagination.container.extend})),w=function(e,n){for(var t=[],i=e;i<=n;i+=1)t.push(i);return t},O=(0,i.forwardRef)((function(e,n){var t=e.a11yTitle,l=e["aria-label"],s=e.numberItems,u=e.numberEdgePages,d=void 0===u?1:u,f=e.numberMiddlePages,p=void 0===f?3:f,m=e.onChange,h=e.page,v=e.size,x=e.step,O=void 0===x?10:x,k=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,b),E=(0,i.useContext)(r.ThemeContext)||o.l.theme,M=Math.ceil(s/O),z=(0,i.useState)(Math.min(h,M)||1),C=z[0],P=z[1];(0,i.useEffect)((function(){P(h||1)}),[h]);var I,S,_=w(1,Math.min(d,M)),T=w(Math.max(M-d+1,d+1),M);p<1?(I=1,console.warn('Property "numberMiddlePages" should not be < 1. One middle page button will be shown. Set "numberMiddlePages" >= 1 to remove this warning.')):I=p,S=I%2?Math.min(C-Math.floor(I/2),M-d-I):Math.min(C-Math.floor(I/2)+1,M-d-I);var N=Math.max(S,d+2),D=Math.min(Math.max(C+Math.floor(I/2),d+I+1),T.length>0?T[0]-2:M-1),K=w(N,D),A=[];N>d+2?A=["more-prev"]:d+1<M-d&&(A=[d+1]);var W=[];D<M-d-1?W=["more-next"]:M-d>d&&(W=[M-d]);var B=function(e,n){if(P(n),m){e.persist();var t=e;t.page=n;var i=function(e){var n=O*(e-1);return{startIndex:n,endIndex:n+O}}(n),r=i.startIndex,o=i.endIndex;t.startIndex=r,t.endIndex=o,m(t)}},G=E.pagination.icons.next,R=E.pagination.icons.previous,q=E.pagination.icons.color,F={next:{"aria-disabled":C===M?"true":void 0,disabled:C===M||!s,icon:i.createElement(G,{color:q}),onClick:function(e){B(e,C+1)},label:void 0},previous:{"aria-disabled":1===C?"true":void 0,disabled:1===C||!s,icon:i.createElement(R,{color:q}),onClick:function(e){B(e,C-1)},label:void 0}},L=["previous"].concat(_,A,K,W,T,["next"]);return L=L.map((function(e){return y({active:e===C,a11yTitle:"number"===typeof e?"Go to page "+e:"Go to "+e+" page","aria-current":e===C?"page":void 0,control:e,onClick:function(n){B(n,e)},separator:"more-prev"===e||"more-next"===e},F[e])})),i.createElement(j,y({},E.pagination.container,k),i.createElement(c,{a11yTitle:l||t||"Pagination Navigation",ref:n},i.createElement(a.x,y({as:"ul"},E.pagination.controls),L.map((function(e,n){return i.createElement(g,y({key:n,size:v},e))})))))}));O.displayName="Pagination",O.propTypes=x},823:function(e,n,t){"use strict";t.d(n,{h:function(){return l},k:function(){return a}});var i=t(7294),r=["data","page","step"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}var a=function(e,n){var t;return"number"===typeof e?t=Math.ceil((e+1)/n):"object"===typeof e&&"page"in e&&(t=e.page),t},l=function(e){var n=e.data,t=e.page,a=e.step,l=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,r),c=n?Math.ceil(n.length/a):0,s=(0,i.useState)(Math.min(t,c)||1),u=s[0],d=s[1];u>c&&(null==n?void 0:n.length)>0&&d(Math.max(c,1));var f=a*(u-1),p=f+a;return[(0,i.useMemo)((function(){return Array.isArray(n)?n.slice(f,p):[]}),[n,f,p]),o({numberItems:n&&n.length,onChange:function(e){return d(e.page)},page:u,step:a},l)]}},9294:function(e,n,t){"use strict";t.d(n,{e:function(){return b}});var i=t(4052),r=t(975),o=t(6717),a=t(5893);function l({content:e}){return(0,a.jsx)(r.x,{border:"between",gap:"small",fill:!0,children:e})}var c=t(1194),s=t(846),u=t(5217),d=t(8560),f=t(3572),p=t(8288),m=t(5321),h=t(5224),v=t(1664),g=t.n(v);function x(){return(0,a.jsxs)(c.h,{background:"brand",pad:"small",children:[(0,a.jsx)(r.x,{direction:"row",gap:"medium",align:"center",children:(0,a.jsx)(g(),{href:"/",children:(0,a.jsx)(s.z,{plain:!0,icon:(0,a.jsx)(f.A,{}),label:"\u5927\u6653\u8bbe\u5907\u5236\u9020\u5546\u5e73\u53f0"})})}),(0,a.jsx)(u.P,{options:["\u7b80\u4f53\u4e2d\u6587","English"],value:"\u7b80\u4f53\u4e2d\u6587"}),(0,a.jsx)(d.v,{label:(0,a.jsx)(p.n,{}),items:[{label:(0,a.jsx)(g(),{href:"/enterprise",children:(0,a.jsx)(s.z,{plain:!0,label:"\u4f01\u4e1a\u8ba4\u8bc1"})}),icon:(0,a.jsx)(m.K,{}),gap:"small"},{label:"\u9000\u51fa\u767b\u5f55",icon:(0,a.jsx)(h.R,{}),gap:"small"}]})]})}function b(e){return function(){return(0,a.jsx)(i.p,{full:!0,theme:o.Nw,children:(0,a.jsxs)(r.x,{fill:!0,children:[(0,a.jsx)(x,{}),(0,a.jsx)(l,{content:e})]})})}}},6983:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Y}});var i=t(975),r=t(5009),o=t(9019),a=t(211),l=t(5327),c=t(7610),s=t(8769),u=t(846),d=t(7294),f=t(2125),p=t(5017),m=t(9170),h=t(7509),v=t(9517),g=t(363),x=t(6808),b=t(7187),y=t(823),j=t(7921),w=t(5697),O=t.n(w);var k=["none","xxsmall","xsmall","small","medium","large","xlarge"],E=["horizontal","vertical","top","bottom","left","right","start","end"],M={};E.forEach((function(e){M[e]=O().oneOf(k)}));O().bool,O().oneOf(E),O().shape({color:O().oneOfType([O().string,O().shape({dark:O().string,light:O().string})]),side:O().oneOf(E),size:O().oneOfType([O().oneOf(k),O().string])});var z={},C=["a11yTitle","aria-label","action","as","background","border","children","data","defaultItemProps","disabled","focus","itemKey","itemProps","onActive","onClickItem","onKeyDown","onMore","onOrder","pad","paginate","pinned","primaryKey","secondaryKey","show","step"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},P.apply(this,arguments)}var I=f.default.ul.withConfig({displayName:"List__StyledList",componentId:"sc-130gdqg-0"})(["list-style:none;"," padding:0;"," &:focus{","}","}","}"],(function(e){return!e.margin&&"margin: 0;"}),g.$G,(function(e){return e.tabIndex>=0&&(0,g.jq)({forceOutline:!0,skipSvgChildren:!0})}),(function(e){return e.itemFocus&&(0,g.jq)({forceOutline:!0,skipSvgChildren:!0})}),(function(e){return e.theme.list&&e.theme.list.extend})),S=(0,f.default)(i.x).withConfig({displayName:"List__StyledItem",componentId:"sc-130gdqg-1"})([""," "," &:focus{","}"," &:hover{","}",""],(function(e){return e.onClick&&!e.isDisabled&&"cursor: pointer;"}),(function(e){return e.draggable&&!e.isDisabled&&"cursor: move;"}),(0,g.GA)({forceOutline:!0,skipSvgChildren:!0}),(function(e){var n,t,i;if(e.isDisabled&&null!=(n=e.theme.list)&&null!=(t=n.item)&&t.disabled){var r=e.theme.list.item.disabled,o=r.color,a=r.cursor;i={color:(0,x.ut)(o,e.theme),cursor:a}}return i}),(function(e){return e.isDisabled&&"background-color: unset;"}),(function(e){return e.theme.list&&e.theme.list.item&&e.theme.list.item.extend})),_=(0,f.default)(i.x).withConfig({displayName:"List__StyledContainer",componentId:"sc-130gdqg-2"})(["",";"],(function(e){return e.theme.list&&e.theme.list.container&&e.theme.list.container.extend})),T=function(e,n,t){return"function"===typeof t?t(e,n):e[t]},N=function(e,n,t,i){var r=e.slice(0),o=r[t];if(t<i)for(var a=t;a<i;a+=1)r[a]=r[a+1];else for(var l=t;l>i;l-=1)r[l]=r[l-1];return r[i]=o,n.data.length>0&&n.data.forEach((function(e,t){r.splice(n.indexes[t],0,e)})),r},D=function(e,n,t){return"string"===typeof t?t:"string"===typeof e?e:n},K=function(e,n,t){var i=function(e,n,t){var i;return t&&(i="function"===typeof t?t(e,n):T(e,n,t)),i}(e,n,t);return D(e,n,i)},A=d.forwardRef((function(e,n){var t=e.a11yTitle,r=e["aria-label"],o=e.action,a=e.as,l=e.background,c=e.border,s=e.children,g=e.data,x=e.defaultItemProps,w=e.disabled,O=(e.focus,e.itemKey),k=e.itemProps,E=e.onActive,M=e.onClickItem,z=e.onKeyDown,A=e.onMore,W=e.onOrder,B=e.pad,G=e.paginate,R=e.pinned,q=void 0===R?[]:R,F=e.primaryKey,L=e.secondaryKey,H=e.show,V=e.step,X=void 0===V?G?50:void 0:V,U=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,C),$=(0,b.t)(n),J=(0,d.useContext)(f.ThemeContext),Q=O||F||null,Y=(0,d.useState)(),Z=Y[0],ee=Y[1],ne=(0,d.useState)(),te=ne[0],ie=ne[1],re=function(e){ee(e),E&&M&&e!==Z&&E(e)},oe=(0,d.useState)(),ae=oe[0],le=oe[1],ce=(0,d.useState)(),se=ce[0],ue=ce[1],de=(0,d.useState)(),fe=de[0],pe=de[1],me=(0,d.useMemo)((function(){var e=[],n=[],t=[],i=fe||g;return 0===q.length?[i,{data:n,indexes:t}]:(i.forEach((function(i,r){var o="object"===typeof i?i[Q]:i;q.includes(o)?(n.push(i),t.push(r)):e.push(i)})),[e,{data:n,indexes:t}])}),[g,fe,Q,q]),he=me[0],ve=me[1],ge=(0,y.h)(P({data:g,page:(0,y.k)(H,X),step:X},G)),xe=ge[0],be=ge[1],ye=G?_:d.Fragment,je=G?P({},J.list.container):void 0,we=(0,d.useRef)(),Oe=(0,j.z$)(),ke={role:M||W?"listbox":"list"};if(Z>=0){var Ee;if(W){var Me=Z%2?"MoveDown":"MoveUp",ze=Math.trunc(Z/2);Ee=""+K(he[ze],ze,F)+Me}else M&&(Ee=K(he[Z],Z,F));ke["aria-activedescendant"]=Ee}return d.createElement(ye,je,d.createElement(m.N,{onEnter:(M||W)&&Z>=0?function(e){if(W){var n=Math.trunc(Z/2);Z%2?(W(N(he,ve,n,n+1)),re(Math.min(Z+2,2*he.length-2))):(W(N(he,ve,n,n-1)),re(Math.max(Z-2,1)))}else if(null!=w&&w.includes("function"===typeof Q?Q(g[Z]):g[Z]))e.preventDefault();else if(M){e.persist();var t=e;t.item=g[Z],t.index=Z,M(t),Oe({type:"listItemClick",element:$.current,event:t,item:g[Z],index:Z})}}:void 0,onUp:(M||W)&&Z?function(){var e=W?1:0;re(Math.max(Z-1,e))}:void 0,onDown:(M||W)&&he&&he.length?function(){var e=W?1:0,n=W?2*he.length-2:g.length-1;re(Z>=e?Math.min(Z+1,n):e)}:void 0,onKeyDown:z},d.createElement(I,P({"aria-label":r||t,ref:$,as:a||"ul",itemFocus:ae,tabIndex:M||W?0:void 0,onFocus:function(){return re(Z||0===Z?Z:te)},onBlur:function(){ie(Z),re(void 0)}},ke,U),d.createElement(p.v,{items:G?xe:fe||g,onMore:A,show:G?void 0:H,step:X,renderMarker:function(e){return d.createElement(i.x,{as:"li",flex:!1},e)}},(function(e,n){var t,r,a={};s?t=s(e,n,M?{active:Z===n}:void 0):F?("function"===typeof F?t=r=F(e,n):(r=T(e,n,F),t=d.createElement(v.x,{key:"p",weight:"bold"},r)),L&&(t="function"===typeof L?[t,L(e,n)]:[t,d.createElement(v.x,{key:"s"},T(e,n,L))],a={direction:"row",align:"center",justify:"between",gap:"medium"})):t="object"===typeof e?e[Object.keys(e)[0]]:e,Q&&(r="function"===typeof Q?Q(e):T(e,n,Q));var f,p,m=Q?r:D(e,n,r),h=he.findIndex((function(e){return("object"===typeof e?e[Q]:e)===m}));w&&("object"!==typeof e||Q||console.error("Warning: Missing prop itemKey. Prop disabled requires itemKey to be specified when data is of type 'object'."),f=null==w?void 0:w.includes(m)),q.length>0&&("object"!==typeof e||Q||console.error("Warning: Missing prop itemKey. Prop pin requires itemKey to be specified when data is of type 'object'."),p=null==q?void 0:q.includes(m)),o&&(t=[d.createElement(i.x,{align:"start",key:"actionContainer"+n},t),o(e,n)],a={direction:"row",align:L?"start":"center",justify:"between",gap:"medium"});var g=l||J.list.item.background;!W&&Z===n||se===n?g=J.global.hover.background:Array.isArray(g)?g=g[n%g.length]:p&&(g=J.list.item.pinned.background);var b,y,j,O,E,z=void 0!==c?c:J.list.item.border;if("horizontal"===z&&n&&(z="bottom"),M&&!W&&(b={role:"option",tabIndex:-1,active:Z===n,onClick:function(t){if(f)t.preventDefault();else{t.persist();var i=t;i.item=e,i.index=n,M(i),$.current.focus(),Oe({type:"listItemClick",element:$.current,event:i,item:e,index:n})}},onMouseOver:function(){return re(n)},onMouseOut:function(){return re(void 0)},onFocus:function(){re(n),le(!0)},onBlur:function(){re(void 0),le(!1)}}),W&&!p){y={draggable:!0,onDragStart:function(e){e.dataTransfer.setData("text/plain",""),e.dataTransfer.effectAllowed="move",ue(h),re(void 0)},onDragEnd:function(){ue(void 0),pe(void 0)},onDragOver:function(e){void 0!==se&&(e.preventDefault(),se!==h&&(e.dataTransfer.dropEffect="move",pe(N(he,ve,se,h)),ue(h)))},onDrop:function(){fe&&W(fe)},ref:se===h?we:void 0};var C=J.list.icons.up,I=J.list.icons.down;j=!p&&d.createElement(i.x,{direction:"row",align:"center",justify:"end"},d.createElement(u.z,{id:m+"MoveUp",a11yTitle:h+1+" "+m+" move up",icon:d.createElement(C,null),hoverIndicator:!0,focusIndicator:!1,disabled:!h,active:Z===2*h,onClick:function(e){e.stopPropagation(),W(N(he,ve,h,h-1))},tabIndex:-1,onMouseOver:function(){return re(2*h)},onMouseOut:function(){return re(void 0)},onFocus:function(){re(2*h),le(!0)},onBlur:function(){re(void 0),le(!1)}}),d.createElement(u.z,{id:m+"MoveDown",a11yTitle:h+1+" "+m+" move down",icon:d.createElement(I,null),hoverIndicator:!0,focusIndicator:!1,disabled:h>=he.length-1,active:Z===2*h+1,onClick:function(e){e.stopPropagation(),W(N(he,ve,h,h+1))},tabIndex:-1,onMouseOver:function(){return re(2*h+1)},onMouseOut:function(){return re(void 0)},onFocus:function(){re(2*h+1),le(!0)},onBlur:function(){re(void 0),le(!1)}})),t=d.createElement(i.x,P({flex:!0},a),t),a={direction:"row",align:x&&x.align||"center",gap:"medium"}}if(f&&(O={"aria-disabled":!0},M&&(O=P({},O,{"aria-selected":!1}))),p){var _=J.list.icons.pin,K=J.list.item.pinned.icon.size,A=J.list.item.pinned.icon.pad;a={direction:"row",align:x&&x.align||"center",gap:"medium"},E=d.createElement(i.x,{direction:"row",align:"center",justify:"end",pad:A},d.createElement(_,{size:K})),t=d.createElement(i.x,{flex:!0},t)}return k&&k[n]&&(a=P({},a,k[n])),d.createElement(S,P({key:m,tag:"li",background:g,border:z,isDisabled:f,flex:!1,pad:B||J.list.item.pad},x,a,b,y,O),W&&d.createElement(v.x,null,n+1),t,E,j)})))),G&&g.length>X&&xe&&xe.length?d.createElement(h.t,P({alignSelf:"end"},be)):null)}));A.displayName="List",A.propTypes=z;var W=t(962);function B(){return B=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},B.apply(this,arguments)}var G=(0,d.forwardRef)((function(e,n){return d.createElement(W.x,B({ref:n,viewBox:"0 0 24 24",a11yTitle:"Add"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M12 22V2M2 12h20"}))}));function R(){return R=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},R.apply(this,arguments)}G.displayName="Add";var q=(0,d.forwardRef)((function(e,n){return d.createElement(W.x,R({ref:n,viewBox:"0 0 24 24",a11yTitle:"Apps"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M19 5h2V3h-2v2zm-8 0h2V3h-2v2zM3 5h2V3H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2zm16 8h2v-2h-2v2zm-8 0h2v-2h-2v2zm-8 0h2v-2H3v2z"}))}));function F(){return F=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},F.apply(this,arguments)}q.displayName="Apps";var L=(0,d.forwardRef)((function(e,n){return d.createElement(W.x,F({ref:n,viewBox:"0 0 24 24",a11yTitle:"Configure"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M16 15c4.009-.065 7-3.033 7-7 0-3.012-.997-2.015-2-1-.991.98-3 3-3 3l-4-4s2.02-2.009 3-3c1.015-1.003 1.015-2-1-2-3.967 0-6.947 2.991-7 7 .042.976 0 3 0 3-1.885 1.897-4.34 4.353-6 6-2.932 2.944 1.056 6.932 4 4 1.65-1.662 4.113-4.125 6-6 0 0 2.024-.042 3 0z"}))}));function H(){return H=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},H.apply(this,arguments)}L.displayName="Configure";var V=(0,d.forwardRef)((function(e,n){return d.createElement(W.x,H({ref:n,viewBox:"0 0 24 24",a11yTitle:"LinkNext"},e),d.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M2 12h20m-9-9 9 9-9 9"}))}));V.displayName="LinkNext";var X=t(1664),U=t.n(X),$=t(5893);const J=[{name:"deviceGroup0",appid:"12341234",desc:"\u91d1\u4e4c1\u53f7"},{name:"deviceGroup1",appid:"12341234",desc:"\u91d1\u4e4c2\u53f7"},{name:"deviceGroup2",appid:"12341234",desc:"\u91d1\u4e4c3\u53f7"}];function Q(){const{0:e,1:n}=(0,d.useState)();return(0,$.jsxs)(i.x,{margin:"small",overflow:"auto",children:[e&&(0,$.jsx)(r.m,{position:"top",onClickOutside:()=>n(!1),children:(0,$.jsx)(o.l,{children:(0,$.jsxs)(i.x,{width:"medium",gap:"small",margin:"medium",children:[(0,$.jsxs)(i.x,{direction:"row",align:"center",gap:"small",children:[(0,$.jsx)(G,{size:"large"}),(0,$.jsx)(a.X,{children:"\u6dfb\u52a0\u8bbe\u5907\u7ec4"})]}),(0,$.jsx)(l.W,{label:"\u8bbe\u5907\u7ec4\u540d",children:(0,$.jsx)(c.o,{})}),(0,$.jsx)(l.W,{label:"\u8bbe\u5907\u7ec4\u63cf\u8ff0",children:(0,$.jsx)(s.K,{})}),(0,$.jsx)(l.W,{label:"\u914d\u989d",children:(0,$.jsx)(c.o,{placeholder:100})}),(0,$.jsxs)(i.x,{direction:"row",gap:"small",justify:"center",children:[(0,$.jsx)(u.z,{primary:!0,label:"\u786e\u5b9a",onClick:()=>n(!1)}),(0,$.jsx)(u.z,{label:"\u53d6\u6d88",onClick:()=>n(!1)})]})]})})}),(0,$.jsxs)(i.x,{direction:"row",align:"center",justify:"between",flex:!1,children:[(0,$.jsx)(a.X,{children:"\u8bbe\u5907\u7ec4\u5217\u8868"}),(0,$.jsx)(u.z,{primary:!0,label:"\u6dfb\u52a0\u8bbe\u5907\u7ec4",icon:(0,$.jsx)(G,{}),onClick:()=>n(!0)})]}),(0,$.jsx)(A,{data:J,children:e=>(0,$.jsxs)(i.x,{direction:"row",gap:"small",align:"center",children:[(0,$.jsxs)(i.x,{direction:"row",gap:"small",align:"center",width:"medium",children:[(0,$.jsx)(q,{}),(0,$.jsx)(v.x,{weight:"bold",children:e.name})]}),(0,$.jsx)(i.x,{flex:!0,children:(0,$.jsx)(v.x,{children:e.desc})}),(0,$.jsxs)(i.x,{direction:"row",gap:"small",align:"center",children:[(0,$.jsx)(U(),{href:"/deviceGroupSetting",children:(0,$.jsx)(u.z,{icon:(0,$.jsx)(L,{})})}),(0,$.jsx)(U(),{href:"/deviceDevices",children:(0,$.jsx)(u.z,{icon:(0,$.jsx)(V,{})})})]})]})})]})}var Y=(0,t(9294).e)((0,$.jsx)(Q,{}))},5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6983)}])}},function(e){e.O(0,[774,333,534,430,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
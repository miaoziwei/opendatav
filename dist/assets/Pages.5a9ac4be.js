var b=(e,i,s)=>new Promise((l,p)=>{var h=o=>{try{g(s.next(o))}catch(m){p(m)}},_=o=>{try{g(s.throw(o))}catch(m){p(m)}},g=o=>o.done?l(o.value):Promise.resolve(o.value).then(h,_);g((s=s.apply(e,i)).next())});import{a as H,d as z}from"./pages.0a6f6481.js";import{aq as A,ar as U,at as E,d as j,av as X,aB as V,c5 as G,r as C,i as N,a1 as R,a8 as M,aL as J,ab as K,a as Q,T as O,o as T,c as S,X as f,H as u,u as d,a7 as B,af as $,F as W,e as Y,B as Z,z as q,t as ee,b as L,$ as I,c6 as te,p as ae,j as ne,_ as se}from"./index.a01601fa.js";import"./index.93b27378.js";const ie=A("ellipsis",{overflow:"hidden"},[U("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),E("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),E("cursor-pointer",`
 cursor: pointer;
 `)]);function D(e){return`${e}-ellipsis--line-clamp`}function F(e,i){return`${e}-ellipsis--cursor-${i}`}const le=Object.assign(Object.assign({},V.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),oe=j({name:"Ellipsis",inheritAttrs:!1,props:le,setup(e,{slots:i,attrs:s}){const{mergedClsPrefixRef:l}=X(e),p=V("Ellipsis","-ellipsis",ie,G,e,l),h=C(null),_=C(null),g=C(null),o=C(!1),m=N(()=>{const{lineClamp:t}=e,{value:n}=o;return t!==void 0?{textOverflow:"","-webkit-line-clamp":n?"":t}:{textOverflow:n?"":"ellipsis","-webkit-line-clamp":""}});function k(){let t=!1;const{value:n}=o;if(n)return!0;const{value:c}=h;if(c){const{lineClamp:w}=e;if(y(c),w!==void 0)t=c.scrollHeight<=c.offsetHeight;else{const{value:P}=_;P&&(t=P.getBoundingClientRect().width<=c.getBoundingClientRect().width)}r(c,t)}return t}const x=N(()=>e.expandTrigger==="click"?()=>{var t;const{value:n}=o;n&&((t=g.value)===null||t===void 0||t.setShow(!1)),o.value=!n}:void 0),a=()=>R("span",Object.assign({},J(s,{class:[`${l.value}-ellipsis`,e.lineClamp!==void 0?D(l.value):void 0,e.expandTrigger==="click"?F(l.value,"pointer"):void 0],style:m.value}),{ref:"triggerRef",onClick:x.value,onMouseenter:e.expandTrigger==="click"?k:void 0}),e.lineClamp?i:R("span",{ref:"triggerInnerRef"},i));function y(t){if(!t)return;const n=m.value,c=D(l.value);e.lineClamp!==void 0?v(t,c,"add"):v(t,c,"remove");for(const w in n)t.style[w]!==n[w]&&(t.style[w]=n[w])}function r(t,n){const c=F(l.value,"pointer");e.expandTrigger==="click"&&!n?v(t,c,"add"):v(t,c,"remove")}function v(t,n,c){c==="add"?t.classList.contains(n)||t.classList.add(n):t.classList.contains(n)&&t.classList.remove(n)}return{mergedTheme:p,triggerRef:h,triggerInnerRef:_,tooltipRef:g,handleClick:x,renderTrigger:a,getTooltipDisabled:k}},render(){var e;const{tooltip:i,renderTrigger:s,$slots:l}=this;if(i){const{mergedTheme:p}=this;return R(M,Object.assign({ref:"tooltipRef",placement:"top"},i,{getDisabled:this.getTooltipDisabled,theme:p.peers.Tooltip,themeOverrides:p.peerOverrides.Tooltip}),{trigger:s,default:(e=l.tooltip)!==null&&e!==void 0?e:l.default})}else return s()}}),re=""+new URL("default.5fefac84.png",import.meta.url).href,ce=e=>(ae("data-v-6e2451fa"),e=e(),ne(),e),ue={class:"page-list"},de=q(" \u65B0\u5EFA "),pe=["src","onClick"],fe={class:"options"},ge=ce(()=>L("span",null,"\u7F16\u8F91",-1)),me=j({__name:"Pages",setup(e){const i=K(),s=C(!1),l=C([]),p=[{key:"preview",label:"\u9884\u89C8",icon:h("preview-open")},{key:"delete",label:"\u5220\u9664",icon:h("delete-one")}];Q(()=>b(this,null,function*(){yield _()}));function h(a){return()=>R(I,{name:a})}const _=()=>b(this,null,function*(){try{const a=yield H();a.data&&(l.value=a.data)}catch(a){O.error("\u9875\u9762\u6570\u636E\u8BF7\u6C42\u5F02\u5E38")}}),g=(a,y)=>b(this,null,function*(){if(a==="preview")i.push({name:"PageView",params:{index:y.id}});else if(a==="delete")try{yield z(y.id),yield _()}catch(r){console.log((r==null?void 0:r.message)||r),O.error("\u5220\u9664\u5931\u8D25")}}),o=()=>{if(s.value)return!1;s.value=!0,i.push({name:"Create"})},m=a=>{if(s.value)return!1;s.value=!0,i.push({name:"Editor",params:{index:a.id}})},k=a=>{i.push({name:"PageView",params:{index:a.id}})},x=a=>a||re;return(a,y)=>(T(),S("div",ue,[f(d($),null,{default:u(()=>[f(d(B),{type:"primary",loading:s.value,onClick:o},{default:u(()=>[de]),_:1},8,["loading"])]),_:1}),(T(!0),S(W,null,Y(l.value,r=>(T(),S("div",{class:"card",key:r.id},[(T(),Z(d($),{key:r.id,hoverable:""},{header:u(()=>[f(d(oe),{style:{"max-width":"8rem","font-size":"1rem"}},{default:u(()=>[q(ee(r.name),1)]),_:2},1024)]),cover:u(()=>[L("img",{src:x(r.thumbnail),class:"image",onClick:v=>k(r),alt:""},null,8,pe)]),action:u(()=>[L("div",fe,[f(d(M),{trigger:"hover"},{trigger:u(()=>[f(d(B),{quaternary:"",onClick:v=>m(r)},{icon:u(()=>[f(d(I),{name:"editor"})]),_:2},1032,["onClick"])]),default:u(()=>[ge]),_:2},1024),f(d(te),{trigger:"hover",onSelect:v=>g(v,r),options:p,"show-arrow":!0},{default:u(()=>[f(d(B),{quaternary:""},{icon:u(()=>[f(d(I),{name:"setting"})]),_:1})]),_:2},1032,["onSelect"])])]),_:2},1024))]))),128))]))}});const Ce=se(me,[["__scopeId","data-v-6e2451fa"]]);export{Ce as default};

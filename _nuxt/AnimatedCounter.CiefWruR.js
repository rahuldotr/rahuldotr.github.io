import{_ as k}from"./Button.C8rpj5F_.js";import{Y as y,$ as V,D as A,a2 as B,a3 as M,r as p,L as h,o as O,a4 as T,j as D,a5 as E,c as W,b as j,g as m,f as q,z as _,t as z,w as G}from"./entry.KBtjBrZ4.js";import"./Icon.Dv2nU5L1.js";function $(e){return B()?(M(e),!0):!1}function C(e){return typeof e=="function"?e():A(e)}const L=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const U=e=>e!=null,w=()=>{};function Y(e,t,n){const r=y(e,(...s)=>(V(()=>r()),t(...s)),n);return r}const S=L?window:void 0;function v(e){var t;const n=C(e);return(t=n==null?void 0:n.$el)!=null?t:n}function F(){const e=p(!1),t=T();return t&&O(()=>{e.value=!0},t),e}function H(e){const t=F();return h(()=>(t.value,!!e()))}function J(e,t,n={}){const{root:r,rootMargin:s="0px",threshold:a=0,window:o=S,immediate:u=!0}=n,l=H(()=>o&&"IntersectionObserver"in o),f=h(()=>{const c=C(e);return(Array.isArray(c)?c:[c]).map(v).filter(U)});let d=w;const i=p(u),I=l.value?y(()=>[f.value,v(r),i.value],([c,N])=>{if(d(),!i.value||!c.length)return;const b=new IntersectionObserver(t,{root:v(N),rootMargin:s,threshold:a});c.forEach(g=>g&&b.observe(g)),d=()=>{b.disconnect(),d=w}},{immediate:u,flush:"post"}):w,x=()=>{d(),I(),i.value=!1};return $(x),{isSupported:l,isActive:i,pause(){d(),i.value=!1},resume(){i.value=!0},stop:x}}function K(e,t={}){const{window:n=S,scrollTarget:r,threshold:s=0}=t,a=p(!1);return J(e,o=>{let u=a.value,l=0;for(const f of o)f.time>=l&&(l=f.time,u=f.isIntersecting);a.value=u},{root:r,window:n,threshold:s}),a}const P={class:"px-4 py-8 flex items-center justify-center flex-col"},Q={class:"sr-only"},R={__name:"AnimatedCounter",props:{targetNumber:{type:Number,required:!0,default:1234}},setup(e){E(a=>({"4977d1da":r.targetNumber}));const t=p(null),n=K(t),r=e,s=()=>{document.querySelector(".animate-counter").animate([{"--num":0},{"--num":r.targetNumber}],{duration:1e3,easing:"ease-out",fill:"forwards"})};return Y(n,()=>{s()}),(a,o)=>{const u=k;return j(),W("div",P,[m("span",{ref_key:"target",ref:t,class:"flex tabular-nums text-slate-900 dark:text-white text-5xl font-extrabold mb-2 [counter-set:_num_var(--num)] before:content-[counter(num)] animate-counter"},[m("span",Q,z(e.targetNumber),1),o[0]||(o[0]=_("+ "))],512),q(u,{color:"white",onClick:s,class:"mt-4",size:"xs"},{default:G(()=>o[1]||(o[1]=[_(" Start Counter ")])),_:1}),o[2]||(o[2]=m("p",{class:"text-xs mt-2 text-gray-500"}," or start the counter when this component is in the viewport ",-1))])}}},te=D(R,[["__scopeId","data-v-e9f86973"]]);export{te as default};

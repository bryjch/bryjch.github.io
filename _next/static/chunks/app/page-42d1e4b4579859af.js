(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5042:function(){},6371:function(e,t,s){Promise.resolve().then(s.bind(s,905))},905:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return et}});var i=s(7437),a=s(6522),l=s(3622),n=s(3186),r=s(6375),c=s(9905),o=s(2265),d=s(609),m=s(6544),u=s(5887),x=s(5867),h=s(5900),p=s(4421),f=s(5616),g=s(8559);function j(e){var t,s,a,l,n,c,u,j,v,A;let b=(0,o.useRef)(),[y,w]=(0,o.useState)(),N=(0,d.c)(0),[k,C]=(0,o.useState)(!1),{onMaterialReady:E}=e,U={scale:null!==(c=null===(t=e.equilibrium)||void 0===t?void 0:t.scale)&&void 0!==c?c:1,opacity:null!==(u=null===(s=e.equilibrium)||void 0===s?void 0:s.opacity)&&void 0!==u?u:.25,distort:null!==(j=null===(a=e.equilibrium)||void 0===a?void 0:a.distort)&&void 0!==j?j:.99},M={stops:null!==(v=null===(l=e.gradient)||void 0===l?void 0:l.stops)&&void 0!==v?v:[0,.8,1],colors:null!==(A=null===(n=e.gradient)||void 0===n?void 0:n.colors)&&void 0!==A?A:["#e63946","#f1faee","#a8dadc"]};return(0,m.C)((t,s)=>{var i,a,l,n,c,o,d,m;let{clock:u,pointer:x}=t,h=(0,g.uZ)(s,0,.2),p=10*N.get(),f=(null!==(c=null===(i=e.mousePos)||void 0===i?void 0:i.x)&&void 0!==c?c:x.x)*(null!==(o=null===(a=e.mousePos)||void 0===a?void 0:a.multiplyFactor)&&void 0!==o?o:1),j=(null!==(d=null===(l=e.mousePos)||void 0===l?void 0:l.y)&&void 0!==d?d:x.y)*(null!==(m=null===(n=e.mousePos)||void 0===n?void 0:n.multiplyFactor)&&void 0!==m?m:1);b.current.position.y=Math.sin(u.getElapsedTime())/10,b.current.rotation.z=u.getElapsedTime(),b.current.rotation.y=.02+r.MathUtils.lerp(b.current.rotation.y,p+f*Math.PI*1.5,h),b.current.rotation.x=.03+r.MathUtils.lerp(b.current.rotation.x,p+j*Math.PI*1.5,h);let v=r.MathUtils.lerp(b.current.scale.x,U.scale,h);b.current.scale.x=v,b.current.scale.y=v,b.current.scale.z=v,y.distort=r.MathUtils.lerp(y.distort,U.distort,2*h),y.opacity=r.MathUtils.lerp(y.opacity,U.opacity,h)}),(0,o.useEffect)(()=>{y&&(null==E||E(y))},[y,E]),(0,x.j)(k),(0,i.jsxs)("group",{children:[(0,i.jsx)(h.Y,{ref:w,color:"#ffffff",roughness:.1,speed:2,radius:1,distort:.99,opacity:0,transparent:!0,children:(0,i.jsx)(p.S,{size:100,...M})}),!!y&&(0,i.jsx)(f.FC,{args:[1,10],ref:b,material:y,position:[0,0,0],scale:[1,1,1],onClick:function(){N.set(N.get()+1),b.current.scale.x=1.3,b.current.scale.y=1.3,b.current.scale.z=1.3,y.distort=.2},onPointerOver:()=>C(!0),onPointerOut:()=>C(!1)})]})}function v(){let[e,t]=(0,o.useState)(!1),s=(0,o.useRef)(null),{elX:a,elY:l,elW:n,elH:r}=(0,c.Z)(s);return(0,i.jsxs)("div",{ref:s,className:"relative h-full w-full",children:[(0,i.jsxs)(u.Xz,{camera:{position:[0,0,4]},gl:{powerPreference:"low-power",alpha:!0,antialias:!1},children:[(0,i.jsx)("ambientLight",{}),(0,i.jsx)(o.Suspense,{children:(0,i.jsx)(j,{mousePos:{x:(a||0)/(n||1),y:(l||0)/(r||1),multiplyFactor:2},onMaterialReady:()=>t(!0)})})]}),!1]})}var A=s(7997),b=s(711),y=s.n(b);let w=e=>(0,i.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"405.047px",height:"405.047px",viewBox:"0 0 405.047 405.047",...e,children:[(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"M283.897,92.846c-36.582-49.345-73.688-89.267-74.061-89.664C207.944,1.153,205.296,0,202.523,0   c-2.774,0-5.423,1.152-7.314,3.182c-0.371,0.397-37.478,40.319-74.06,89.664c-49.971,67.403-75.308,119.726-75.308,155.513   c0,86.396,70.287,156.688,156.682,156.688c86.396,0,156.683-70.29,156.683-156.688C359.206,212.572,333.868,160.25,283.897,92.846z   M218.171,354.342c-8.213,1.941-16.68,2.926-25.162,2.926c-60.294,0-109.347-49.055-109.347-109.35   c0-8.312,2.559-23.373,14.75-47.914c1.225-2.467,4.046-3.691,6.687-2.908c2.639,0.785,4.33,3.357,4.007,6.091   c-0.28,2.361-0.421,4.584-0.421,6.607c0,64.629,45.966,120.77,109.298,133.484c2.607,0.525,4.5,2.795,4.545,5.455   C222.575,351.396,220.761,353.729,218.171,354.342z"})}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{})]});var N=s(4769),k=s(7042);function C(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,N.m6)((0,k.W)(t))}let E=e=>{let{children:t="",className:s=""}=e;return(0,i.jsx)("div",{className:C("flex",s),children:t.split("").map((e,s)=>{let a=y()("".concat(t,"-").concat(e,"-").concat(s))();return(0,i.jsx)(U,{index:s,seed:a,children:e},"rotatey-key-".concat(s))})})},U=e=>{let{children:t,index:s,seed:a,debug:l=!1}=e,[n,r]=(0,o.useState)(!1),c=(0,o.useMemo)(()=>5*a,[a]),d=10+5*(s/10+Math.sin(c+s));return(0,i.jsxs)("div",{className:"relative cursor-default whitespace-pre-wrap text-center",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,i.jsx)("div",{className:n?"animate-spook":"animate-float",style:{animationDelay:n?"":"".concat(c,"s")},children:(0,i.jsx)("div",{className:n?"animate-wiggle":"animate-rock",style:{animationDuration:n?"0.15s":"".concat(d.toFixed(1),"s"),animationDirection:s%2?"reverse":"normal"},children:t})}),n&&(0,i.jsxs)("div",{className:"absolute inset-0",children:[(0,i.jsx)("div",{className:"absolute right-0 top-1",children:(0,i.jsx)(w,{className:"h-3 w-3 animate-droplet fill-blue-400",style:{animationFillMode:"backwards",animationDelay:"1s"}})}),(0,i.jsx)("div",{className:"absolute left-0 top-3",children:(0,i.jsx)(w,{className:"h-2 w-2 animate-droplet fill-blue-400",style:{animationFillMode:"backwards",animationDelay:"2.5s"}})})]}),l&&(0,i.jsx)("div",{className:"text-xs font-medium",children:(0,i.jsx)("div",{children:c})})]})},M=()=>(0,i.jsx)("section",{className:"flex min-h-screen w-full flex-col items-center justify-center py-24 md:flex-row",children:(0,i.jsxs)("div",{className:"relative max-w-[20em] px-6 text-center md:text-left",children:[(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsx)(E,{className:"justify-center text-2xl font-black md:justify-start",children:"bryan choo"}),(0,i.jsxs)("p",{className:"text-xs opacity-50 dark:opacity-80",children:[">"," fullstack software engineer"]})]}),(0,i.jsxs)("div",{className:"mb-6 text-sm text-pp-text-muted",children:[(0,i.jsx)("p",{children:"I love solving problems & creating enjoyable user experiences with clean & intuitive design in mind."}),(0,i.jsx)("p",{children:"Based in Malaysia."})]}),(0,i.jsxs)("div",{className:"flex flex-row items-start justify-center gap-4 text-sm md:flex-col md:justify-end md:gap-1",children:[(0,i.jsxs)("a",{className:"underline-anchor relative inline-flex items-center font-bold",href:"https://github.com/bryjch",children:["GitHub ",(0,i.jsx)(A.w9C,{})]}),(0,i.jsxs)("a",{className:"underline-anchor relative inline-flex items-center font-bold",href:"https://www.linkedin.com/in/bryjch",children:["LinkedIn ",(0,i.jsx)(A.w9C,{})]})]}),(0,i.jsx)("div",{className:"absolute bottom-0 left-0 hidden origin-bottom-left -rotate-90 md:block",children:(0,i.jsx)("span",{className:"text-5xl font-black opacity-10 dark:opacity-60",children:"hello i'm"})})]})});var S=s(2393),R=s(8868),I=s(7828),z=s(1077),G=s(5633);let H=e=>{let{string:t,interval:s=.03,delay:i=0,skipIterations:a=10}=e,[l,n]=(0,o.useState)(0),[r,c]=(0,o.useState)(0),[d,m]=(0,o.useState)(0),[u]=(0,I.Z)(1e3*i),[x,h]=(0,z.Z)(!1),[p,f]=(0,o.useState)(""),[g,j]=(0,o.useState)(""),v=u()&&!x,A=u()&&d<t.length;return(0,o.useEffect)(()=>{},[]),(0,G.Z)(()=>{let e,s;l<a?(e=F(l),s=""):(e=t.slice(0,r),s=F(t.length-r),c(e=>e+1)),f(e),j(s),n(e=>e+1),r>=t.length&&h(!0)},v?1e3*s:null),(0,G.Z)(()=>m(e=>e+1),A?950*s:null),"".concat(p).concat(g).slice(0,d)+String.fromCharCode(8291)};function F(e){let t="abcdefghijklmnopqrstuvwxyz0123456789",s="";for(let i=0;i<e;i++)s+=t.charAt(Math.floor(Math.random()*t.length));return s}let P=[{title:"years of age",description:"counting down the days",value:"29"},{title:"designation",description:"little impostor syndrome",value:"fullstack engineer"},{title:"favourite language",description:"not duolingo",value:"typescript"},{title:"framework",description:"a frame that works",value:"react"},{title:"based in",description:"home sweet home",value:"malaysia"},{title:"times rickrolled",description:"never catch me lackin",value:"0"}],V=()=>(0,i.jsx)(n.E.section,{className:"flex h-screen w-screen flex-col items-center justify-start sm:h-[75vh]",children:(0,i.jsx)("div",{className:"flex w-full max-w-screen-sm flex-col items-start p-8 leading-none",children:P.map((e,t)=>(0,i.jsx)(Q,{item:e,index:t},"row-".concat(t)))})}),Q=e=>{let{item:t,index:s}=e,[a]=(0,S.H)(),l=(0,R.Y)(a,{margin:"-40% 0% -40% 0%",once:!0}),r=.05*s;return(0,i.jsx)(n.E.div,{ref:a,className:"flex w-full flex-col flex-wrap rounded py-4 sm:flex-row sm:py-4",initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:r},children:l?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row",children:[(0,i.jsxs)("span",{className:"flex-shrink-0 font-bold",children:[(0,i.jsx)(H,{string:t.title,delay:r}),"\xa0"]}),(0,i.jsx)("span",{className:"flex-shrink-0 self-start text-[0.8em] font-light opacity-60 sm:self-end",children:(0,i.jsx)(H,{string:t.description,delay:r,skipIterations:30})})]}),(0,i.jsxs)("div",{className:"flex flex-1 items-center",children:[(0,i.jsx)("div",{className:"mx-2 flex flex-1 items-center",children:(0,i.jsx)(n.E.div,{className:"h-[1px] border-b-2 border-dotted border-pp-text opacity-10",initial:{width:"0%"},animate:{width:"100%"},transition:{duration:1,delay:r}})}),(0,i.jsx)("div",{className:"opacity-60 sm:self-start",children:(0,i.jsx)(H,{string:t.value,delay:r,skipIterations:50})})]})]}):(0,i.jsx)("span",{children:"\xa0"})},"item-".concat(t.title))};var B=s(6691),T=s.n(B),D=s(4932);let L=[{name:"dribble.tf",description:"In browser interactive 3D tool for reviewing past Team Fortress 2 matches.\n\nA feature lacking from the game itself, the tool allows players to analyse gameplay and provide an intuitive interface for coaching.",url:"https://dribble.tf",github:"https://github.com/bryjch/dribble.tf",images:{mode:"landscape",items:[s(1957)]}},{name:"invUI",description:"Exploring and recreating user interfaces from various video games.\n\nI've always loved the mix of style, usability and fun behind a good video game UI. This is a fun attempt to recreate some of these experiences in the browser.",url:"https://invui.netlify.app",github:"https://github.com/bryjch/invui",images:{mode:"landscape",items:[s(5727)]}},{name:"apex pred tracker",description:"Twitch extension that tracks the top 750 players in Apex Legends in real time.\n\nThe game itself doesn't have an official leaderboard - so this is way to keep up with the game's competitive ranked scene while watching Twitch.",url:"https://dashboard.twitch.tv/extensions/9x7t6zdn54tl4xi81x6t3ac5irq7ev-0.0.3",github:"",images:{mode:"portrait",items:[s(4475),s(7885)]}}],Z=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("section",{className:"z-10 mb-8 flex items-center justify-center md:mb-12",children:(0,i.jsx)("div",{className:"relative ml-auto inline-flex",children:(0,i.jsxs)("div",{className:"relative grid text-5xl font-black leading-[0.8em]",children:[(0,i.jsx)(E,{children:"personal"}),(0,i.jsx)(E,{children:"projects"})]})})}),(0,i.jsx)("section",{children:L.map(e=>(0,i.jsx)(O,{...e},"project-".concat(e.name)))})]}),O=e=>{let{name:t,description:s,github:a,images:l,url:r}=e,[c]=(0,S.H)(),[d,m]=(0,S.H)(),u=(0,R.Y)(c,{amount:.66,once:!0});return(0,o.useEffect)(()=>{u?m(d.current,{opacity:1,y:0},{duration:.5}):m(d.current,{opacity:0,y:50},{duration:.5})},[u,m,d]),(0,i.jsxs)(n.E.div,{ref:c,className:"relative mx-auto flex w-full max-w-screen-lg flex-col items-center justify-center px-8 py-12 md:flex-row md:py-32 lg:px-12",children:[(0,i.jsxs)("div",{className:"basis-5/12 md:pr-12",children:[(0,i.jsxs)("div",{className:"mb-6 flex items-center",children:[(0,i.jsx)("a",{href:r,className:"underline-anchor relative inline-flex transition-all",children:(0,i.jsx)("h2",{className:"text-2xl font-black",children:t})}),a&&(0,i.jsx)("a",{href:a,className:"hover:text-pp-accent ml-2 inline-block text-2xl transition-all",children:(0,i.jsx)(D.JOq,{})})]}),(0,i.jsx)(n.E.p,{className:"mb-6 max-w-sm whitespace-pre-line text-sm text-pp-text-muted",children:s})]}),(0,i.jsx)(n.E.div,{ref:d,className:"relative flex w-full max-w-sm basis-7/12 items-center justify-center md:max-w-screen-sm",children:(0,i.jsx)("a",{href:r,className:"inline-block transition-transform duration-300 hover:scale-[102%]",children:l&&(0,i.jsx)("div",{className:"group flex",children:l.items.map((e,s)=>(0,i.jsx)("div",{className:C("inline-block rounded-lg shadow-lg",1===s&&"-mr-5 -translate-x-2 scale-90"),children:(0,i.jsx)(T(),{src:e,alt:t,className:"overflow-hidden rounded-lg"})},"project-images-image-".concat(s)))})})})]},"project-".concat(t))};var q=s(8409),W=s(2949),Y=s(8527),J=s(8031),K=s(9172);let _=[0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0],X=[{Component:q.huN,name:"React"},{Component:W.KU_,name:"React Native"},{Component:D.zr8,name:"Vue"},{Component:Y.YnA,name:"Tailwind CSS"},{Component:Y.xQ0,name:"Sass"},{Component:J.G9,name:"TypeScript"},{Component:Y.PoL,name:"Redux"},{Component:D.JOq,name:"GitHub"},{Component:K.eH5,name:"GitLab"},{Component:J.d5s,name:"Netlify"},{Component:q.UC$,name:"AWS"},{Component:Y.v$y,name:"Strapi"},{Component:Y.nPl,name:"Vite"},{Component:W.Xl5,name:"Three.js"}],$=()=>{let e=0;return(0,i.jsx)("div",{className:"relative grid grid-cols-7",children:_.map((t,s)=>{if(0===t)return(0,i.jsx)("div",{className:"h-8 w-8"},s);{let t=X[++e%X.length];if(!t)return(0,i.jsx)("div",{className:"h-8 w-8 bg-green-300"},s);let{Component:a}=t;return(0,i.jsx)("div",{className:"h-8 w-8",children:(0,i.jsx)(a,{className:"h-full w-full"})},s)}})})},ee=()=>(0,i.jsxs)("section",{className:"relative flex min-h-screen flex-col items-center justify-center py-24",children:[(0,i.jsx)("div",{className:"relative grid text-5xl font-black leading-[0.8em]",children:(0,i.jsx)(E,{children:"languages"})}),(0,i.jsx)("div",{className:"mt-16",children:(0,i.jsx)($,{})})]});function et(){let{scrollY:e}=(0,a.v)(),t=(0,l.q)(e,{stiffness:500,damping:50,mass:.1});return(0,i.jsxs)("main",{className:"relative flex flex-col items-center font-inter",children:[(0,i.jsx)(n.E.div,{className:"absolute inset-0 h-full w-full overflow-hidden",children:(0,i.jsx)(n.E.div,{className:"h-screen w-screen",style:{y:t},children:(0,i.jsx)(v,{})})}),(0,i.jsx)(M,{}),(0,i.jsx)(V,{}),(0,i.jsx)(Z,{}),(0,i.jsx)(ee,{})]})}},4475:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/apt-leaderboard.83c96e44.png",height:1e3,width:636,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAfklEQVR42g3KSQ6CMBQA0N7CRONe48aIGosU7DzQTy21bUK8/zlg/R4a+s4LRXbH0+V6a14oGFJ8NL3CneDCoZ/jMS1CBy6AyxElRwOk/eHctoxyszkr+S9U6Iim258kSbHmvGgNGH/Q10oPxY4JpjpQi+4NrnMFmCnTz8d7Bd6IIGEeuP0kAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8}},7885:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/apt-live-matches.5c783623.png",height:1e3,width:636,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAhUlEQVR42mPQ0NJXUdU2FhZ3sgcCZwYHezsjIzMlZXV/d3dnF3eG6BC/+IQ0T69AUyMbYyNLhpiwwKioRGMTe1sLeysTK4bk2IjAoEgVNVN7KwdLYwuGkEB/UzMHZVVDO0sHEyMLoHn25ubWosJSbvb2lhbWDD7ubj6+wfqG1rbWTtYWtgAwlRzj+hAq4QAAAABJRU5ErkJggg==",blurWidth:5,blurHeight:8}},1957:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/dribble.1a53d5ec.png",height:791,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgElEQVR42gUAzQqCMHj/G1FYUB06Bl17gB4+6Ak6dkwdIWi5zTm+bYkFbh83pSRE4IpGmPBPmiG5kNj1/kzBal3PhCmGBefgY/bAqqw+ZWO0HrN41eUkyWlZXFZbej4ewLbdu8uh3xULJSgS3DHMomkG73ubCd+MX7xfz4igytk/ojZEM/pAuEQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},5727:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/invui.5ebc45e9.png",height:780,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAfElEQVR42gXAygrCIM91GnuEbkMnsyn5SEVto5Ig6AF1Wf//LQH2PRK4HUmbOVsPAnVdU5SwqcBI8UDZ6chzVAwPv/X9ep7zZQYpus220ErHFMqiXm7u/klGGaCV8t4TQmFdSTGFkKy1E+egRzsEoZPk+0jOSGv9HP118X/GQxRhlRMNgQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[689,950,957,665,706,240,699,614,800,971,938,744],function(){return e(e.s=6371)}),_N_E=e.O()}]);
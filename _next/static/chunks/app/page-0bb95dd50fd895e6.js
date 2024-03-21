(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5042:function(){},6371:function(e,t,s){Promise.resolve().then(s.bind(s,4446))},4446:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return er}});var a=s(7437),n=s(6522),i=s(8254),r=s(3186),l=s(9905),o=s(7828),c=s(2265),d=s(6375),m=s(8490),x=s(5887),u=s(5900),h=s(4421),f=s(5616),p=s(8559);let g=(0,s(4660).Ue)()(e=>({conditions:new Set,addCondition:t=>{e(e=>{let{conditions:s}=e,a=new Set(s);return a.add(t),{conditions:a}})},removeCondition:t=>{e(e=>{let{conditions:s}=e,a=new Set(s);return a.delete(t),{conditions:a}})}}));var j=s(4769),v=s(7042),b=s(740);function y(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,j.m6)((0,v.W)(t))}function A(){return String.fromCharCode(8291)}let{screens:w}=s.n(b)()({content:["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}"],theme:{extend:{backgroundImage:{"gradient-radial":"radial-gradient(var(--tw-gradient-stops))","gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"},colors:{"pp-text":"rgb(var(--pp-text-rgb) / <alpha-value>)","pp-text-muted":"rgb(var(--pp-text-muted-rgb) / <alpha-value>)","pp-accent":"rgb(var(--pp-accent-rgb) / <alpha-value>)"},fontFamily:{inter:["var(--font-inter)"],grotesk:["var(--font-grotesk)"],manrope:["var(--font-manrope)"],fraunces:["var(--font-fraunces)"]},keyframes:{rock:{"0%":{transform:"rotate(0deg)"},"33%":{transform:"rotate(10deg)"},"66%":{transform:"rotate(-10deg)"},"100%":{transform:"rotate(0deg)"}},wiggle:{"0%, 100%":{transform:"rotate(-3deg)"},"50%":{transform:"rotate(3deg)"}},droplet:{"0%":{opacity:"0",transform:"translateY(-0.5rem)"},"33%":{opacity:"1",transform:"translateY(0)"},"100%":{opacity:"0",transform:"translateY(0.5rem)"}},float:{"0%":{transform:"translateY(0)"},"33%":{transform:"translateY(0.15rem)"},"66%":{transform:"translateY(-0.15rem)"},"100%":{transform:"translateY(0)"}},spook:{"0%":{transform:"scale(1) translateY(0)"},"50%":{transform:"scale(1.05) translateY(-0.5rem)"},"100%":{transform:"scale(1) translateY(0)"}},"bubble-placeholder":{"0%":{opacity:"0.2"},"50%":{opacity:"0.6"},"100%":{opacity:"0.2"}}},animation:{rock:"rock 1s ease-in-out infinite",wiggle:"wiggle 1s ease-in-out infinite",droplet:"droplet 2s ease-in-out infinite",float:"float 3s ease-in-out infinite",spook:"spook 0.3s ease-in-out 1","bubble-placeholder":"bubble-placeholder 2s ease-in-out infinite"}}},plugins:[]}).theme,N=e=>{let t="(min-width: ".concat(w[e],")"),s=window.matchMedia(t),[a,n]=(0,c.useState)(!1),i=e=>n(e.matches);return(0,c.useEffect)(()=>{if(s)return n(s.matches),s.addEventListener("change",i),()=>s.removeEventListener("change",i)},[e,s]),a};function k(e){var t,s,n,i,r,l,o,x,g,j;let v=(0,c.useRef)(),[b,y]=(0,c.useState)(),{onMaterialReady:A}=e,w={scale:null!==(l=null===(t=e.equilibrium)||void 0===t?void 0:t.scale)&&void 0!==l?l:1,opacity:null!==(o=null===(s=e.equilibrium)||void 0===s?void 0:s.opacity)&&void 0!==o?o:.25,distort:null!==(x=null===(n=e.equilibrium)||void 0===n?void 0:n.distort)&&void 0!==x?x:.99},N={stops:null!==(g=null===(i=e.gradient)||void 0===i?void 0:i.stops)&&void 0!==g?g:[0,.8,1],colors:null!==(j=null===(r=e.gradient)||void 0===r?void 0:r.colors)&&void 0!==j?j:["#e63946","#f1faee","#a8dadc"]};return(0,m.C)((t,s)=>{var a,n,i,r,l,o,c,m;let{clock:x,pointer:u}=t,h=(0,p.uZ)(s,0,.2),f=10*e.timesClicked,g=(null!==(l=null===(a=e.mousePos)||void 0===a?void 0:a.x)&&void 0!==l?l:u.x)*(null!==(o=null===(n=e.mousePos)||void 0===n?void 0:n.multiplyFactor)&&void 0!==o?o:1),j=(null!==(c=null===(i=e.mousePos)||void 0===i?void 0:i.y)&&void 0!==c?c:u.y)*(null!==(m=null===(r=e.mousePos)||void 0===r?void 0:r.multiplyFactor)&&void 0!==m?m:1);v.current.position.y=Math.sin(x.getElapsedTime())/10,void 0!==e.offsetX&&(v.current.position.x=d.MathUtils.lerp(v.current.position.x,e.offsetX,.01)),v.current.rotation.z=x.getElapsedTime(),v.current.rotation.y=.02+d.MathUtils.lerp(v.current.rotation.y,f+g*Math.PI*1.5,h),v.current.rotation.x=.03+d.MathUtils.lerp(v.current.rotation.x,f+j*Math.PI*1.5,h);let y=d.MathUtils.lerp(v.current.scale.x,w.scale,h);v.current.scale.x=y,v.current.scale.y=y,v.current.scale.z=y,b.distort=d.MathUtils.lerp(b.distort,w.distort,2*h),b.opacity=d.MathUtils.lerp(b.opacity,w.opacity,h)}),(0,c.useEffect)(()=>{b&&v&&(v.current.scale.x=1.3,v.current.scale.y=1.3,v.current.scale.z=1.3,b.distort=.2)},[e.timesClicked,b,v]),(0,c.useEffect)(()=>{b&&(null==A||A(b))},[b,A]),(0,a.jsxs)("group",{children:[(0,a.jsx)(u.Y,{ref:y,color:"#ffffff",roughness:.1,speed:2,radius:1,distort:.99,opacity:0,transparent:!0,children:(0,a.jsx)(h.S,{size:100,...N})}),!!b&&(0,a.jsx)(f.FC,{args:[1,10],ref:v,material:b,position:[0,0,0],scale:[1,1,1]})]})}function C(){let e=(0,c.useRef)(null),{elX:t,elY:s,elW:n,elH:i}=(0,l.Z)(e),r=N("md"),d=g(e=>e.conditions.has("inProjectsSection")),[m,u]=(0,c.useState)(0),[h,,f]=(0,o.Z)(500);return(0,a.jsx)("div",{ref:e,className:"relative h-full w-full",children:(0,a.jsxs)(x.Xz,{camera:{position:[0,0,4]},gl:{powerPreference:"low-power",alpha:!0,antialias:!1},onClick:function(){h()&&(u(e=>e+1),f())},children:[(0,a.jsx)("ambientLight",{}),(0,a.jsx)(c.Suspense,{children:(0,a.jsx)(k,{offsetX:r&&d?-1.75:0,timesClicked:m,mousePos:{x:(t||0)/(n||1),y:(s||0)/(i||1),multiplyFactor:2}})})]})})}var E=s(7997),S=s(711),U=s.n(S);let M=e=>(0,a.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"405.047px",height:"405.047px",viewBox:"0 0 405.047 405.047",...e,children:[(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"M283.897,92.846c-36.582-49.345-73.688-89.267-74.061-89.664C207.944,1.153,205.296,0,202.523,0   c-2.774,0-5.423,1.152-7.314,3.182c-0.371,0.397-37.478,40.319-74.06,89.664c-49.971,67.403-75.308,119.726-75.308,155.513   c0,86.396,70.287,156.688,156.682,156.688c86.396,0,156.683-70.29,156.683-156.688C359.206,212.572,333.868,160.25,283.897,92.846z   M218.171,354.342c-8.213,1.941-16.68,2.926-25.162,2.926c-60.294,0-109.347-49.055-109.347-109.35   c0-8.312,2.559-23.373,14.75-47.914c1.225-2.467,4.046-3.691,6.687-2.908c2.639,0.785,4.33,3.357,4.007,6.091   c-0.28,2.361-0.421,4.584-0.421,6.607c0,64.629,45.966,120.77,109.298,133.484c2.607,0.525,4.5,2.795,4.545,5.455   C222.575,351.396,220.761,353.729,218.171,354.342z"})}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{}),(0,a.jsx)("g",{})]}),R=e=>{let{children:t="",className:s=""}=e;return(0,a.jsx)("div",{className:y("flex",s),children:t.split("").map((e,s)=>{let n=U()("".concat(t,"-").concat(e,"-").concat(s))();return(0,a.jsx)(I,{index:s,seed:n,children:e},"rotatey-key-".concat(s))})})},I=e=>{let{children:t,index:s,seed:n,debug:i=!1}=e,[r,l]=(0,c.useState)(!1),o=(0,c.useMemo)(()=>5*n,[n]),d=10+5*(s/10+Math.sin(o+s));return(0,a.jsxs)("div",{className:"relative cursor-default whitespace-pre-wrap text-center",onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[(0,a.jsx)("div",{className:r?"animate-spook":"animate-float",style:{animationDelay:r?"":"".concat(o,"s")},children:(0,a.jsx)("div",{className:r?"animate-wiggle":"animate-rock",style:{animationDuration:r?"0.15s":"".concat(d.toFixed(1),"s"),animationDirection:s%2?"reverse":"normal"},children:t})}),r&&(0,a.jsxs)("div",{className:"absolute inset-0",children:[(0,a.jsx)("div",{className:"absolute right-0 top-1",children:(0,a.jsx)(M,{className:"h-3 w-3 animate-droplet fill-blue-400",style:{animationFillMode:"backwards",animationDelay:"1s"}})}),(0,a.jsx)("div",{className:"absolute left-0 top-3",children:(0,a.jsx)(M,{className:"h-2 w-2 animate-droplet fill-blue-400",style:{animationFillMode:"backwards",animationDelay:"2.5s"}})})]}),i&&(0,a.jsx)("div",{className:"text-xs font-medium",children:(0,a.jsx)("div",{children:o})})]})},F=()=>(0,a.jsx)("section",{className:"flex min-h-screen w-full flex-col items-center justify-center py-24 md:flex-row",children:(0,a.jsxs)("div",{className:"relative max-w-[20em] px-6 text-center md:text-left",children:[(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)(R,{className:"justify-center text-2xl font-black md:justify-start",children:"bryan choo"}),(0,a.jsxs)("p",{className:"text-xs opacity-50 dark:opacity-80",children:[">"," fullstack software engineer"]})]}),(0,a.jsxs)("div",{className:"mb-6 text-sm text-pp-text-muted",children:[(0,a.jsx)("p",{children:"I love solving problems & creating enjoyable user experiences with clean & intuitive design in mind."}),(0,a.jsx)("p",{children:"Based in Malaysia."})]}),(0,a.jsxs)("div",{className:"flex flex-row items-start justify-center gap-4 text-sm md:flex-col md:justify-end md:gap-1",children:[(0,a.jsxs)("a",{className:"underline-anchor relative inline-flex items-center font-bold",href:"https://github.com/bryjch",children:["GitHub ",(0,a.jsx)(E.w9C,{})]}),(0,a.jsxs)("a",{className:"underline-anchor relative inline-flex items-center font-bold",href:"https://www.linkedin.com/in/bryjch",children:["LinkedIn ",(0,a.jsx)(E.w9C,{})]})]}),(0,a.jsx)("div",{className:"absolute bottom-0 left-0 hidden origin-bottom-left -rotate-90 md:block",children:(0,a.jsx)("span",{className:"text-5xl font-black opacity-10 dark:opacity-60",children:"hello i'm"})})]})});var G=s(2393),Y=s(8868),z=s(1077),H=s(5633);let P=e=>{let{string:t,interval:s=.03,delay:a=0,skipIterations:n=10}=e,[i,r]=(0,c.useState)(0),[l,d]=(0,c.useState)(0),[m,x]=(0,c.useState)(0),[u]=(0,o.Z)(1e3*a),[h,f]=(0,z.Z)(!1),[p,g]=(0,c.useState)(""),[j,v]=(0,c.useState)(""),b=u()&&!h,y=u()&&m<t.length;return(0,c.useEffect)(()=>{},[]),(0,H.Z)(()=>{let e,s;i<n?(e=D(i),s=""):(e=t.slice(0,l),s=D(t.length-l),d(e=>e+1)),g(e),v(s),r(e=>e+1),l>=t.length&&f(!0)},b?1e3*s:null),(0,H.Z)(()=>x(e=>e+1),y?950*s:null),"".concat(p).concat(j).slice(0,m)+String.fromCharCode(8291)};function D(e){let t="abcdefghijklmnopqrstuvwxyz0123456789",s="";for(let a=0;a<e;a++)s+=t.charAt(Math.floor(Math.random()*t.length));return s}let Q=[{title:"age",description:"counting down the days",value:(function(e){let t=new Date,s=new Date(e),a=t.getFullYear()-s.getFullYear(),n=t.getMonth()-s.getMonth();return n<0||0===n&&t.getDate()<s.getDate()?a-1:a})("1994-12-29").toString()},{title:"role",description:"little impostor syndrome",value:"fullstack engineer"},{title:"language",description:"not duolingo",value:"typescript"},{title:"framework",description:"a frame that works",value:"react"},{title:"based in",description:"home sweet home",value:"malaysia"},{title:"times rickrolled",description:"never catch me lackin",value:"0"}],V=()=>(0,a.jsxs)(r.E.section,{className:"flex h-[90vh] w-screen flex-col items-center justify-start sm:h-[75vh]",children:[(0,a.jsx)("div",{className:"relative grid text-5xl font-black leading-[0.8em]",children:(0,a.jsx)(R,{children:"tl;dr"})}),(0,a.jsx)("div",{className:"relative flex w-full max-w-lg flex-col items-start p-8 leading-none",children:Q.map((e,t)=>(0,a.jsx)(B,{index:t,...e},"row-".concat(t)))}),(0,a.jsxs)("div",{className:"relative text-xs opacity-40",children:["anim based on"," ",(0,a.jsx)("a",{className:"underline",href:"https://rauno.me/projects",target:"_blank",rel:"noopener noreferrer",children:"rauno.me"})]})]}),B=e=>{let{title:t,description:s,value:n,index:i}=e,[l]=(0,G.H)(),o=(0,Y.Y)(l,{margin:"-33% 0% -33% 0%",once:!0}),c=.05*i;return(0,a.jsx)(r.E.div,{ref:l,className:y("flex w-full flex-wrap rounded py-2 sm:py-4"),initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:c},title:s,children:o?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"relative flex flex-col sm:flex-row",children:[(0,a.jsxs)("span",{className:"flex-shrink-0 font-bold",children:[(0,a.jsx)(P,{string:t,delay:c}),A()]}),(0,a.jsx)("span",{className:"flex-shrink-0 self-start text-[0.8em] font-light opacity-60 sm:self-end",children:A()})]}),(0,a.jsxs)("div",{className:"flex flex-1 items-center",children:[(0,a.jsx)("div",{className:"mx-2 flex flex-1 items-center",children:(0,a.jsx)(r.E.div,{className:"h-[1px] border-b-2 border-dotted border-pp-text",initial:{width:"0%",opacity:.8},animate:{width:"100%",opacity:.2},transition:{duration:1,delay:c}})}),(0,a.jsx)("div",{className:"text-pp-text-muted sm:self-start",children:(0,a.jsx)(P,{string:n,delay:c,skipIterations:30})})]})]}):(0,a.jsx)("span",{children:A()})},"item-".concat(t))};var L=s(6691),T=s.n(L),Z=s(4932);let O=[{name:"dribble.tf",description:"In browser interactive 3D tool for reviewing past Team Fortress 2 matches.\n\nA feature lacking from the game itself, the tool allows players to analyse gameplay and provide an intuitive interface for coaching.",url:"https://dribble.tf",github:"https://github.com/bryjch/dribble.tf",images:{mode:"landscape",items:[s(1957)]}},{name:"invUI",description:"Exploring and recreating user interfaces from various video games.\n\nI've always loved the mix of style, usability and fun behind a good video game UI. This is a fun attempt to recreate some of these experiences in the browser.",url:"https://invui.netlify.app",github:"https://github.com/bryjch/invui",images:{mode:"landscape",items:[s(5727)]}},{name:"apex pred tracker",description:"Twitch extension that tracks the top 750 players in Apex Legends in real time.\n\nThe game itself doesn't have an official leaderboard - so this is way to keep up with the game's competitive ranked scene while watching Twitch.",url:"https://dashboard.twitch.tv/extensions/9x7t6zdn54tl4xi81x6t3ac5irq7ev-0.0.3",github:"",images:{mode:"portrait",items:[s(4475),s(7885)]}}],q=()=>{let[e]=(0,G.H)(),t=(0,Y.Y)(e,{margin:"-50% 0% -50% 0%"}),s=g(e=>e.addCondition),n=g(e=>e.removeCondition);return(0,c.useEffect)(()=>{t?s("inProjectsSection"):n("inProjectsSection")},[t,s,n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",{className:"-mb-4 flex items-center justify-center md:-mb-8",children:(0,a.jsx)("div",{className:"relative ml-auto inline-flex",children:(0,a.jsxs)("div",{className:"relative grid text-5xl font-black leading-[0.8em]",children:[(0,a.jsx)(R,{children:"personal"}),(0,a.jsx)(R,{children:"projects"})]})})}),(0,a.jsx)(r.E.section,{ref:e,children:O.map(e=>(0,a.jsx)(J,{...e},"project-".concat(e.name)))})]})},J=e=>{let{name:t,description:s,github:n,images:i,url:l}=e,[o]=(0,G.H)(),[d,m]=(0,G.H)(),x=(0,Y.Y)(o,{amount:.66,once:!0});return(0,c.useEffect)(()=>{x?m(d.current,{opacity:1,y:0},{duration:.5}):m(d.current,{opacity:0,y:50},{duration:.5})},[x,m,d]),(0,a.jsxs)(r.E.div,{ref:o,className:"relative mx-auto my-20 flex w-full max-w-screen-lg flex-col items-center justify-center px-8 md:my-40 md:flex-row lg:px-12",children:[(0,a.jsxs)("div",{className:"basis-5/12 md:pr-12",children:[(0,a.jsxs)("div",{className:"mb-6 flex items-center",children:[(0,a.jsx)("a",{href:l,className:"underline-anchor relative inline-flex transition-all",children:(0,a.jsx)("h2",{className:"text-2xl font-black",children:t})}),n&&(0,a.jsx)("a",{href:n,className:"ml-2 inline-block text-2xl transition-all hover:text-pp-accent",children:(0,a.jsx)(Z.JOq,{})})]}),(0,a.jsx)(r.E.p,{className:"mb-6 max-w-sm whitespace-pre-line text-sm text-pp-text-muted",children:s})]}),(0,a.jsx)(r.E.div,{ref:d,className:"relative flex w-full max-w-sm basis-7/12 items-center justify-center md:max-w-screen-sm",children:(0,a.jsx)("a",{href:l,className:"inline-block transition-transform duration-300 hover:scale-[102%]",children:i&&(0,a.jsx)("div",{className:"group flex",children:i.items.map((e,s)=>(0,a.jsx)("div",{className:y("inline-block rounded-[2rem] shadow-lg md:rounded-[4rem]",1===s&&"-mr-5 -translate-x-2 scale-90"),children:(0,a.jsx)(T(),{src:e,alt:t,className:"overflow-hidden rounded-[2rem] md:rounded-[4rem]"})},"project-images-image-".concat(s)))})})})]},"project-".concat(t))};var W=s(1223),X=s(8409),_=s(2949),K=s(8527),$=s(8031),ee=s(9172);let et=[0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0],es=[{Component:X.huN,name:"React"},{Component:_.KU_,name:"React Native"},{Component:Z.zr8,name:"Vue"},{Component:K.YnA,name:"Tailwind CSS"},{Component:K.xQ0,name:"Sass"},{Component:$.G9,name:"TypeScript"},{Component:K.PoL,name:"Redux"},{Component:Z.JOq,name:"GitHub"},{Component:ee.eH5,name:"GitLab"},{Component:$.d5s,name:"Netlify"},{Component:X.UC$,name:"AWS"},{Component:K.v$y,name:"Strapi"},{Component:K.nPl,name:"Vite"},{Component:_.Xl5,name:"Three.js"}],ea=()=>{let e=0;return(0,a.jsx)("div",{className:"relative grid grid-cols-7",children:et.map((t,s)=>{if(0===t)return(0,a.jsx)("div",{className:"h-8 w-8"},s);{let t=es[++e%es.length];if(!t)return(0,a.jsx)("div",{className:"h-8 w-8 bg-green-300"},s);let{Component:n}=t;return(0,a.jsx)("div",{className:"h-8 w-8",children:(0,a.jsx)(n,{className:"h-full w-full"})},s)}})})},en=()=>(0,a.jsx)("section",{className:"pointer-events-none relative flex min-h-screen items-center justify-center",children:(0,a.jsxs)("div",{className:"pointer-events-auto flex flex-col items-center justify-center",children:[(0,a.jsxs)("div",{className:"relative flex text-5xl font-black leading-[0.8em]",children:[(0,a.jsx)(W.pQB,{className:" mr-4 animate-float text-red-400"}),(0,a.jsx)(R,{children:"languages"})]}),(0,a.jsx)("div",{className:"mt-16 opacity-90",children:(0,a.jsx)(ea,{})})]})});function ei(){let e=g(e=>e.conditions);return(0,a.jsxs)("div",{className:"fixed inset-0 flex flex-col items-end justify-start p-4 text-xs",children:[(0,a.jsxs)("pre",{children:["sm: ",N("sm")?"y":"n"]}),(0,a.jsxs)("pre",{children:["md: ",N("md")?"y":"n"]}),(0,a.jsxs)("pre",{children:["lg: ",N("lg")?"y":"n"]}),(0,a.jsxs)("pre",{children:["xl: ",N("xl")?"y":"n"]}),(0,a.jsxs)("pre",{children:["2xl: ",N("2xl")?"y":"n"]}),(0,a.jsx)("pre",{children:JSON.stringify(Array.from(e))})]})}function er(){let{scrollY:e}=(0,n.v)(),t=(0,i.q)(e,{stiffness:500,damping:50,mass:.1});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("main",{className:"relative flex flex-col items-center font-inter",children:[(0,a.jsx)(r.E.div,{className:"absolute inset-0 h-full w-full overflow-hidden",children:(0,a.jsx)(r.E.div,{className:"h-screen w-screen",style:{y:t},children:(0,a.jsx)(C,{})})}),(0,a.jsx)(F,{}),(0,a.jsx)(V,{}),(0,a.jsx)(q,{}),(0,a.jsx)(en,{})]}),(0,a.jsx)("footer",{children:(0,a.jsxs)("div",{className:"w-full p-4 pb-12 text-center text-xs opacity-40",children:["built with ♡ by ",(0,a.jsx)("a",{href:"https://github.com/bryjch",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"@bryjch"})," \xa9 ".concat(new Date().getFullYear())]})}),(0,a.jsx)(ei,{})]})}},4475:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/apt-leaderboard.83c96e44.png",height:1e3,width:636,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAfklEQVR42g3KSQ6CMBQA0N7CRONe48aIGosU7DzQTy21bUK8/zlg/R4a+s4LRXbH0+V6a14oGFJ8NL3CneDCoZ/jMS1CBy6AyxElRwOk/eHctoxyszkr+S9U6Iim258kSbHmvGgNGH/Q10oPxY4JpjpQi+4NrnMFmCnTz8d7Bd6IIGEeuP0kAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8}},7885:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/apt-live-matches.5c783623.png",height:1e3,width:636,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAhUlEQVR42mPQ0NJXUdU2FhZ3sgcCZwYHezsjIzMlZXV/d3dnF3eG6BC/+IQ0T69AUyMbYyNLhpiwwKioRGMTe1sLeysTK4bk2IjAoEgVNVN7KwdLYwuGkEB/UzMHZVVDO0sHEyMLoHn25ubWosJSbvb2lhbWDD7ubj6+wfqG1rbWTtYWtgAwlRzj+hAq4QAAAABJRU5ErkJggg==",blurWidth:5,blurHeight:8}},1957:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/dribble.1a53d5ec.png",height:791,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgElEQVR42gUAzQqCMHj/G1FYUB06Bl17gB4+6Ak6dkwdIWi5zTm+bYkFbh83pSRE4IpGmPBPmiG5kNj1/kzBal3PhCmGBefgY/bAqqw+ZWO0HrN41eUkyWlZXFZbej4ewLbdu8uh3xULJSgS3DHMomkG73ubCd+MX7xfz4igytk/ojZEM/pAuEQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},5727:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/invui.5ebc45e9.png",height:780,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAfElEQVR42gXAygrCIM91GnuEbkMnsyn5SEVto5Ig6AF1Wf//LQH2PRK4HUmbOVsPAnVdU5SwqcBI8UDZ6chzVAwPv/X9ep7zZQYpus220ErHFMqiXm7u/klGGaCV8t4TQmFdSTGFkKy1E+egRzsEoZPk+0jOSGv9HP118X/GQxRhlRMNgQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[689,950,957,665,706,280,240,699,614,632,971,938,744],function(){return e(e.s=6371)}),_N_E=e.O()}]);
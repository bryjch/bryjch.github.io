(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5042:function(){},6371:function(e,t,s){Promise.resolve().then(s.bind(s,905))},905:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return et}});var i=s(7437),a=s(6522),l=s(8254),n=s(3186),r=s(9905),c=s(7828),o=s(2265),d=s(6375),m=s(6544),u=s(5887),x=s(5900),h=s(4421),p=s(5616),f=s(8559);function g(e){var t,s,a,l,n,r,c,u,g,j;let v=(0,o.useRef)(),[b,A]=(0,o.useState)(),{onMaterialReady:y}=e,w={scale:null!==(r=null===(t=e.equilibrium)||void 0===t?void 0:t.scale)&&void 0!==r?r:1,opacity:null!==(c=null===(s=e.equilibrium)||void 0===s?void 0:s.opacity)&&void 0!==c?c:.25,distort:null!==(u=null===(a=e.equilibrium)||void 0===a?void 0:a.distort)&&void 0!==u?u:.99},N={stops:null!==(g=null===(l=e.gradient)||void 0===l?void 0:l.stops)&&void 0!==g?g:[0,.8,1],colors:null!==(j=null===(n=e.gradient)||void 0===n?void 0:n.colors)&&void 0!==j?j:["#e63946","#f1faee","#a8dadc"]};return(0,m.C)((t,s)=>{var i,a,l,n,r,c,o,m;let{clock:u,pointer:x}=t,h=(0,f.uZ)(s,0,.2),p=10*e.timesClicked,g=(null!==(r=null===(i=e.mousePos)||void 0===i?void 0:i.x)&&void 0!==r?r:x.x)*(null!==(c=null===(a=e.mousePos)||void 0===a?void 0:a.multiplyFactor)&&void 0!==c?c:1),j=(null!==(o=null===(l=e.mousePos)||void 0===l?void 0:l.y)&&void 0!==o?o:x.y)*(null!==(m=null===(n=e.mousePos)||void 0===n?void 0:n.multiplyFactor)&&void 0!==m?m:1);v.current.position.y=Math.sin(u.getElapsedTime())/10,v.current.rotation.z=u.getElapsedTime(),v.current.rotation.y=.02+d.MathUtils.lerp(v.current.rotation.y,p+g*Math.PI*1.5,h),v.current.rotation.x=.03+d.MathUtils.lerp(v.current.rotation.x,p+j*Math.PI*1.5,h);let A=d.MathUtils.lerp(v.current.scale.x,w.scale,h);v.current.scale.x=A,v.current.scale.y=A,v.current.scale.z=A,b.distort=d.MathUtils.lerp(b.distort,w.distort,2*h),b.opacity=d.MathUtils.lerp(b.opacity,w.opacity,h)}),(0,o.useEffect)(()=>{b&&v&&(v.current.scale.x=1.3,v.current.scale.y=1.3,v.current.scale.z=1.3,b.distort=.2)},[e.timesClicked,b,v]),(0,o.useEffect)(()=>{b&&(null==y||y(b))},[b,y]),(0,i.jsxs)("group",{children:[(0,i.jsx)(x.Y,{ref:A,color:"#ffffff",roughness:.1,speed:2,radius:1,distort:.99,opacity:0,transparent:!0,children:(0,i.jsx)(h.S,{size:100,...N})}),!!b&&(0,i.jsx)(p.FC,{args:[1,10],ref:v,material:b,position:[0,0,0],scale:[1,1,1]})]})}function j(){let[e,t]=(0,o.useState)(!1),s=(0,o.useRef)(null),{elX:a,elY:l,elW:n,elH:d}=(0,r.Z)(s),[m,x]=(0,o.useState)(0),[h,,p]=(0,c.Z)(500);return(0,i.jsxs)("div",{ref:s,className:"relative h-full w-full",children:[(0,i.jsxs)(u.Xz,{camera:{position:[0,0,4]},gl:{powerPreference:"low-power",alpha:!0,antialias:!1},onClick:function(){h()&&(x(e=>e+1),p())},children:[(0,i.jsx)("ambientLight",{}),(0,i.jsx)(o.Suspense,{children:(0,i.jsx)(g,{timesClicked:m,mousePos:{x:(a||0)/(n||1),y:(l||0)/(d||1),multiplyFactor:2},onMaterialReady:()=>t(!0)})})]}),!1]})}var v=s(7997),b=s(711),A=s.n(b);let y=e=>(0,i.jsxs)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"405.047px",height:"405.047px",viewBox:"0 0 405.047 405.047",...e,children:[(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"M283.897,92.846c-36.582-49.345-73.688-89.267-74.061-89.664C207.944,1.153,205.296,0,202.523,0   c-2.774,0-5.423,1.152-7.314,3.182c-0.371,0.397-37.478,40.319-74.06,89.664c-49.971,67.403-75.308,119.726-75.308,155.513   c0,86.396,70.287,156.688,156.682,156.688c86.396,0,156.683-70.29,156.683-156.688C359.206,212.572,333.868,160.25,283.897,92.846z   M218.171,354.342c-8.213,1.941-16.68,2.926-25.162,2.926c-60.294,0-109.347-49.055-109.347-109.35   c0-8.312,2.559-23.373,14.75-47.914c1.225-2.467,4.046-3.691,6.687-2.908c2.639,0.785,4.33,3.357,4.007,6.091   c-0.28,2.361-0.421,4.584-0.421,6.607c0,64.629,45.966,120.77,109.298,133.484c2.607,0.525,4.5,2.795,4.545,5.455   C222.575,351.396,220.761,353.729,218.171,354.342z"})}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{}),(0,i.jsx)("g",{})]});var w=s(4769),N=s(7042);function k(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,w.m6)((0,N.W)(t))}function C(){return String.fromCharCode(8291)}let E=e=>{let{children:t="",className:s=""}=e;return(0,i.jsx)("div",{className:k("flex",s),children:t.split("").map((e,s)=>{let a=A()("".concat(t,"-").concat(e,"-").concat(s))();return(0,i.jsx)(U,{index:s,seed:a,children:e},"rotatey-key-".concat(s))})})},U=e=>{let{children:t,index:s,seed:a,debug:l=!1}=e,[n,r]=(0,o.useState)(!1),c=(0,o.useMemo)(()=>5*a,[a]),d=10+5*(s/10+Math.sin(c+s));return(0,i.jsxs)("div",{className:"relative cursor-default whitespace-pre-wrap text-center",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,i.jsx)("div",{className:n?"animate-spook":"animate-float",style:{animationDelay:n?"":"".concat(c,"s")},children:(0,i.jsx)("div",{className:n?"animate-wiggle":"animate-rock",style:{animationDuration:n?"0.15s":"".concat(d.toFixed(1),"s"),animationDirection:s%2?"reverse":"normal"},children:t})}),n&&(0,i.jsxs)("div",{className:"absolute inset-0",children:[(0,i.jsx)("div",{className:"absolute right-0 top-1",children:(0,i.jsx)(y,{className:"h-3 w-3 animate-droplet fill-blue-400",style:{animationFillMode:"backwards",animationDelay:"1s"}})}),(0,i.jsx)("div",{className:"absolute left-0 top-3",children:(0,i.jsx)(y,{className:"h-2 w-2 animate-droplet fill-blue-400",style:{animationFillMode:"backwards",animationDelay:"2.5s"}})})]}),l&&(0,i.jsx)("div",{className:"text-xs font-medium",children:(0,i.jsx)("div",{children:c})})]})},M=()=>(0,i.jsx)("section",{className:"flex min-h-screen w-full flex-col items-center justify-center py-24 md:flex-row",children:(0,i.jsxs)("div",{className:"relative max-w-[20em] px-6 text-center md:text-left",children:[(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsx)(E,{className:"justify-center text-2xl font-black md:justify-start",children:"bryan choo"}),(0,i.jsxs)("p",{className:"text-xs opacity-50 dark:opacity-80",children:[">"," fullstack software engineer"]})]}),(0,i.jsxs)("div",{className:"mb-6 text-sm text-pp-text-muted",children:[(0,i.jsx)("p",{children:"I love solving problems & creating enjoyable user experiences with clean & intuitive design in mind."}),(0,i.jsx)("p",{children:"Based in Malaysia."})]}),(0,i.jsxs)("div",{className:"flex flex-row items-start justify-center gap-4 text-sm md:flex-col md:justify-end md:gap-1",children:[(0,i.jsxs)("a",{className:"underline-anchor relative inline-flex items-center font-bold",href:"https://github.com/bryjch",children:["GitHub ",(0,i.jsx)(v.w9C,{})]}),(0,i.jsxs)("a",{className:"underline-anchor relative inline-flex items-center font-bold",href:"https://www.linkedin.com/in/bryjch",children:["LinkedIn ",(0,i.jsx)(v.w9C,{})]})]}),(0,i.jsx)("div",{className:"absolute bottom-0 left-0 hidden origin-bottom-left -rotate-90 md:block",children:(0,i.jsx)("span",{className:"text-5xl font-black opacity-10 dark:opacity-60",children:"hello i'm"})})]})});var S=s(2393),R=s(8868),I=s(1077),F=s(5633);let G=e=>{let{string:t,interval:s=.03,delay:i=0,skipIterations:a=10}=e,[l,n]=(0,o.useState)(0),[r,d]=(0,o.useState)(0),[m,u]=(0,o.useState)(0),[x]=(0,c.Z)(1e3*i),[h,p]=(0,I.Z)(!1),[f,g]=(0,o.useState)(""),[j,v]=(0,o.useState)(""),b=x()&&!h,A=x()&&m<t.length;return(0,o.useEffect)(()=>{},[]),(0,F.Z)(()=>{let e,s;l<a?(e=z(l),s=""):(e=t.slice(0,r),s=z(t.length-r),d(e=>e+1)),g(e),v(s),n(e=>e+1),r>=t.length&&p(!0)},b?1e3*s:null),(0,F.Z)(()=>u(e=>e+1),A?950*s:null),"".concat(f).concat(j).slice(0,m)+String.fromCharCode(8291)};function z(e){let t="abcdefghijklmnopqrstuvwxyz0123456789",s="";for(let i=0;i<e;i++)s+=t.charAt(Math.floor(Math.random()*t.length));return s}let H=[{title:"age",description:"counting down the days",value:(function(e){let t=new Date,s=new Date(e),i=t.getFullYear()-s.getFullYear(),a=t.getMonth()-s.getMonth();return a<0||0===a&&t.getDate()<s.getDate()?i-1:i})("1994-12-29").toString()},{title:"role",description:"little impostor syndrome",value:"fullstack engineer"},{title:"language",description:"not duolingo",value:"typescript"},{title:"framework",description:"a frame that works",value:"react"},{title:"based in",description:"home sweet home",value:"malaysia"},{title:"times rickrolled",description:"never catch me lackin",value:"0"}],D=()=>(0,i.jsxs)(n.E.section,{className:"flex h-[90vh] w-screen flex-col items-center justify-start sm:h-[75vh]",children:[(0,i.jsx)("div",{className:"relative grid text-5xl font-black leading-[0.8em]",children:(0,i.jsx)(E,{children:"tl;dr"})}),(0,i.jsx)("div",{className:"relative flex w-full max-w-lg flex-col items-start p-8 leading-none",children:H.map((e,t)=>(0,i.jsx)(P,{index:t,...e},"row-".concat(t)))}),(0,i.jsxs)("div",{className:"relative text-xs opacity-40",children:["anim based on"," ",(0,i.jsx)("a",{className:"underline",href:"https://rauno.me/projects",target:"_blank",rel:"noopener noreferrer",children:"rauno.me"})]})]}),P=e=>{let{title:t,description:s,value:a,index:l}=e,[r]=(0,S.H)(),c=(0,R.Y)(r,{margin:"-33% 0% -33% 0%",once:!0}),o=.05*l;return(0,i.jsx)(n.E.div,{ref:r,className:k("flex w-full flex-wrap rounded py-2 sm:py-4"),initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:o},title:s,children:c?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"relative flex flex-col sm:flex-row",children:[(0,i.jsxs)("span",{className:"flex-shrink-0 font-bold",children:[(0,i.jsx)(G,{string:t,delay:o}),C()]}),(0,i.jsx)("span",{className:"flex-shrink-0 self-start text-[0.8em] font-light opacity-60 sm:self-end",children:C()})]}),(0,i.jsxs)("div",{className:"flex flex-1 items-center",children:[(0,i.jsx)("div",{className:"mx-2 flex flex-1 items-center",children:(0,i.jsx)(n.E.div,{className:"h-[1px] border-b-2 border-dotted border-pp-text",initial:{width:"0%",opacity:.8},animate:{width:"100%",opacity:.2},transition:{duration:1,delay:o}})}),(0,i.jsx)("div",{className:"text-pp-text-muted sm:self-start",children:(0,i.jsx)(G,{string:a,delay:o,skipIterations:30})})]})]}):(0,i.jsx)("span",{children:C()})},"item-".concat(t))};var Q=s(6691),V=s.n(Q),B=s(4932);let T=[{name:"dribble.tf",description:"In browser interactive 3D tool for reviewing past Team Fortress 2 matches.\n\nA feature lacking from the game itself, the tool allows players to analyse gameplay and provide an intuitive interface for coaching.",url:"https://dribble.tf",github:"https://github.com/bryjch/dribble.tf",images:{mode:"landscape",items:[s(1957)]}},{name:"invUI",description:"Exploring and recreating user interfaces from various video games.\n\nI've always loved the mix of style, usability and fun behind a good video game UI. This is a fun attempt to recreate some of these experiences in the browser.",url:"https://invui.netlify.app",github:"https://github.com/bryjch/invui",images:{mode:"landscape",items:[s(5727)]}},{name:"apex pred tracker",description:"Twitch extension that tracks the top 750 players in Apex Legends in real time.\n\nThe game itself doesn't have an official leaderboard - so this is way to keep up with the game's competitive ranked scene while watching Twitch.",url:"https://dashboard.twitch.tv/extensions/9x7t6zdn54tl4xi81x6t3ac5irq7ev-0.0.3",github:"",images:{mode:"portrait",items:[s(4475),s(7885)]}}],L=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("section",{className:"-mb-4 flex items-center justify-center md:-mb-8",children:(0,i.jsx)("div",{className:"relative ml-auto inline-flex",children:(0,i.jsxs)("div",{className:"relative grid text-5xl font-black leading-[0.8em]",children:[(0,i.jsx)(E,{children:"personal"}),(0,i.jsx)(E,{children:"projects"})]})})}),(0,i.jsx)("section",{children:T.map(e=>(0,i.jsx)(Z,{...e},"project-".concat(e.name)))})]}),Z=e=>{let{name:t,description:s,github:a,images:l,url:r}=e,[c]=(0,S.H)(),[d,m]=(0,S.H)(),u=(0,R.Y)(c,{amount:.66,once:!0});return(0,o.useEffect)(()=>{u?m(d.current,{opacity:1,y:0},{duration:.5}):m(d.current,{opacity:0,y:50},{duration:.5})},[u,m,d]),(0,i.jsxs)(n.E.div,{ref:c,className:"relative mx-auto my-20 flex w-full max-w-screen-lg flex-col items-center justify-center px-8 md:my-40 md:flex-row lg:px-12",children:[(0,i.jsxs)("div",{className:"basis-5/12 md:pr-12",children:[(0,i.jsxs)("div",{className:"mb-6 flex items-center",children:[(0,i.jsx)("a",{href:r,className:"underline-anchor relative inline-flex transition-all",children:(0,i.jsx)("h2",{className:"text-2xl font-black",children:t})}),a&&(0,i.jsx)("a",{href:a,className:"ml-2 inline-block text-2xl transition-all hover:text-pp-accent",children:(0,i.jsx)(B.JOq,{})})]}),(0,i.jsx)(n.E.p,{className:"mb-6 max-w-sm whitespace-pre-line text-sm text-pp-text-muted",children:s})]}),(0,i.jsx)(n.E.div,{ref:d,className:"relative flex w-full max-w-sm basis-7/12 items-center justify-center md:max-w-screen-sm",children:(0,i.jsx)("a",{href:r,className:"inline-block transition-transform duration-300 hover:scale-[102%]",children:l&&(0,i.jsx)("div",{className:"group flex",children:l.items.map((e,s)=>(0,i.jsx)("div",{className:k("inline-block rounded-[2rem] shadow-lg md:rounded-[4rem]",1===s&&"-mr-5 -translate-x-2 scale-90"),children:(0,i.jsx)(V(),{src:e,alt:t,className:"overflow-hidden rounded-[2rem] md:rounded-[4rem]"})},"project-images-image-".concat(s)))})})})]},"project-".concat(t))};var Y=s(1223),q=s(8409),O=s(2949),W=s(8527),_=s(8031),J=s(9172);let K=[0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0],X=[{Component:q.huN,name:"React"},{Component:O.KU_,name:"React Native"},{Component:B.zr8,name:"Vue"},{Component:W.YnA,name:"Tailwind CSS"},{Component:W.xQ0,name:"Sass"},{Component:_.G9,name:"TypeScript"},{Component:W.PoL,name:"Redux"},{Component:B.JOq,name:"GitHub"},{Component:J.eH5,name:"GitLab"},{Component:_.d5s,name:"Netlify"},{Component:q.UC$,name:"AWS"},{Component:W.v$y,name:"Strapi"},{Component:W.nPl,name:"Vite"},{Component:O.Xl5,name:"Three.js"}],$=()=>{let e=0;return(0,i.jsx)("div",{className:"relative grid grid-cols-7",children:K.map((t,s)=>{if(0===t)return(0,i.jsx)("div",{className:"h-8 w-8"},s);{let t=X[++e%X.length];if(!t)return(0,i.jsx)("div",{className:"h-8 w-8 bg-green-300"},s);let{Component:a}=t;return(0,i.jsx)("div",{className:"h-8 w-8",children:(0,i.jsx)(a,{className:"h-full w-full"})},s)}})})},ee=()=>(0,i.jsx)("section",{className:"pointer-events-none relative flex min-h-screen items-center justify-center",children:(0,i.jsxs)("div",{className:"pointer-events-auto flex flex-col items-center justify-center",children:[(0,i.jsxs)("div",{className:"relative flex text-5xl font-black leading-[0.8em]",children:[(0,i.jsx)(Y.pQB,{className:" mr-4 animate-float text-red-400"}),(0,i.jsx)(E,{children:"languages"})]}),(0,i.jsx)("div",{className:"mt-16 opacity-90",children:(0,i.jsx)($,{})})]})});function et(){let{scrollY:e}=(0,a.v)(),t=(0,l.q)(e,{stiffness:500,damping:50,mass:.1});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("main",{className:"relative flex flex-col items-center font-inter",children:[(0,i.jsx)(n.E.div,{className:"absolute inset-0 h-full w-full overflow-hidden",children:(0,i.jsx)(n.E.div,{className:"h-screen w-screen",style:{y:t},children:(0,i.jsx)(j,{})})}),(0,i.jsx)(M,{}),(0,i.jsx)(D,{}),(0,i.jsx)(L,{}),(0,i.jsx)(ee,{})]}),(0,i.jsx)("footer",{children:(0,i.jsxs)("div",{className:"w-full p-4 pb-12 text-center text-xs opacity-40",children:["built with ♡ by ",(0,i.jsx)("a",{href:"https://github.com/bryjch",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"@bryjch"})," \xa9 ".concat(new Date().getFullYear())]})})]})}},4475:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/apt-leaderboard.83c96e44.png",height:1e3,width:636,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAfklEQVR42g3KSQ6CMBQA0N7CRONe48aIGosU7DzQTy21bUK8/zlg/R4a+s4LRXbH0+V6a14oGFJ8NL3CneDCoZ/jMS1CBy6AyxElRwOk/eHctoxyszkr+S9U6Iim258kSbHmvGgNGH/Q10oPxY4JpjpQi+4NrnMFmCnTz8d7Bd6IIGEeuP0kAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8}},7885:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/apt-live-matches.5c783623.png",height:1e3,width:636,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAhUlEQVR42mPQ0NJXUdU2FhZ3sgcCZwYHezsjIzMlZXV/d3dnF3eG6BC/+IQ0T69AUyMbYyNLhpiwwKioRGMTe1sLeysTK4bk2IjAoEgVNVN7KwdLYwuGkEB/UzMHZVVDO0sHEyMLoHn25ubWosJSbvb2lhbWDD7ubj6+wfqG1rbWTtYWtgAwlRzj+hAq4QAAAABJRU5ErkJggg==",blurWidth:5,blurHeight:8}},1957:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/dribble.1a53d5ec.png",height:791,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgElEQVR42gUAzQqCMHj/G1FYUB06Bl17gB4+6Ak6dkwdIWi5zTm+bYkFbh83pSRE4IpGmPBPmiG5kNj1/kzBal3PhCmGBefgY/bAqqw+ZWO0HrN41eUkyWlZXFZbej4ewLbdu8uh3xULJSgS3DHMomkG73ubCd+MX7xfz4igytk/ojZEM/pAuEQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},5727:function(e,t,s){"use strict";s.r(t),t.default={src:"/_next/static/media/invui.5ebc45e9.png",height:780,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAfElEQVR42gXAygrCIM91GnuEbkMnsyn5SEVto5Ig6AF1Wf//LQH2PRK4HUmbOVsPAnVdU5SwqcBI8UDZ6chzVAwPv/X9ep7zZQYpus220ErHFMqiXm7u/klGGaCV8t4TQmFdSTGFkKy1E+egRzsEoZPk+0jOSGv9HP118X/GQxRhlRMNgQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[689,950,957,665,706,280,240,699,614,827,971,938,744],function(){return e(e.s=6371)}),_N_E=e.O()}]);
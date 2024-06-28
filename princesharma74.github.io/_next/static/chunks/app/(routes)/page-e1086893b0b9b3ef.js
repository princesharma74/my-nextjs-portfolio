(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{5780:function(e,t,s){Promise.resolve().then(s.bind(s,3241)),Promise.resolve().then(s.bind(s,2702)),Promise.resolve().then(s.bind(s,671)),Promise.resolve().then(s.bind(s,1933)),Promise.resolve().then(s.bind(s,7586)),Promise.resolve().then(s.bind(s,5356)),Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.t.bind(s,231,23))},3241:function(e,t,s){"use strict";s.d(t,{ExperienceSection:function(){return m}});var a=s(7437),r=s(5444),l=s(882);let n=l.fC,i=l.wy,o=l.Fw;var c=s(7138),d=s(2265),u=s(6235);let m=e=>{var t;let{data:s}=e,[l,m]=(0,d.useState)(null===(t=s[0])||void 0===t?void 0:t.id),[f,h]=(0,d.useState)(!1);if((0,d.useEffect)(()=>{h(!0)},[]),!f)return null;let p=e=>{l!==e?m(e):m("")};return(0,a.jsxs)(r.Z,{className:"w-full py-12 md:py-24 lg:py-32",id:"experiences",children:[(0,a.jsx)(c.default,{href:"/#experiences"}),(0,a.jsx)("div",{className:"container px-4 md:px-6",children:(0,a.jsxs)("div",{className:"space-y-4 md:space-y-6",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl",children:"Experiences"}),(0,a.jsx)("p",{className:"max-w-[900px] text-muted-foreground text-center",children:"Here are some of the experiences I've gained so far."})]}),(0,a.jsx)("div",{className:"space-y-4",children:s.map(e=>(0,a.jsxs)(n,{className:"rounded-lg border bg-background shadow-sm",open:e.id===l,onOpenChange:()=>p(e.id),children:[(0,a.jsxs)(i,{className:"w-full flex items-center justify-between gap-4 px-4 py-2 [&[data-state=open]>svg]:rotate-90",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between gap-4 px-6 py-4",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-left",children:e.title}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground text-right",children:"".concat(e.company," | ").concat((0,u.WU)(e.start_time,"MMM yyyy")," - ").concat(e.end_time&&e.end_time.getFullYear()?(0,u.WU)(e.end_time,"MMM yyyy"):"Present")})]}),(0,a.jsx)(x,{className:"h-5 w-5 transition-transform"})]}),(0,a.jsx)(o,{className:"mx-5 px-6 pb-4",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("p",{children:["As a ",e.title," at ",e.company,", I was responsible for:"]}),(0,a.jsx)("ul",{className:"list-disc space-y-1 text-sm text-muted-foreground",children:e.responsibility}),(0,a.jsx)("p",{children:"Key achievements:"}),(0,a.jsx)("ul",{className:"list-disc space-y-1 text-sm text-muted-foreground",children:e.achievements})]})})]},e.id))})]})})]})};function x(e){return(0,a.jsx)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"m6 9 6 6 6-6"})})}},2702:function(e,t,s){"use strict";s.d(t,{default:function(){return g}});var a=s(7437),r=s(5444),l=s(3379);let n=(0,l.tv)({base:"tracking-tight inline font-semibold",variants:{color:{violet:"from-[#FF1CF7] to-[#b249f8]",yellow:"from-[#FF705B] to-[#FFB457]",blue:"from-[#5EA2EF] to-[#0072F5]",cyan:"from-[#00b7fa] to-[#01cfea]",green:"from-[#6FEE8D] to-[#17c964]",pink:"from-[#FF72E1] to-[#F54C7A]",foreground:"dark:from-[#FFFFFF] dark:to-[#4B4B4B]"},size:{xs:"text-3xl font-semibold text-gray-900 dark:text-white",sm:"text-3xl lg:text-4xl",md:"text-[2.3rem] lg:text-5xl leading-9",lg:"text-4xl lg:text-6xl"},fullWidth:{true:"w-full block"}},defaultVariants:{size:"md"},compoundVariants:[{color:["violet","yellow","blue","cyan","green","pink","foreground"],class:"bg-clip-text text-transparent bg-gradient-to-b"}]});(0,l.tv)({base:"w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",variants:{fullWidth:{true:"!w-full"}},defaultVariants:{fullWidth:!0}});var i=s(2265);class o{tick(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=100;this.isDeleting&&(s/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout(()=>{this.tick()},s)}constructor(e,t,s){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(s.toString(),10)||2e3,this.txt="",this.isDeleting=!1,this.tick()}}var c=e=>{let{dataText:t,className:s}=e,r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{r.current&&setTimeout(()=>{new o(r.current,t,2e3)},0)},[t]),(0,a.jsx)("span",{className:"border-r-2 ".concat(s),ref:r})},d=s(495),u=s(6648),m=s(1183),x=s(8472),f=s(357);async function h(e){let t=await x.Z.get(e,{responseType:"blob"}),s=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=s,a.setAttribute("download","prince_sharma_resume.pdf"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}f.env.USERNAME,f.env.PASSWORD,f.env.RECORD_ID;let p=(0,s(9099).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}));var g=e=>{let{data:{avatar:t,roles:s,introduction:l,name:o,resume:x}}=e,[f,g]=(0,i.useState)(!1),{isOpen:v,onOpen:b,onClose:j}=p();(0,i.useEffect)(()=>{!async function(){(await (0,m.o)({}))("ui",{styles:{branding:{brandColor:"#000000"}},hideEventTypeDetails:!1,layout:"month_view"})}()},[]);let N=async()=>{g(!0),await h(x),g(!1)};return(0,a.jsx)("main",{children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(u.default,{src:t,alt:"Profile Picture",width:200,height:200,className:"rounded-full"})}),(0,a.jsxs)("div",{className:"inline-block max-w-lg text-center justify-center space-y-4",children:[(0,a.jsxs)("h1",{className:n(),children:["Hey folks, I'm a ",(0,a.jsx)("br",{}),(0,a.jsx)(c,{className:n({color:"cyan"}),dataText:s})]}),(0,a.jsx)("p",{className:"px-6 md:px-0",children:l})]}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-2 items-center",children:[(0,a.jsx)(d.z,{variant:"secondary",className:"rounded-full","data-cal-namespace":"","data-cal-link":"princesharma74/book-an-appointment","data-cal-config":'{"layout":"month_view"}',children:(0,a.jsx)("span",{className:"flex items-center gap-2",children:"Contact me"})}),(0,a.jsx)(d.z,{className:"rounded-full",disabled:f,onClick:N,children:f?"Downloading...":"Download Resume"})]})]})})}},671:function(e,t,s){"use strict";s.d(t,{Socials:function(){return i}});var a=s(7437),r=s(6648),l=s(7138),n=s(2265);let i=e=>{let{data:t}=e,[s,i]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{i(!0)},[]),s)?(0,a.jsxs)("section",{className:"w-full py-12 md:py-24 lg:py-32 bg-muted",id:"socials",children:[(0,a.jsx)(l.default,{href:"#socials"}),(0,a.jsxs)("div",{className:"container grid items-center justify-center gap-4 px-4 text-center md:px-6",children:[(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold tracking-tighter md:text-4xl/tight",children:"You can find me on"}),(0,a.jsx)("p",{className:"mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",children:"Follow me on your favorite platforms to stay up-to-date with my latest updates and projects."})]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-5 items-center justify-center",children:t.map(e=>(0,a.jsxs)(l.default,{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center gap-2 hover:text-primary transition-colors",children:[(0,a.jsx)("div",{className:"bg-background p-3 rounded-full",children:(0,a.jsx)(r.default,{src:e.icon,alt:e.title,width:30,height:30})}),(0,a.jsx)("span",{className:"text-sm font-medium",children:e.title})]},e.id))})]})]}):null}},1933:function(e,t,s){"use strict";s.d(t,{Templates:function(){return x}});var a=s(7437),r=s(2265);let l=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});var n=e=>{let{value:t}=e,[s,n]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{n(!0)},[]),s)?(0,a.jsx)("div",{className:"font-semibold",children:l.format(Number(t))}):null},i=s(495),o=s(7440);let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",s),...r})});c.displayName="Card",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",s),...r})}).displayName="CardHeader",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",s),...r})}).displayName="CardTitle",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",s),...r})}).displayName="CardDescription",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",s),...r})}).displayName="CardContent",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",s),...r})}).displayName="CardFooter";var d=s(6648),u=s(7138),m=s(6463);let x=e=>{let{data:t}=e,s=(0,m.useRouter)();return(0,a.jsxs)("section",{className:"w-full py-12 md:py-24 lg:py-32",id:"templates",children:[(0,a.jsx)(u.default,{href:"#templates"}),(0,a.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,a.jsx)("div",{className:"flex flex-col items-center justify-center space-y-4 text-center",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl",children:"My Featured Templates"}),(0,a.jsx)("p",{className:"max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",children:"Here are some of the templates I've worked on that showcase my skills and expertise."})]})}),(0,a.jsx)("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12",children:t.map(e=>(0,a.jsxs)(c,{className:"relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out",children:[(0,a.jsx)(u.default,{href:e.url,className:"absolute inset-0 z-10",prefetch:!1,children:(0,a.jsx)("span",{className:"sr-only",children:"View template"})}),(0,a.jsx)(d.default,{src:e.images[0],alt:"template 1",width:360,height:240,className:"object-cover w-full h-48 sm:h-56"}),(0,a.jsxs)("div",{className:"p-4 bg-background flex flex-col h-full",children:[(0,a.jsx)("h3",{className:"text-xl font-bold",children:e.title}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:(0,o.X)(e.description,200)}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)(n,{value:e.price}),(0,a.jsx)(i.z,{onClick:()=>{s.push(e.purchase_link)},variant:"outline",className:"rounded-full",children:"Buy Now"})]})]})]},e.id))})]})]})}},5444:function(e,t,s){"use strict";var a=s(7437),r=s(7440);t.Z=e=>{let{className:t,id:s,children:l}=e;return(0,a.jsx)("section",{id:s,className:(0,r.cn)("flex flex-col items-center justify-center gap-4 py-8 md:mx-4 md:py-10",t),children:l})}},7586:function(e,t,s){"use strict";s.d(t,{default:function(){return R}});var a=s(7437),r=s(7440),l=s(7138),n=s(6463);let i=[{href:"#projects",label:"Projects",active:!1},{href:"#experiences",label:"Experiences",active:!1},{href:"#publications",label:"Publications",active:!1},{href:"#templates",label:"Templates",active:!1},{href:"#socials",label:"Socials",active:!1}];function o(e){let{className:t}=e,s=(0,n.usePathname)(),o=i.map(e=>({...e,active:s===e.href}));return(0,a.jsx)("nav",{className:(0,r.cn)("hidden md:flex items-center space-x-4 lg:space-x-6",t),children:o.map(e=>(0,a.jsx)(l.default,{href:e.href,className:(0,r.cn)("text-sm font-medium transition-colors hover:text-primary",e.active?"text-black dark:text-white":"text-muted-foreground"),children:e.label},e.href))})}var c=s(2265),d=s(8296),u=s(2699),m=s(9512),x=s(495);function f(){let{theme:e,setTheme:t}=(0,m.F)();return(0,a.jsxs)(x.z,{variant:"outline",size:"icon",className:"border-none rounded-full",onClick:()=>{t("dark"==e?"light":"dark")},children:[(0,a.jsx)(d.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,a.jsx)(u.Z,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})]})}var h=s(1332),p=s(2218),g=s(4697);let v=h.fC;h.xz,h.x8;let b=h.h_,j=c.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(h.aV,{className:(0,r.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...l,ref:t})});j.displayName=h.aV.displayName;let N=(0,p.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),y=c.forwardRef((e,t)=>{let{side:s="right",className:l,children:n,...i}=e;return(0,a.jsxs)(b,{children:[(0,a.jsx)(j,{}),(0,a.jsxs)(h.VY,{ref:t,className:(0,r.cn)(N({side:s}),l),...i,children:[n,(0,a.jsxs)(h.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,a.jsx)(g.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});y.displayName=h.VY.displayName,c.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(h.Dx,{ref:t,className:(0,r.cn)("text-lg font-semibold text-foreground",s),...l})}).displayName=h.Dx.displayName,c.forwardRef((e,t)=>{let{className:s,...l}=e;return(0,a.jsx)(h.dk,{ref:t,className:(0,r.cn)("text-sm text-muted-foreground",s),...l})}).displayName=h.dk.displayName;let w=(0,s(9099).Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}));var k=s(5446);function C(){let e=(0,n.usePathname)(),{isOpen:t,onOpen:s,onClose:o}=w(),c=i.map(t=>({...t,active:e===t.href}));return(0,a.jsx)("div",{className:"block md:hidden",children:(0,a.jsxs)(v,{open:t,onOpenChange:e=>{e||o()},children:[(0,a.jsx)(x.z,{variant:"outline",className:"border-none",onClick:()=>{s()},children:(0,a.jsx)(k.Z,{})}),(0,a.jsx)(y,{children:(0,a.jsx)("div",{className:"flex flex-col gap-4",children:c.map(e=>(0,a.jsx)(l.default,{href:e.href,className:(0,r.cn)("bg-background hover:bg-accent hover:text-accent-foreground rounded-full p-2",e.active?"font-semibold":"text-neutral-500"),onClick:()=>{o()},children:e.label},e.href))})})]})})}var R=()=>(0,a.jsxs)("div",{className:"flex h-16 items-center justify-between px-4",children:[(0,a.jsx)("div",{className:"font-bold text-2xl mx-4",children:"PRINCE"}),(0,a.jsx)("div",{children:(0,a.jsx)(o,{className:"mx-6"})}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)("div",{children:(0,a.jsx)(f,{})}),(0,a.jsx)("div",{children:(0,a.jsx)(C,{})})]})]})},495:function(e,t,s){"use strict";s.d(t,{z:function(){return c}});var a=s(7437),r=s(2265),l=s(1538),n=s(2218),i=s(7440);let o=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:s,variant:r,size:n,asChild:c=!1,...d}=e,u=c?l.g7:"button";return(0,a.jsx)(u,{className:(0,i.cn)(o({variant:r,size:n,className:s})),ref:t,...d})});c.displayName="Button"},5356:function(e,t,s){"use strict";s.d(t,{Carousel:function(){return m},CarouselContent:function(){return x},CarouselItem:function(){return f},CarouselNext:function(){return p},CarouselPrevious:function(){return h}});var a=s(7437),r=s(2265),l=s(4300),n=s(1266),i=s(1976),o=s(7440),c=s(495);let d=r.createContext(null);function u(){let e=r.useContext(d);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let m=r.forwardRef((e,t)=>{let{orientation:s="horizontal",opts:n,setApi:i,plugins:c,className:u,children:m,...x}=e,[f,h]=(0,l.Z)({...n,axis:"horizontal"===s?"x":"y"},c),[p,g]=r.useState(!1),[v,b]=r.useState(!1),j=r.useCallback(e=>{e&&(g(e.canScrollPrev()),b(e.canScrollNext()))},[]),N=r.useCallback(()=>{null==h||h.scrollPrev()},[h]),y=r.useCallback(()=>{null==h||h.scrollNext()},[h]),w=r.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),N()):"ArrowRight"===e.key&&(e.preventDefault(),y())},[N,y]);return r.useEffect(()=>{h&&i&&i(h)},[h,i]),r.useEffect(()=>{if(h)return j(h),h.on("reInit",j),h.on("select",j),()=>{null==h||h.off("select",j)}},[h,j]),(0,a.jsx)(d.Provider,{value:{carouselRef:f,api:h,opts:n,orientation:s||((null==n?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:N,scrollNext:y,canScrollPrev:p,canScrollNext:v},children:(0,a.jsx)("div",{ref:t,onKeyDownCapture:w,className:(0,o.cn)("relative",u),role:"region","aria-roledescription":"carousel",...x,children:m})})});m.displayName="Carousel";let x=r.forwardRef((e,t)=>{let{className:s,...r}=e,{carouselRef:l,orientation:n}=u();return(0,a.jsx)("div",{ref:l,className:"overflow-hidden",children:(0,a.jsx)("div",{ref:t,className:(0,o.cn)("flex","horizontal"===n?"-ml-4":"-mt-4 flex-col",s),...r})})});x.displayName="CarouselContent";let f=r.forwardRef((e,t)=>{let{className:s,...r}=e,{orientation:l}=u();return(0,a.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,o.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===l?"pl-4":"pt-4",s),...r})});f.displayName="CarouselItem";let h=r.forwardRef((e,t)=>{let{className:s,variant:r="outline",size:l="icon",...i}=e,{orientation:d,scrollPrev:m,canScrollPrev:x}=u();return(0,a.jsxs)(c.z,{ref:t,variant:r,size:l,className:(0,o.cn)("absolute  h-8 w-8 rounded-full","horizontal"===d?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",s),disabled:!x,onClick:m,...i,children:[(0,a.jsx)(n.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});h.displayName="CarouselPrevious";let p=r.forwardRef((e,t)=>{let{className:s,variant:r="outline",size:l="icon",...n}=e,{orientation:d,scrollNext:m,canScrollNext:x}=u();return(0,a.jsxs)(c.z,{ref:t,variant:r,size:l,className:(0,o.cn)("absolute h-8 w-8 rounded-full","horizontal"===d?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",s),disabled:!x,onClick:m,...n,children:[(0,a.jsx)(i.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Next slide"})]})});p.displayName="CarouselNext"},7440:function(e,t,s){"use strict";s.d(t,{X:function(){return n},cn:function(){return l}});var a=s(4839),r=s(6164);function l(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.m6)((0,a.W)(t))}function n(e,t){return e.length>t?e.slice(0,t)+"...":e}}},function(e){e.O(0,[173,971,23,744],function(){return e(e.s=5780)}),_N_E=e.O()}]);
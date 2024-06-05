import{c as he}from"./chunk-3XY2U6EP.js";import{a as W,b as R,c as ye}from"./chunk-7KH5JAZQ.js";import{c as ge,d as A,e as ue,f as U,g as fe,k as xe,m as z,n as j,o as G,s as F,t as P,u as O,v as ke}from"./chunk-BP5TLSKF.js";import{$ as b,Ab as d,B as ae,Bb as u,Cb as ee,La as Y,Ma as D,P as oe,Pa as m,Qa as y,Qb as de,U as se,Wa as L,Y as pe,aa as f,ab as B,ca as H,cb as c,d as M,eb as q,fb as _,gb as le,hb as V,ib as I,jb as T,kb as n,lb as o,mb as s,n as K,pb as k,qa as S,qb as ce,rb as g,s as ne,sb as h,tb as $,ub as x,vb as N,wa as me,wb as E,xb as C,y as re,yb as Z,zb as p}from"./chunk-OJB3JNYL.js";var Ge=()=>({serverLink:"https://github.com/Haidra-Org/AI-Horde",imageWorkerLink:"https://github.com/Haidra-Org/horde-worker-reGen",textWorkerLink:"https://github.com/Haidra-Org/AI-Horde-Worker",joinHordeLink:"https://github.com/Haidra-Org/AI-Horde/blob/main/README_StableHorde.md#joining-the-horde"}),Oe=()=>({route:"/faq"}),$e=t=>({faqLink:t,developerBlogLink:"https://dbzer0.com/"}),ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-homepage-intro"]],standalone:!0,features:[x],decls:11,vars:6,consts:[[1,"bg-white","dark:bg-gray-900"],[1,"grid","max-w-screen-xl","px-4","pt-20","pb-8","mx-auto","lg:gap-8","xl:gap-0","lg:py-16","lg:grid-cols-12","lg:pt-28"],[1,"mr-auto","place-self-center","lg:col-span-7"],[1,"max-w-2xl","mb-4","text-4xl","font-extrabold","leading-none","tracking-tight","md:text-5xl","xl:text-6xl","dark:text-white"],["key","brand_subtitle"],[1,"max-w-2xl","mb-6","font-light","text-gray-500","lg:mb-8","md:text-lg","lg:text-xl","dark:text-gray-400"],["key","service_description",3,"params"],["key","more_information",3,"params"],[1,"hidden","lg:mt-0","lg:col-span-5","lg:flex"],["ngSrc","assets/img/front-image.png","alt","hero image","height","437","width","571","priority",""]],template:function(i,l){i&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),s(4,"transloco",4),o(),n(5,"p",5),s(6,"transloco",6),o(),n(7,"p",5),s(8,"transloco",7),o()(),n(9,"div",8),s(10,"img",9),o()()()),i&2&&(m(6),c("params",N(2,Ge)),m(2),c("params",E(4,$e,N(3,Oe))))},dependencies:[U,F]});let t=e;return t})();var be=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-homepage-sponsors"]],standalone:!0,features:[x],decls:7,vars:0,consts:[[1,"bg-white","dark:bg-gray-900"],[1,"max-w-screen-xl","px-4","pb-8","mx-auto","lg:pb-16"],[1,"mb-6","text-2xl","font-extrabold","tracking-tight","text-gray-900","dark:text-white"],[1,"grid","grid-cols-2","gap-8","text-gray-500","sm:gap-12","sm:grid-cols-3","lg:grid-cols-6","dark:text-gray-400"],["href","https://nlnet.nl/project/AI-Horde/","target","_blank",1,"flex","items-center","lg:justify-center"],["href","assets/img/nlnet.svg",1,"sponsor-svg"]],template:function(i,l){i&1&&(n(0,"section",0)(1,"div",1)(2,"h2",2),g(3," Sponsors "),o(),n(4,"div",3)(5,"a",4),s(6,"inline-svg",5),o()()()())},dependencies:[O]});let t=e;return t})();var Q=(()=>{let e=class e{constructor(r){this.httpClient=r}get imageStats(){return K({month:{images:105150339,ps:0x584a9bfc69000},total:{images:105150339,ps:0x584a9bfc69000},day:{images:105150339,ps:0x584a9bfc69000},hour:{images:105150339,ps:0x584a9bfc69000},minute:{images:105150339,ps:0x584a9bfc69000}})}get textStats(){return K({total:{requests:111931745,tokens:20444501084},day:{requests:111931745,tokens:20444501084},hour:{requests:111931745,tokens:20444501084},minute:{requests:111931745,tokens:20444501084},month:{requests:111931745,tokens:20444501084}})}get performance(){return this.httpClient.get("https://aihorde.net/api/v2/status/performance")}get interrogationStats(){return K({processed:663723})}getNews(r){return this.httpClient.get("/assets/data/news.json").pipe(ne(i=>i.slice(0,r)))}};e.\u0275fac=function(i){return new(i||e)(pe(fe))},e.\u0275prov=se({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var ze=(t,e)=>e.title;function Ke(t,e){if(t&1&&s(0,"p",10),t&2){let a=k().$implicit;c("innerHTML",a.excerpt,Y)}}function Ve(t,e){if(t&1&&(n(0,"p",8)(1,"a",11),g(2),p(3,"transloco"),o()()),t&2){let a=k().$implicit;m(),c("href",a.moreLink,D),m(),h(d(3,2,"read_more"))}}function Ae(t,e){if(t&1&&(n(0,"div",7),s(1,"h3",9),B(2,Ke,1,1,"p",10)(3,Ve,4,4,"p",8),o()),t&2){let a=e.$implicit;m(),c("innerHTML",a.title,Y),m(),_(2,a.excerpt?2:-1),m(),_(3,a.moreLink?3:-1)}}function Ue(t,e){t&1&&(n(0,"p",8),g(1),p(2,"transloco"),o()),t&2&&(m(),h(d(2,1,"no_news")))}var _e=(()=>{let e=class e{constructor(r){this.aiHorde=r,this.news=L([])}ngOnInit(){return M(this,null,function*(){this.news.set(yield P(this.aiHorde.getNews(3)))})}};e.\u0275fac=function(i){return new(i||e)(y(Q))},e.\u0275cmp=f({type:e,selectors:[["app-homepage-latest-news"]],standalone:!0,features:[x],decls:10,vars:1,consts:[[1,"bg-gray-50","dark:bg-gray-800"],[1,"max-w-screen-xl","px-4","py-8","mx-auto","space-y-12","lg:space-y-20","lg:py-24","lg:px-6"],[1,"items-center","gap-8","lg:grid","xl:gap-16"],[1,"text-gray-500","sm:text-lg","dark:text-gray-400"],[1,"mb-6","text-3xl","font-extrabold","tracking-tight","text-gray-900","dark:text-white"],["routerLink","/news"],["key","latest_news"],[1,"mb-6"],[1,"mb-2","font-light","lg:text-xl"],[1,"mb-3","text-2xl","text-gray-900","dark:text-white",3,"innerHTML"],[1,"mb-2","font-light","lg:text-xl",3,"innerHTML"],["target","_blank",3,"href"]],template:function(i,l){i&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4)(5,"a",5),s(6,"transloco",6),o()(),I(7,Ae,4,3,"div",7,ze,!1,Ue,3,3,"p",8),o()()()()),i&2&&(m(7),T(l.news()))},dependencies:[he,F,G]});let t=e;return t})();var Ce=(()=>{let e=class e{transform(r,i){return r.substring(0,i)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=H({name:"cut",type:e,pure:!0,standalone:!0});let t=e;return t})();var Be=(()=>{let e=class e{constructor(r){this.transloco=r}transform(r,i=0){return new Intl.NumberFormat(this.transloco.getActiveLang(),{minimumFractionDigits:i,maximumFractionDigits:i}).format(r)}};e.\u0275fac=function(i){return new(i||e)(y(j,16))},e.\u0275pipe=H({name:"formatNumber",type:e,pure:!0,standalone:!0});let t=e;return t})();var Fe=(()=>{let e=class e{transform(r,i=1){for(;String(r).split(".")[0].length>3*i;)r/=1e3;return r}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=H({name:"shiftDecimalsLeft",type:e,pure:!0,standalone:!0});let t=e;return t})();var Ie=(()=>{let e=class e{constructor(r){this.translator=r}transform(r,i=1,l=0){String(r).includes(".")&&(r=Number(String(r).split(".")[0]));let w="si_prefix.",X=Math.floor(String(r).length/3)-(i-1);switch(String(r).length%3===0&&(X-=1),X+=l,X){case 0:w+="none";break;case 1:w+="kilo";break;case 2:w+="mega";break;case 3:w+="giga";break;case 4:w+="tera";break;case 5:w+="peta";break;case 6:w+="exa";break;case 7:w+="zetta";break;default:throw new Error(`Unsupported prefix: ${w}`)}return this.translator.translate(w)}};e.\u0275fac=function(i){return new(i||e)(y(j,16))},e.\u0275pipe=H({name:"siPrefix",type:e,pure:!0,standalone:!0});let t=e;return t})();var J=class{constructor(...e){this.subscriptions=e}add(e){this.subscriptions.push(e)}unsubscribe(){for(let e of this.subscriptions)e.unsubscribe();this.subscriptions=[]}};var Te=(t,e)=>({performance:t,prefix:e}),Ee=(t,e)=>({amount:t,prefix:e}),te=(t,e)=>({amount:t,unit:e}),ie=(t,e)=>({workers:t,threads:e}),Pe=(t,e,a)=>({requests:t,amount:e,prefix:a}),We=t=>({forms:t}),Re=()=>({grafanaLink:"https://grafana.aihorde.net"});function Qe(t,e){if(t&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),g(4),p(5,"transloco"),o()(),n(6,"div",4)(7,"div",5)(8,"h3",6),g(9),p(10,"transloco"),o(),n(11,"ul",7)(12,"li",8),s(13,"inline-svg",9),n(14,"span",10),s(15,"transloco",11),p(16,"formatNumber"),p(17,"siPrefix"),o()(),n(18,"li",8),s(19,"inline-svg",9),n(20,"span",10),s(21,"transloco",12),p(22,"shiftDecimalsLeft"),p(23,"formatNumber"),p(24,"siPrefix"),o()(),n(25,"li",8),s(26,"inline-svg",9),n(27,"span",10),s(28,"transloco",13),p(29,"shiftDecimalsLeft"),p(30,"formatNumber"),p(31,"siPrefix"),p(32,"cut"),p(33,"uppercase"),o()(),n(34,"li",8),s(35,"inline-svg",9),n(36,"span",10),s(37,"transloco",14),p(38,"formatNumber"),p(39,"formatNumber"),o()(),n(40,"li",8),s(41,"inline-svg",9),n(42,"span",10),s(43,"transloco",15),p(44,"formatNumber"),p(45,"shiftDecimalsLeft"),p(46,"formatNumber"),p(47,"siPrefix"),o()()()(),n(48,"div",16)(49,"h3",17),g(50),p(51,"transloco"),o(),n(52,"ul",7)(53,"li",8),s(54,"inline-svg",9),n(55,"span",10),s(56,"transloco",18),p(57,"formatNumber"),p(58,"siPrefix"),o()(),n(59,"li",8),s(60,"inline-svg",9),n(61,"span",10),s(62,"transloco",19),p(63,"shiftDecimalsLeft"),p(64,"formatNumber"),p(65,"siPrefix"),o()(),n(66,"li",8),s(67,"inline-svg",9),n(68,"span",10),s(69,"transloco",20),p(70,"shiftDecimalsLeft"),p(71,"formatNumber"),p(72,"siPrefix"),p(73,"cut"),p(74,"uppercase"),o()(),n(75,"li",8),s(76,"inline-svg",9),n(77,"span",10),s(78,"transloco",14),p(79,"formatNumber"),p(80,"formatNumber"),o()(),n(81,"li",8),s(82,"inline-svg",9),n(83,"span",10),s(84,"transloco",21),p(85,"formatNumber"),p(86,"shiftDecimalsLeft"),p(87,"formatNumber"),p(88,"siPrefix"),o()()()()(),n(89,"div",4)(90,"div",5)(91,"h3",6),g(92),p(93,"transloco"),o(),n(94,"ul",7)(95,"li",8),s(96,"inline-svg",9),n(97,"span",10),s(98,"transloco",22),p(99,"shiftDecimalsLeft"),p(100,"formatNumber"),p(101,"siPrefix"),p(102,"cut"),p(103,"uppercase"),o()(),n(104,"li",8),s(105,"inline-svg",9),n(106,"span",10),s(107,"transloco",14),p(108,"formatNumber"),p(109,"formatNumber"),o()(),n(110,"li",8),s(111,"inline-svg",9),n(112,"span",10),s(113,"transloco",23),p(114,"formatNumber"),o()()()(),n(115,"div",24)(116,"h3",6),g(117),p(118,"transloco"),o(),n(119,"ul",25)(120,"li",8),s(121,"inline-svg",9),n(122,"span",10),s(123,"transloco",26),o()(),n(124,"li",8),s(125,"inline-svg",27),o(),n(126,"li",8),s(127,"inline-svg",27),o()()()()()()),t&2){let a=k();m(4),h(d(5,19,"stats")),m(5),h(d(10,21,"image_stats")),m(6),c("params",C(127,Te,u(16,23,a.stats().past_minute_megapixelsteps/60,1),ee(17,26,a.stats().past_minute_megapixelsteps/60,1,2))),m(6),c("params",C(130,Ee,u(23,33,u(22,30,a.imageStats().ps,2),1),u(24,36,a.imageStats().ps,2))),m(7),c("params",C(133,te,u(30,41,d(29,39,a.imageStats().images),1),d(33,49,u(32,46,d(31,44,a.imageStats().images),1)))),m(9),c("params",C(136,ie,d(38,51,a.stats().worker_count),d(39,53,a.stats().thread_count))),m(6),c("params",Z(139,Pe,d(44,55,a.stats().queued_requests),u(46,59,d(45,57,a.stats().queued_megapixelsteps),1),ee(47,62,a.stats().queued_megapixelsteps,1,2))),m(7),h(d(51,66,"text_stats")),m(6),c("params",C(143,Te,u(57,68,a.stats().past_minute_tokens/60,1),d(58,71,a.stats().past_minute_tokens/60))),m(6),c("params",C(146,Ee,u(64,75,d(63,73,a.textStats().tokens),1),d(65,78,a.textStats().tokens))),m(7),c("params",C(149,te,u(71,82,d(70,80,a.textStats().requests),1),d(74,90,u(73,87,d(72,85,a.textStats().requests),1)))),m(9),c("params",C(152,ie,d(79,92,a.stats().text_worker_count),d(80,94,a.stats().text_thread_count))),m(6),c("params",Z(155,Pe,d(85,96,a.stats().queued_text_requests),u(87,100,d(86,98,a.stats().queued_tokens),1),d(88,103,a.stats().queued_tokens))),m(8),h(d(93,105,"image_alchemy")),m(6),c("params",C(159,te,u(100,109,d(99,107,a.interrogationStats().processed),1),d(103,117,u(102,114,d(101,112,a.interrogationStats().processed),1)))),m(9),c("params",C(162,ie,d(108,119,a.stats().interrogator_count),d(109,121,a.stats().interrogator_thread_count))),m(6),c("params",E(165,We,d(114,123,a.stats().queued_forms))),m(4),h(d(118,125,"realtime_stats")),m(6),c("params",N(167,Re))}}var He=(()=>{let e=class e{constructor(r,i){this.aiHorde=r,this.subscriptions=new J,this.stats=L(null),this.imageStats=L(null),this.textStats=L(null),this.interrogationStats=L(null),this.isBrowser=ue(i)}ngOnDestroy(){this.subscriptions.unsubscribe()}ngOnInit(){return M(this,null,function*(){this.isBrowser?this.subscriptions.add(re(6e4).pipe(oe(0),ae(this.aiHorde.performance,this.aiHorde.imageStats,this.aiHorde.textStats,this.aiHorde.interrogationStats)).subscribe(r=>{this.stats.set(r[1]),this.imageStats.set(r[2].total),this.textStats.set(r[3].total),this.interrogationStats.set(r[4])})):(this.stats.set(yield P(this.aiHorde.performance)),this.imageStats.set((yield P(this.aiHorde.imageStats)).total),this.textStats.set((yield P(this.aiHorde.textStats)).total),this.interrogationStats.set(yield P(this.aiHorde.interrogationStats)))})}};e.\u0275fac=function(i){return new(i||e)(y(Q),y(me))},e.\u0275cmp=f({type:e,selectors:[["app-homepage-stats"]],standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"bg-white","dark:bg-gray-900"],[1,"max-w-screen-xl","px-4","py-8","mx-auto","lg:py-24","lg:px-6"],[1,"max-w-screen-md","mx-auto","mb-2","text-center"],[1,"mb-4","text-3xl","font-extrabold","tracking-tight","text-gray-900","dark:text-white"],[1,"items-center","max-w-screen-xl","px-4","mx-auto","lg:grid","lg:grid-cols-2","lg:gap-16","xl:gap-24","lg:px-6","py-6"],[1,"space-y-8","sm:gap-6","xl:gap-10","lg:space-y-0"],[1,"mb-2","text-2xl","font-bold","tracking-tight","text-gray-900","dark:text-white"],["role","list",1,"pt-8","space-y-5","border-t","border-gray-200","my-7","dark:border-gray-700"],[1,"flex","space-x-3"],["href","assets/img/li-checkbox.svg"],[1,"text-base","font-medium","leading-tight","text-gray-900","dark:text-white"],["key","stats.average_recent_performance_images",3,"params"],["key","stats.total_pixelsteps",3,"params"],["key","stats.total_images",3,"params"],["key","stats.active_workers",3,"params"],["key","stats.image_queue",3,"params"],[1,"space-y-8","sm:gap-6","xl:gap-10","mt-12","lg:mt-0","lg:space-y-0"],[1,"mb-2","text-2xl","font-bold","tracking-tight","text-gray-900","dark:text-white","text-right"],["key","stats.average_recent_performance_text",3,"params"],["key","stats.total_tokens",3,"params"],["key","stats.total_texts",3,"params"],["key","stats.text_queue",3,"params"],["key","stats.total_alchemy_processed",3,"params"],["key","stats.interrogation_queue",3,"params"],[1,"space-y-8","sm:gap-6","xl:gap-10","lg:space-y-0","mt-12","lg:mt-0"],["role","list",1,"pt-8","space-y-5","border-t","border-gray-200","my-7","dark:border-gray-700","underline-links"],["key","stats.realtime",3,"params"],["href","assets/img/li-checkbox.svg",1,"invisible"]],template:function(i,l){i&1&&B(0,Qe,128,168,"section",0),i&2&&_(0,l.stats()&&l.imageStats()&&l.textStats()&&l.interrogationStats()?0:-1)},dependencies:[Ce,Be,O,Fe,Ie,F,G,ge]});let t=e;return t})();var Je=()=>({route:"/register"}),Xe=t=>({registerLink:t}),Ye=()=>({kudosExplanationLink:"https://dbzer0.com/blog/the-kudos-based-economy-for-the-koboldai-horde/"}),Ne=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-homepage-quickstart"]],standalone:!0,features:[x],decls:17,vars:6,consts:[[1,"bg-gray-50","dark:bg-gray-800"],[1,"max-w-screen-xl","px-4","py-8","mx-auto","space-y-12","lg:space-y-20","lg:py-24","lg:px-6"],[1,"items-center","gap-8","lg:grid","xl:gap-16"],[1,"text-gray-500","sm:text-lg","dark:text-gray-400"],[1,"mb-6","text-3xl","font-extrabold","tracking-tight","text-gray-900","dark:text-white"],["key","quickstart"],[1,"mb-4"],["key","quickstart.register_account",3,"params"],[1,"mb-2","space-y-2"],[1,"flex","space-x-3"],["href","assets/img/li-checkbox.svg"],[1,"text-base"],["key","quickstart.anonymous_api_key"],["key","quickstart.explanation_api_key",3,"params"]],template:function(i,l){i&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),s(5,"transloco",5),o(),n(6,"p",6),s(7,"transloco",7),o(),n(8,"ul",8)(9,"li",9),s(10,"inline-svg",10),n(11,"span",11),s(12,"transloco",12),o()(),n(13,"li",9),s(14,"inline-svg",10),n(15,"span",11),s(16,"transloco",13),o()()()()()()()),i&2&&(m(7),c("params",E(3,Xe,N(2,Je))),m(9),c("params",N(5,Ye)))},dependencies:[F,O]});let t=e;return t})();var Le=t=>({guiName:t});function Ze(t,e){if(t&1&&g(0),t&2){let a=k();$(" ",a.goToLinkName()," ")}}function et(t,e){if(t&1&&(g(0),p(1,"transloco")),t&2){let a=k();$(" ",u(1,1,"guis.go_to",E(4,Le,a.name()))," ")}}var Me=(()=>{let e=class e{constructor(){this.name=S.required(),this.link=S.required(),this.description=S.required(),this.image=S.required(),this.goToLinkName=S(null),this.darkBackground=S(!1)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-gui-card"]],inputs:{name:[b.SignalBased,"name"],link:[b.SignalBased,"link"],description:[b.SignalBased,"description"],image:[b.SignalBased,"image"],goToLinkName:[b.SignalBased,"goToLinkName"],darkBackground:[b.SignalBased,"darkBackground"]},standalone:!0,features:[x],decls:11,vars:21,consts:[[1,"flex","flex-col","max-w-lg","p-6","mx-auto","text-center","text-gray-900","border","border-gray-100","rounded-lg","shadow","dark:border-gray-600","xl:p-8","dark:text-white"],[1,"mb-4","text-2xl","font-semibold"],[1,"font-light","text-gray-500","sm:text-lg","dark:text-gray-400","description"],[1,"flex","items-baseline","justify-center","my-8"],[3,"ngSrc","width","height","alt"],["target","_blank",1,"text-white","bg-purple-600","hover:bg-purple-700","focus:ring-4","focus:ring-purple-200","font-medium","rounded-lg","text-sm","px-5","py-2.5","text-center","dark:text-white","dark:focus:ring-purple-900",3,"href"]],template:function(i,l){i&1&&(n(0,"div",0)(1,"h3",1),g(2),o(),n(3,"p",2),g(4),o(),n(5,"div",3),s(6,"img",4),p(7,"transloco"),o(),n(8,"a",5),B(9,Ze,1,1)(10,et,2,6),o()()),i&2&&(q("bg-white",!l.darkBackground())("bg-gray-50",l.darkBackground())("dark:bg-gray-800",!l.darkBackground())("dark:bg-gray-900",l.darkBackground()),m(2),h(l.name()),m(2),h(l.description()),m(2),c("ngSrc",l.image())("width",330)("height",185)("alt",u(7,16,"guis.gui_image_alt",E(19,Le,l.name()))),m(2),ce("href",l.link(),D),m(),_(9,l.goToLinkName()?9:10))},dependencies:[U,G],styles:[".description[_ngcontent-%COMP%]{height:120px}"]});let t=e;return t})();var it=(t,e)=>e.name;function nt(t,e){if(t&1&&(n(0,"div",7),s(1,"app-gui-card",8),o()),t&2){let a,r=e.$implicit,i=k(2).$index;m(),c("name",r.name)("description",r.description)("image",r.image)("link",r.link)("goToLinkName",(a=r.downloadButtonText)!==null&&a!==void 0?a:null)("darkBackground",i%2!==0)}}function rt(t,e){if(t&1&&(n(0,"h3",5),g(1),o(),n(2,"div",6),I(3,nt,2,6,"div",7,it),o()),t&2){let a=e.$implicit;m(),h(a.key),m(2),T(a.value)}}function at(t,e){if(t&1&&(n(0,"section")(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),g(5),o(),I(6,rt,5,1,null,null,V),p(8,"keyvalue"),o()()()()),t&2){let a=e.$implicit,r=e.$index,i=k(2);q("bg-white",r%2===0)("dark:bg-gray-900",r%2===0)("bg-gray-50",r%2!==0)("dark:bg-gray-800",r%2!==0),m(5),$(" ",a.key," "),m(),T(u(8,9,a.value,i.NoSorterKeyValue))}}function ot(t,e){if(t&1&&(I(0,at,9,12,"section",0,le),p(2,"keyvalue")),t&2){let a=k();T(u(2,0,a.guis(),a.NoSorterKeyValue))}}var De=(()=>{let e=class e{constructor(r,i){this.dataService=r,this.translator=i,this.NoSorterKeyValue=W,this.imageGuis=z(this.dataService.imageGuis),this.textGuis=z(this.dataService.textGuis),this.guis=de(()=>{if(!(this.imageGuis()===void 0||this.textGuis()===void 0))return{[this.translator.translate("guis.image")]:this.imageGuis(),[this.translator.translate("guis.text")]:this.textGuis()}})}};e.\u0275fac=function(i){return new(i||e)(y(R),y(j))},e.\u0275cmp=f({type:e,selectors:[["app-homepage-guis"]],standalone:!0,features:[x],decls:1,vars:1,consts:[[3,"bg-white","dark:bg-gray-900","bg-gray-50","dark:bg-gray-800"],[1,"max-w-screen-xl","px-4","py-8","mx-auto","space-y-12","lg:space-y-20","lg:py-24","lg:px-6"],[1,"items-center","gap-8","lg:grid","xl:gap-16"],[1,"text-gray-500","sm:text-lg","dark:text-gray-400"],[1,"mb-6","text-3xl","font-extrabold","tracking-tight","text-gray-900","dark:text-white"],[1,"mb-2","text-2xl","font-bold","tracking-tight","text-gray-900","dark:text-white"],[1,"items-center","border-t","max-w-screen-xl","px-4","mx-auto","lg:grid","lg:grid-cols-3","lg:gap-16","xl:gap-24","lg:px-6","py-6","md:grid","md:grid-cols-2","md:gap-12"],[1,"space-y-8","sm:gap-6","xl:gap-10","lg:space-y-0","mt-8:not-first","md:mt-0"],[3,"name","description","image","link","goToLinkName","darkBackground"]],template:function(i,l){i&1&&B(0,ot,3,3),i&2&&_(0,l.guis()?0:-1)},dependencies:[Me,A]});let t=e;return t})();var qe=(()=>{let e=class e{constructor(){this.name=S.required(),this.link=S.required(),this.description=S.required(),this.darkBackground=S(!1)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["app-tool-card"]],inputs:{name:[b.SignalBased,"name"],link:[b.SignalBased,"link"],description:[b.SignalBased,"description"],darkBackground:[b.SignalBased,"darkBackground"]},standalone:!0,features:[x],decls:6,vars:11,consts:[[1,"flex","flex-col","max-w-lg","p-6","mx-auto","text-center","text-gray-900","border","border-gray-100","rounded-lg","shadow","dark:border-gray-600","xl:p-8","dark:text-white"],[1,"mb-4","text-xl","font-semibold"],["target","_blank",3,"href"],[1,"font-light","text-gray-500","sm:text-lg","dark:text-gray-400","description","mb-2"]],template:function(i,l){i&1&&(n(0,"div",0)(1,"h3",1)(2,"a",2),g(3),o()(),n(4,"p",3),g(5),o()()),i&2&&(q("bg-white",!l.darkBackground())("bg-gray-50",l.darkBackground())("dark:bg-gray-800",!l.darkBackground())("dark:bg-gray-900",l.darkBackground()),m(2),c("href",l.link(),D),m(),h(l.name()),m(2),h(l.description()))},styles:["[_nghost-%COMP%]{display:block}.description[_ngcontent-%COMP%]{height:112px}"]});let t=e;return t})();var st=(t,e)=>e.name;function pt(t,e){if(t&1&&s(0,"app-tool-card",8),t&2){let a=e.$implicit;c("name",a.name)("link",a.link)("description",a.description)}}function mt(t,e){if(t&1&&(n(0,"h3",6),g(1),o(),n(2,"div",7),I(3,pt,1,3,"app-tool-card",8,st),o()),t&2){let a=e.$implicit;m(),h(a.key),m(2),T(a.value)}}function lt(t,e){if(t&1&&(n(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),s(5,"transloco",5),o(),I(6,mt,5,1,null,null,V),p(8,"keyvalue"),o()()()()),t&2){let a=k();m(6),T(u(8,0,a.tools(),a.NoSorterKeyValue))}}var je=(()=>{let e=class e{constructor(r){this.dataService=r,this.NoSorterKeyValue=W,this.tools=z(this.dataService.tools)}};e.\u0275fac=function(i){return new(i||e)(y(R))},e.\u0275cmp=f({type:e,selectors:[["app-homepage-tools"]],standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"bg-white","dark:bg-gray-900"],[1,"max-w-screen-xl","px-4","py-8","mx-auto","space-y-12","lg:space-y-20","lg:py-24","lg:px-6"],[1,"items-center","gap-8","lg:grid","xl:gap-16"],[1,"text-gray-500","sm:text-lg","dark:text-gray-400"],[1,"mb-6","text-3xl","font-extrabold","tracking-tight","text-gray-900","dark:text-white"],["key","tools"],[1,"mb-2","text-2xl","font-bold","tracking-tight","text-gray-900","dark:text-white"],[1,"items-center","border-t","max-w-screen-xl","px-4","mx-auto","grid","md:grid-cols-2","lg:grid-cols-3","xl:grid-cols-4","gap-8","xl:gap-10","lg:px-6","py-6"],[3,"name","link","description"]],template:function(i,l){i&1&&B(0,lt,9,3,"section",0),i&2&&_(0,l.tools()?0:-1)},dependencies:[F,qe,A]});let t=e;return t})();var $i=(()=>{let e=class e{constructor(r,i,l){this.title=r,this.translator=i,this.footerColor=l}ngOnInit(){return M(this,null,function*(){this.title.setTitle(yield P(this.translator.get("app_title"))),this.footerColor.dark.set(!1)})}};e.\u0275fac=function(i){return new(i||e)(y(xe),y(ye),y(ke))},e.\u0275cmp=f({type:e,selectors:[["app-homepage"]],standalone:!0,features:[x],decls:7,vars:0,template:function(i,l){i&1&&s(0,"app-homepage-intro")(1,"app-homepage-sponsors")(2,"app-homepage-latest-news")(3,"app-homepage-stats")(4,"app-homepage-quickstart")(5,"app-homepage-guis")(6,"app-homepage-tools")},dependencies:[ve,be,_e,He,Ne,De,je],styles:["[_nghost-%COMP%]     .sponsor-svg svg{filter:grayscale(1);transition:filter .5s}[_nghost-%COMP%]     .sponsor-svg svg:hover{filter:none}"]});let t=e;return t})();export{$i as HomepageComponent};
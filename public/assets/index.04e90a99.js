var z=Object.defineProperty,X=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var q=(e,t,o)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,$=(e,t)=>{for(var o in t||(t={}))Q.call(t,o)&&q(e,o,t[o]);if(O)for(var o of O(t))Z.call(t,o)&&q(e,o,t[o]);return e},V=(e,t)=>X(e,J(t));import{o as i,c as d,n as P,p as x,a as C,b as l,m as L,r as h,d as I,e as u,f as m,F as f,g as D,u as ee,h as R,w as te,t as k,i as g,j as w,k as U,v as E,l as b,I as oe,L as se,q as M,s as re,x as ae,y as ne,_ as ie,z as de,A as le}from"./vendor.5a878bcd.js";const ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};ce();var p=(e,t)=>{const o=e.__vccOpts||e;for(const[r,n]of t)o[r]=n;return o};const ue={props:{local:Boolean}},he=e=>(x("data-v-02c17fc9"),e=e(),C(),e),_e=he(()=>l("div",{class:"lds-dual-ring"},null,-1)),pe=[_e];function me(e,t,o,r,n,s){return i(),d("div",{class:P(["loader",o.local?"local":"background"])},pe,2)}var j=p(ue,[["render",me],["__scopeId","data-v-02c17fc9"]]);const fe={components:{Loader:j},computed:$({},L(["isLoading","error"]))},ge=e=>(x("data-v-2a8b7200"),e=e(),C(),e),ve=ge(()=>l("div",{class:"logo"}," LOGO ",-1));function ye(e,t,o,r,n,s){const a=h("Loader"),c=h("router-view");return i(),d(f,null,[e.isLoading?(i(),I(a,{key:0})):u("",!0),ve,m(c)],64)}var $e=p(fe,[["render",ye],["__scopeId","data-v-2a8b7200"]]);const T=D.create({baseURL:"/api"});var B={fetchBoard:async(e=0)=>await T.get(`/board?page=${e}`),fetchThread:async e=>await T.get(`/board/${e}`),createThread:async(e,t,o)=>await T.post("/board",{title:e,content:t,attachments:o}),createPost:async(e,t,o,r,n)=>await T.post(`/board/${e}`,{title:t,sage:o,content:r,attachments:n})};const ke="57a86f3940106f16505b",Ie={props:{url:String,maxImages:{type:Number,default:5}},emits:["update:url"],data:()=>({widget:null}),watch:{url(){this.widget&&this.widget.value(this.url)}},mounted(){this.widget=ee.Widget(this.$el,{publicKey:ke,imagesOnly:!0,multiple:!0,multipleMax:this.maxImages,imageShrink:"4096x4096",tabs:"file"}),this.url&&this.widget.value(this.url),this.widget.onUploadComplete(e=>this.$emit("update:url",e.cdnUrl))},unmounted(){}},we=l("input",{type:"hidden"},null,-1),be=[we];function Ve(e,t,o,r,n,s){return i(),d("div",null,be)}var Te=p(Ie,[["render",Ve]]);const Be={props:{small:Boolean,wide:Boolean,color:{type:String,validator(e){return["red","gray"].includes(e)}}},emits:["click"]};function Pe(e,t,o,r,n,s){return i(),d("button",{class:P(["button",[{small:o.small,wide:o.wide},o.color]]),onClick:t[0]||(t[0]=te(a=>e.$emit("click"),["prevent"]))},[R(e.$slots,"default",{},void 0,!0)],2)}var S=p(Be,[["render",Pe],["__scopeId","data-v-bbe75c88"]]);const xe={props:{modelValue:Boolean},emits:["update:modelValue"]},Ce={class:"toggle-container"};function Le(e,t,o,r,n,s){return i(),d("div",Ce,[l("div",{class:P(["toggle",[o.modelValue?"toggle-on":"toggle-off"]]),onClick:t[0]||(t[0]=a=>e.$emit("update:modelValue",!o.modelValue))},[R(e.$slots,"default",{},void 0,!0)],2)])}var Se=p(xe,[["render",Le],["__scopeId","data-v-f106fe22"]]);const Fe={components:{Button:S},props:{video:Object},emits:["delete"]},Ue={class:"video-info"},Ee={key:0,src:"https://www.youtube.com/s/desktop/f03577db/img/favicon_96x96.png"},Ae={key:1,src:"https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-common-sg/mtact/static/images/logo_144c91a.png"},De=w("X");function Re(e,t,o,r,n,s){const a=h("Button");return i(),d("div",Ue,[o.video.provider==="youtube"?(i(),d("img",Ee)):u("",!0),o.video.provider==="tiktok"?(i(),d("img",Ae)):u("",!0),l("div",null,k(o.video.title),1),m(a,{small:"",color:"red",onClick:t[0]||(t[0]=c=>e.$emit("delete"))},{default:g(()=>[De]),_:1})])}var Ne=p(Fe,[["render",Re],["__scopeId","data-v-7a3ceae8"]]);async function Oe(e){try{const t=await D.get(`https://www.youtube.com/oembed?url=${e}&format=json`,{validateStatus:o=>o<500});return t.status===200?t.data:!1}catch(t){throw console.log(t),t}}async function qe(e){try{const t=await D.get(`https://www.tiktok.com/oembed?url=${e}&format=json`,{validateStatus:o=>o<500});return t.status===200?t.data:!1}catch(t){throw console.log(t),t}}async function We(e){try{const t=new URL(e),o=t.hostname;if(console.log(t,o),o.includes("youtube.com")||o.includes("youtu.be")){const r=await Oe(e);return console.log(r),$({provider:"youtube"},r)}else if(o.includes("tiktok.com")){const r=await qe(e);return console.log(r),$({provider:"tiktok"},r)}}catch(t){if(console.log(t),t instanceof TypeError)return!1}}const Me={},je=e=>(x("data-v-6191bd4a"),e=e(),C(),e),Ge={class:"loader-container"},He=je(()=>l("div",{class:"lds-ellipsis"},[l("div"),l("div"),l("div"),l("div")],-1)),Ye=[He];function Ke(e,t){return i(),d("div",Ge,Ye)}var ze=p(Me,[["render",Ke],["__scopeId","data-v-6191bd4a"]]);const Xe={components:{BarLoader:ze},emits:["addVideo"],data:()=>({videoInput:"",checkingVideo:!1,invalidVideo:!1}),watch:{videoInput(){this.$refs.videoInput&&this.$refs.videoInput.checkValidity()&&this.videoInput!==""&&this.checkVideo()}},methods:{async checkVideo(){this.checkingVideo=!0,this.invalidVideo=!1;try{const e=await We(this.videoInput);e?(this.$emit("addVideo",$({url:this.videoInput},e)),this.videoInput=""):this.invalidVideo=!0}catch{}this.checkingVideo=!1}}},Je=["readonly"],Qe={key:2,class:"error"};function Ze(e,t,o,r,n,s){const a=h("BarLoader");return i(),d("div",null,[e.checkingVideo?u("",!0):U((i(),d("input",{key:0,placeholder:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0438\u0434\u0435\u043E",type:"url",readonly:e.checkingVideo,"onUpdate:modelValue":t[0]||(t[0]=c=>e.videoInput=c),onBlur:t[1]||(t[1]=c=>e.invalidVideo=!1),ref:"videoInput"},null,40,Je)),[[E,e.videoInput,void 0,{trim:!0}]]),e.checkingVideo?(i(),I(a,{key:1,class:"loader"})):u("",!0),e.invalidVideo&&!e.checkingVideo?(i(),d("span",Qe,"Invalid video")):u("",!0)])}var et=p(Xe,[["render",Ze],["__scopeId","data-v-66cc816a"]]);const tt={components:{Loader:j,UploadcareWidget:Te,Button:S,ToggleButton:Se,VideInfo:Ne,VideoInput:et},props:{threadId:Number},emits:["submited"],data:()=>({open:!1,error:!1,loading:!1,title:"",content:"",sage:!1,imagesUrl:"",videos:[]}),mounted(){this.$emitter.on("quote-post",this.addPostId)},unmounted(){this.$emitter.off("quote-post",this.addPostId)},computed:{toggleTextClosed(){return this.threadId?"\u041E\u0442\u0432\u0435\u0442":"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0440\u0435\u0434"}},watch:{imagesUrl(){this.error=!1}},methods:{onToggle(){this.open=!this.open},addVideo(e){this.videos.push(e),this.error=!1},deleteVideo(e){this.videos.splice(e,1)},validate(){const{content:e,imagesUrl:t,videos:o}=this;return!this.threadId&&t===""&&o.length===0?(this.error="\u041D\u0435\u043B\u044C\u0437\u044F \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0440\u0435\u0434 \u0431\u0435\u0437 \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u044F",!1):!!this.threadId&&t===""&&o.length===0&&e===""?(this.error="\u041D\u0435\u043B\u044C\u0437\u044F \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0443\u0441\u0442\u043E\u0439 \u043F\u043E\u0441\u0442",!1):!0},async submit(){const{title:e,content:t,sage:o,imagesUrl:r,videos:n}=this,s=[];if(!!this.validate()){n.forEach(({url:a,provider:c})=>s.push({url:a,type:c})),r!==""&&s.push({url:r,type:"images"});try{this.loading=!0;let a;this.threadId?a=await B.createPost(this.threadId,e,o,t,s):a=await B.createThread(e,t,s),this.clear(),this.$emit("submited",a)}catch(a){console.log(a),this.error=a.toString()}finally{this.loading=!1}}},clear(){this.open=!1,this.title="",this.content="",this.sage=!1,this.imagesUrl="",this.videos=[],this.error=!1},addPostId({id:e}){this.content!==""&&(this.content=this.content.trimEnd()+`\r
`),this.content+="#"+e+`\r
`}}},ot={class:"container"},st={class:"row"},rt=w("SAGE"),at={key:1,class:"error"},nt=w("\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");function it(e,t,o,r,n,s){const a=h("Button"),c=h("ToggleButton"),v=h("UploadcareWidget"),_=h("VideoInput"),N=h("VideInfo"),Y=h("Loader");return i(),d("div",ot,[m(a,{class:"toggle",wide:"",color:"gray",onClick:s.onToggle},{default:g(()=>[w(k(e.open?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C":s.toggleTextClosed),1)]),_:1},8,["onClick"]),e.open?(i(),d(f,{key:0},[l("div",st,[U(l("input",{maxlength:"100",placeholder:"\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A","onUpdate:modelValue":t[0]||(t[0]=y=>e.title=y)},null,512),[[E,e.title,void 0,{trim:!0}]]),o.threadId?(i(),I(c,{key:0,modelValue:e.sage,"onUpdate:modelValue":t[1]||(t[1]=y=>e.sage=y)},{default:g(()=>[rt]),_:1},8,["modelValue"])):u("",!0)]),U(l("textarea",{maxlength:"2000",placeholder:"\u0422\u0435\u043A\u0441\u0442","onUpdate:modelValue":t[2]||(t[2]=y=>e.content=y)},null,512),[[E,e.content,void 0,{trim:!0}]]),m(v,{maxImages:3,url:e.imagesUrl,"onUpdate:url":t[3]||(t[3]=y=>e.imagesUrl=y)},null,8,["url"]),e.videos.length<3?(i(),I(_,{key:0,class:"row",onAddVideo:s.addVideo},null,8,["onAddVideo"])):u("",!0),(i(!0),d(f,null,b(e.videos,(y,K)=>(i(),I(N,{key:y.title,class:"row",video:y,onDelete:oo=>s.deleteVideo(K)},null,8,["video","onDelete"]))),128)),e.error?(i(),d("div",at,k(e.error),1)):u("",!0),m(a,{class:"last",wide:"",onClick:s.submit},{default:g(()=>[nt]),_:1},8,["onClick"])],64)):u("",!0),e.loading?(i(),I(Y,{key:1,class:"round-bg",local:""})):u("",!0)])}var G=p(tt,[["render",it],["__scopeId","data-v-68c4035c"]]);const dt={props:{resource:Object},data:()=>({full:!1}),computed:{VIDE_PREVIW_WIDTH(){return 200},VIDE_PREVIW_HEIGHT(){return 150},videoSource(){const e=new URL(this.resource.fullUrl);switch(console.log(this.resource),this.resource.type){case"youtube":return`http://www.youtube.com/embed/${e.searchParams.get("v")}?autoplay=0`;case"tiktok":{const t=e.pathname.split("/");return console.log(t),`https://www.tiktok.com/embed/${t[t.length-1]}`}default:return""}},isImage(){return this.resource.type==="image"},isYoutube(){return this.resource.type==="youtube"},isTiktok(){return this.resource.type==="tiktok"}},methods:{openFull(){this.full=!0},closeFull(){this.full=!1}}},lt=["src"],ct=["src"],ut=["src"],ht=["src"];function _t(e,t,o,r,n,s){return i(),d(f,null,[s.isImage?(i(),d("img",{key:0,class:"preview",src:o.resource.thumbnailUrl,onClick:t[0]||(t[0]=(...a)=>s.openFull&&s.openFull(...a))},null,8,lt)):u("",!0),s.isImage&&e.full?(i(),d("div",{key:1,class:"full",onClick:t[1]||(t[1]=(...a)=>s.closeFull&&s.closeFull(...a))},[l("img",{src:o.resource.fullUrl},null,8,ct)])):u("",!0),l("div",null,[s.isYoutube?(i(),d("iframe",{key:0,type:"text/html",width:"100%",height:"100%",src:s.videoSource,frameborder:"0"},null,8,ut)):u("",!0),s.isTiktok?(i(),d("iframe",{key:1,type:"text/html",width:"85px",height:"150px",src:s.videoSource,allow:"encrypted-media;",frameborder:"0"},null,8,ht)):u("",!0)])],64)}var pt=p(dt,[["render",_t],["__scopeId","data-v-77280be0"]]);const mt=[{name:"quote",regexp:/>(.+)/g,onMatch:e=>e[1]},{name:"id",regexp:/#(\d+)/g,onMatch:e=>parseInt(e[1])}];class A extends oe{constructor(t,o){super();this.type=t,this.value=o}}function ft(e,t){let o=0;const r=[];for(const n of e.matchAll(t.regexp)){const s=n[0].length,{index:a}=n;o<a&&r.push(new A("text",e.slice(o,a))),o=a+s,r.push(new A(t.name,t.onMatch(n)))}return r}function gt(e){let t=new se(new A("text",e));return mt.forEach(o=>{let r=t.head;for(;r;){const n=r.next;if(r.type==="text"){const s=ft(r.value,o);s.length>0&&(s.forEach(a=>r.prepend(a)),r.detach())}r=n}}),t.toArray()}function vt(e){return e.split(/\r?\n/).map(o=>({type:"line",value:gt(o)}))}const yt={props:{text:String},emits:["onIdClick"],computed:{content(){return vt(this.text)}}},$t={class:"formated-text"},kt={key:0};function It(e,t,o,r,n,s){return i(),d("div",$t,[(i(!0),d(f,null,b(s.content,(a,c)=>(i(),d(f,{key:`line-${c}`},[(i(!0),d(f,null,b(a.value,v=>R(e.$slots,v.type,{value:v.value},void 0,!0)),256)),c!==s.content.length-1?(i(),d("br",kt)):u("",!0)],64))),128))])}var wt=p(yt,[["render",It],["__scopeId","data-v-70754b9d"]]);const bt={components:{Attachment:pt,FormatedText:wt},props:{head:Boolean,id:Number},data:()=>({highlight:!1}),computed:V($({},L(["getPostById"])),{post(){return this.getPostById(this.id)}}),mounted(){this.$emitter.on("scroll-to",this.onScrollTo)},unmounted(){this.$emitter.off("scroll-to",this.onScrollTo)},methods:{onReplyClick(){this.$emitter.emit("quote-post",{id:this.post.id})},onIdClick(e){this.$emitter.emit("scroll-to",{id:e})},onScrollTo({id:e}){e===this.id?(this.highlight=!0,this.$el.scrollIntoView()):this.highlight=!1}}},Vt=e=>(x("data-v-6ab453d7"),e=e(),C(),e),Tt={class:"header"},Bt={key:0,class:"title"},Pt={class:"date"},xt={class:"id"},Ct={key:1,class:"sage"},Lt=w("\u041E\u0442\u043A\u0440\u044B\u0442\u044C"),St=Vt(()=>l("i",{class:"gg-mail-reply"},null,-1)),Ft=[St],Ut={class:"attachments-container"},Et={class:"quote"},At=["onClick"];function Dt(e,t,o,r,n,s){const a=h("router-link"),c=h("Attachment"),v=h("FormatedText");return i(),d("div",{class:P(["post-container",{"head-post":o.head,highlight:e.highlight}])},[l("div",Tt,[s.post.title?(i(),d("span",Bt,k(s.post.title),1)):u("",!0),l("span",Pt,k(new Date(s.post.createdAt).toLocaleDateString("ru-RU")),1),l("span",xt,k(`#${s.post.id}`),1),s.post.sage?(i(),d("span",Ct,"SAGE")):u("",!0),o.head?(i(),I(a,{key:2,to:`/thread/${s.post.id}`},{default:g(()=>[Lt]),_:1},8,["to"])):u("",!0),l("span",{class:"reply",onClick:t[0]||(t[0]=(..._)=>s.onReplyClick&&s.onReplyClick(..._))},Ft)]),l("div",Ut,[(i(!0),d(f,null,b(s.post.attachments,_=>(i(),I(c,{resource:_},null,8,["resource"]))),256))]),m(v,{class:"content",text:s.post.content},{text:g(({value:_})=>[w(k(_),1)]),quote:g(({value:_})=>[l("span",Et,k(_),1)]),id:g(({value:_})=>[l("span",{class:"id",onClick:N=>s.onIdClick(_)},"#"+k(_),9,At)]),_:1},8,["text"])],2)}var Rt=p(bt,[["render",Dt],["__scopeId","data-v-6ab453d7"]]);const Nt={components:{Post:Rt},props:{preview:Boolean,id:Number},computed:V($({},L(["getThreadById"])),{thread(){return this.getThreadById(this.id)},headPost(){return this.thread&&this.thread.headPost},replies(){return this.thread&&this.thread.replies},hiddenPosts(){return this.thread&&this.thread.postCount-3}})},Ot={key:0},qt={key:0,class:"hidden-count"};function Wt(e,t,o,r,n,s){const a=h("Post");return s.thread?(i(),d("div",Ot,[m(a,{head:"",id:s.headPost},null,8,["id"]),o.preview&&s.hiddenPosts>0?(i(),d("div",qt,k(`\u0421\u043A\u0440\u044B\u0442\u043E ${s.hiddenPosts} \u043F\u043E\u0441\u0442\u043E\u0432`),1)):u("",!0),(i(!0),d(f,null,b(s.replies,c=>(i(),I(a,{key:c,id:c},null,8,["id"]))),128))])):u("",!0)}var H=p(Nt,[["render",Wt],["__scopeId","data-v-625864af"]]);const Mt={components:{PostForm:G,Thread:H,Button:S},data:()=>({page:0}),mounted(){this.fetchPage()},watch:{page:()=>globalThis.fetchPage()},computed:$({},L(["totalPages","board"])),methods:V($({},M(["fetchBoard"])),{fetchPage(){this.fetchBoard(this.page)},submited(){this.fetchPage()}})},jt=w("\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C");function Gt(e,t,o,r,n,s){const a=h("Button"),c=h("PostForm"),v=h("Thread");return i(),d(f,null,[m(a,{wide:"",onClick:s.fetchPage},{default:g(()=>[jt]),_:1},8,["onClick"]),m(c,{onSubmited:s.submited},null,8,["onSubmited"]),(i(!0),d(f,null,b(e.board,_=>(i(),I(v,{key:_,id:_,preview:""},null,8,["id"]))),128))],64)}var Ht=p(Mt,[["render",Gt]]);const Yt={components:{PostForm:G,Thread:H,Button:S},computed:{threadId(){return parseInt(this.$route.params.id)}},mounted(){this.fetchThread()},methods:V($({},M(["fetchThreadById"])),{fetchThread(){this.fetchThreadById(this.threadId)},submited(){this.fetchThread()}})},Kt=w("\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),zt=w("\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C");function Xt(e,t,o,r,n,s){const a=h("Button"),c=h("Thread"),v=h("PostForm");return i(),d(f,null,[m(a,{wide:"",onClick:t[0]||(t[0]=_=>e.$router.push("/"))},{default:g(()=>[Kt]),_:1}),m(c,{id:s.threadId},null,8,["id"]),m(a,{wide:"",onClick:s.fetchThread},{default:g(()=>[zt]),_:1},8,["onClick"]),m(v,{onSubmited:s.submited,threadId:s.threadId},null,8,["onSubmited","threadId"])],64)}var Jt=p(Yt,[["render",Xt]]);const Qt=[{path:"/:page(\\d+)?",component:Ht},{path:"/thread/:id(\\d+)",component:Jt}],Zt=re({history:ae("/"),routes:Qt});function W({id:e,title:t,sage:o,content:r,createdAt:n,Attachments:s,replayToId:a}){return{id:e,title:t,sage:o,content:r,createdAt:n,threadId:a||e,attachments:s}}var eo=ne({devtools:!0,state:{loading:!1,error:!1,board:[],threads:{},posts:{},totalPages:0},getters:{isLoading:e=>e.loading,error:e=>e.error,totalPages:e=>e.totalPages,board:e=>e.board,getThreadById:e=>t=>e.threads[t],getPostById:e=>t=>e.posts[t]},mutations:{startFetching(e){e.loading=!0},endFetching(e){e.loading=!1},clearError(e){e.error=!1},failFetching(e,t){e.loading=!1,e.error=t},updateBoard(e,{totalPages:t,board:o}){e.totalPages=t,e.board=o},updateThreads(e,t){t.forEach(o=>{e.threads[o.id]=o})},updatePosts(e,t){t.forEach(o=>{e.posts[o.id]=o})}},actions:{commitData({commit:e},t){e("updatePosts",ie.flatten(t.map(({headPost:o})=>[W(o),...o.replies.map(W)]))),e("updateThreads",t.map(({id:o,postCount:r,headPost:n})=>({id:o,postCount:r,headPost:n.id,replies:n.replies.map(s=>s.id).sort()})))},clearError({commit:e}){e("clearError")},async fetchBoard({dispatch:e,commit:t},{page:o=0}){try{t("startFetching");const{data:r}=await B.fetchBoard(o),n=r.pageCount,s=r.threads;e("commitData",s),t("updateBoard",{totalPages:n,board:s.map(a=>a.id)}),t("endFetching")}catch(r){console.error(r),t("failFetching",r)}},async fetchThreadById({dispatch:e,commit:t},o){try{t("startFetching");const{data:r}=await B.fetchThread(o);e("commitData",[r]),t("endFetching")}catch(r){console.error(r),t("failFetching",r)}}}});const to=le(),F=de($e);F.config.globalProperties.$emitter=to;F.use(Zt);F.use(eo);F.mount("#app");

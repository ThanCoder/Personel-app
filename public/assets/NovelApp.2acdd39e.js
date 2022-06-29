import{_ as m,o as l,c as r,a as e,t as _,p as j,d as U,u as D,F as V,j as I,k as w,h as d,l as h,i as b,v as y,e as N,n as k,q as S,b as L,m as B}from"./index.b6c06a25.js";const T=s=>(j("data-v-9faadf9c"),s=s(),U(),s),q={class:"app-detail"},F={class:"cover"},O=["src"],z={class:"content"},H={class:"title"},E={class:"user"},R={class:"version"},G={class:"version"},J={class:"url"},K=["href"],P=T(()=>e("summary",null,"Release Note",-1)),Q={__name:"AppDetail",props:{app:Object},setup(s){const o=s;return(a,p)=>(l(),r("div",q,[e("div",F,[e("img",{src:o.app.cover_url!==""?o.app.cover_url:"https://i.postimg.cc/jScrHrjN/novel-icon.jpg",alt:"cover"},null,8,O)]),e("div",z,[e("div",H,_(o.app.title),1),e("div",E,"User: "+_(o.app.user),1),e("div",R,"Version: "+_(o.app.version_code),1),e("div",G,"Date: "+_(o.app.date),1),e("div",J,[e("a",{href:o.app.file_url,target:"__blank"},"Download",8,K)]),e("details",null,[P,e("p",null,_(o.app.note),1)])])]))}};var W=m(Q,[["__scopeId","data-v-9faadf9c"]]);const X={class:"app-list"},Y={__name:"AppList",props:{apps:Array},setup(s,{emit:o}){const a=s,p=D();function i(c){p.isLogin&&(c.preventDefault(),o("openContextMenu",app))}return(c,v)=>(l(),r("div",X,[(l(!0),r(V,null,I(a.apps,f=>(l(),w(W,{key:f.id,app:f,onContextmenu:i},null,8,["app"]))),128))]))}};var Z=m(Y,[["__scopeId","data-v-505f026c"]]);const ee={class:"content"},te={__name:"Content",setup(s){return(o,a)=>(l(),r("div",ee,[e("button",{onClick:a[0]||(a[0]=p=>o.$emit("showAddDialog","")),class:"btn"},"Add App")]))}};var oe=m(te,[["__scopeId","data-v-5d169e35"]]);const M=s=>(j("data-v-7a1cc11d"),s=s(),U(),s),ae={class:"add-app-dialog fixed"},se={class:"content-center"},ne=M(()=>e("div",{class:"header"},"Add Novel App",-1)),le={key:0,class:"message red"},pe={class:"t-form"},de={class:"form-group"},ie=N("Title "),ce={key:0,class:"msg"},re={class:"form-group"},ue=N("Version Code "),_e={key:0,class:"msg"},ve={class:"form-group"},fe=N("File Url "),he={key:0,class:"msg"},me={class:"form-group"},xe=M(()=>e("label",null,"Cover Url",-1)),ge={class:"form-group"},Ae=M(()=>e("label",null,"Note",-1)),be={class:"btn-group"},ye={__name:"AddAppDialog",setup(s,{emit:o}){const a=d(""),p=d(0),i=d(""),c=d("https://i.postimg.cc/jScrHrjN/novel-icon.jpg"),v=d(""),f=d(""),x=d(""),g=d(""),A=d(""),C=D();function $(){if(a.value===""){f.value="title is required";return}if(p.value===0)return x.value="version code is required",!1;if(i.value===""){g.value="file url is required";return}let n={title:a.value,version_code:p.value,file_url:i.value,cover_url:c.value,note:v.value};k.post("/api/v2/novel-app",n,{headers:{"Content-Type":"application/json",token:C.token}}).then(t=>{console.log(t.data),o("close","")}).catch(t=>{console.log(t.response),t.response.data.error&&(A.value=t.response.data.error)})}return(n,t)=>(l(),r("div",ae,[e("div",se,[ne,A.value!==""?(l(),r("div",le,_(A.value),1)):h("",!0),e("form",pe,[e("div",de,[e("label",null,[ie,f.value!==""?(l(),r("div",ce,_(f.value),1)):h("",!0)]),b(e("input",{type:"text",placeholder:"Title","onUpdate:modelValue":t[0]||(t[0]=u=>a.value=u)},null,512),[[y,a.value]])]),e("div",re,[e("label",null,[ue,x.value!==""?(l(),r("div",_e,_(x.value),1)):h("",!0)]),b(e("input",{type:"number",placeholder:"Version Code","onUpdate:modelValue":t[1]||(t[1]=u=>p.value=u)},null,512),[[y,p.value]])]),e("div",ve,[e("label",null,[fe,g.value!==""?(l(),r("div",he,_(g.value),1)):h("",!0)]),b(e("input",{type:"text",placeholder:"File Url","onUpdate:modelValue":t[2]||(t[2]=u=>i.value=u)},null,512),[[y,i.value]])]),e("div",me,[xe,b(e("input",{type:"text",placeholder:"Cover Url","onUpdate:modelValue":t[3]||(t[3]=u=>c.value=u)},null,512),[[y,c.value]])]),e("div",ge,[Ae,b(e("textarea",{placeholder:"Note","onUpdate:modelValue":t[4]||(t[4]=u=>v.value=u)},null,512),[[y,v.value]])])]),e("div",be,[e("button",{class:"btn bg-red",onClick:t[5]||(t[5]=u=>n.$emit("close"))},"Cancel"),e("button",{class:"btn",onClick:$},"Add")])])]))}};var we=m(ye,[["__scopeId","data-v-7a1cc11d"]]);const Ce={class:"content"},$e={class:"header"},ke={__name:"AppContextMenu",props:{app:Object},setup(s,{emit:o}){const a=s;function p(c){c.target.className==="app-context-menu fixed"&&o("close","")}function i(){o("close",""),o("deleteApp",a.app.id)}return(c,v)=>(l(),r("div",{class:"app-context-menu fixed",onClick:p},[e("div",Ce,[e("div",$e,_(a.app.title),1),e("div",{class:"list"},[e("div",{class:"list-item red",onClick:i},"Delete")])])]))}};var De=m(ke,[["__scopeId","data-v-2b3a70d8"]]);const Ne={class:"novel-app"},Me={__name:"NovelApp",setup(s){const o=d([]),a=d({}),p=d(!1),i=d(!1),c=D();function v(){k.get("/api/v2/novel-app").then(n=>{o.value=n.data.apps}).catch(n=>{console.log(n.response)})}function f(){p.value=!0}function x(){p.value=!1,v()}function g(n){a.value=n,i.value=!0}function A(){a.value={},i.value=!1}function C(n){o.value=o.value.filter(t=>t.id!==n)}function $(n){k.delete(`/api/v2/novel-app/${n}`).then(t=>{console.log(t),C(n)}).catch(t=>{console.log(t.response)})}return S(()=>{v()}),(n,t)=>(l(),r("div",Ne,[p.value?(l(),w(we,{key:0,onClose:x})):h("",!0),i.value?(l(),w(De,{key:1,app:a.value,onClose:A,onDeleteApp:$},null,8,["app"])):h("",!0),L(Z,{apps:o.value,onOpenContextMenu:g},null,8,["apps"]),B(c).isLogin?(l(),w(oe,{key:2,onShowAddDialog:f})):h("",!0)]))}};var Ue=m(Me,[["__scopeId","data-v-091f97ff"]]);export{Ue as default};

import{u as y,h as t,s as b,o as i,c,x as U,t as m,l as f,a as e,i as _,v as g,f as N,e as h,n as V,y as C}from"./index.b6c06a25.js";const M={class:"login"},B=e("div",{class:"header"},"Login",-1),I=["onSubmit"],L={class:"form-group"},P={for:"username"},T=h("User Name "),D={key:0,class:"msg red"},z={class:"form-group"},E={for:"password"},R=h("Password "),j={key:0,class:"msg red"},q=e("div",{class:"btn-group"},[e("div",{class:"right"},[e("input",{type:"submit",value:"Login",class:"btn"})])],-1),G={__name:"login",setup(A){const d=y(),o=t(""),n=t(""),l=t(""),u=t(""),p=t(""),v=t(!1),w=b();function S(){o.value!=""&&(l.value="")}function k(){n.value!=""&&(u.value="")}function x(){if(o.value=="")return l.value="Set Username",!1;if(n.value=="")return u.value="Set Password",!1;V.post("/api/v2/user/login",{username:o.value,password:n.value}).then(s=>{v.value=!0,s.data.success&&(window.localStorage.setItem("user-token",s.data.token),w.push("/"),C.user.userSuccess((a,r)=>{a||(d.setLogin(!0),d.setToken(s.data.token),d.setUser(r.user.data))}))}).catch(s=>{s.response.data.error&&(p.value=s.response.data.error,v.value=!1),console.log(s.response)})}return(s,a)=>(i(),c("div",M,[B,p.value!==""?(i(),c("div",{key:0,class:U(v.value?"message":"message red")},m(p.value),3)):f("",!0),e("form",{onSubmit:N(x,["prevent"]),class:"c-form"},[e("div",L,[e("label",P,[T,l.value!=""?(i(),c("span",D,m(l.value),1)):f("",!0)]),_(e("input",{type:"text",class:"form-text",onInput:S,"onUpdate:modelValue":a[0]||(a[0]=r=>o.value=r),placeholder:"User Name",id:"username"},null,544),[[g,o.value]])]),e("div",z,[e("label",E,[R,u.value!=""?(i(),c("span",j,m(u.value),1)):f("",!0)]),_(e("input",{type:"password",onInput:k,"onUpdate:modelValue":a[1]||(a[1]=r=>n.value=r),class:"form-text",placeholder:"Password",id:"password"},null,544),[[g,n.value]])]),q],40,I)]))}};export{G as default};

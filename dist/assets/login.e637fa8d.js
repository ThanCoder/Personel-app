import{u as b,h as t,i as y,o as i,c,n as N,t as v,j as m,a as e,k as f,v as _,f as U,d as g,l as V,m as C}from"./index.d77b9ace.js";const M={class:"login"},B=e("div",{class:"header"},"Login",-1),I=["onSubmit"],L={class:"form-group"},P={for:"username"},D=g("User Name "),T={key:0,class:"msg red"},j={class:"form-group"},z={for:"password"},E=g("Password "),R={key:0,class:"msg red"},q=e("div",{class:"btn-group"},[e("div",{class:"right"},[e("input",{type:"submit",value:"Login",class:"btn"})])],-1),G={__name:"login",setup(A){const h=b(),o=t(""),n=t(""),r=t(""),l=t(""),d=t(""),p=t(!1),w=y();function S(){o.value!=""&&(r.value="")}function k(){n.value!=""&&(l.value="")}function x(){if(o.value=="")return r.value="Set Username",!1;if(n.value=="")return l.value="Set Password",!1;V.post("/api/v2/user/login",{username:o.value,password:n.value}).then(s=>{p.value=!0,s.data.success&&(window.localStorage.setItem("user-token",s.data.token),w.push("/"),C.user.userSuccess((a,u)=>{a&&h.setLogin(!0)}))}).catch(s=>{s.response.data.error&&(d.value=s.response.data.error,p.value=!1),console.log(s.response)})}return(s,a)=>(i(),c("div",M,[B,d.value!==""?(i(),c("div",{key:0,class:N(p.value?"message":"message red")},v(d.value),3)):m("",!0),e("form",{onSubmit:U(x,["prevent"]),class:"c-form"},[e("div",L,[e("label",P,[D,r.value!=""?(i(),c("span",T,v(r.value),1)):m("",!0)]),f(e("input",{type:"text",class:"form-text",onInput:S,"onUpdate:modelValue":a[0]||(a[0]=u=>o.value=u),placeholder:"User Name",id:"username"},null,544),[[_,o.value]])]),e("div",j,[e("label",z,[E,l.value!=""?(i(),c("span",R,v(l.value),1)):m("",!0)]),f(e("input",{type:"password",onInput:k,"onUpdate:modelValue":a[1]||(a[1]=u=>n.value=u),class:"form-text",placeholder:"Password",id:"password"},null,544),[[_,n.value]])]),q],40,I)]))}};export{G as default};

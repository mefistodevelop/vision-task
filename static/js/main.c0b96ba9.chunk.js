(this["webpackJsonpvision-task"]=this["webpackJsonpvision-task"]||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),r=a(18),c=a.n(r),i=(a(42),a(3)),l=(a(43),a(44),a(10)),o=a(9),u=a(11),j=a.n(u),b=a(15),m=a(17),p=a(35),f=a.n(p).a.create({baseURL:"http://erp.apptrix.ru/api/clients/"}),d=function(e){return f.post("create/",e)},h=function(e){return f.post("token/",e)},O=function(e){return f.post("token/refresh/",e).then((function(e){localStorage.setItem("accessToken",e.data.access),window.location="/"}))},_=function(e){return f.get(e)};f.interceptors.request.use((function(e){var t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),f.interceptors.response.use((function(e){return e}),(function(e){if(401===e.response.status){var t=localStorage.getItem("refreshToken");try{return O({refresh:t})}catch(a){return localStorage.clear(),window.location="/login",new Promise((function(t,a){a(e)}))}}}));var x="SET_IS_AUTHORIZED",g="SET_USER_DATA",v={isAuthorized:!1,isFetching:!1,clientId:null,userData:{}},N=function(e){return{payload:e,type:x}},k=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(t);case 3:if(201!==e.sent.status){e.next=7;break}return alert("You've successfully registered"),e.abrupt("return",!0);case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),alert(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();a(67);function y(e){var t=e.type,a=void 0===t?"button":t,s=e.name,r=void 0===s?"submit":s;return Object(n.jsx)("button",{className:"button",type:a,children:r})}a(68);function w(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(""),u=Object(l.a)(c,2),m=u[0],p=u[1],f=Object(o.c)((function(e){return e.isAuthorized})),d=Object(o.b)();return Object(n.jsxs)(n.Fragment,{children:[f?Object(n.jsx)(i.a,{exact:!0,to:"/"}):"",Object(n.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault();var t,n=a.trim(),s=m.trim();n&&s&&d((t={username:n,password:s},function(){var e=Object(b.a)(j.a.mark((function e(a){var n,s,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(t);case 3:200===(n=e.sent).status&&(s=n.data.client_id,r=n.data.access,c=n.data.refresh,localStorage.setItem("clientId",s),localStorage.setItem("accessToken",r),localStorage.setItem("refreshToken",c),a(N(!0))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(n.jsxs)("label",{className:"login-form__label",children:["username",Object(n.jsx)("input",{className:"login-form__field",type:"text",name:"username",value:a,onChange:function(e){var t=e.target.value;r(t)},required:!0,autoComplete:"on"})]}),Object(n.jsxs)("label",{className:"login-form__label",children:["password",Object(n.jsx)("input",{className:"login-form__field",type:"password",name:"password",value:m,onChange:function(e){var t=e.target.value;p(t)},required:!0,autoComplete:"on"})]}),Object(n.jsx)(y,{type:"submit",name:"submit"})]})]})}function S(){return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)("h1",{className:"login__title",children:"Login"}),Object(n.jsx)(w,{})]})}a(70),a(71);function C(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(""),o=Object(l.a)(c,2),u=o[0],m=o[1],p=Object(s.useState)(""),f=Object(l.a)(p,2),d=f[0],h=f[1],O=Object(s.useState)(""),_=Object(l.a)(O,2),x=_[0],g=_[1],v=Object(s.useState)(""),N=Object(l.a)(v,2),w=N[0],S=N[1],C=Object(s.useState)(""),I=Object(l.a)(C,2),A=I[0],E=I[1],T=Object(s.useState)(!1),q=Object(l.a)(T,2),D=q[0],z=q[1],F=function(e,t){var a=e.target.value.trim();switch(t){case"email":r(a);break;case"password":m(a);break;case"name":h(a);break;case"surname":g(a);break;case"inviteCode":S(a);break;case"countryKey":E(a)}},R=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:d,surname:x,user:{email:a,password:u},invited_by:w,country_key:A,phone:"+79991234567"},e.next=4,k(n);case 4:s=e.sent,z(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[D?Object(n.jsx)(i.a,{to:"/login"}):"",Object(n.jsxs)("form",{className:"signup-form",onSubmit:R,children:[Object(n.jsxs)("label",{className:"signup-form__label",children:["email",Object(n.jsx)("input",{className:"signup-form__field",type:"email",name:"email",value:a,onChange:function(e){return F(e,"email")},required:!0,autoComplete:"on"})]}),Object(n.jsxs)("label",{className:"signup-form__label",children:["password",Object(n.jsx)("input",{className:"signup-form__field",type:"password",name:"password",value:u,onChange:function(e){return F(e,"password")},required:!0,autoComplete:"on"})]}),Object(n.jsxs)("label",{className:"signup-form__label",children:["name",Object(n.jsx)("input",{className:"signup-form__field",type:"text",name:"name",value:d,onChange:function(e){return F(e,"name")},required:!0})]}),Object(n.jsxs)("label",{className:"signup-form__label",children:["surname",Object(n.jsx)("input",{className:"signup-form__field",type:"text",name:"surname",value:x,onChange:function(e){return F(e,"surname")},required:!0})]}),Object(n.jsxs)("div",{className:"signup-form__fieldgroup",children:[Object(n.jsxs)("label",{className:"signup-form__label signup-form__label_small",children:["invitational code",Object(n.jsx)("input",{className:"signup-form__field",type:"text",name:"invited_by",value:w,onChange:function(e){return F(e,"inviteCode")},required:!0})]}),Object(n.jsxs)("label",{className:"signup-form__label signup-form__label_small",children:["country key",Object(n.jsx)("input",{className:"signup-form__field",type:"text",name:"country_key",value:A,onChange:function(e){return F(e,"countryKey")},required:!0})]})]}),Object(n.jsx)(y,{type:"submit",name:"submit"})]})]})}function I(){var e=Object(o.c)((function(e){return e.isAuthorized}));return Object(n.jsxs)(n.Fragment,{children:[e?Object(n.jsx)(i.a,{exact:!0,to:"/"}):"",Object(n.jsxs)("div",{className:"signup",children:[Object(n.jsx)("h1",{className:"signup__title",children:"Sign up"}),Object(n.jsx)(C,{})]})]})}a(72);var A=a.p+"static/media/instagram.d37acdd3.svg",E=a.p+"static/media/telegram.86fe8f60.svg",T=a.p+"static/media/vk.13f72add.svg",q=a.p+"static/media/whatsapp.42f2f941.svg";function D(){var e=Object(o.c)((function(e){return e.isAuthorized})),t=localStorage.getItem("clientId"),a=Object(o.b)(),r=Object(o.c)((function(e){return e.userData})),c=r.avatar,l="".concat(r.name," ").concat(r.surname),u=r.city,m=r.birth_date,p=r.email,f=r.phone;return Object(s.useEffect)((function(){var e;a((e=t,function(){var t=Object(b.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e);case 3:200===(n=t.sent).status&&(a({payload:n.data,type:g}),a(N(!0))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))}),[]),Object(n.jsxs)(n.Fragment,{children:[e?"":Object(n.jsx)(i.a,{to:"/login"}),Object(n.jsxs)("div",{className:"profile",children:[Object(n.jsx)("div",{className:"profile__userpic-wrapper",children:Object(n.jsx)("img",{src:c,width:"200",height:"auto",alt:"userpic",className:"profile__userpic"})}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsx)("h3",{className:"profile__name",children:l}),Object(n.jsxs)("div",{className:"profile__abouts",children:[Object(n.jsxs)("p",{className:"profile__abouts-item",children:["birthday: ",m]}),Object(n.jsxs)("p",{className:"profile__abouts-item",children:["city: ",u]})]}),Object(n.jsxs)("ul",{className:"profile__contacts-list",children:[Object(n.jsxs)("li",{className:"profile__contacts-item",children:["email: ",p]}),Object(n.jsxs)("li",{className:"profile__contacts-item",children:["phone: ",f]})]}),Object(n.jsxs)("ul",{className:"profile__socials-list",children:[Object(n.jsx)("li",{className:"profile__socials-item",children:Object(n.jsx)("a",{href:r.instagram||"blank.link",className:"profile__socials-link",children:Object(n.jsx)("img",{width:"25",height:"30",src:A,alt:"instagram"})})}),Object(n.jsx)("li",{className:"profile__socials-item",children:Object(n.jsx)("a",{href:r.telegram||"blank.link",className:"profile__socials-link",children:Object(n.jsx)("img",{width:"25",height:"30",src:E,alt:"telegram"})})}),Object(n.jsx)("li",{className:"profile__socials-item",children:Object(n.jsx)("a",{href:r.vk||"blank.link",className:"profile__socials-link",children:Object(n.jsx)("img",{width:"25",height:"30",src:T,alt:"vk"})})}),Object(n.jsx)("li",{className:"profile__socials-item",children:Object(n.jsx)("a",{href:r.whatsapp||"blank.link",className:"profile__socials-link",children:Object(n.jsx)("img",{width:"25",height:"30",src:q,alt:"whatsapp"})})})]})]})]})]})}var z=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("main",{className:"App__content",children:[Object(n.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(n.jsx)(D,{})}}),Object(n.jsx)(i.b,{path:"/signup",render:function(){return Object(n.jsx)(I,{})}}),Object(n.jsx)(i.b,{path:"/login",render:function(){return Object(n.jsx)(S,{})}})]})})},F=a(14),R=a(36),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.c,L=Object(F.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(m.a)(Object(m.a)({},e),{},{isAuthorized:t.payload});case g:return Object(m.a)(Object(m.a)({},e),{},{userData:t.payload});default:return e}}),U(Object(F.a)(R.a))),P=a(12);c.a.render(Object(n.jsx)(o.a,{store:L,children:Object(n.jsx)(P.a,{children:Object(n.jsx)(z,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.c0b96ba9.chunk.js.map
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[35],{456:function(e,a,t){"use strict";t.r(a);var r=t(66),s=t.n(r),n=t(75),c=t(44),l=t(0),o=t.n(l),m=t(7),i=t(6),u=t(179),p=t(171),d=t(164),b=t(76),g=t(68),f=t(214),h=t.n(f);a.default=function(){var e=Object(m.g)(),a=Object(p.a)({mode:"onChange"}),r=a.register,l=a.handleSubmit,f=a.formState,E=f.errors,k=f.isDirty,v=f.isValid,N=Object(d.a)(["user"]),w=Object(c.a)(N,2)[1],x=function(){var a=Object(n.a)(s.a.mark((function a(t){var r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return delete t.terms,a.prev=1,a.next=4,Object(b.e)(t);case 4:(r=a.sent).data.user.auth="verified",w("user",r.data.user,{path:"/"}),localStorage.setItem("accessToken",r.data.tokens.access.token),localStorage.setItem("refreshToken",r.data.tokens.refresh.token),e.push("/dashboard"),g.b.success("login Successfully"),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),a.t0&&a.t0.response&&a.t0.response.data&&a.t0.response.data.message?g.b.error(a.t0.response.data.message):g.b.error("There was an internal server error please try again later or contact support@fcn.com");case 16:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}(),y=function(){var a=Object(n.a)(s.a.mark((function a(t){var r,n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=JSON.stringify({token:t.tokenId}),a.prev=1,a.next=4,Object(b.c)(r);case 4:(n=a.sent).data.user.auth="verified",w("user",n.data.user,{path:"/"}),localStorage.setItem("accessToken",n.data.tokens.access.token),localStorage.setItem("refreshToken",n.data.tokens.refresh.token),g.b.success("login sucssefully"),e.push("/dashboard"),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),a.t0&&a.t0.response&&a.t0.response.data&&a.t0.response.data.message?g.b.error(a.t0.response.data.message):g.b.error("There was an internal server error please try again later or contact support@fcn.com");case 16:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex align-items-center auth px-0"},o.a.createElement("div",{className:"row w-100 mx-0"},o.a.createElement("div",{className:"col-lg-4 mx-auto"},o.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},o.a.createElement("div",{className:"brand-logo"},o.a.createElement("img",{src:t(108),alt:"logo"})),o.a.createElement("h4",null,"Hello! let's get started"),o.a.createElement("h6",{className:"font-weight-light"},"Sign in to continue."),o.a.createElement(u.a,{className:"pt-3",onSubmit:l(x)},o.a.createElement(u.a.Group,{className:"d-flex flex-wrap search-field"},o.a.createElement(u.a.Control,Object.assign({type:"email",placeholder:"Email",size:"lg",name:"email",className:"h-auto"},r("email",{required:!0,pattern:/^\S+@\S+$/i})))," ",o.a.createElement("br",null),E&&E.email&&"required"===E.email.type&&o.a.createElement("p",null,"email is required field"),E&&E.email&&"pattern"===E.email.type&&o.a.createElement("p",null,"invalid email formate")),o.a.createElement(u.a.Group,{className:"d-flex flex-wrap search-field"},o.a.createElement(u.a.Control,Object.assign({type:"password",placeholder:"Password",size:"lg",className:"h-auto",name:"password"},r("password",{required:!0})))," ",o.a.createElement("br",null),E&&E.password&&o.a.createElement("p",null,"password is required field")),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",disabled:!k||!v},"SIGN IN")),o.a.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label text-muted"},o.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"terms"},r("terms"))),o.a.createElement("i",{className:"input-helper"}),"Keep me signed in")),o.a.createElement(i.b,{to:"/user-pages/forgot-password-1",className:"auth-link text-black"},"Forgot password?")),o.a.createElement("div",{className:"mt-3 mb-3 google-registration-button"},o.a.createElement(h.a,{clientId:"367988835055-0qt4mpc2pdmc6p8e0g4chvgse22sk8gr.apps.googleusercontent.com",buttonText:"Sign up with Google",onSuccess:y,onFailure:y,cookiePolicy:"single_host_origin"})),o.a.createElement("div",{className:"mb-2"},o.a.createElement("button",{type:"button",className:"btn btn-block btn-facebook auth-form-btn"},o.a.createElement("i",{className:"mdi mdi-facebook mr-2"}),"Connect using facebook")),o.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account? ",o.a.createElement(i.b,{to:"/user-pages/register-1",className:"text-primary"},"Create"))))))))}}}]);
//# sourceMappingURL=35.a3c3f2dc.chunk.js.map
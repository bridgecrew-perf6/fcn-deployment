(window["webpackJsonppurple-react-free"]=window["webpackJsonppurple-react-free"]||[]).push([[9],{164:function(e,a,t){"use strict";var r=t(1),s=t(3),l=t(5),n=t.n(l),c=t(0),i=t.n(c),o=t(8),m=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,d=void 0===c?"div":c,u=Object(s.a)(e,["bsPrefix","className","as"]),f=Object(o.b)(t,"col"),b=[],p=[];return m.forEach((function(e){var a,t,r,s=u[e];if(delete u[e],null!=s&&"object"===typeof s){var l=s.span;a=void 0===l||l,t=s.offset,r=s.order}else a=s;var n="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+f+n:""+f+n+"-"+a),null!=r&&p.push("order"+n+"-"+r),null!=t&&p.push("offset"+n+"-"+t)})),b.length||b.push(f),i.a.createElement(d,Object(r.a)({},u,{ref:a,className:n.a.apply(void 0,[l].concat(b,p))}))}));d.displayName="Col",a.a=d},185:function(e,a,t){"use strict";var r=t(217),s=t.n(r),l="https://fcn-api.herokuapp.com/v1/",n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r={method:a,headers:{"content-type":"application/json"},data:t,url:"".concat(l,"/").concat(e)};return s()(r)};t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return i}));var c=function(e){return n("auth/register","POST",e)},i=function(e){return n("auth/login","POST",e)}},386:function(e,a,t){"use strict";var r=t(1),s=t(3),l=t(5),n=t.n(l),c=t(0),i=t.n(c),o=(t(91),t(21)),m=t.n(o),d={type:m.a.string.isRequired,as:m.a.elementType},u=i.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,c=e.className,o=e.type,m=Object(s.a)(e,["as","className","type"]);return i.a.createElement(l,Object(r.a)({},m,{ref:a,className:n()(c,o&&o+"-feedback")}))}));u.displayName="Feedback",u.propTypes=d,u.defaultProps={type:"valid"};var f=u,b=i.a.createContext({controlId:void 0}),p=t(8),v=i.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,f=e.isStatic,v=e.as,h=void 0===v?"input":v,N=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),x=Object(c.useContext)(b),O=x.controlId;return l=x.custom?Object(p.b)(o,"custom-control-input"):Object(p.b)(l,"form-check-input"),i.a.createElement(h,Object(r.a)({},N,{ref:a,id:t||O,className:n()(m,l,d&&"is-valid",u&&"is-invalid",f&&"position-static")}))}));v.displayName="FormCheckInput",v.defaultProps={type:"checkbox"};var h=v,N=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(c.useContext)(b),f=u.controlId;return t=u.custom?Object(p.b)(l,"custom-control-label"):Object(p.b)(t,"form-check-label"),i.a.createElement("label",Object(r.a)({},d,{ref:a,htmlFor:m||f,className:n()(o,t)}))}));N.displayName="FormCheckLabel";var x=N,O=i.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,o=e.bsCustomPrefix,m=e.inline,d=e.disabled,u=e.isValid,v=e.isInvalid,N=e.feedback,O=e.className,y=e.style,j=e.title,E=e.type,g=e.label,w=e.children,k=e.custom,P=e.as,I=void 0===P?"input":P,C=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),F="switch"===E||k;l=F?Object(p.b)(o,"custom-control"):Object(p.b)(l,"form-check");var S=Object(c.useContext)(b).controlId,R=Object(c.useMemo)((function(){return{controlId:t||S,custom:F}}),[S,F,t]),T=null!=g&&!1!==g&&!w,V=i.a.createElement(h,Object(r.a)({},C,{type:"switch"===E?"checkbox":E,ref:a,isValid:u,isInvalid:v,isStatic:!T,disabled:d,as:I}));return i.a.createElement(b.Provider,{value:R},i.a.createElement("div",{style:y,className:n()(O,l,F&&"custom-"+E,m&&l+"-inline")},w||i.a.createElement(i.a.Fragment,null,V,T&&i.a.createElement(x,{title:j},g),(u||v)&&i.a.createElement(f,{type:u?"valid":"invalid"},N))))}));O.displayName="FormCheck",O.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},O.Input=h,O.Label=x;var y=O,j=(t(57),i.a.forwardRef((function(e,a){var t,l,o=e.bsPrefix,m=e.type,d=e.size,u=e.id,f=e.className,v=e.isValid,h=e.isInvalid,N=e.plaintext,x=e.readOnly,O=e.as,y=void 0===O?"input":O,j=Object(s.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),E=Object(c.useContext)(b).controlId;if(o=Object(p.b)(o,"form-control"),N)(l={})[o+"-plaintext"]=!0,t=l;else if("file"===m){var g;(g={})[o+"-file"]=!0,t=g}else{var w;(w={})[o]=!0,w[o+"-"+d]=d,t=w}return i.a.createElement(y,Object(r.a)({},j,{type:m,ref:a,readOnly:x,id:u||E,className:n()(f,t,v&&"is-valid",h&&"is-invalid")}))})));j.displayName="FormControl",j.Feedback=f;var E=j,g=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,f=Object(s.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.b)(t,"form-group");var v=Object(c.useMemo)((function(){return{controlId:m}}),[m]);return i.a.createElement(b.Provider,{value:v},i.a.createElement(u,Object(r.a)({},f,{ref:a,className:n()(l,t)}),o))}));g.displayName="FormGroup";var w=g,k=t(164),P=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.column,o=e.srOnly,m=e.className,d=e.htmlFor,u=Object(s.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),f=Object(c.useContext)(b).controlId;t=Object(p.b)(t,"form-label");var v=n()(m,t,o&&"sr-only",l&&"col-form-label");return d=d||f,l?i.a.createElement(k.a,Object(r.a)({as:"label",className:v,htmlFor:d},u)):i.a.createElement("label",Object(r.a)({ref:a,className:v,htmlFor:d},u))}));P.displayName="FormLabel",P.defaultProps={column:!1,srOnly:!1};var I=P,C=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,o=void 0===c?"small":c,m=e.muted,d=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(p.b)(t,"form-text"),i.a.createElement(o,Object(r.a)({},d,{ref:a,className:n()(l,t,m&&"text-muted")}))}));C.displayName="FormText";var F=C,S=i.a.forwardRef((function(e,a){return i.a.createElement(y,Object(r.a)({},e,{ref:a,type:"switch"}))}));S.displayName="Switch",S.Input=y.Input,S.Label=y.Label;var R=S,T=t(62),V=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,c=e.className,o=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(s.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.b)(t,"form"),i.a.createElement(d,Object(r.a)({},u,{ref:a,className:n()(c,o&&"was-validated",l&&t+"-inline")}))}));V.displayName="Form",V.defaultProps={inline:!1},V.Row=Object(T.a)("form-row"),V.Group=w,V.Control=E,V.Check=y,V.Switch=R,V.Label=I,V.Text=F;a.a=V},407:function(e,a,t){"use strict";t.r(a);var r=t(182),s=t.n(r),l=t(183),n=t(43),c=t(0),i=t.n(c),o=t(29),m=t(7),d=t(386),u=t(216),f=t(141),b=t(185),p=t(63);a.default=function(){var e=Object(o.g)(),a=Object(u.a)({mode:"onChange"}),r=a.register,c=a.handleSubmit,v=a.formState,h=v.errors,N=v.isDirty,x=v.isValid,O=Object(f.a)(["user"]),y=Object(n.a)(O,2)[1],j=function(){var a=Object(l.a)(s.a.mark((function a(t){var r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return delete t.terms,a.prev=1,a.next=4,Object(b.a)(t);case 4:(r=a.sent).data.user.auth="verified",y("user",r.data.user,{path:"/"}),localStorage.setItem("accessToken",r.data.tokens.access.token),localStorage.setItem("refreshToken",r.data.tokens.refresh.token),e.push("/dashboard"),p.b.success("login Successfully"),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),a.t0&&a.t0.response&&a.t0.response.data&&a.t0.response.data.message?p.b.error(a.t0.response.data.message):p.b.error("There was an internal server error please try again later or contact support@fcn.com");case 16:case"end":return a.stop()}}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex align-items-center auth px-0"},i.a.createElement("div",{className:"row w-100 mx-0"},i.a.createElement("div",{className:"col-lg-4 mx-auto"},i.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},i.a.createElement("div",{className:"brand-logo"},i.a.createElement("img",{src:t(90),alt:"logo"})),i.a.createElement("h4",null,"Hello! let's get started"),i.a.createElement("h6",{className:"font-weight-light"},"Sign in to continue."),i.a.createElement(d.a,{className:"pt-3",onSubmit:c(j)},i.a.createElement(d.a.Group,{className:"d-flex flex-wrap search-field"},i.a.createElement(d.a.Control,Object.assign({type:"email",placeholder:"Email",size:"lg",name:"email",className:"h-auto"},r("email",{required:!0,pattern:/^\S+@\S+$/i})))," ",i.a.createElement("br",null),h&&h.email&&"required"===h.email.type&&i.a.createElement("p",null,"email is required field"),h&&h.email&&"pattern"===h.email.type&&i.a.createElement("p",null,"invalid email formate")),i.a.createElement(d.a.Group,{className:"d-flex flex-wrap search-field"},i.a.createElement(d.a.Control,Object.assign({type:"password",placeholder:"Password",size:"lg",className:"h-auto",name:"password"},r("password",{required:!0})))," ",i.a.createElement("br",null),h&&h.password&&i.a.createElement("p",null,"password is required field")),i.a.createElement("div",{className:"mt-3"},i.a.createElement("button",{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",disabled:!N||!x},"SIGN IN")),i.a.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},i.a.createElement("div",{className:"form-check"},i.a.createElement("label",{className:"form-check-label text-muted"},i.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"terms"},r("terms"))),i.a.createElement("i",{className:"input-helper"}),"Keep me signed in")),i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()},className:"auth-link text-black"},"Forgot password?")),i.a.createElement("div",{className:"mb-2"},i.a.createElement("button",{type:"button",className:"btn btn-block btn-facebook auth-form-btn"},i.a.createElement("i",{className:"mdi mdi-facebook mr-2"}),"Connect using facebook")),i.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account? ",i.a.createElement(m.b,{to:"/user-pages/register-1",className:"text-primary"},"Create"))))))))}}}]);
//# sourceMappingURL=9.c8371909.chunk.js.map
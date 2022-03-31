(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[12],{169:function(e,a,t){"use strict";var l=t(1),r=t(2),s=t(5),c=t.n(s),n=t(0),o=t.n(n),i=t(6),m=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,u=void 0===n?"div":n,b=Object(r.a)(e,m),f=Object(i.a)(t,"col"),p=[],v=[];return d.forEach((function(e){var a,t,l,r=b[e];if(delete b[e],"object"===typeof r&&null!=r){var s=r.span;a=void 0===s||s,t=r.offset,l=r.order}else a=r;var c="xs"!==e?"-"+e:"";a&&p.push(!0===a?""+f+c:""+f+c+"-"+a),null!=l&&v.push("order"+c+"-"+l),null!=t&&v.push("offset"+c+"-"+t)})),p.length||p.push(f),o.a.createElement(u,Object(l.a)({},b,{ref:a,className:c.a.apply(void 0,[s].concat(p,v))}))}));u.displayName="Col",a.a=u},172:function(e,a,t){"use strict";var l=t(1),r=t(2),s=t(5),c=t.n(s),n=t(0),o=t.n(n),i=(t(106),t(4)),m=t.n(i),d=["as","className","type","tooltip"],u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},b=o.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,n=e.className,i=e.type,m=void 0===i?"valid":i,u=e.tooltip,b=void 0!==u&&u,f=Object(r.a)(e,d);return o.a.createElement(s,Object(l.a)({},f,{ref:a,className:c()(n,m+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=u;var f=b,p=o.a.createContext({controlId:void 0}),v=t(6),E=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],N=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,b=e.isValid,f=void 0!==b&&b,N=e.isInvalid,y=void 0!==N&&N,O=e.isStatic,x=e.as,j=void 0===x?"input":x,h=Object(r.a)(e,E),w=Object(n.useContext)(p),C=w.controlId,g=w.custom?[i,"custom-control-input"]:[s,"form-check-input"],P=g[0],I=g[1];return s=Object(v.a)(P,I),o.a.createElement(j,Object(l.a)({},h,{ref:a,type:u,id:t||C,className:c()(m,s,f&&"is-valid",y&&"is-invalid",O&&"position-static")}))}));N.displayName="FormCheckInput";var y=N,O=["bsPrefix","bsCustomPrefix","className","htmlFor"],x=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,m=e.htmlFor,d=Object(r.a)(e,O),u=Object(n.useContext)(p),b=u.controlId,f=u.custom?[s,"custom-control-label"]:[t,"form-check-label"],E=f[0],N=f[1];return t=Object(v.a)(E,N),o.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||b,className:c()(i,t)}))}));x.displayName="FormCheckLabel";var j=x,h=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],w=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,m=e.inline,d=void 0!==m&&m,u=e.disabled,b=void 0!==u&&u,E=e.isValid,N=void 0!==E&&E,O=e.isInvalid,x=void 0!==O&&O,w=e.feedbackTooltip,C=void 0!==w&&w,g=e.feedback,P=e.className,I=e.style,k=e.title,F=void 0===k?"":k,q=e.type,S=void 0===q?"checkbox":q,R=e.label,G=e.children,V=e.custom,A=e.as,T=void 0===A?"input":A,L=Object(r.a)(e,h),B="switch"===S||V,z=B?[i,"custom-control"]:[s,"form-check"],D=z[0],M=z[1];s=Object(v.a)(D,M);var U=Object(n.useContext)(p).controlId,J=Object(n.useMemo)((function(){return{controlId:t||U,custom:B}}),[U,B,t]),$=B||null!=R&&!1!==R&&!G,K=o.a.createElement(y,Object(l.a)({},L,{type:"switch"===S?"checkbox":S,ref:a,isValid:N,isInvalid:x,isStatic:!$,disabled:b,as:T}));return o.a.createElement(p.Provider,{value:J},o.a.createElement("div",{style:I,className:c()(P,s,B&&"custom-"+S,d&&s+"-inline")},G||o.a.createElement(o.a.Fragment,null,K,$&&o.a.createElement(j,{title:F},R),(N||x)&&o.a.createElement(f,{type:N?"valid":"invalid",tooltip:C},g))))}));w.displayName="FormCheck",w.Input=y,w.Label=j;var C=w,g=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],P=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,b=e.lang,f=e.as,E=void 0===f?"input":f,N=Object(r.a)(e,g),y=Object(n.useContext)(p),O=y.controlId,x=y.custom?[i,"custom-file-input"]:[s,"form-control-file"],j=x[0],h=x[1];return s=Object(v.a)(j,h),o.a.createElement(E,Object(l.a)({},N,{ref:a,id:t||O,type:"file",lang:b,className:c()(m,s,d&&"is-valid",u&&"is-invalid")}))}));P.displayName="FormFileInput";var I=P,k=["bsPrefix","bsCustomPrefix","className","htmlFor"],F=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,m=e.htmlFor,d=Object(r.a)(e,k),u=Object(n.useContext)(p),b=u.controlId,f=u.custom?[s,"custom-file-label"]:[t,"form-file-label"],E=f[0],N=f[1];return t=Object(v.a)(E,N),o.a.createElement("label",Object(l.a)({},d,{ref:a,htmlFor:m||b,className:c()(i,t),"data-browse":d["data-browse"]}))}));F.displayName="FormFileLabel";var q=F,S=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],R=o.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,m=e.disabled,d=void 0!==m&&m,u=e.isValid,b=void 0!==u&&u,E=e.isInvalid,N=void 0!==E&&E,y=e.feedbackTooltip,O=void 0!==y&&y,x=e.feedback,j=e.className,h=e.style,w=e.label,C=e.children,g=e.custom,P=e.lang,k=e["data-browse"],F=e.as,R=void 0===F?"div":F,G=e.inputAs,V=void 0===G?"input":G,A=Object(r.a)(e,S),T=g?[i,"custom"]:[s,"form-file"],L=T[0],B=T[1];s=Object(v.a)(L,B);var z=Object(n.useContext)(p).controlId,D=Object(n.useMemo)((function(){return{controlId:t||z,custom:g}}),[z,g,t]),M=null!=w&&!1!==w&&!C,U=o.a.createElement(I,Object(l.a)({},A,{ref:a,isValid:b,isInvalid:N,disabled:d,as:V,lang:P}));return o.a.createElement(p.Provider,{value:D},o.a.createElement(R,{style:h,className:c()(j,s,g&&"custom-file")},C||o.a.createElement(o.a.Fragment,null,g?o.a.createElement(o.a.Fragment,null,U,M&&o.a.createElement(q,{"data-browse":k},w)):o.a.createElement(o.a.Fragment,null,M&&o.a.createElement(q,null,w),U),(b||N)&&o.a.createElement(f,{type:b?"valid":"invalid",tooltip:O},x))))}));R.displayName="FormFile",R.Input=I,R.Label=q;var G=R,V=(t(45),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),A=o.a.forwardRef((function(e,a){var t,s,i=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,b=e.htmlSize,f=e.id,E=e.className,N=e.isValid,y=void 0!==N&&N,O=e.isInvalid,x=void 0!==O&&O,j=e.plaintext,h=e.readOnly,w=e.custom,C=e.as,g=void 0===C?"input":C,P=Object(r.a)(e,V),I=Object(n.useContext)(p).controlId,k=w?[m,"custom"]:[i,"form-control"],F=k[0],q=k[1];if(i=Object(v.a)(F,q),j)(s={})[i+"-plaintext"]=!0,t=s;else if("file"===d){var S;(S={})[i+"-file"]=!0,t=S}else if("range"===d){var R;(R={})[i+"-range"]=!0,t=R}else if("select"===g&&w){var G;(G={})[i+"-select"]=!0,G[i+"-select-"+u]=u,t=G}else{var A;(A={})[i]=!0,A[i+"-"+u]=u,t=A}return o.a.createElement(g,Object(l.a)({},P,{type:d,size:b,ref:a,readOnly:h,id:f||I,className:c()(E,t,y&&"is-valid",x&&"is-invalid")}))}));A.displayName="FormControl";var T=Object.assign(A,{Feedback:f}),L=["bsPrefix","className","children","controlId","as"],B=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,b=Object(r.a)(e,L);t=Object(v.a)(t,"form-group");var f=Object(n.useMemo)((function(){return{controlId:m}}),[m]);return o.a.createElement(p.Provider,{value:f},o.a.createElement(u,Object(l.a)({},b,{ref:a,className:c()(s,t)}),i))}));B.displayName="FormGroup";var z=B,D=t(169),M=["as","bsPrefix","column","srOnly","className","htmlFor"],U=o.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,i=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,b=e.htmlFor,f=Object(r.a)(e,M),E=Object(n.useContext)(p).controlId;i=Object(v.a)(i,"form-label");var N="col-form-label";"string"===typeof m&&(N=N+" "+N+"-"+m);var y=c()(u,i,d&&"sr-only",m&&N);return b=b||E,m?o.a.createElement(D.a,Object(l.a)({ref:a,as:"label",className:y,htmlFor:b},f)):o.a.createElement(s,Object(l.a)({ref:a,className:y,htmlFor:b},f))}));U.displayName="FormLabel",U.defaultProps={column:!1,srOnly:!1};var J=U,$=["bsPrefix","className","as","muted"],K=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,i=void 0===n?"small":n,m=e.muted,d=Object(r.a)(e,$);return t=Object(v.a)(t,"form-text"),o.a.createElement(i,Object(l.a)({},d,{ref:a,className:c()(s,t,m&&"text-muted")}))}));K.displayName="FormText";var Z=K,H=o.a.forwardRef((function(e,a){return o.a.createElement(C,Object(l.a)({},e,{ref:a,type:"switch"}))}));H.displayName="Switch",H.Input=C.Input,H.Label=C.Label;var Q=H,W=t(48),X=["bsPrefix","inline","className","validated","as"],Y=Object(W.a)("form-row"),_=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,n=e.className,i=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(r.a)(e,X);return t=Object(v.a)(t,"form"),o.a.createElement(d,Object(l.a)({},u,{ref:a,className:c()(n,i&&"was-validated",s&&t+"-inline")}))}));_.displayName="Form",_.defaultProps={inline:!1},_.Row=Y,_.Group=z,_.Control=T,_.Check=C,_.File=G,_.Switch=Q,_.Label=J,_.Text=Z;a.a=_},466:function(e,a,t){"use strict";t.r(a);var l=t(34),r=t.n(l),s=t(46),c=t(35),n=t(0),o=t.n(n),i=t(170),m=t(172),d=t(164),u=t(70),b=t(49);a.default=function(){var e,a=Object(d.a)(["user"]),t=Object(c.a)(a,1)[0],l=Object(i.a)({mode:"onChange"}),n=l.register,f=l.handleSubmit,p=l.formState,v=p.errors,E=(p.isDirty,p.isValid,new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")),N=new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})"),y=function(){var e=Object(s.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.a)(a);case 3:t=e.sent,console.info("result ",t),u.b.success("user crated successfully"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.info("error ",e.t0),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?u.b.error(e.t0.response.data.message):u.b.error("There was an internal server error please try again later or contact support@fcn.com");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Clients / Create Employees "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.role," Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Create Employees")))),o.a.createElement("div",{className:"row auth"},o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",{className:"form-sample",onSubmit:f(y)},o.a.createElement("p",{className:"card-description"}," Personal info "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(m.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-2 col-form-label"},"Name"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement(m.a.Control,Object.assign({type:"text",name:"name"},n("name",{required:!0}))),v&&v.name&&o.a.createElement("p",null,"name is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(m.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-2 col-form-label"},"Address"," "),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement(m.a.Control,Object.assign({type:"text",name:"address"},n("address",{required:!0}))),v&&v.address&&o.a.createElement("p",null,"address is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(m.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Contact No"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(m.a.Control,Object.assign({type:"text",name:"contactno"},n("contactno",{required:!0,pattern:E}))),v&&v.contactno&&"required"===v.contactno.type&&o.a.createElement("p",null,"contact number is required field"),v&&v.contactno&&"pattern"===v.contactno.type&&o.a.createElement("p",null,"invalid phone number please use valid formate")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(m.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Branch"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(m.a.Control,Object.assign({type:"text",name:"branch"},n("branch",{required:!0}))),v&&v.branch&&o.a.createElement("p",null,"branch is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(m.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Email"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(m.a.Control,Object.assign({type:"text",name:"email"},n("email",{required:!0,pattern:/^\S+@\S+$/i}))),v&&v.email&&"required"===v.email.type&&o.a.createElement("p",null,"email is required field"),v&&v.email&&"pattern"===v.email.type&&o.a.createElement("p",null,"invalid email formate")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(m.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"DOB"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(m.a.Control,Object.assign({type:"date",name:"dob"},n("dob",{required:!0}))),v&&v.dob&&o.a.createElement("p",null,"DOB is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(m.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Password"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(m.a.Control,Object.assign({type:"text",name:"password"},n("password",{required:!0,pattern:N}))),v&&v.password&&"required"===v.password.type&&o.a.createElement("p",null,"password is required field"),v&&v.password&&"pattern"===v.password.type&&o.a.createElement("p",null,"password should have at least 8 characters , 1 number and latter")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(m.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Select Country"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"country"},n("country",{required:!0})),o.a.createElement("option",null,"Country"),o.a.createElement("option",null,"United States of America"),o.a.createElement("option",{selected:!0},"India"),o.a.createElement("option",null,"United Kingdom"),o.a.createElement("option",null,"Germany"),o.a.createElement("option",null,"Argentina")))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(m.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Bank Account no"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(m.a.Control,Object.assign({type:"text",name:"bankAccNo"},n("bankAccNo",{required:!0}))),v&&v.bankAccNo&&o.a.createElement("p",null,"Bank Account number is required field")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(m.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"IFSC code"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(m.a.Control,Object.assign({type:"text",name:"bankIfscCode"},n("bankIfscCode",{required:!0}))),v&&v.bankIfscCode&&o.a.createElement("p",null,"Bank IFSC number is required field"))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=12.1fda85c9.chunk.js.map
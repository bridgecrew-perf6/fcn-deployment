(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[31],{467:function(e,t,a){"use strict";a.r(t);var l=a(34),n=a.n(l),r=a(46),c=a(35),s=a(0),o=a.n(s),i=a(164),u=a(207),d=a.n(u),m=a(49),v=a(70),b=a(7);t.default=function(){var e,t=Object(b.g)(),a=Object(i.a)(["user"]),l=Object(c.a)(a,2),u=l[0],p=l[1],E=Object(s.useState)([]),h=Object(c.a)(E,2),g=h[0],f=h[1],O=Object(s.useState)(null),j=Object(c.a)(O,2),N=(j[0],j[1]),k=Object(s.useState)(0),y=Object(c.a)(k,2),S=y[0],w=y[1],x=Object(s.useState)(0),C=Object(c.a)(x,2),D=C[0],L=C[1],J=Object(s.useState)(10),T=Object(c.a)(J,2),F=T[0];T[1];Object(s.useEffect)((function(){Object(r.a)(n.a.mark((function e(){var a,l,r,c,s,o,i,u,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D+F,e.prev=1,e.next=4,Object(m.d)(F,D);case 4:return e.next=6,e.sent.data;case 6:c=e.sent,f(null===c||void 0===c?void 0:c.results),console.log("Loading items from ".concat(D," to ").concat(a)),N(null===c||void 0===c||null===(l=c.results)||void 0===l?void 0:l.slice(D,a)),w(Math.ceil((null===c||void 0===c||null===(r=c.results)||void 0===r?void 0:r.length)/F)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),console.info("error ",e.t0),(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s||null===(o=s.data)||void 0===o?void 0:o.message)?v.b.error(e.t0.response.data.message):v.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i||null===(u=i.data)||void 0===u?void 0:u.code)&&(d=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),p("user",null,{path:"/"}),Object(m.k)(d).finally((function(){t.push("/user-pages/login-1")})));case 18:case"end":return e.stop()}}),e,null,[[1,13]])})))()}),[D,F]);return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Clients / Fetch Employee "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===u||void 0===u||null===(e=u.user)||void 0===e?void 0:e.role," Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Fetch Employee")))),o.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Employee list"),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," Name "),o.a.createElement("th",null," Contact no. "),o.a.createElement("th",null," Branch "),o.a.createElement("th",null," Email "),o.a.createElement("th",null," Role "),o.a.createElement("th",null," Edit "),o.a.createElement("th",null," Delete "))),o.a.createElement("tbody",null,null===g||void 0===g?void 0:g.map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,null===e||void 0===e?void 0:e.name),o.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno),o.a.createElement("td",null,null===e||void 0===e?void 0:e.branch),o.a.createElement("td",null,null===e||void 0===e?void 0:e.email),o.a.createElement("td",null,null===e||void 0===e?void 0:e.role),o.a.createElement("td",null,o.a.createElement("i",{className:"mdi mdi-lead-pencil"})),o.a.createElement("td",null,o.a.createElement("i",{className:"mdi mdi-delete"})))})))),o.a.createElement(d.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){var t=e.selected*F%g.length;console.log("User requested page number ".concat(e.selected,", which is offset ").concat(t)),L(t)},pageRangeDisplayed:5,pageCount:S,previousLabel:"< previous",renderOnZeroPageCount:null}))))))}}}]);
//# sourceMappingURL=31.63c426a8.chunk.js.map
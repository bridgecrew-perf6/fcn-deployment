(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[11],{170:function(e,t,a){"use strict";var n=a(1),l=a(2),r=a(4),c=a.n(r),i=a(0),s=a.n(i),m=a(5),u=["bsPrefix","className","as"],o=["xl","lg","md","sm","xs"],p=s.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,p=void 0===i?"div":i,d=Object(l.a)(e,u),v=Object(m.a)(a,"col"),E=[],g=[];return o.forEach((function(e){var t,a,n,l=d[e];if(delete d[e],"object"===typeof l&&null!=l){var r=l.span;t=void 0===r||r,a=l.offset,n=l.order}else t=l;var c="xs"!==e?"-"+e:"";t&&E.push(!0===t?""+v+c:""+v+c+"-"+t),null!=n&&g.push("order"+c+"-"+n),null!=a&&g.push("offset"+c+"-"+a)})),E.length||E.push(v),s.a.createElement(p,Object(n.a)({},d,{ref:t,className:c.a.apply(void 0,[r].concat(E,g))}))}));p.displayName="Col",t.a=p},199:function(e,t,a){"use strict";var n=a(44),l=a(0),r=a.n(l),c=a(180),i=a(160),s=a(170),m=a(104);t.a=function(){var e=Object(l.useState)(0),t=Object(n.a)(e,2),a=t[0],u=t[1],o=Object(l.useState)(25e3),p=Object(n.a)(o,2),d=p[0],v=p[1],E=Object(l.useState)(10),g=Object(n.a)(E,2),f=g[0],b=g[1],y=Object(l.useState)(12),x=Object(n.a)(y,2),h=x[0],N=x[1],C=Object(l.useState)(0),j=Object(n.a)(C,2),I=(j[0],j[1]),O=Object(l.useState)(0),w=Object(n.a)(O,2),S=w[0],k=w[1],z=Object(l.useState)(0),K=Object(n.a)(z,2),L=K[0],M=K[1],P=Object(l.useState)({responsive:!0,animation:{animateScale:!0,animateRotate:!0},legend:!1}),T=Object(n.a)(P,1)[0],B=Object(l.useState)({}),D=Object(n.a)(B,2),G=D[0],J=D[1];Object(l.useEffect)((function(){var e=document.getElementById("visitSaleChart").getContext("2d"),t=e.createLinearGradient(0,0,0,181);t.addColorStop(0,"rgba(54, 215, 232, 1)"),t.addColorStop(1,"rgba(177, 148, 250, 1)");var a=e.createLinearGradient(0,0,0,50);a.addColorStop(0,"rgba(6, 185, 157, 1)"),a.addColorStop(1,"rgba(132, 217, 210, 1)"),J({datasets:[{data:[L,S],backgroundColor:[t,a],hoverBackgroundColor:[t,a],borderColor:[t,a],legendColor:[t,a]}],labels:["invested amount","Est. returns"]})}),[L,S]),r.a.useEffect((function(){R()}),[d,f,h,a]);var R=function(){var e,t=d;if(0===a){var n=h/12/100,l=12*f,r=0,c=t*f*h;r=t*(1+n)*(Math.pow(1+n,l)-1)/n,e=t*f*12}else{c=t;r=Math.round(Math.pow(1+h/100,f)*d),e=t}I("NaN"===c?"0":c),k(Math.round(r)),M(e)},Y=function(e){e.target.value<100001&&v(e.target.value),e.target.value>1e5&&!isNaN(+e.target.value)&&v(1e5)},A=function(e){e.target.value<31&&N(e.target.value),e.target.value>30&&!isNaN(+e.target.value)&&N(30)},U=function(e){e.target.value<31&&b(e.target.value),e.target.value>30&&!isNaN(+e.target.value)&&b(10)},q=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7 grid-margin stretch-card"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement(i.a.Container,{id:"left-tabs-example",defaultActiveKey:"first"},r.a.createElement(s.a,{sm:12},r.a.createElement(m.a,{variant:"pills",className:"d-flex row"},r.a.createElement(m.a.Item,{onClick:function(){return u(0)}},r.a.createElement(m.a.Link,{eventKey:"first"},"SIP")),r.a.createElement(m.a.Item,{onClick:function(){return u(1)}},r.a.createElement(m.a.Link,{eventKey:"second"},"Lumpsum"))))," ",r.a.createElement("br",null),r.a.createElement("div",{style:{padding:"0px !important"}},r.a.createElement(i.a.Content,{style:{border:"none"}},r.a.createElement(i.a.Pane,{eventKey:"first"},r.a.createElement("div",{style:{margin:"10px 0px"}},r.a.createElement("div",{className:"investmentInput-controller"},r.a.createElement("span",null,"Monthly investment"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"sipInput",id:"exampleInputEmail1",name:"investment",value:d,onChange:Y})," ","\u20b9")),r.a.createElement("input",{type:"range",style:{width:"100%",accentColor:"#00d09c"},value:d,onChange:Y,size:"lg",tooltip:"off",variant:"primary",max:1e5})),r.a.createElement("div",{style:{margin:"10px 0px"}},r.a.createElement("div",{className:"investmentInput-controller"},r.a.createElement("span",null,"Expected return rate (p.a)"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"sipInput",id:"exampleInputEmail1",name:"investment",value:h,onChange:A})," ","%")),r.a.createElement("div",null,r.a.createElement("input",{type:"range",style:{width:"100%",accentColor:"#00d09c"},value:h,onChange:A,size:"lg",tooltip:"off",variant:"primary",max:30}))),r.a.createElement("div",{style:{margin:"10px 0px"}},r.a.createElement("div",{className:"investmentInput-controller"},r.a.createElement("span",null,"Time period"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"sipInput",id:"exampleInputEmail1",name:"investment",value:f,onChange:U})," ","Yr")),r.a.createElement("input",{type:"range",style:{width:"100%",accentColor:"#00d09c"},value:f,onChange:U,size:"lg",tooltip:"off",variant:"primary",max:30}))),r.a.createElement(i.a.Pane,{eventKey:"second"},r.a.createElement("div",{style:{margin:"10px 0px"}},r.a.createElement("div",{className:"investmentInput-controller"},r.a.createElement("span",null,"Total investment"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"sipInput",id:"exampleInputEmail1",name:"investment",value:d,onChange:Y})," ","\u20b9")),r.a.createElement("input",{type:"range",style:{width:"100%",accentColor:"#00d09c"},value:d,onChange:Y,size:"lg",tooltip:"off",variant:"primary",max:1e5})),r.a.createElement("div",{style:{margin:"10px 0px"}},r.a.createElement("div",{className:"investmentInput-controller"},r.a.createElement("span",null,"Expected return rate (p.a)"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"sipInput",id:"exampleInputEmail1",name:"investment",value:h,onChange:A})," ","%")),r.a.createElement("div",null,r.a.createElement("input",{type:"range",style:{width:"100%",accentColor:"#00d09c"},value:h,onChange:A,size:"lg",tooltip:"off",variant:"primary",max:30}))),r.a.createElement("div",{style:{margin:"10px 0px"}},r.a.createElement("div",{className:"investmentInput-controller"},r.a.createElement("span",null,"Time period"),r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"sipInput",id:"exampleInputEmail1",name:"investment",value:f,onChange:U})," ","Yr")),r.a.createElement("input",{type:"range",style:{width:"100%",accentColor:"#00d09c"},value:f,onChange:U,size:"lg",tooltip:"off",variant:"primary",max:30})))))),r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 0px"}},r.a.createElement("span",null,"Invested amount"),r.a.createElement("span",null,q(L)," \xa0 \u20b9")),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 0px"}},r.a.createElement("span",null,"Est. returns"),r.a.createElement("span",null,q(S-L)," \xa0 \u20b9")),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 0px"}},r.a.createElement("span",null,"Total value"),r.a.createElement("span",null,q(S)," \xa0 \u20b9")))))),r.a.createElement("div",{className:"col-md-5 grid-margin stretch-card"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},r.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-fw"},"Invest now")),r.a.createElement(c.Doughnut,{data:G,options:T,id:"visitSaleChart"}),r.a.createElement("div",{id:"traffic-chart-legend",className:"rounded-legend legend-vertical legend-bottom-left pt-4"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"legend-dots bg-info"}),"Invested amount"),r.a.createElement("li",null,r.a.createElement("span",{className:"legend-dots bg-success"}),"Est. returns")))))))}},437:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(199);t.default=function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"page-header"},l.a.createElement("h3",{className:"page-title"},"Calculators"),l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Utils")),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"calculators")))),l.a.createElement(r.a,null)))}}}]);
//# sourceMappingURL=11.31251dca.chunk.js.map
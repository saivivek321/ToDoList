(this.webpackJsonptodolist_=this.webpackJsonptodolist_||[]).push([[0],{14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var c=s(1),n=s.n(c),i=s(8),o=s.n(i),r=(s(14),s(9)),l=s(7),a=s(2),u=s(6),j=s(0);var d=function(t){var e=t.items,s=t.removework,c=t.editwork;return Object(j.jsx)("div",{className:"todolist-list",children:e.map((function(t){var e=t.id,n=t.title;return Object(j.jsxs)("div",{className:"todolist-item",children:[Object(j.jsx)("p",{className:"title",children:n}),Object(j.jsxs)("div",{className:"btn-container",children:[Object(j.jsx)("button",{type:"button",className:"edit-btn",onClick:function(){return c(e)},children:Object(j.jsx)(u.b,{})}),Object(j.jsx)("button",{type:"button",className:"delete-btn",onClick:function(){return s(e)},children:Object(j.jsx)(u.a,{})})]})]},e)}))})};var b=function(t){var e=t.dic,s=t.removeAlert,n=t.list;Object(c.useEffect)((function(){var t=setTimeout((function(){s()}),2e3);return function(){return clearTimeout(t)}}),[n]);var i=e.type,o=e.msg,r="alert-"+i;return Object(j.jsx)("p",{className:"alert "+r,children:o})};var m=function(){var t=Object(c.useState)(""),e=Object(a.a)(t,2),s=e[0],n=e[1],i=Object(c.useState)([]),o=Object(a.a)(i,2),u=o[0],m=o[1],O=Object(c.useState)(!1),f=Object(a.a)(O,2),h=f[0],v=f[1],p=Object(c.useState)(null),x=Object(a.a)(p,2),w=x[0],g=x[1],y=Object(c.useState)({show:!1,msg:"",type:""}),N=Object(a.a)(y,2),k=N[0],S=N[1];return Object(j.jsxs)("div",{className:"section-center",children:[Object(j.jsxs)("form",{className:"todolist-form",onSubmit:function(t){if(t.preventDefault(),s)if(s&&h)m(u.map((function(t){return t.id===w?Object(l.a)(Object(l.a)({},t),{},{title:s}):t}))),n(""),g(null),v(!1),S({show:!0,msg:"Work Edited Successfully",type:"success"});else{S({show:!0,msg:"Work Added To List",type:"success"});var e={id:(new Date).getTime().toString(),title:s};m([e].concat(Object(r.a)(u))),n("")}else S({show:!0,msg:"Add Some Work To List",type:"failure"})},children:[k.show&&Object(j.jsx)(b,{dic:k,removeAlert:function(){S({show:!1,msg:"",type:""})},list:u}),Object(j.jsx)("h3",{children:"to do list"}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("input",{type:"text",className:"todolist",value:s,onChange:function(t){n(t.target.value)}}),Object(j.jsx)("button",{type:"submit",className:"submit-btn",children:h?"Edit":"Enter"})]})]}),u.length>0&&Object(j.jsxs)("div",{className:"todolist-container",children:[Object(j.jsx)(d,{items:u,removework:function(t){S({show:!0,msg:"Work Removed",type:"failure"}),m(u.filter((function(e){return e.id!==t})))},editwork:function(t){var e=u.find((function(e){return e.id===t}));v(!0),g(t),n(e.title)}}),Object(j.jsx)("button",{className:"clear-btn",onClick:function(){S({show:!0,msg:"Cleared Full List",type:"success"}),m([])},children:"Clear Full List"})]})]})};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.96937e00.chunk.js.map
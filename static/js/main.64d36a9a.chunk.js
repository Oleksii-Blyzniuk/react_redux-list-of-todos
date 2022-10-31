(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var a,s=c(9),n=c.n(s),r=c(4),l=c(16),o=c(8),i=c(13),d=c(14),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}};!function(e){e.ALL="ALL",e.COMPLETED="COMPLETED",e.ACTIVE="ACTIVE"}(a||(a={}));var h=function(e,t){return{type:t,payload:e}},O=function(e,t){switch(e){case"ALL":return{type:"ALL",payload:t};case"ACTIVE":return{type:"ACTIVE",payload:t};case"COMPLETED":return{type:"COMPLETED",payload:t};default:return{type:"ALL",payload:""}}},m={query:"",status:a.ALL},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALL":return{query:t.payload,status:a.ALL};case"ACTIVE":return{query:t.payload,status:a.ACTIVE};case"COMPLETED":return{query:t.payload,status:a.COMPLETED};default:return e}},x=c(6),p=function(e){return{type:"todos/ADD",payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"todos/CREATE":return Object(x.a)(e);case"todos/ADD":return[].concat(Object(x.a)(e),[t.payload]);default:return e}},v=Object(o.combineReducers)({currentTodo:b,filter:f,todos:y}),L=Object(o.createStore)(v,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),N=c(3),E=c(0);c(24),c(25);function T(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var g=c(15),A=c.n(g),C=(r.b,r.c),D=c(1),k=function(){var e=C((function(e){return e.todos})),t=C((function(e){return e.filter})),c=Object(r.b)(),s=Object(E.useMemo)((function(){var c=[];switch(t.status){case a.ALL:c=e;break;case a.ACTIVE:c=Object(x.a)(e).filter((function(e){return!e.completed}));break;case a.COMPLETED:c=Object(x.a)(e).filter((function(e){return e.completed}));break;default:return e}return c.filter((function(e){return e.title.toLowerCase().includes(t.query.toLowerCase())}))}),[t]);return Object(D.jsxs)(D.Fragment,{children:[0===s.length&&Object(D.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(D.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(D.jsx)("thead",{children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("th",{children:"#"}),Object(D.jsx)("th",{children:Object(D.jsx)("span",{className:"icon",children:Object(D.jsx)("i",{className:"fas fa-check"})})}),Object(D.jsx)("th",{children:"Title"}),Object(D.jsx)("th",{children:" "})]})}),Object(D.jsx)("tbody",{children:s.map((function(e){return Object(D.jsxs)("tr",{"data-cy":"todo",children:[Object(D.jsx)("td",{className:"is-vcentered",children:e.id}),Object(D.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(D.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(D.jsx)("i",{className:"fas fa-check"})})}),Object(D.jsx)("td",{className:"is-vcentered is-expanded",children:Object(D.jsx)("p",{className:A()({"has-text-danger":!e.completed},{"has-text-success":e.completed}),children:e.title})}),Object(D.jsx)("td",{className:"has-text-right is-vcentered",children:Object(D.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(u(e))},children:Object(D.jsx)("span",{className:"icon",children:Object(D.jsx)("i",{className:"far fa-eye"})})})})]},e.id+JSON.stringify(new Date))}))})]})]})},w=function(){var e=Object(E.useState)("all"),t=Object(N.a)(e,2),c=t[0],s=t[1],n=Object(E.useState)(""),l=Object(N.a)(n,2),o=l[0],i=l[1],d=C((function(e){return e.filter})),u=Object(r.b)(),j=Object(E.useCallback)((function(e){s(e.currentTarget.value),"ALL"===e.currentTarget.value&&u(O("ALL",o)),"ACTIVE"===e.currentTarget.value&&u(O("ACTIVE",o)),"COMPLETED"===e.currentTarget.value&&u(O("COMPLETED",o))}),[c]);return Object(D.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(D.jsx)("p",{className:"control",children:Object(D.jsx)("span",{className:"select",children:Object(D.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:j,children:[Object(D.jsx)("option",{value:"all",children:"All"}),Object(D.jsx)("option",{value:"active",children:"Active"}),Object(D.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(D.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(D.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:o,onChange:function(e){i(e.currentTarget.value),u(h(e.currentTarget.value,d.status))}}),Object(D.jsx)("span",{className:"icon is-left",children:Object(D.jsx)("i",{className:"fas fa-magnifying-glass"})}),o.length>0&&Object(D.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(D.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){i(""),s("ALL"),u(O("ALL","ALL")),u(h("",a.ALL))}})})]})]})},M=(c(27),function(){return Object(D.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(D.jsx)("div",{className:"Loader__content"})})}),S=function(e){var t=e.todo,c=Object(r.b)(),a=Object(E.useState)(),s=Object(N.a)(a,2),n=s[0],l=s[1],o=Object(E.useState)(!0),i=Object(N.a)(o,2),d=i[0],u=i[1];return Object(E.useEffect)((function(){var e;(e=t.userId,T("/users/".concat(e))).then((function(e){l(e),u(!1)}))}),[]),Object(D.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(D.jsx)("div",{className:"modal-background"}),d&&Object(D.jsx)(M,{}),!d&&n&&Object(D.jsxs)("div",{className:"modal-card",children:[Object(D.jsxs)("header",{className:"modal-card-head",children:[Object(D.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(D.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(j())}})]}),Object(D.jsxs)("div",{className:"modal-card-body",children:[Object(D.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(D.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!t.completed&&Object(D.jsx)("strong",{className:"has-text-danger",children:"Planned"}),t.completed&&Object(D.jsx)("strong",{className:"has-text-success",children:"Done"})," by ",Object(D.jsx)("a",{href:n.email,children:n.name})]})]})]})]})},I=function(){var e=Object(r.b)(),t=Object(E.useState)(!0),c=Object(N.a)(t,2),a=c[0],s=c[1],n=C((function(e){return e.currentTodo}));return Object(E.useEffect)((function(){T("/todos").then((function(t){t.map((function(t){return e(p(t))})),s(!1)}))}),[]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("div",{className:"section",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsxs)("div",{className:"box",children:[Object(D.jsx)("h1",{className:"title",children:"Todos:"}),Object(D.jsx)("div",{className:"block",children:Object(D.jsx)(w,{})}),Object(D.jsx)("div",{className:"block",children:a?Object(D.jsx)(M,{}):Object(D.jsx)(k,{})})]})})}),n&&Object(D.jsx)(S,{todo:n})]})},P=function(){return Object(D.jsx)(r.a,{store:L,children:Object(D.jsx)(l.a,{children:Object(D.jsx)(I,{})})})};n.a.render(Object(D.jsx)(P,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.64d36a9a.chunk.js.map
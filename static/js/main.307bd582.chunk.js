(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,o){e.exports=o(27)},17:function(e,t,o){},18:function(e,t,o){},27:function(e,t,o){"use strict";o.r(t);var n=o(0),l=o.n(n),a=o(9),r=o.n(a),c=(o(17),o(18),o(2)),s=o(11),i=o(3),u=o(4),d=o(6),m=o(5),p=o(7),f=o(10),h=o.n(f),g=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return(o=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:""},o.handleChange=function(e){var t=e.target,n=t.name,l=t.value;o.setState(Object(c.a)({},n,l))},o.handleSubmit=function(e){var t=o.state.text,n=o.props.addTodo;e.preventDefault(),0!==t.length&&(n({id:h.a.generate(),text:t,complete:!1}),o.setState({text:""}))},o}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",name:"text",value:this.state.text,onChange:this.handleChange}))}}]),t}(n.Component),b=function(e){var t=e.todo,o=e.id,n=e.onDelete,a=e.toggleComplete;return l.a.createElement("li",{className:""},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:o,onClick:a,checked:t.complete?"checked":""}),l.a.createElement("label",{style:t.complete?{textDecoration:"line-through",color:"#D9D9D9"}:{},htmlFor:o},t.text),l.a.createElement("button",{type:"button",className:"destroy",onClick:n})))},v=function(e){var t=e.updateTodoToShow,o=e.todosToShow,n=e.removeAllCompleteTodos,a=e.preparedtTodos,r=e.todos;return l.a.createElement("footer",{className:"footer",style:{display:"block"}},l.a.createElement("span",{className:"todo-count"},"completed"===o?r.filter(function(e){return!e.complete}).length:a.filter(function(e){return!e.complete}).length," ","items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return t("all")},href:"#/",className:"all"===o?"selected":""},"All")),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return t("active")},href:"#/active",className:"active"===o?"selected":""},"Active")),l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return t("completed")},href:"#/completed",className:"completed"===o?"selected":""},"Completed"))),a.some(function(e){return e.complete})&&l.a.createElement("button",{onClick:n,type:"button",className:"clear-completed",style:{display:"block"}}," ","Clear completed"))};function y(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function E(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?y(o,!0).forEach(function(t){Object(c.a)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):y(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var C=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return(o=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={todos:[],todosToShow:"all",toggleAllComplete:!0},o.addTodo=function(e){o.setState(function(t){return{todos:[e].concat(Object(s.a)(t.todos))}})},o.toggleComplete=function(e){o.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e?E({},t,{complete:!t.complete}):t})}})},o.updateTodoToShow=function(e){o.setState({todosToShow:e})},o.handleDeleteTodo=function(e){o.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},o.removeAllCompleteTodos=function(){o.setState(function(e){return{todos:e.todos.filter(function(e){return!e.complete})}})},o.toggleAllComplete=function(){o.setState(function(e){return{todos:e.todos.map(function(t){return E({},t,{complete:e.toggleAllComplete})}),toggleAllComplete:!e.toggleAllComplete}})},o}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,o=t.todosToShow,n=t.todos,a=[];return"all"===o?a=n:"active"===o?a=n.filter(function(e){return!e.complete}):"completed"===o&&(a=n.filter(function(e){return e.complete})),l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement(g,{addTodo:this.addTodo})),l.a.createElement("section",{className:"main",style:{display:"block"}},l.a.createElement("input",{onClick:this.toggleAllComplete,type:"checkbox",id:"toggle-all",className:"toggle-all"}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},a.map(function(t){return l.a.createElement(b,{key:t.id,todo:t,id:t.id,toggleComplete:function(){return e.toggleComplete(t.id)},onDelete:function(){return e.handleDeleteTodo(t.id)}})}))),l.a.createElement(v,{todos:n,preparedtTodos:a,todosToShow:o,updateTodoToShow:this.updateTodoToShow,removeAllCompleteTodos:this.removeAllCompleteTodos}))}}]),t}(l.a.Component);r.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.307bd582.chunk.js.map
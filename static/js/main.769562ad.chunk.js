(this["webpackJsonpmister-bitcoin"]=this["webpackJsonpmister-bitcoin"]||[]).push([[0],{45:function(e,t,n){e.exports=n(74)},54:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),i=n(19),l=(n(54),n(10)),s=n(16),u=n(1),m=n.n(u),h=n(43),p=n(3),d=n(4),f=n(5),v=n(7),b=n(6),E={name:"Ochoa Hyde",coins:100,moves:[]};var g={getUser:function(){var e=localStorage.getItem("USER");return e!==E.name?E={name:e,coins:100,moves:[]}:E},signup:function(e){localStorage.setItem("USER",e)},logout:function(){localStorage.setItem("USER","")},addMove:function(e,t){if(console.log("contact, amount: ",e,t),E.coins-t>=0){var n={toId:e._id,to:e.name,at:Date.now(),amount:t};return console.log("addMove - move: ",n),E.moves.unshift(n),console.log("addMove - currUser: ",E),E.coins-=t,"Transaction completed"}return"No sufficient funds"}},C=n(40),y=n.n(C);function O(){return(O=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://blockchain.info/tobtc?currency=USD&value=1");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j={getRate:function(){return O.apply(this,arguments)}},w=function(e){return console.log("move list : ",e.movesList),e.movesList?r.a.createElement("div",{className:"move-list"},r.a.createElement("h5",null,e.title),e.movesList.map((function(e){return r.a.createElement("div",{className:"move-list-item",key:e.at},r.a.createElement("p",null,"To: ",e.to),r.a.createElement("p",null,"At: ",e.at),r.a.createElement("p",null,"Amount: ",e.amount," coins"))}))):r.a.createElement("h5",null,e.title)},k=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null,rate:null,title:""},e.handleLogout=function(){g.logout(),e.props.history.push("/signup")},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([g.getUser(),j.getRate()]);case 2:t=e.sent,n=Object(h.a)(t,2),a=n[0],r=n[1],a.name||this.props.history.push("/signup"),this.setState({user:a,rate:r}),this.setTitle();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setTitle",value:function(){this.state.user&&(this.state.user.moves.length?this.setState({title:"Your last 3 transactions:"}):this.setState({title:"You have no transactions at the moment"}))}},{key:"render",value:function(){return this.state.user?r.a.createElement("div",{className:"user-msg container white-text"},r.a.createElement("section",null,r.a.createElement("img",{src:this.avatarImg,alt:""}),r.a.createElement("h2",null,this.state.user.name,", Welcome back!")),r.a.createElement("h5",null,"You have ",this.state.user.coins," coins."),r.a.createElement("h5",null,"Current coin rate: ",this.state.rate),r.a.createElement("hr",null),r.a.createElement(w,{title:this.state.title,movesList:this.state.user.moves}),r.a.createElement("button",{onClick:this.handleLogout},"Logout")):r.a.createElement("div",{className:"white-text"},"Please login first...")}},{key:"avatarImg",get:function(){return"https://robohash.org/".concat(this.state.user.name,".png")}}]),n}(a.Component),_=n(8),x=n(13),S=[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}];function T(e){return e.sort((function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))}function N(e){return new Promise((function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),S.push(e),t(e)}))}function L(e){return e=e.toLocaleLowerCase(),S.filter((function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))}var A={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(t,n){var a=S;e&&e.term&&(a=L(e.term)),t(T(a))}))},getContactById:function(e){return new Promise((function(t,n){var a=S.find((function(t){return t._id===e}));a?t(JSON.parse(JSON.stringify(a))):n("Contact id ".concat(e," not found!"))}))},deleteContact:function(e){return new Promise((function(t,n){var a=S.findIndex((function(t){return t._id===e}));-1!==a&&S.splice(a,1),t(S)}))},saveContact:function(e){return e._id?function(e){return new Promise((function(t,n){var a=S.findIndex((function(t){return e._id===t._id}));-1!==a&&(S[a]=e),t(e)}))}(e):N(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}};var D=function(e){var t=e.contact;return r.a.createElement("div",{className:"contact-preview white-text",key:t._id},r.a.createElement("img",{style:{height:"50px",borderRadius:"50%"},src:"https://robohash.org/".concat(t.name,".png"),alt:""}),r.a.createElement("h5",{style:{marginLeft:"-111px"}},t.name))},B=function(e){return r.a.createElement("div",{className:"contact-list",style:{backgroundColor:"rgba(43, 23, 1, 0.5)"}},e.contacts&&e.contacts.map((function(e){return r.a.createElement(x.a,{to:"contact/"+e._id,key:e._id},r.a.createElement(D,{contact:e}))})))},z=n(14),I=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={term:""},a.onChangeHandler=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(z.a)({},r,n),(function(){a.props.onFilter(Object(_.a)({},a.state))}))},a.state=Object(_.a)({},e.filterBy),a}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-filter white-text"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:" Search Contact Name",onChange:this.onChangeHandler,name:"term",value:this.state.term})))}}]),n}(a.Component),P=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={filterBy:{term:""}},e.loadContacts=Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getContacts(e.state.filterBy);case 2:n=t.sent,e.setState({contacts:n});case 4:case"end":return t.stop()}}),t)}))),e.onFilterHandler=function(t){e.setState((function(e){return{filterBy:Object(_.a)({},e.filterBy,{},t)}}),e.loadContacts)},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadContacts();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,{to:"/contact/edit"},r.a.createElement("button",null,"Add Contact")),r.a.createElement(I,{filterBy:this.state.filterBy,onFilter:this.onFilterHandler}),r.a.createElement(B,{contacts:this.state.contacts}))}}]),n}(a.Component),M=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"statistic-page white-text"},r.a.createElement("h4",null,"Market Price (USD)"),r.a.createElement("p",null,"Average USD market price across major bitcoin exchanges."),r.a.createElement("hr",null),r.a.createElement("h4",null,"Confirmed Transactions Per Day"),r.a.createElement("p",null,"The number of daily confirmed Bitcoin transactions."))}}]),n}(a.Component);function U(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getContactById(e);case 2:a=t.sent,n({type:"SET_CURR_CONTACT",contact:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function R(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=!!e._id,t.next=3,A.saveContact(e);case 3:return e=t.sent,n(a?{type:"UPDATE_CONTACT",contact:e}:{type:"ADD_CONTACT",contact:e}),t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var F=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={contact:null,amount:0,msg:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(z.a)({},n,r))},a.transferFunds=function(e){e.preventDefault();var t=a.state,n=t.contact,r=t.amount;console.log("transferFunds - contact: ",n);var c=g.addMove(n,r);a.setState({msg:c})},a.state.contact=Object(_.a)({},e),a}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"Transfer coins to ",this.props.contact.name,": "),r.a.createElement("form",{onSubmit:this.transferFunds},r.a.createElement("label",null,"Amount:",r.a.createElement("input",{type:"number",onChange:this.handleChange,name:"amount",value:this.state.amount}),r.a.createElement("button",null,"Transfer")),r.a.createElement("p",null,this.state.msg)))}}]),n}(a.Component),H=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onGoBackClickHandler=function(t){e.props.history.go(-1)},e.deleteClickHandler=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.deleteContact(e.props.contact._id);case 2:e.props.history.push("/contact");case 3:case"end":return t.stop()}}),t)}))),e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadContact();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadContact",value:function(){var e=this.props.match.params.id;this.props.loadContactById(e)}},{key:"componentDidUpdate",value:function(e,t){e.match.params.id!==this.props.match.params.id&&this.loadContact()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.contact;if(!e)return r.a.createElement("div",null,"Loading...");return r.a.createElement("div",null,r.a.createElement(x.a,{to:"/contact/edit/".concat(this.props.contact._id)},r.a.createElement("button",null,"Edit")),r.a.createElement("button",{onClick:this.deleteClickHandler},"Delete"),r.a.createElement("button",{onClick:this.onGoBackClickHandler},"Go Back"),r.a.createElement("div",{className:"contact-details white-text container"},r.a.createElement("div",{className:"contact-details-main"},r.a.createElement("img",{style:{height:"100px"},src:"https://robohash.org/".concat(e.name,".png"),alt:""}),r.a.createElement("h1",null,e.name)),r.a.createElement("p",null,"Phone: ",e.phone),r.a.createElement("p",null,"Email: ",e.email),r.a.createElement("hr",null),r.a.createElement(F,{contact:e})))}}]),n}(a.Component),G={loadContactById:U,saveContact:R,deleteContact:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.deleteContact(e);case 2:n({type:"DELETE_CONTACT",id:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},J=Object(i.b)((function(e){return{contact:e.contact.currContact}}),G)(H),W=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contact:A.getEmptyContact()},e.handleChange=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(z.a)({},r,a))},e.saveContact=function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.props.saveContact(Object(_.a)({},e.state));case 3:a=t.sent,e.props.history.push("/contact/".concat(a._id));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t,n=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.props.match.params.id)){e.next=5;break}return e.next=4,this.props.loadContactById(t);case 4:this.setState(Object(_.a)({},this.props.contact),(function(){console.log("this.state",n.state)}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.phone;return r.a.createElement("div",{className:"contact-edit"},r.a.createElement("form",{onSubmit:this.saveContact},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Name:",r.a.createElement("input",{type:"text",onChange:this.handleChange,value:t,name:"name"}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Email:",r.a.createElement("input",{type:"text",onChange:this.handleChange,value:n,name:"email"}))),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Phone:",r.a.createElement("input",{type:"text",onChange:this.handleChange,value:a,name:"phone"}))),r.a.createElement("div",null,r.a.createElement("button",null,"Save"))))}}]),n}(a.Component),Y={loadContactById:U,saveContact:R},q=Object(i.b)((function(e){return{contact:e.contact.currContact}}),Y)(W),X=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:""},e.signup=function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=e.state.username,g.signup(a),e.props.history.push("/mister-bitcoin");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.value,r=n.name;e.setState(Object(z.a)({},r,a))},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.state.username;return r.a.createElement("div",{className:"signup-page white-text"},r.a.createElement("form",{onSubmit:this.signup},r.a.createElement("label",null,"Please enter your name:",r.a.createElement("input",{onChange:this.handleChange,value:e,name:"username",type:"text"})),r.a.createElement("button",null,"Sign up")))}}]),n}(a.Component),V=function(e){return r.a.createElement("nav",{className:"nav-bar  center",style:{backgroundColor:"rgb(43, 23, 1)"}},r.a.createElement(x.b,{activeClassName:"active",exact:!0,to:"/mister-bitcoin"},"HOME")," ","|"," ",r.a.createElement(x.b,{to:"/contact"},"CONTACTS")," ","|"," ",r.a.createElement(x.b,{to:"/statistic"},"STATISTICS"))},K=Object(l.a)();var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.b,{history:K},r.a.createElement(V,null),r.a.createElement("main",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/mister-bitcoin",exact:!0,component:k}),r.a.createElement(s.a,{path:"/contact",exact:!0,component:P}),r.a.createElement(s.a,{path:"/contact/edit/:id?",component:q}),r.a.createElement(s.a,{path:"/contact/:id",component:J}),r.a.createElement(s.a,{path:"/statistic",component:M}),r.a.createElement(s.a,{path:"/signup",component:X})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=n(17),$=n(42),ee=n(44),te={contacts:[],currContact:null};var ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,ae=Object(Z.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(_.a)({},e,{contacts:t.contacts});case"SET_CURR_CONTACT":return Object(_.a)({},e,{currContact:t.contact});case"UPDATE_CONTACT":return Object(_.a)({},e,{contacts:e.contacts.map((function(e){return e._id===t.contact._id?t.contact:e}))});case"DELETE_CONTACT":return Object(_.a)({},e,{contacts:e.contacts.filter((function(e){return e._id!==t.id}))});case"ADD_CONTACT":return Object(_.a)({},e,{contacts:[].concat(Object(ee.a)(e.contacts),[t.contact])});default:return e}}}),re=Object(Z.e)(ae,ne(Object(Z.a)($.a)));o.a.render(r.a.createElement(i.a,{store:re},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.769562ad.chunk.js.map
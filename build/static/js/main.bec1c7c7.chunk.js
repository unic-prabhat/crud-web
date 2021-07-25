(this["webpackJsonpcrud-web"]=this["webpackJsonpcrud-web"]||[]).push([[0],{219:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(33),o=a.n(i),s=(a(170),a(14)),r=a(15),l=a(17),d=a(16),h=a(238),j=a(221),b=a(234),u=a(24),O=a(1),x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(h.a,{secondary:!0,children:[Object(O.jsx)(h.a.Item,{children:Object(O.jsx)(u.b,{exact:!0,to:"/",children:Object(O.jsx)(j.a,{children:"Home"})})}),Object(O.jsx)(h.a.Item,{children:Object(O.jsx)(u.b,{exact:!0,to:"/todolist",children:Object(O.jsx)(j.a,{children:"TodoList"})})}),Object(O.jsx)(h.a.Item,{children:Object(O.jsx)(u.b,{exact:!0,to:"/createtodo",children:Object(O.jsx)(j.a,{children:"Create Todo"})})}),Object(O.jsx)(h.a.Item,{children:Object(O.jsx)(u.b,{exact:!0,to:"/register",children:Object(O.jsx)(j.a,{children:"Register"})})}),Object(O.jsx)(h.a.Item,{children:Object(O.jsx)(u.b,{exact:!0,to:"/login",children:Object(O.jsx)(j.a,{children:"Log In"})})})]}),Object(O.jsx)("br",{}),Object(O.jsx)(b.a,{children:this.props.children}),Object(O.jsx)("footer",{children:Object(O.jsx)("p",{children:"Footer"})})]})}}]),a}(n.Component),g=a(11),p=(a(178),a(13)),m=(a(182),a(121)),v=a(151),f=a(20),C=a.n(f),F=["component"],y=function(e){var t=e.component,a=Object(v.a)(e,F);return Object(O.jsx)(g.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return"true"===C.a.load("userlogin")?"NotVerified"==C.a.load("userdata").email_verification?Object(O.jsx)(g.a,{to:"/emailverification"}):Object(O.jsx)(t,Object(m.a)({},e)):Object(O.jsx)(g.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{children:"Home Page"})}}]),a}(n.Component),S=a(41),T=a(40),M=a(237),k=a(235),H=a(23),N=a.n(H),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){n.setState({loadingForm:!0}),N.a.post("http://localhost:5000/api/todo/store",n.state).then((function(e){console.log(e.data.response),e.data.response?(n.setState({loadingForm:!1,name:"",subject:"Odia",gender:"Male",about:""}),p.NotificationManager.success("Success"),n.props.history.push("/todolist")):(n.setState({loadingForm:!1}),p.NotificationManager.warning("Failed"))}))},n.state={loadingForm:!1,name:"",subject:"Odia",gender:"Male",about:""},n.handleTextChnage=n.handleTextChnage.bind(Object(T.a)(n)),n}return Object(r.a)(a,[{key:"handleTextChnage",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"Create Todo"}),Object(O.jsxs)(M.a,{onSubmit:this.handleSubmit,loading:this.state.loadingForm,children:[Object(O.jsx)(M.a.Field,{control:k.a,label:"Name",placeholder:"Full Name",name:"name",value:this.state.name,onChange:this.handleTxtChange}),Object(O.jsxs)(M.a.Field,{label:"Subject",control:"select",name:"subject",value:this.state.subject,onChange:this.handleTxtChange,children:[Object(O.jsx)("option",{value:"Math",children:"Math"}),Object(O.jsx)("option",{value:"English",children:"English"}),Object(O.jsx)("option",{value:"Odia",children:"Odia"}),Object(O.jsx)("option",{value:"Hindi",children:"Hindi"}),Object(O.jsx)("option",{value:"History",children:"History"})]}),Object(O.jsxs)(M.a.Group,{grouped:!0,children:[Object(O.jsx)("label",{children:"Gender"}),Object(O.jsx)(M.a.Field,{label:"Male",control:"input",type:"radio",name:"gender",value:"Male",checked:"Male"===this.state.gender,onChange:this.handleTextChnage}),Object(O.jsx)(M.a.Field,{label:"Female",control:"input",type:"radio",name:"gender",value:"Female",checked:"Female"===this.state.gender,onChange:this.handleTextChnage})]}),Object(O.jsx)(M.a.Field,{label:"Address",control:"TextArea",name:"about",placeholder:"Address",rows:"3",value:this.state.about,onChange:this.handleTxtChange}),Object(O.jsx)(M.a.Field,{control:j.a,children:"Submit"})]})]})}}]),a}(n.Component),G=a(239),D=a(149),A=a.n(D),I=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={todos:!1},e.handleDelete=function(t){N.a.get("http://localhost:5000/api/todo/delete/".concat(t)).then((function(t){console.log(t),t.data.response?(N.a.get("http://localhost:5000/api/todo").then((function(t){e.setState({todos:t.data.data})})),p.NotificationManager.success("Success")):p.NotificationManager.warning("Wrong ID")}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://localhost:5000/api/todo").then((function(t){e.setState({todos:t.data.data})}))}},{key:"render",value:function(){var e=this;return Object(O.jsx)(O.Fragment,{children:!1===this.state.todos?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("center",{children:Object(O.jsx)(A.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(G.a,{singleLine:!0,children:[Object(O.jsx)(G.a.Header,{children:Object(O.jsxs)(G.a.Row,{children:[Object(O.jsx)(G.a.HeaderCell,{children:"Name"}),Object(O.jsx)(G.a.HeaderCell,{children:"Subject"}),Object(O.jsx)(G.a.HeaderCell,{children:"Gender"}),Object(O.jsx)(G.a.HeaderCell,{children:"About"}),Object(O.jsx)(G.a.HeaderCell,{})]})}),Object(O.jsx)(G.a.Body,{children:this.state.todos.map((function(t){return Object(O.jsxs)(G.a.Row,{children:[Object(O.jsx)(G.a.HeaderCell,{children:t.name}),Object(O.jsx)(G.a.HeaderCell,{children:t.subject}),Object(O.jsx)(G.a.HeaderCell,{children:t.gender}),Object(O.jsx)(G.a.HeaderCell,{children:t.about}),Object(O.jsxs)(G.a.HeaderCell,{children:[Object(O.jsx)(u.b,{style:{color:"blue"},exact:!0,to:"/view/".concat(t._id),children:"View"}),"\xa0 ",Object(O.jsx)(u.b,{exact:!0,to:"/edit/".concat(t._id),children:"Edit"}),"\xa0 ",Object(O.jsx)(u.b,{onClick:function(){return e.handleDelete(t._id)},children:"Delete"})]})]})}))})]})})})}}]),a}(n.Component),L=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={data:!1},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://localhost:5000/api/todo/".concat(this.props.match.params.id)).then((function(t){console.log(t.data.data),t.data.response?e.setState({data:t.data.data}):(p.NotificationManager.warning("Wrong ID"),e.props.history.push("/todolist"))}))}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"View Todo"}),Object(O.jsx)("br",{}),Object(O.jsxs)("h5",{children:["Name : ",this.state.data.name]}),Object(O.jsxs)("h5",{children:["Subject : ",this.state.data.subject]}),Object(O.jsxs)("h5",{children:["Gender : ",this.state.data.gender]}),Object(O.jsxs)("h5",{children:["About : ",this.state.data.about]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(u.b,{exact:!0,to:"/todolist",children:"Go Back"})]})}}]),a}(n.Component),P=a(236),_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){n.setState({loadingForm:!0}),N.a.post("hhttp://localhost:5000/api/todo/update/todo",n.state).then((function(e){console.log(e.data),e.data.response?(n.setState({loadingForm:!1,name:"",subject:"Odia",gender:"Male",about:""}),p.NotificationManager.success("Success"),n.props.history.push("/todolist")):(n.setState({loadingForm:!1}),p.NotificationManager.warning("Failed"))}))},n.state={loadingForm:!1},n.handleTextChnage=n.handleTextChnage.bind(Object(T.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://localhost:5000/api/todo/".concat(this.props.match.params.id)).then((function(t){console.log(t.data.response),t.data.response?e.setState({loadingForm:!1,_id:t.data.data._id,name:t.data.data.name,subject:t.data.data.subject,gender:t.data.data.gender,about:t.data.data.about}):(p.NotificationManager.warning("Wrong ID"),e.props.history.push("/todolist"))}))}},{key:"handleTextChnage",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"Edit Todo"}),Object(O.jsxs)(M.a,{onSubmit:this.handleSubmit,loading:this.state.loadingForm,children:[Object(O.jsx)(M.a.Field,{control:k.a,label:"Name",placeholder:"Name",name:"name",value:this.state.name,onChange:this.handleTextChnage}),Object(O.jsxs)(M.a.Field,{label:"Subject",control:"select",name:"subject",value:this.state.subject,onChange:this.handleTextChnage,children:[Object(O.jsx)("option",{value:"Math",children:"Math"}),Object(O.jsx)("option",{value:"English",children:"English"}),Object(O.jsx)("option",{value:"Odia",children:"Odia"}),Object(O.jsx)("option",{value:"Hindi",children:"Hindi"}),Object(O.jsx)("option",{value:"History",children:"History"})]}),Object(O.jsxs)(M.a.Group,{grouped:!0,children:[Object(O.jsx)("label",{children:"Gender"}),Object(O.jsx)(M.a.Field,{label:"Male",control:"input",type:"radio",name:"gender",value:"Male",checked:"Male"===this.state.gender,onChange:this.handleTextChnage}),Object(O.jsx)(M.a.Field,{label:"Female",control:"input",type:"radio",name:"gender",value:"Female",checked:"Female"===this.state.gender,onChange:this.handleTextChnage})]}),Object(O.jsx)(M.a.Field,{control:P.a,label:"About",placeholder:"About",name:"about",value:this.state.about,onChange:this.handleTxtChange}),Object(O.jsx)(M.a.Field,{control:j.a,children:"Update"})]})]})}}]),a}(n.Component),q=a(240),R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){n.setState({loadingForm:!0}),N.a.post("http://localhost:5000/api/user/store",n.state).then((function(e){console.log(e)}))},n.state={loadingForm:!1,name:"",email:"",gender:"Male",phone:"",password:"",subject:"English",address:""},n.hanleTextChange=n.hanleTextChange.bind(Object(T.a)(n)),n}return Object(r.a)(a,[{key:"hanleTextChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Register"}),Object(O.jsx)(q.a,{children:Object(O.jsxs)(q.a.Row,{children:[Object(O.jsx)(q.a.Column,{width:2}),Object(O.jsx)(q.a.Column,{width:12,children:Object(O.jsxs)(M.a,{onSubmit:this.handleSubmit,loading:this.state.loadingForm,children:[Object(O.jsxs)(M.a.Group,{widths:2,children:[Object(O.jsx)(M.a.Field,{label:"Name",control:k.a,name:"name",placeholder:"Name",value:this.state.name,onChange:this.hanleTextChange,required:!0}),Object(O.jsx)(M.a.Field,{label:"Email",control:k.a,name:"email",placeholder:"Email",value:this.state.email,onChange:this.hanleTextChange,required:!0})]}),Object(O.jsxs)(M.a.Group,{inline:!0,widths:1,children:[Object(O.jsx)("label",{children:"Gender"}),Object(O.jsx)(M.a.Field,{label:"Male",control:"input",type:"radio",name:"gender",value:"Male",checked:"Male"===this.state.gender,onChange:this.hanleTextChange}),Object(O.jsx)(M.a.Field,{label:"Female",control:"input",type:"radio",name:"gender",value:"Female",checked:"Female"===this.state.gender,onChange:this.hanleTextChange})]}),Object(O.jsxs)(M.a.Group,{widths:2,children:[Object(O.jsx)(M.a.Field,{label:"Phone",control:k.a,name:"phone",placeholder:"Phone",value:this.state.phone,onChange:this.hanleTextChange,required:!0}),Object(O.jsx)(M.a.Field,{label:"Password",control:k.a,name:"password",placeholder:"Password",value:this.state.password,onChange:this.hanleTextChange,required:!0})]}),Object(O.jsxs)(M.a.Group,{widths:2,children:[Object(O.jsxs)(M.a.Field,{label:"Subject",control:"select",name:"subject",value:this.state.subject,onChange:this.hanleTextChange,required:!0,children:[Object(O.jsx)("option",{value:"Math",children:"Math"}),Object(O.jsx)("option",{value:"English",children:"English"}),Object(O.jsx)("option",{value:"Odia",children:"Odia"}),Object(O.jsx)("option",{value:"Hindi",children:"Hindi"}),Object(O.jsx)("option",{value:"History",children:"History"})]}),Object(O.jsx)(M.a.Field,{label:"Address",control:"TextArea",name:"address",placeholder:"Address",rows:"1",value:this.state.address,onChange:this.hanleTextChange,required:!0})]}),Object(O.jsx)(M.a.Group,{children:Object(O.jsx)(M.a.Field,{control:j.a,children:"Register"})})]})})]})})]})}}]),a}(n.Component),V=a(67),B=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){n.setState({loadingForm:!0}),N.a.post("http://localhost:5000/api/user/login",n.state).then((function(e){if(e.data.response){n.setState({loadingForm:!1,email:"",password:""}),C.a.remove("userdata",{path:"/"}),C.a.remove("userlogin",{path:"/"}),C.a.remove("userid",{path:"/"});var t=new Date;t.setSeconds(21600),C.a.save("userdata",e.data.data,{path:"/",expires:t}),C.a.save("userid",e.data.data._id,{path:"/",expires:t}),C.a.save("userlogin",!0,{path:"/",expires:t}),p.NotificationManager.success("Login Success"),n.props.history.push("/")}else p.NotificationManager.warning(e.data.message)}))},n.state={loadingForm:!1,email:"",password:""},n.hanleTextChange=n.hanleTextChange.bind(Object(T.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){C.a.remove("userdata",{path:"/"}),C.a.remove("userlogin",{path:"/"}),C.a.remove("userid",{path:"/"})}},{key:"hanleTextChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value)),console.log(this.state)}},{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsx)(q.a,{children:Object(O.jsxs)(q.a.Row,{children:[Object(O.jsx)(q.a.Column,{width:2}),Object(O.jsxs)(q.a.Column,{width:12,children:[Object(O.jsxs)(M.a,{onSubmit:this.handleSubmit,loading:this.state.loadingForm,children:[Object(O.jsxs)(M.a.Group,{widths:2,children:[Object(O.jsx)(M.a.Field,{label:"Email",control:k.a,name:"email",placeholder:"Email",value:this.state.email,onChange:this.hanleTextChange,required:!0}),Object(O.jsx)(M.a.Field,{label:"Password",control:k.a,name:"password",placeholder:"Password",value:this.state.password,onChange:this.hanleTextChange,required:!0})]}),Object(O.jsx)(M.a.Group,{widths:1,children:Object(O.jsx)(M.a.Field,{control:j.a,children:"LogIn"})})]}),Object(O.jsxs)(j.a.Group,{children:[Object(O.jsx)(j.a,{children:Object(O.jsx)(V.a,{name:"google",color:"black"})}),Object(O.jsx)(j.a.Or,{}),Object(O.jsx)(j.a,{children:Object(O.jsx)(V.a,{name:"facebook"})}),Object(O.jsx)(j.a.Or,{}),Object(O.jsx)(j.a,{children:Object(O.jsx)(V.a,{name:"twitter"})})]})]})]})})]})}}]),a}(n.Component),W=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={data:C.a.load("userlogin"),userinfo:C.a.load("userdata")},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{children:["Email Verification",this.state.data]}),void 0===this.state.data?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.b,{exact:!0,to:"/login",children:"Please Login"})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Please click on this link for email verification"}),Object(O.jsx)(u.b,{exact:!0,to:"/emailverificationmatch/".concat(this.state.userinfo.email_verification_code,"/").concat(this.state.userinfo._id),children:"Verify Email"})]})]})}}]),a}(n.Component),J=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={pageLoading:!0},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={id:this.props.match.params.id,code:this.props.match.params.code};N.a.post("http://localhost:5000/api/user/checkemailverificationcode",t).then((function(t){if(console.log(t.data),t.data.response){C.a.remove("userdata",{path:"/"});var a=new Date;a.setSeconds(21600),C.a.save("userdata",t.data.data,{path:"/",expires:a}),p.NotificationManager.success("Successfully verified"),e.props.history.push("/")}else p.NotificationManager.warning(t.data.message)}))}},{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:this.state.pageLoading?Object(O.jsx)("h2",{children:"Verifying please wait...."}):Object(O.jsx)(O.Fragment,{})})}}]),a}(n.Component);var U=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.a,{children:Object(O.jsxs)(x,{children:[Object(O.jsxs)(g.d,{children:[Object(O.jsx)(g.b,{exact:!0,path:"/",component:w}),Object(O.jsx)(y,{exact:!0,path:"/createtodo",component:E}),Object(O.jsx)(y,{exact:!0,path:"/todolist",component:I}),Object(O.jsx)(y,{exact:!0,path:"/view/:id",component:L}),Object(O.jsx)(y,{exact:!0,path:"/edit/:id",component:_}),Object(O.jsx)(g.b,{exact:!0,path:"/register",component:R}),Object(O.jsx)(g.b,{exact:!0,path:"/login",component:B}),Object(O.jsx)(g.b,{exact:!0,path:"/emailverification",component:W}),Object(O.jsx)(g.b,{exact:!0,path:"/emailverificationmatch/:code/:id",component:J})]}),Object(O.jsx)(p.NotificationContainer,{})]})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,241)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),i(e),o(e)}))};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(U,{})}),document.getElementById("root")),z()}},[[219,1,2]]]);
//# sourceMappingURL=main.bec1c7c7.chunk.js.map
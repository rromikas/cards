(this.webpackJsonpucardelite=this.webpackJsonpucardelite||[]).push([[12],{136:function(e,t,a){},390:function(e,t,a){"use strict";a.r(t);var o=a(1),i=a(17),n=a(60),r=(a(136),a(19)),s=a(88),c=a(0),l=a(76),u=a(196),d=a(197),b=a(74),p=a(2);t.default=function(e){var t=e.setUser,a=Object(c.useState)(null),f=Object(i.a)(a,2),h=f[0],j=f[1],m=Object(p.f)(),O=Object(u.a)({initialValues:{email:"",password:""},validationSchema:d.a().shape({email:d.c().email().typeError("Invalid format").required("Required"),password:d.c().required("Required")}),onSubmit:function(e){!function(e){var t=e.email,a=e.password,o=e.onSuccess,i=e.onError;b.a.auth().signInWithEmailAndPassword(t,a).then((function(e){var t=e.user;b.a.database().ref("admin").get().then((function(e){var a=Object(n.a)({},t);e.val()===t.uid&&(a.isAdmin=!0),o(a)}))})).catch((function(e){i(e)}))}(Object(n.a)(Object(n.a)({},e),{},{onSuccess:function(e){t(e),e.isAdmin?m.push("/admin"):m.push("/")},onError:function(e){j(e.message)}}))}}),v=O.values,x=O.errors,g=O.submitCount,w=O.handleSubmit,y=O.handleChange;return Object(c.useEffect)((function(){j(null)}),[g]),Object(o.jsxs)("div",{className:"position-fixed w-100 h-100 d-flex overflow-auto",style:{left:0,top:0},children:[Object(o.jsx)("div",{className:"position-absolute w-100 h-100 d-block d-sm-none",style:{left:0,top:0,background:"black"}}),Object(o.jsxs)("form",{onSubmit:w,className:"login-container p-5 m-auto position-relative",children:[Object(o.jsx)("div",{className:"d-flex justify-content-center mb-5 pb-4",children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("img",{src:r.a,className:"mx-auto",width:198})})}),Object(o.jsxs)("div",{className:"px-sm-4",children:[Object(o.jsx)("div",{className:"mb-4",children:Object(o.jsx)(s.a,{name:"email",error:g>0&&x.email,helperText:x.email,value:v.email,onChange:y,label:"Email",type:"email",color:"white"})}),Object(o.jsx)("div",{children:Object(o.jsx)(s.a,{name:"password",error:g>0&&x.password,helperText:x.password,value:v.password,onChange:y,label:"Password",type:"password",color:"white"})})]}),Object(o.jsx)("div",{style:{height:75,opacity:h?1:0},className:"d-flex align-items-end text-danger p-4",children:h}),Object(o.jsx)("div",{className:"d-flex justify-content-center mb-3",children:Object(o.jsx)("div",{style:{maxWidth:230,width:"100%"},children:Object(o.jsx)(l.a,{type:"submit",children:"Login"})})}),Object(o.jsx)("div",{style:{color:"white",textAlign:"center",cursor:"pointer"},onClick:function(){return m.push("/signup")},children:"Create account"})]})]})}},74:function(e,t,a){"use strict";var o=a(121),i=a(84);o.a.initializeApp(i),t.a=o.a},76:function(e,t,a){"use strict";var o=a(60),i=a(1),n=a(382),r=a(387),s=Object(r.a)({button:{background:"#ffbd1b",color:"#fff","&:hover":{backgroundColor:"#DAA520",color:"#FFF"}}});t.a=function(e){var t=s();return Object(i.jsx)(n.a,Object(o.a)({variant:"contained",className:t.button,size:e.size?e.size:"large",fullWidth:!0},e))}},84:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyD6TIB0HND4wEjoAbFRdvMMaW60ToOYIdc","authDomain":"cards-12073.firebaseapp.com","databaseURL":"https://cards-12073-default-rtdb.firebaseio.com","projectId":"cards-12073","storageBucket":"cards-12073.appspot.com","messagingSenderId":"175123527897","appId":"1:175123527897:web:79cecfa92a694fa6b326c8"}')},88:function(e,t,a){"use strict";var o=a(60),i=a(1),n=a(124),r=(a(0),a(393)),s=a(387),c=Object(s.a)({root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#ffbd1b"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#ffbd1b"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#ffbd1b"},"& .MuiInputLabel-outlined.Mui-focused":{color:function(e){return e.color}}}});t.a=function(e){var t=e.label,a=e.value,s=e.onChange,l=e.color,u=void 0===l?"black":l,d=Object(n.a)(e,["label","value","onChange","color"]),b=c({color:u});return Object(i.jsx)(r.a,Object(o.a)(Object(o.a)({},d),{},{spellCheck:!1,variant:"outlined",label:t,fullWidth:!0,className:b.root,FormHelperTextProps:{style:{position:"absolute",right:0}},InputProps:{style:{color:u}},InputLabelProps:{style:{color:u}},value:a,onChange:s}))}}}]);
//# sourceMappingURL=12.447bb7c3.chunk.js.map
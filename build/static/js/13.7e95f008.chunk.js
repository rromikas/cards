(this.webpackJsonpucardelite=this.webpackJsonpucardelite||[]).push([[13],{136:function(e,t,a){},391:function(e,t,a){"use strict";a.r(t);var o=a(1),s=a(17),n=a(60),r=(a(136),a(19)),i=a(88),c=a(0),l=a(76),u=a(74),d=a(196),b=a(197),p=a(2);t.default=function(e){var t=e.setUser,a=Object(p.f)(),m=Object(c.useState)(null),f=Object(s.a)(m,2),h=f[0],j=f[1],O=Object(d.a)({initialValues:{email:"",password:"",confirmPassword:""},validationSchema:b.a().shape({email:b.c().email().typeError("Wrong format").required("Required"),password:b.c().min(6,"Minimum 6 characters"),confirmPassword:b.c().oneOf([b.b("password"),null],"Passwords must match")}),onSubmit:function(e){!function(e){var t=e.email,a=e.password,o=e.onSuccess,s=e.onError;console.log(t,a);var r=u.a.database();u.a.auth().createUserWithEmailAndPassword(t,a).then((function(e){var t=e.user;r.ref("admin").get().then((function(e){e.val()?o(t):r.ref().update({admin:t.uid}).then((function(){o(Object(n.a)(Object(n.a)({},t),{},{isAdmin:!0}))}))}))})).catch((function(e){console.log("Eror",e.message),s(e)}))}(Object(n.a)(Object(n.a)({},e),{},{onSuccess:function(e){t(e),e.isAdmin?a.push("/admin"):a.push("/")},onError:function(e){j(e.message)}}))}}),v=O.values,x=O.errors,w=O.handleSubmit,g=O.handleChange,y=O.submitCount;return Object(c.useEffect)((function(){j(null)}),[y]),Object(o.jsxs)("div",{className:"position-fixed w-100 h-100 d-flex overflow-auto p-4",style:{left:0,top:0},children:[Object(o.jsx)("div",{className:"position-absolute w-100 h-100 d-block d-sm-none",style:{left:0,top:0,background:"black"}}),Object(o.jsxs)("form",{onSubmit:w,className:"login-container p-5 m-auto position-relative",children:[Object(o.jsx)("div",{className:"d-flex justify-content-center mb-5 pb-4",children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("img",{src:r.a,className:"mx-auto",width:198})})}),Object(o.jsxs)("div",{className:"px-sm-4",children:[Object(o.jsx)("div",{className:"mb-4",children:Object(o.jsx)(i.a,{error:y>0&&x.email,helperText:x.email,name:"email",onChange:g,value:v.email,label:"Email",type:"email",color:"white"})}),Object(o.jsx)("div",{className:"mb-4",children:Object(o.jsx)(i.a,{error:y>0&&x.password,helperText:x.password,value:v.password,onChange:g,label:"Password",type:"password",name:"password",color:"white"})}),Object(o.jsx)("div",{children:Object(o.jsx)(i.a,{error:y>0&&x.confirmPassword,helperText:x.confirmPassword,value:v.confirmPassword,onChange:g,name:"confirmPassword",label:"Confirm password",type:"password",color:"white"})})]}),Object(o.jsx)("div",{style:{height:75,opacity:h?1:0},className:"d-flex align-items-end text-danger p-4",children:h}),Object(o.jsx)("div",{className:"d-flex justify-content-center mb-3",children:Object(o.jsx)("div",{style:{maxWidth:230,width:"100%"},children:Object(o.jsx)(l.a,{type:"submit",children:"Sign Up"})})}),Object(o.jsx)("div",{style:{color:"white",textAlign:"center",cursor:"pointer"},onClick:function(){return a.push("/login")},children:"Login"})]})]})}},74:function(e,t,a){"use strict";var o=a(121),s=a(84);o.a.initializeApp(s),t.a=o.a},76:function(e,t,a){"use strict";var o=a(60),s=a(1),n=a(382),r=a(387),i=Object(r.a)({button:{background:"#ffbd1b",color:"#fff","&:hover":{backgroundColor:"#DAA520",color:"#FFF"}}});t.a=function(e){var t=i();return Object(s.jsx)(n.a,Object(o.a)({variant:"contained",className:t.button,size:e.size?e.size:"large",fullWidth:!0},e))}},84:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyD6TIB0HND4wEjoAbFRdvMMaW60ToOYIdc","authDomain":"cards-12073.firebaseapp.com","databaseURL":"https://cards-12073-default-rtdb.firebaseio.com","projectId":"cards-12073","storageBucket":"cards-12073.appspot.com","messagingSenderId":"175123527897","appId":"1:175123527897:web:79cecfa92a694fa6b326c8"}')},88:function(e,t,a){"use strict";var o=a(60),s=a(1),n=a(124),r=(a(0),a(393)),i=a(387),c=Object(i.a)({root:{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#ffbd1b"},"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#ffbd1b"},"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#ffbd1b"},"& .MuiInputLabel-outlined.Mui-focused":{color:function(e){return e.color}}}});t.a=function(e){var t=e.label,a=e.value,i=e.onChange,l=e.color,u=void 0===l?"black":l,d=Object(n.a)(e,["label","value","onChange","color"]),b=c({color:u});return Object(s.jsx)(r.a,Object(o.a)(Object(o.a)({},d),{},{spellCheck:!1,variant:"outlined",label:t,fullWidth:!0,className:b.root,FormHelperTextProps:{style:{position:"absolute",right:0}},InputProps:{style:{color:u}},InputLabelProps:{style:{color:u}},value:a,onChange:i}))}}}]);
//# sourceMappingURL=13.7e95f008.chunk.js.map
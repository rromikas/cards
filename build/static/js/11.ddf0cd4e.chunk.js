(this.webpackJsonpucardelite=this.webpackJsonpucardelite||[]).push([[11],{230:function(e,t,n){},231:function(e,t,n){},233:function(e,t,n){},395:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(17),i=n(19),r=n(397),s=["Metals","Borders","Discounts"],o=function(e){var t=e.setPage,n=e.page,a=e.logout;return Object(c.jsxs)("div",{className:"admin-menu p-5 d-flex flex-column",children:[Object(c.jsx)("img",{className:"mb-5",width:199,src:i.a}),s.map((function(e,a){return Object(c.jsxs)("div",{onClick:function(){return t(e)},className:"d-flex align-items-center mb-4 admin-menu-item",children:[Object(c.jsx)("div",{className:"bg-yellow mr-4",style:{width:14,height:3}}),Object(c.jsx)("div",{className:"".concat(n===e?"text-yellow":"text-white"),children:e})]},"menu-item-".concat(a))})),Object(c.jsx)("div",{className:"flex-grow-1 d-flex align-items-end",children:Object(c.jsxs)("div",{className:"w-100",children:[Object(c.jsx)("a",{href:"/",children:Object(c.jsx)(r.a,{className:"admin-menu-btn mb-3",children:"Visit website"})}),Object(c.jsx)(r.a,{className:"admin-menu-btn",onClick:a,children:"Logout"})]})})]})},l=(n(230),n(86)),d=n.n(l),u=n(87),b=n(76),j=n(60),f=(n(231),n(0)),m=n(347),p=n(234),O=n.n(p),x=(n(233),function(e){var t=e.onFiles,n=(e.files,e.accept),a=void 0===n?"":n,i=e.multiple,r=void 0!==i&&i,s=(e.primary,e.onClick),o=void 0===s?function(){}:s,l=Object(f.useCallback)((function(e){t(e)}),[]),d=Object(m.a)({onDrop:l,accept:a,multiple:r}),u=d.getRootProps,b=d.getInputProps;d.isDragActive;return Object(c.jsxs)("div",Object(j.a)(Object(j.a)({onClick:o},u()),{},{className:"dropzone-container",children:[Object(c.jsx)("input",Object(j.a)({},b())),Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)(O.a,{className:"add-image-icon"}),Object(c.jsx)("div",{className:"add-image-text",children:"DROP IMAGE HERE"})]})]}))}),h=n(83),v=n(171),g=n.n(v),y=function(e){var t=e.resource,n=e.onDelete,i=e.onUpdate,s=e.backgroundSize,o=void 0===s?"cover":s,l=Object(f.useState)(!1),b=Object(a.a)(l,2),m=b[0],p=b[1],O=Object(f.useState)({price:null,qty:null,image:null}),v=Object(a.a)(O,2),y=v[0],N=v[1],k=Object(f.useState)(!1),w=Object(a.a)(k,2),D=w[0],C=w[1];return Object(f.useEffect)((function(){N(t),"empty"===t.image&&p(!0)}),[t]),Object(c.jsxs)("div",{className:"resource-card position-relative",children:[m?Object(c.jsx)(g.a,{onClick:n,className:"position-absolute delete-icon",style:{top:10,right:10,fontSize:32,cursor:"pointer"},fontSize:"inherit"}):null,D?Object(c.jsx)("div",{className:"loader-container",children:Object(c.jsx)("div",{children:"Uploading..."})}):"empty"===y.image?m?Object(c.jsx)(x,{files:[],onFiles:function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.length){e.next=7;break}return C(!0),e.next=4,Object(h.c)(t[0]);case 4:n=e.sent,C(!1),n.error||N((function(e){return Object(j.a)(Object(j.a)({},e),{},{image:n})}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}):Object(c.jsx)("div",{className:"loader-container",children:"Empty image"}):Object(c.jsx)("div",{className:"resource-img",style:{backgroundImage:"url(".concat(y.image,")"),backgroundSize:o}}),Object(c.jsxs)("div",{className:"flex-grow-1 d-flex align-items-center px-4 justify-content-between",children:[Object(c.jsxs)("div",{className:"mr-2",children:[Object(c.jsx)("div",{className:"resource-prop-label",children:"PRICE"}),Object(c.jsx)("input",{onChange:function(e){var t=e.target.value;/^\d*$/.test(t)&&N((function(e){return Object(j.a)(Object(j.a)({},e),{},{price:t})}))},disabled:!m,placeholder:"Enter",value:"empty"!==y.price?y.price:"",type:"text",className:"resource-prop"})]}),Object(c.jsxs)("div",{className:"mr-2",children:[Object(c.jsx)("div",{className:"resource-prop-label",children:"QUANTITY"}),Object(c.jsx)("input",{placeholder:"Enter",disabled:!m,onChange:function(e){var t=e.target.value;/^\d*$/.test(t)&&N((function(e){return Object(j.a)(Object(j.a)({},e),{},{qty:t})}))},value:"empty"!==y.qty?y.qty:"",className:"resource-prop",type:"text"})]}),m?Object(c.jsx)(r.a,{className:"resource-outlined-btn",onClick:function(){i(y),p(!1)},children:"SAVE"}):Object(c.jsx)(r.a,{className:"resource-outlined-btn",onClick:function(){return p(!0)},children:"EDIT"})]})]})},N=n(94),k=n(398),w=n(236),D=n(382),C=n(387),S=Object(C.a)({button:{border:"1px solid #ffbd1b",color:"#fff","&:hover":{backgroundColor:"#DAA520",color:"#FFF"}}}),E=function(e){var t=S();return Object(c.jsx)(D.a,Object(j.a)({variant:"contained",className:t.button,size:e.size?e.size:"large",fullWidth:!0},e))},z=Object(w.createConfirmation)(Object(w.confirmable)((function(e){var t=e.question,n=void 0===t?"Do you agree to complete the action?":t,i=e.proceed,r=Object(f.useState)(!0),s=Object(a.a)(r,2),o=s[0],l=s[1];return o?Object(c.jsx)("div",{onClick:function(){i(!1),l(!1)},style:{position:"fixed",left:0,top:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.4)"},className:"d-flex overflow-auto p-5",children:Object(c.jsxs)("div",{className:"confirm-container p-5 m-auto",children:[Object(c.jsx)("h4",{className:"mb-5 pb-3",children:n}),Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("div",{className:"mx-1",style:{maxWidth:150,width:"100%"},children:Object(c.jsx)(b.a,{onClick:function(){return i(!0)},children:"Confirm"})}),Object(c.jsx)("div",{className:"mx-1",style:{maxWidth:150,width:"100%"},children:Object(c.jsx)(E,{onClick:function(){return i(!1)},variant:"outlined",children:"Cancel"})})]})]})}):null}))),A=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:e.sent&&((n={})["metals/"+t]=null,Object(h.b)(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(N.a)(Object(h.a)("metals")),t=Object(a.a)(e,3),n=t[0],i=(t[1],t[2],n||{});return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between flex-wrap align-items-center mb-5",children:[Object(c.jsx)("div",{className:"admin-page-title",children:"Metals"}),Object(c.jsx)("div",{style:{maxWidth:141,width:"100%"},children:Object(c.jsx)(b.a,{onClick:function(){Object.values(i).filter((function(e){return"empty"===e.image})).length||function(){var e=Object(k.a)(),t={};t["metals/"+e]={image:"empty",price:"empty",qty:"empty",id:e},Object(h.b)(t)}()},children:"ADD NEW"})})]}),Object(c.jsx)("div",{className:"resources-container",style:{maxWidth:800},children:Object.keys(i).sort((function(e,t){return"empty"===i[e].image?-1:1})).map((function(e,t){return Object(c.jsx)(y,{onDelete:function(){return A(e)},onUpdate:(n=e,function(e){var t={};t["metals/"+n]=e,Object(h.b)(t)}),resource:i[e]},"metal-resource-".concat(e));var n}))})]})},I=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:e.sent&&((n={})["borders/"+t]=null,Object(h.b)(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(N.a)(Object(h.a)("borders")),t=Object(a.a)(e,3),n=t[0],i=(t[1],t[2],n||{});return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between flex-wrap align-items-center mb-5",children:[Object(c.jsx)("div",{className:"admin-page-title",children:"Borders"}),Object(c.jsx)("div",{style:{maxWidth:141,width:"100%"},children:Object(c.jsx)(b.a,{onClick:function(){Object.values(i).filter((function(e){return"empty"===e.image})).length||function(){var e=Object(k.a)(),t={};t["borders/"+e]={image:"empty",price:"empty",qty:"empty",id:e},Object(h.b)(t)}()},children:"ADD NEW"})})]}),Object(c.jsx)("div",{className:"resources-container",style:{maxWidth:800},children:Object.keys(i).sort((function(e,t){return"empty"===i[e].image?-1:1})).map((function(e,t){return Object(c.jsx)(y,{backgroundSize:"contain",onDelete:function(){return I(e)},onUpdate:(n=e,function(e){var t={};t["borders/"+n]=e,Object(h.b)(t)}),resource:i[e]},"metal-resource-".concat(e));var n}))})]})},P=n(239),R=n.n(P),F=(n(240),n(396)),T=function(e){var t=e.value,n=e.setValue,i=e.children,r=e.disabled,s=void 0!==r&&r,o=Object(f.useState)(!1),l=Object(a.a)(o,2),d=l[0],u=l[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(F.a,{open:d,children:Object(c.jsx)("div",{className:"d-flex w-100 h-100 overflow-auto",onClick:function(){return u(!1)},children:Object(c.jsxs)("div",{className:"d-inline-block bg-white m-auto",onClick:function(e){return e.stopPropagation()},children:[Object(c.jsx)("style",{children:".DayPicker-Day{width: 40px; height: 40px;} .DayPicker-Day:hover {\n              background-color: #ffbd1b !important;\n              color: black;\n            }"}),Object(c.jsx)(R.a,{modifiersStyles:{selected:{background:"#ffbd1b"},today:{color:"black"}},selectedDays:[t],onDayClick:function(e){n(e),u(!1)}})]})})}),Object(c.jsx)("div",{onClick:function(){return u(!s)},children:i})]})},U=n(241),Y=n.n(U),q=Object(C.a)({container:{background:"black",color:"white",borderRadius:18,position:"relative",maxWidth:"100vw"},code:{background:"#222222",borderRadius:7,textTransform:"uppercase",fontSize:36,textAlign:"center",padding:"5px 20px",outline:"none",border:"none",color:"white",width:"100%","&:disabled":{background:"transparent"}},label:{textTransform:"uppercase",color:"#717171",fontSize:12},input:{width:"100%",padding:"3px 5px",fontSize:"16",color:"white",background:"#222222",borderRadius:4,outline:"none",border:"none","&:disabled":{background:"transparent",padding:0}}}),V=function(e){var t=e.discount,n=e.onUpdate,i=e.onDelete,s=q(),o=Object(f.useState)({code:"",discount:"",start:"",end:""}),l=Object(a.a)(o,2),d=l[0],u=l[1],b=Object(f.useState)(!1),m=Object(a.a)(b,2),p=m[0],O=m[1];return Object(f.useEffect)((function(){u(t),"empty"===t.code&&O(!0)}),[t]),Object(c.jsxs)("div",{className:s.container+" p-4",children:[Object(c.jsx)("div",{className:"position-absolute",style:{top:15,right:15},children:p?Object(c.jsx)(r.a,{className:"resource-outlined-btn",onClick:function(){n(d),O(!1)},children:"SAVE"}):Object(c.jsx)(r.a,{className:"resource-outlined-btn",onClick:function(){return O(!0)},children:"EDIT"})}),p?Object(c.jsx)(g.a,{onClick:i,className:"position-absolute delete-icon",style:{top:15,left:15,fontSize:28,cursor:"pointer"},fontSize:"inherit"}):null,Object(c.jsx)("div",{className:"pb-4 pt-4 d-flex justify-content-center",children:Object(c.jsx)("input",{type:"text",className:s.code,disabled:!p,value:"empty"===d.code?"":d.code,onChange:function(e){return u((function(t){return Object(j.a)(Object(j.a)({},t),{},{code:e.target.value})}))},placeholder:"ENTER CODE"})}),Object(c.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(c.jsxs)("div",{className:"mr-3",children:[Object(c.jsx)("div",{className:s.label,children:"Discount"}),Object(c.jsx)("input",{disabled:!p,className:s.input,placeholder:"Enter",value:"empty"===d.discount?"":d.discount,onChange:function(e){var t=e.target.value;/^\d*$/.test(t)&&u((function(e){return Object(j.a)(Object(j.a)({},e),{},{discount:t})}))},type:"text"})]}),Object(c.jsxs)("div",{className:"mr-3",children:[Object(c.jsx)("div",{className:s.label,children:"Start date"}),Object(c.jsx)(T,{disabled:!p,value:d.start,setValue:function(e){return u((function(t){return Object(j.a)(Object(j.a)({},t),{},{start:e})}))},children:Object(c.jsx)("input",{disabled:!p,placeholder:"Select",className:s.input,value:"empty"===d.start?"":Y()(d.start).format("YYYY-MM-DD"),type:"text"})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:s.label,children:"End date"}),Object(c.jsx)(T,{disabled:!p,value:d.end,setValue:function(e){return u((function(t){return Object(j.a)(Object(j.a)({},t),{},{end:e})}))},children:Object(c.jsx)("input",{disabled:!p,placeholder:"Select",className:s.input,value:"empty"===d.end?"":Y()(d.end).format("YYYY-MM-DD"),type:"text"})})]})]})]})},B=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:e.sent&&((n={})["discounts/"+t]=null,Object(h.b)(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(N.a)(Object(h.a)("discounts")),t=Object(a.a)(e,3),n=t[0],i=(t[1],t[2],n||{});return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"d-flex justify-content-between flex-wrap align-items-center mb-5",children:[Object(c.jsx)("div",{className:"admin-page-title",children:"Discounts"}),Object(c.jsx)("div",{style:{maxWidth:141,width:"100%"},children:Object(c.jsx)(b.a,{onClick:function(){Object.values(i).filter((function(e){return"empty"===e.code})).length||function(){var e={};e["discounts/"+Object(k.a)()]={code:"empty",discount:"empty",start:"empty",end:"empty"},Object(h.b)(e)}()},children:"ADD NEW"})})]}),Object(c.jsx)("div",{className:"discounts-container",style:{maxWidth:800},children:Object.keys(i).sort((function(e,t){return"empty"===i[e].code?-1:1})).map((function(e,t){return Object(c.jsx)(V,{onDelete:function(){return B(e)},onUpdate:(n=e,function(e){var t={};t["discounts/"+n]=e,Object(h.b)(t)}),discount:i[e]},"discount-".concat(e));var n}))})]})},L=n(74);t.default=function(e){var t=e.setUser,n=Object(f.useState)("Metals"),i=Object(a.a)(n,2),r=i[0],s=i[1];return Object(c.jsxs)("div",{className:"position-fixed w-100 h-100 d-flex",style:{top:0,left:0},children:[Object(c.jsx)(o,{logout:function(){L.a.auth().signOut(),t(null),window.location.replace("/")},page:r,setPage:s}),Object(c.jsx)("div",{className:"flex-grow-1 p-5 overflow-auto",children:"Metals"===r?Object(c.jsx)(W,{}):"Borders"===r?Object(c.jsx)(M,{}):"Discounts"===r?Object(c.jsx)(J,{}):null})]})}},74:function(e,t,n){"use strict";var c=n(121),a=n(84);c.a.initializeApp(a),t.a=c.a},76:function(e,t,n){"use strict";var c=n(60),a=n(1),i=n(382),r=n(387),s=Object(r.a)({button:{background:"#ffbd1b",color:"#fff","&:hover":{backgroundColor:"#DAA520",color:"#FFF"}}});t.a=function(e){var t=s();return Object(a.jsx)(i.a,Object(c.a)({variant:"contained",className:t.button,size:e.size?e.size:"large",fullWidth:!0},e))}},83:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d}));var c=n(74),a=n(398),i=n(167),r=n.n(i),s=c.a.database(),o=function(e){return new Promise((function(t,n){s.ref().update(e).then((function(){t(!0)})).catch((function(){t(!1)}))}))},l=function(e){return s.ref(e)},d=function(e){return new Promise((function(t,n){var i=c.a.storage(),s={contentType:e.type},o=Object(a.a)()+"."+r.a.extension(e.type),l=i.ref(o).put(e,s);l.on("state_changed",(function(e){}),(function(e){t({error:e})}),(function(){l.snapshot.ref.getDownloadURL().then((function(e){t(e)}))}))}))}},84:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyD6TIB0HND4wEjoAbFRdvMMaW60ToOYIdc","authDomain":"cards-12073.firebaseapp.com","databaseURL":"https://cards-12073-default-rtdb.firebaseio.com","projectId":"cards-12073","storageBucket":"cards-12073.appspot.com","messagingSenderId":"175123527897","appId":"1:175123527897:web:79cecfa92a694fa6b326c8"}')}}]);
//# sourceMappingURL=11.ddf0cd4e.chunk.js.map
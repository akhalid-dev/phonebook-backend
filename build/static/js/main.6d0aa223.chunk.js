(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),o=n.n(r),i=n(14),a=n.n(i),u=(n(20),n(3)),s=n(4),d=n.n(s),j="/api/persons",b={getPersons:function(){return d.a.get(j).then((function(e){return e.data}))},createPerson:function(e){return d.a.post(j,e).then((function(e){return e.data}))},deletePerson:function(e){return d.a.delete("".concat(j,"/").concat(e))},updatePerson:function(e,t){return d.a.patch("".concat(j,"/").concat(e),t)}},h=function(e){var t=e.message;if(""===t||!t)return null;return Object(c.jsx)("h1",{style:{color:"green",padding:"20px",backgroundColor:"lightgrey",borderStyle:"solid",borderRadius:"5px"},children:t})},l=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(""),a=Object(u.a)(i,2),s=a[0],d=a[1],j=Object(r.useState)(""),l=Object(u.a)(j,2),f=l[0],O=l[1],p=Object(r.useState)(""),g=Object(u.a)(p,2),x=g[0],m=g[1],v=Object(r.useState)(""),k=Object(u.a)(v,2),w=k[0],P=k[1];Object(r.useEffect)((function(){b.getPersons().then((function(e){o(e)}))}),[]);var S=x?n.filter((function(e){return e.name.toLowerCase().startsWith(x.toLowerCase())})):n,C=function(e){P(e),setTimeout((function(){P("")}),5e3)},y=function(e){var t=n.filter((function(t){return t.id===e.target.id}))[0].name;window.confirm("Delete ".concat(t,"?"))&&b.deletePerson(e.target.id).then((function(c){o(n.filter((function(t){return t.id!==e.target.id}))),C("".concat(t," deleted from the phonebook."))})).catch((function(t){o(n.filter((function(t){return t.id!==e.target.id})))}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(h,{message:w}),Object(c.jsxs)("div",{children:["filter shown with ",Object(c.jsx)("input",{value:x,onChange:function(e){m(e.target.value)}})]}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.createPerson({name:s,number:f}).then((function(e){o(n.concat(e)),C("".concat(s," : ").concat(f," added to the phonebook."))})),d(""),O("")},children:[Object(c.jsx)("h1",{children:"add a new"}),Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:s,onChange:function(e){d(e.target.value)}})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:f,onChange:function(e){O(e.target.value)}})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]}),Object(c.jsx)("h2",{children:"Numbers"}),S.map((function(e,t){return Object(c.jsxs)("div",{children:[e.name," ",e.number," ",Object(c.jsx)("button",{id:e.id,onClick:y,children:"delete"})]},t)}))]})};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6d0aa223.chunk.js.map